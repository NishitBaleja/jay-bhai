/**
 * STRÖMS MAN & WOMAN - APPLICATION CONTROLLER
 * Handles Catalog Rendering, Filtering, Search, Consultation Booking & UI Interactions
 */

const App = {
  activeGender: "all",      // 'all' | 'man' | 'woman'
  activeSubcat: "all",      // 'all' | 'ytterplagg' | 'kavajer' | 'trojor' | 'skjortor' | 'byxor' | 'skor'
  activeSort: "newest",     // 'newest' | 'price-low' | 'price-high' | 'vendor'
  activeGridCols: 4,

  init() {
    this.bindHeaderEvents();
    this.bindFilterEvents();
    this.bindSearchEvents();
    this.bindConsultationEvents();
    this.bindNewsletterEvents();
    this.renderCatalog();
  },

  setGender(gender) {
    this.activeGender = gender;
    
    // Update header toggle buttons
    document.querySelectorAll(".gender-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.gender === gender);
    });

    // Reset subcat filter to all
    this.activeSubcat = "all";
    document.querySelectorAll(".filter-pill").forEach(pill => {
      pill.classList.toggle("active", pill.dataset.subcat === "all");
    });

    this.renderCatalog();
    showToast(`Visar ${gender === 'man' ? 'Ströms Herrkollektion' : (gender === 'woman' ? 'Ströms Damkollektion' : 'Hela kollektionen')}`, "info");
  },

  setSubcat(subcat) {
    this.activeSubcat = subcat;
    document.querySelectorAll(".filter-pill").forEach(pill => {
      pill.classList.toggle("active", pill.dataset.subcat === subcat);
    });
    this.renderCatalog();
  },

  setSort(sortType) {
    this.activeSort = sortType;
    this.renderCatalog();
  },

  setGridCols(cols) {
    this.activeGridCols = cols;
    const grid = document.getElementById("productsGrid");
    if (!grid) return;

    grid.classList.remove("grid-cols-2", "grid-cols-3");
    if (cols === 3) grid.classList.add("grid-cols-3");
    if (cols === 2) grid.classList.add("grid-cols-2");

    document.querySelectorAll(".grid-view-btn").forEach(btn => {
      btn.classList.toggle("active", parseInt(btn.dataset.cols) === cols);
    });
  },

  getFilteredProducts() {
    return PRODUCTS_DATA.filter(product => {
      // Gender filter
      if (this.activeGender !== "all" && product.category !== this.activeGender) {
        return false;
      }
      // Subcat filter
      if (this.activeSubcat !== "all" && product.subcat !== this.activeSubcat) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (this.activeSort === "price-low") return a.priceSEK - b.priceSEK;
      if (this.activeSort === "price-high") return b.priceSEK - a.priceSEK;
      if (this.activeSort === "vendor") return a.vendor.localeCompare(b.vendor);
      return b.id - a.id; // newest
    });
  },

  renderCatalog() {
    const grid = document.getElementById("productsGrid");
    const countEl = document.getElementById("catalogCount");
    if (!grid) return;

    const products = this.getFilteredProducts();

    if (countEl) {
      countEl.textContent = `Visar ${products.length} artiklar`;
    }

    if (products.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
          <h3 style="font-family: var(--font-serif); font-size: 1.8rem; margin-bottom: 8px;">Inga produkter matchar ditt filter</h3>
          <p style="color: var(--text-muted); margin-bottom: 20px;">Prova att välja en annan kategori eller nollställ filtren.</p>
          <button class="btn-primary" onclick="App.setGender('all'); App.setSubcat('all');">Nollställ Filter</button>
        </div>
      `;
      return;
    }

    let html = "";
    products.forEach(product => {
      const priceFormatted = Cart.formatPrice(product.priceSEK);
      const comparePriceFormatted = product.compareAtSEK ? Cart.formatPrice(product.compareAtSEK) : "";
      const isFav = Cart.isInWishlist(product.id);
      const secondImg = product.images[1] || product.images[0];

      html += `
        <div class="product-card" data-id="${product.id}">
          <div class="product-image-wrap" onclick="QuickView.open(${product.id})">
            <img src="${product.images[0]}" alt="${product.title}" class="product-img" loading="lazy">
            <img src="${secondImg}" alt="${product.title} alternativ vinkel" class="product-img-secondary" loading="lazy">
            
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}

            <button class="wishlist-btn ${isFav ? 'active' : ''}" title="Önskelista" onclick="event.stopPropagation(); App.toggleWishlist(${product.id}, this);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
              </svg>
            </button>

            <div class="card-hover-actions" onclick="event.stopPropagation();">
              <button class="btn-quick-add" onclick="Cart.addItem(${product.id});">Snabbköp</button>
              <button class="btn-quick-view" title="Snabbvy" onclick="QuickView.open(${product.id});">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </div>
          </div>

          <div class="product-info">
            <span class="product-vendor">${product.vendor}</span>
            <div class="product-title" onclick="QuickView.open(${product.id})">${product.title}</div>
            
            <div class="product-price-wrap">
              <span class="product-price">${priceFormatted}</span>
              ${product.compareAtSEK ? `<span class="product-price-compare">${comparePriceFormatted}</span>` : ''}
            </div>

            <div class="product-sizes-hint">${product.sizes.slice(0, 4).join(" · ")}${product.sizes.length > 4 ? ' +' : ''}</div>
          </div>
        </div>
      `;
    });

    grid.innerHTML = html;
  },

  toggleWishlist(productId, btnEl) {
    const isAdded = Cart.toggleWishlist(productId);
    if (btnEl) {
      btnEl.classList.toggle("active", isAdded);
    }
  },

  bindHeaderEvents() {
    // Header scroll background effect
    window.addEventListener("scroll", () => {
      const header = document.querySelector(".main-header");
      if (header) {
        if (window.scrollY > 40) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      }
    });

    // Wishlist header button opens a toast or filters wishlist items
    const wishBtn = document.getElementById("headerWishBtn");
    if (wishBtn) {
      wishBtn.addEventListener("click", () => {
        if (Cart.wishlist.length === 0) {
          showToast("Din önskelista är tom. Klicka på hjärtat på valfritt plagg!", "info");
        } else {
          showToast(`Du har ${Cart.wishlist.length} plagg sparade i önskelistan!`, "success");
        }
      });
    }
  },

  bindFilterEvents() {
    // Gender buttons
    document.querySelectorAll(".gender-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const gender = e.currentTarget.dataset.gender;
        this.setGender(gender);
      });
    });

    // Category filter pills
    document.querySelectorAll(".filter-pill").forEach(pill => {
      pill.addEventListener("click", (e) => {
        const subcat = e.currentTarget.dataset.subcat;
        this.setSubcat(subcat);
      });
    });

    // Sort select
    const sortSelect = document.getElementById("catalogSortSelect");
    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        this.setSort(e.target.value);
      });
    }

    // Grid View Switcher
    document.querySelectorAll(".grid-view-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const cols = parseInt(e.currentTarget.dataset.cols);
        this.setGridCols(cols);
      });
    });
  },

  bindSearchEvents() {
    const searchOpenBtn = document.getElementById("headerSearchBtn");
    const searchOverlay = document.getElementById("searchOverlay");
    const searchCloseBtn = document.getElementById("searchCloseBtn");
    const searchInput = document.getElementById("searchInput");
    const resultsGrid = document.getElementById("searchResultsGrid");

    if (searchOpenBtn && searchOverlay) {
      searchOpenBtn.addEventListener("click", () => {
        searchOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
        if (searchInput) {
          setTimeout(() => searchInput.focus(), 150);
        }
      });
    }

    if (searchCloseBtn && searchOverlay) {
      searchCloseBtn.addEventListener("click", () => {
        searchOverlay.classList.remove("active");
        document.body.style.overflow = "";
      });
    }

    // Live search typing
    if (searchInput && resultsGrid) {
      searchInput.addEventListener("input", (e) => {
        const q = e.target.value.toLowerCase().trim();
        if (q.length < 2) {
          resultsGrid.innerHTML = "";
          return;
        }

        const matches = PRODUCTS_DATA.filter(p => 
          p.title.toLowerCase().includes(q) || 
          p.vendor.toLowerCase().includes(q) ||
          p.material.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
        );

        if (matches.length === 0) {
          resultsGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 30px;">Inga produkter hittades för "${q}"</div>`;
          return;
        }

        let html = "";
        matches.forEach(p => {
          html += `
            <div class="product-card" onclick="QuickView.open(${p.id}); document.getElementById('searchOverlay').classList.remove('active'); document.body.style.overflow = '';">
              <div class="product-image-wrap" style="aspect-ratio: 1;">
                <img src="${p.images[0]}" alt="${p.title}" class="product-img">
              </div>
              <div class="product-info">
                <span class="product-vendor">${p.vendor}</span>
                <div class="product-title">${p.title}</div>
                <span class="product-price">${Cart.formatPrice(p.priceSEK)}</span>
              </div>
            </div>
          `;
        });
        resultsGrid.innerHTML = html;
      });
    }

    // Search Chips
    document.querySelectorAll(".search-chip").forEach(chip => {
      chip.addEventListener("click", (e) => {
        const term = e.currentTarget.textContent.trim();
        if (searchInput) {
          searchInput.value = term;
          searchInput.dispatchEvent(new Event("input"));
        }
      });
    });
  },

  bindConsultationEvents() {
    const consultationBtn = document.getElementById("bookConsultationBtn");
    const modal = document.getElementById("consultationModal");
    const closeBtn = document.getElementById("consultationCloseBtn");
    const form = document.getElementById("consultationForm");

    if (consultationBtn && modal) {
      consultationBtn.addEventListener("click", () => {
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
      });
    }

    if (closeBtn && modal) {
      closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
        document.body.style.overflow = "";
      });
    }

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("consultName").value;
        const service = document.getElementById("consultService").value;
        const date = document.getElementById("consultDate").value;

        alert(`Tack ${name}!\n\nDin bokning för "${service}" den ${date} i butiken på Kungsgatan 38 i Stockholm är mottagen.\n\nVår chefs-skräddare kommer att kontakta dig för bekräftelse via telefon.`);
        if (modal) {
          modal.classList.remove("active");
          document.body.style.overflow = "";
        }
        form.reset();
      });
    }
  },

  bindNewsletterEvents() {
    const form = document.getElementById("newsletterForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("newsletterEmail").value;
        showToast(`Tack! Välkomstkod STROMS10 har skickats till ${email}`, "success");
        form.reset();
      });
    }
  }
};

// Global Toast Notification Helper
function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";

  let icon = `
    <svg class="toast-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>
  `;

  if (type === "success") {
    icon = `
      <svg class="toast-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    `;
  } else if (type === "error") {
    icon = `
      <svg class="toast-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D32F2F" stroke-width="2">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="15" y1="9" x2="9" y2="15"></line>
        <line x1="9" y1="9" x2="15" y2="15"></line>
      </svg>
    `;
  }

  toast.innerHTML = `${icon}<span>${message}</span>`;
  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

window.App = App;
window.showToast = showToast;

document.addEventListener("DOMContentLoaded", () => {
  Cart.init();
  App.init();
});
