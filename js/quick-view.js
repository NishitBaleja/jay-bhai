/**
 * STRÖMS MAN & WOMAN - QUICK VIEW (SNABBVY) MODAL
 */

const QuickView = {
  currentProduct: null,
  selectedSize: null,

  open(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    this.currentProduct = product;
    this.selectedSize = product.sizes && product.sizes.length ? product.sizes[0] : null;

    const overlay = document.getElementById("quickviewModal");
    const container = document.getElementById("quickviewContent");

    if (!overlay || !container) return;

    const priceFormatted = Cart.formatPrice(product.priceSEK);
    const comparePriceFormatted = product.compareAtSEK ? Cart.formatPrice(product.compareAtSEK) : "";

    container.innerHTML = `
      <div class="quickview-grid">
        <div class="quickview-gallery">
          <img id="qvMainImg" src="${product.images[0]}" alt="${product.title}" class="quickview-main-img">
          <div class="quickview-thumbs">
            ${product.images.map((img, i) => `
              <img src="${img}" alt="Thumbnail ${i+1}" class="quickview-thumb ${i===0 ? 'active' : ''}" onclick="QuickView.swapImage('${img}', this)">
            `).join('')}
          </div>
        </div>

        <div class="quickview-info">
          <div class="quickview-vendor">${product.vendor}</div>
          <h2 class="quickview-title">${product.title}</h2>
          
          <div class="quickview-price-box">
            <span class="quickview-price">${priceFormatted}</span>
            ${product.compareAtSEK ? `<span class="product-price-compare">${comparePriceFormatted}</span>` : ''}
          </div>

          <p class="quickview-desc">${product.description}</p>

          <div class="stock-indicator">Finns i lager på Kungsgatan 38 & för expressleverans online</div>

          <div class="quickview-sizes-wrap">
            <div class="quickview-sizes-label">
              <span>Välj Storlek</span>
              <span class="size-guide-trigger" onclick="alert('Storleksguide:\\n\\nKavaj/Rock: 46 (S), 48 (M), 50 (L), 52 (XL), 54 (XXL)\\nDam: 34 (XS), 36 (S), 38 (M), 40 (L), 42 (XL)\\n\\nKontakta gärna kundservice@stroms.com för personlig passformshjälp.')">Storleksguide</span>
            </div>
            <div class="quickview-sizes-list">
              ${(product.sizes || []).map((sz, i) => `
                <button class="size-pill-btn ${i===0 ? 'active' : ''}" onclick="QuickView.selectSize('${sz}', this)">${sz}</button>
              `).join('')}
            </div>
          </div>

          <div class="quickview-actions">
            <button class="quickview-add-btn" onclick="QuickView.addToCart()">Lägg i Varukorg</button>
            <button class="wishlist-btn ${Cart.isInWishlist(product.id) ? 'active' : ''}" onclick="QuickView.toggleWishlist(${product.id}, this)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
              </svg>
            </button>
          </div>

          <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--border-light); font-size: 0.8rem; color: var(--text-secondary);">
            <p><strong>Material:</strong> ${product.material}</p>
            <ul style="margin-top: 6px; padding-left: 18px; list-style: disc;">
              ${(product.details || []).map(d => `<li>${d}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    `;

    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  },

  swapImage(imgUrl, thumbEl) {
    const mainImg = document.getElementById("qvMainImg");
    if (mainImg) mainImg.src = imgUrl;

    document.querySelectorAll(".quickview-thumb").forEach(t => t.classList.remove("active"));
    if (thumbEl) thumbEl.classList.add("active");
  },

  selectSize(size, btnEl) {
    this.selectedSize = size;
    document.querySelectorAll(".size-pill-btn").forEach(b => b.classList.remove("active"));
    if (btnEl) btnEl.classList.add("active");
  },

  addToCart() {
    if (!this.currentProduct) return;
    Cart.addItem(this.currentProduct.id, this.selectedSize, 1);
    this.close();
  },

  toggleWishlist(productId, btnEl) {
    const added = Cart.toggleWishlist(productId);
    if (btnEl) {
      if (added) btnEl.classList.add("active");
      else btnEl.classList.remove("active");
    }
  },

  close() {
    const overlay = document.getElementById("quickviewModal");
    if (overlay) {
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  }
};

window.QuickView = QuickView;
