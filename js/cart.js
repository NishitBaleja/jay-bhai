/**
 * STRÖMS MAN & WOMAN - CART & WISHLIST ENGINE
 * Manages shopping bag, currency conversions, quantities, and persistent storage
 */

const Cart = {
  items: [],
  wishlist: [],
  currency: "SEK",
  promoCode: null,
  discountPercent: 0,
  FREE_SHIPPING_SEK: 1500,

  init() {
    this.loadFromStorage();
    this.bindEvents();
    this.renderCartUI();
    this.updateHeaderBadges();
  },

  loadFromStorage() {
    try {
      const savedCart = localStorage.getItem("stroms_cart");
      if (savedCart) this.items = JSON.parse(savedCart);
    } catch (e) {
      this.items = [];
    }

    try {
      const savedWish = localStorage.getItem("stroms_wishlist");
      if (savedWish) this.wishlist = JSON.parse(savedWish);
    } catch (e) {
      this.wishlist = [];
    }

    const savedCurr = localStorage.getItem("stroms_currency");
    if (savedCurr && CURRENCIES[savedCurr]) {
      this.currency = savedCurr;
      const select = document.getElementById("currencySelect");
      if (select) select.value = savedCurr;
    }
  },

  saveToStorage() {
    localStorage.setItem("stroms_cart", JSON.stringify(this.items));
    localStorage.setItem("stroms_wishlist", JSON.stringify(this.wishlist));
    localStorage.setItem("stroms_currency", this.currency);
  },

  setCurrency(curr) {
    if (CURRENCIES[curr]) {
      this.currency = curr;
      this.saveToStorage();
      this.renderCartUI();
      if (window.App && typeof window.App.renderCatalog === "function") {
        window.App.renderCatalog();
      }
      showToast(`Valuta ändrad till ${curr}`, "info");
    }
  },

  formatPrice(priceSEK) {
    const config = CURRENCIES[this.currency] || CURRENCIES.SEK;
    return config.format(priceSEK);
  },

  addItem(productId, size = null, qty = 1) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    const chosenSize = size || (product.sizes && product.sizes.length ? product.sizes[0] : "One Size");
    const existingIndex = this.items.findIndex(item => item.id === productId && item.size === chosenSize);

    if (existingIndex > -1) {
      this.items[existingIndex].qty += qty;
    } else {
      this.items.push({
        id: product.id,
        title: product.title,
        vendor: product.vendor,
        priceSEK: product.priceSEK,
        image: product.images[0],
        size: chosenSize,
        qty: qty
      });
    }

    this.saveToStorage();
    this.renderCartUI();
    this.updateHeaderBadges();
    this.openDrawer();
    showToast(`${product.title} (${chosenSize}) lades i varukorgen`, "success");
  },

  updateQty(index, newQty) {
    if (newQty <= 0) {
      this.removeItem(index);
    } else {
      this.items[index].qty = newQty;
      this.saveToStorage();
      this.renderCartUI();
      this.updateHeaderBadges();
    }
  },

  removeItem(index) {
    const removed = this.items.splice(index, 1)[0];
    this.saveToStorage();
    this.renderCartUI();
    this.updateHeaderBadges();
    if (removed) {
      showToast(`${removed.title} togs bort från varukorgen`, "info");
    }
  },

  toggleWishlist(productId) {
    const idx = this.wishlist.indexOf(productId);
    let added = false;
    if (idx > -1) {
      this.wishlist.splice(idx, 1);
    } else {
      this.wishlist.push(productId);
      added = true;
    }

    this.saveToStorage();
    this.updateHeaderBadges();
    if (window.App && typeof window.App.renderCatalog === "function") {
      window.App.renderCatalog();
    }
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    const title = product ? product.title : "Artikeln";
    showToast(added ? `${title} sparades i din önskelista` : `${title} togs bort från önskelistan`, added ? "success" : "info");
    return added;
  },

  isInWishlist(productId) {
    return this.wishlist.includes(productId);
  },

  getSubtotalSEK() {
    return this.items.reduce((sum, item) => sum + (item.priceSEK * item.qty), 0);
  },

  getTotalItemsCount() {
    return this.items.reduce((sum, item) => sum + item.qty, 0);
  },

  applyPromo(code) {
    const clean = code.trim().toUpperCase();
    if (clean === "STROMS10") {
      this.promoCode = "STROMS10";
      this.discountPercent = 0.10;
      this.renderCartUI();
      showToast("Rabattkod STROMS10 tillämpad (10% rabatt)!", "success");
      return true;
    } else if (clean === "VIP15") {
      this.promoCode = "VIP15";
      this.discountPercent = 0.15;
      this.renderCartUI();
      showToast("VIP-kod aktiverad: 15% rabatt!", "success");
      return true;
    } else {
      showToast("Ogiltig rabattkod. Prova STROMS10", "error");
      return false;
    }
  },

  openDrawer() {
    const overlay = document.getElementById("cartOverlay");
    const drawer = document.getElementById("cartDrawer");
    if (overlay && drawer) {
      overlay.classList.add("active");
      drawer.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  },

  closeDrawer() {
    const overlay = document.getElementById("cartOverlay");
    const drawer = document.getElementById("cartDrawer");
    if (overlay && drawer) {
      overlay.classList.remove("active");
      drawer.classList.remove("active");
      document.body.style.overflow = "";
    }
  },

  updateHeaderBadges() {
    const cartCountEl = document.getElementById("headerCartCount");
    const cartAmountEl = document.getElementById("headerCartAmount");
    const wishCountEl = document.getElementById("headerWishCount");

    const totalCount = this.getTotalItemsCount();
    const subtotal = this.getSubtotalSEK();

    if (cartCountEl) cartCountEl.textContent = totalCount;
    if (cartAmountEl) cartAmountEl.textContent = this.formatPrice(subtotal);
    if (wishCountEl) wishCountEl.textContent = this.wishlist.length;
  },

  renderCartUI() {
    const cartBody = document.getElementById("cartItemsBody");
    const shippingBar = document.getElementById("shippingProgress");
    const shippingText = document.getElementById("shippingText");
    const cartSubtotalEl = document.getElementById("cartSubtotal");
    const cartDiscountRow = document.getElementById("cartDiscountRow");
    const cartDiscountAmount = document.getElementById("cartDiscountAmount");
    const cartShippingCostEl = document.getElementById("cartShippingCost");
    const cartTotalEl = document.getElementById("cartGrandTotal");

    if (!cartBody) return;

    if (this.items.length === 0) {
      cartBody.innerHTML = `
        <div class="cart-empty-state">
          <svg class="cart-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3 6h18M16 10a4 4 0 01-8 0"/>
          </svg>
          <div class="cart-empty-text">Din varukorg är tom</div>
          <div class="cart-empty-sub">Utforska säsongens nyheter från Ströms och våra italienska och brittiska modemärken.</div>
          <button class="btn-primary" onclick="Cart.closeDrawer(); window.scrollTo({top: 800, behavior: 'smooth'});">Upptäck Kollektionen</button>
        </div>
      `;
      if (shippingBar) shippingBar.style.width = "0%";
      if (shippingText) shippingText.innerHTML = `Fri frakt vid köp över ${this.formatPrice(this.FREE_SHIPPING_SEK)}`;
      if (cartSubtotalEl) cartSubtotalEl.textContent = this.formatPrice(0);
      if (cartDiscountRow) cartDiscountRow.style.display = "none";
      if (cartShippingCostEl) cartShippingCostEl.textContent = this.formatPrice(0);
      if (cartTotalEl) cartTotalEl.textContent = this.formatPrice(0);
      return;
    }

    // Render items
    let html = "";
    this.items.forEach((item, idx) => {
      html += `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.title}" class="cart-item-img">
          <div class="cart-item-info">
            <div class="cart-item-meta">${item.vendor}</div>
            <div class="cart-item-title">${item.title}</div>
            <div class="cart-item-meta">Storlek: <strong>${item.size}</strong></div>
            <div class="cart-item-price">${this.formatPrice(item.priceSEK * item.qty)}</div>
            <div class="cart-qty-ctrl">
              <button class="qty-btn" onclick="Cart.updateQty(${idx}, ${item.qty - 1})">-</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn" onclick="Cart.updateQty(${idx}, ${item.qty + 1})">+</button>
            </div>
          </div>
          <button class="cart-item-remove" title="Ta bort" onclick="Cart.removeItem(${idx})">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
            </svg>
          </button>
        </div>
      `;
    });
    cartBody.innerHTML = html;

    // Financial calculations
    const subtotalSEK = this.getSubtotalSEK();
    const discountSEK = subtotalSEK * this.discountPercent;
    const isFreeShipping = subtotalSEK >= this.FREE_SHIPPING_SEK;
    const shippingSEK = isFreeShipping ? 0 : 79;
    const grandTotalSEK = subtotalSEK - discountSEK + shippingSEK;

    // Free shipping meter
    if (shippingBar && shippingText) {
      if (isFreeShipping) {
        shippingBar.style.width = "100%";
        shippingBar.style.backgroundColor = "#2E7D32";
        shippingText.innerHTML = `<strong>Kvalificerad för fri frakt</strong> i hela Sverige & Norden!`;
      } else {
        const remainingSEK = this.FREE_SHIPPING_SEK - subtotalSEK;
        const percent = Math.min(100, Math.round((subtotalSEK / this.FREE_SHIPPING_SEK) * 100));
        shippingBar.style.width = `${percent}%`;
        shippingBar.style.backgroundColor = "var(--accent-cognac)";
        shippingText.innerHTML = `Bara <strong>${this.formatPrice(remainingSEK)}</strong> kvar till Fri Frakt!`;
      }
    }

    if (cartSubtotalEl) cartSubtotalEl.textContent = this.formatPrice(subtotalSEK);

    if (cartDiscountRow && cartDiscountAmount) {
      if (this.discountPercent > 0) {
        cartDiscountRow.style.display = "flex";
        cartDiscountAmount.textContent = `-${this.formatPrice(discountSEK)}`;
      } else {
        cartDiscountRow.style.display = "none";
      }
    }

    if (cartShippingCostEl) {
      cartShippingCostEl.textContent = isFreeShipping ? "Gratis" : this.formatPrice(shippingSEK);
    }

    if (cartTotalEl) cartTotalEl.textContent = this.formatPrice(grandTotalSEK);
  },

  bindEvents() {
    const cartBtn = document.getElementById("headerCartBtn");
    const closeBtn = document.getElementById("cartCloseBtn");
    const overlay = document.getElementById("cartOverlay");
    const promoBtn = document.getElementById("cartPromoBtn");
    const promoInput = document.getElementById("cartPromoInput");
    const currSelect = document.getElementById("currencySelect");

    if (cartBtn) cartBtn.addEventListener("click", () => this.openDrawer());
    if (closeBtn) closeBtn.addEventListener("click", () => this.closeDrawer());
    if (overlay) overlay.addEventListener("click", () => this.closeDrawer());

    if (promoBtn && promoInput) {
      promoBtn.addEventListener("click", () => {
        if (promoInput.value) this.applyPromo(promoInput.value);
      });
      promoInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter" && promoInput.value) this.applyPromo(promoInput.value);
      });
    }

    if (currSelect) {
      currSelect.addEventListener("change", (e) => {
        this.setCurrency(e.target.value);
      });
    }

    const checkoutBtn = document.getElementById("checkoutBtn");
    if (checkoutBtn) {
      checkoutBtn.addEventListener("click", () => {
        this.simulateCheckout();
      });
    }
  },

  simulateCheckout() {
    if (this.items.length === 0) return;
    const orderNum = "STR-" + Math.floor(100000 + Math.random() * 900000);
    const totalFormatted = this.formatPrice(this.getSubtotalSEK() * (1 - this.discountPercent));

    alert(`Tack för din beställning hos Ströms Man & Woman, Kungsgatan 38 Stockholm!\n\nOrdernummer: ${orderNum}\nTotalsumma: ${totalFormatted}\n\nEn orderbekräftelse med spårningslänk och kvitto har skickats till din e-post.`);
    this.items = [];
    this.promoCode = null;
    this.discountPercent = 0;
    this.saveToStorage();
    this.renderCartUI();
    this.updateHeaderBadges();
    this.closeDrawer();
  }
};

window.Cart = Cart;
