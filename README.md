# Ströms Man & Woman — Stockholm 1886 / 1939

> Exklusivt skandinaviskt mode, skrädderi & kashmir inspirerat av [Ströms Stockholm](https://stroms.com/).

🌐 **Live Demo Website:** [https://nishitbaleja.github.io/jay-bhai/](https://nishitbaleja.github.io/jay-bhai/)

---

## 👔 Om Projektet / About

En modern, responsiv och sofistikerad e-handelsplattform byggd med ren Vanilla HTML5, CSS3 och JavaScript. Designen speglar Ströms anrika arv på Kungsgatan 38 i centrala Stockholm och presenterar exklusiva herr- och damkollektioner.

### ✨ Nyckelfunktioner
- **Skandinavisk Lyxdesign:** Elegant färgpalett (varm elfenben, sand, espresso, konjak), typografi med Cormorant Garamond och Plus Jakarta Sans.
- **Dubbel-vinkel produktkort:** Automatisk växling till detalj- och baksidesbild vid hovring.
- **Snabbvy (Quick View Modal):** Inspektera tygkvalitet, se flera bildvinklar, välj storlek och lägg i varukorg direkt.
- **Interaktiv Varukorg (Slide-out Drawer):**
  - Dynamisk fri frakt-mätare (fri frakt vid köp över 1 500 kr)
  - Ändra antal och ta bort artiklar
  - Kampanjkodsstöd (prova `STROMS10` för 10% rabatt)
  - Simulerad expresskassa
- **Valutaväljare:** Växla sömlöst mellan SEK (kr), EUR (€), USD ($) och GBP (£) med direkt omräkning av alla priser.
- **Kungsgatan 38 Skrädderi & Måttsytt:** Interaktiv bokningsmodul för Made to Measure och privat provning.
- **Direktsökning:** Blixtsnabb filtrering av produkter med sökförslag.

---

## 🛠️ Teknisk Struktur
```text
jay-bhai/
├── index.html            # Huvudsida med alla sektioner
├── css/
│   ├── style.css         # Designsystem, animationer och typografi
│   └── responsive.css    # Responsivitet för mobil och surfplatta
├── js/
│   ├── products-data.js  # Produktkatalog med högupplösta bilder och specifikationer
│   ├── cart.js           # Varukorgshantering, valutaomräkning och fraktmätare
│   ├── quick-view.js     # Snabbvy-modal och bildgalleri
│   └── app.js            # Filterkontroller, sökning och eventhantering
└── README.md
```

## 🚀 Kom igång lokalt
Öppna bara `index.html` i valfri webbläsare, eller starta en lokal server:
```bash
python3 -m http.server 8080
```
Besök sedan `http://localhost:8080`.
