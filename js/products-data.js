/**
 * STRÖMS MAN & WOMAN - STOCKHOLM 1886 / 1939
 * Authentic Product Catalog Data
 * All images sourced directly from Ströms Stockholm CDN
 */

const PRODUCTS_DATA = [
  // --- MEN: ROCKAR & YTTERPLAGG ---
  {
    id: 101,
    title: "Hynes Raglanrock Ull Navy",
    handle: "hynes-raglanrock-ull-navy",
    vendor: "Ströms Man",
    category: "man",
    subcat: "ytterplagg",
    subcatLabel: "Rockar & Jackor",
    priceSEK: 8999,
    compareAtSEK: 9999,
    badge: "Nyhet",
    isNew: true,
    color: "Navy Blue",
    material: "100% Ren Ny Ull (Italiensk väv)",
    sizes: ["46", "48", "50", "52", "54", "56"],
    images: [
      "https://cdn.shopify.com/s/files/1/0955/3369/5360/files/A5304310.jpg?v=1791204471&width=1000",
      "https://cdn.shopify.com/s/files/1/0955/3369/5360/files/A5304310_2.jpg?v=1791204471&width=1000",
      "https://stroms.com/cdn/shop/files/herr-13-ytterplagg-jacka-rock-2-2.jpg?v=1791381885&width=1000"
    ],
    description: "Klassisk raglanrock i kraftig italiensk ullväv med vattenavvisande finish. Fodrad med silkeslen viskos för maximal rörlighet över kavaj. Dolda knappar framtill och sprund bak.",
    details: [
      "100% ull från italienska väverier",
      "Klassisk raglanärm med hornknappar",
      "Vatten- och vindavvisande finish",
      "Tillverkad i Europa för Ströms Man"
    ]
  },
  {
    id: 102,
    title: "New Dea Rock Bomull Khaki",
    handle: "new-dea-rock-bomull-khaki",
    vendor: "Ströms Man",
    category: "man",
    subcat: "ytterplagg",
    subcatLabel: "Rockar & Jackor",
    priceSEK: 6999,
    compareAtSEK: null,
    badge: "Klassiker",
    isNew: false,
    color: "Khaki / Sand",
    material: "100% Tätvävd Gabardinbomull",
    sizes: ["48", "50", "52", "54"],
    images: [
      "https://cdn.shopify.com/s/files/1/0955/3369/5360/files/A5323610.jpg?v=1791358773&width=1000",
      "https://cdn.shopify.com/s/files/1/0955/3369/5360/files/A5323610_2.jpg?v=1791358773&width=1000"
    ],
    description: "Tidlös trench-inspirerad rock i slitstark bomullsgabardin. Perfekt övergångsplagg för skandinaviskt väder med elegant silhuett och avtagbart innerfoder.",
    details: [
      "100% bomullsgabardin med lätt vaxning",
      "Dold knäppning och justerbara spännen vid ärmslut",
      "Djupa snedställda fickor med fleecefoder",
      "Ströms exklusiva passform"
    ]
  },
  {
    id: 103,
    title: "Bedale Vaxad Jacka Sage",
    handle: "barbour-bedale-vaxad-jacka-sage",
    vendor: "Barbour",
    category: "man",
    subcat: "ytterplagg",
    subcatLabel: "Rockar & Jackor",
    priceSEK: 4899,
    compareAtSEK: null,
    badge: "Ikon",
    isNew: false,
    color: "Sage Green",
    material: "100% Vaxad Bomull & Manchestrad krage",
    sizes: ["36", "38", "40", "42", "44"],
    images: [
      "https://stroms.com/cdn/shop/files/british-icons-herr-45-2-barbour-bedale-4.jpg?v=1789548308&width=1000",
      "https://stroms.com/cdn/shop/files/meny-herr-barbour-british-brittiska-avdelningen-telagenova-jeans-aw26-1.jpg?v=1789566348&width=1000"
    ],
    description: "Den brittiska ikonen Bedale. Tillverkad i klassisk medeltung Thornproof vaxad bomull med tvåvägsdragkedja i mässing och tartantygfoder.",
    details: [
      "Original Barbour 6oz vaxad bomull",
      "Klassisk manchesterkrage med stormklaff",
      "Rymliga bälgfickor och handvärmarfickor",
      "Klassiskt Barbour Classic Tartan foder"
    ]
  },
  {
    id: 104,
    title: "Denim Trucker Jacket Blå",
    handle: "denim-trucker-jacket-bla",
    vendor: "Tela Genova",
    category: "man",
    subcat: "ytterplagg",
    subcatLabel: "Rockar & Jackor",
    priceSEK: 5999,
    compareAtSEK: 6499,
    badge: "Nyhet",
    isNew: true,
    color: "Indigo Vintage",
    material: "100% Japansk Selvedge Denim",
    sizes: ["M", "L", "XL", "XXL"],
    images: [
      "https://cdn.shopify.com/s/files/1/0955/3369/5360/files/A5308510.jpg?v=1789369168&width=1000",
      "https://cdn.shopify.com/s/files/1/0955/3369/5360/files/A5308510_2.jpg?v=1789369168&width=1000"
    ],
    description: "En exklusiv tolkning av den klassiska trucker-jackan, vävd av japansk premiumdenim med vintage-tvättad patina och handsydda sömmar.",
    details: [
      "Premium 13.5 oz japansk selvedge denim",
      "Specialtillverkade oxiderade mässingsknappar",
      "Avslappnad men skräddad silhuett",
      "Tillverkad i Genova, Italien"
    ]
  },

  // --- MEN: KAVAJER & SKRÄDDAT ---
  {
    id: 105,
    title: "Justin Kavaj Ull Skogsgrön",
    handle: "justin-kavaj-ull-gron",
    vendor: "Oscar Jacobson",
    category: "man",
    subcat: "kavajer",
    subcatLabel: "Kavajer & Skräddat",
    priceSEK: 4299,
    compareAtSEK: 4899,
    badge: "Bästsäljare",
    isNew: false,
    color: "Skogsgrön Melange",
    material: "100% Extra Fine Merino Ull",
    sizes: ["48", "50", "52", "54"],
    images: [
      "https://cdn.shopify.com/s/files/1/0955/3369/5360/files/A5308810.jpg?v=1787122363&width=1000",
      "https://cdn.shopify.com/s/files/1/0955/3369/5360/files/A5308810_2.jpg?v=1787122364&width=1000",
      "https://stroms.com/cdn/shop/files/meny-herr-kavajer-kostymer-flanell-stromsman-polotrojor-aw26-1.jpg?v=1789565928&width=1000"
    ],
    description: "Mjukt konstruerad kavaj med okonstruerad axel för en modern och sofistikerad silhuett. Vävd i exklusiv italiensk flanell med rik textur.",
    details: [
      "Halvfodrad konstruktion med mjukt axelparti",
      "Trubbiga slag (Notch lapels) och två knappar",
      "Utanpåliggande fickor i italiensk stil",
      "Tyg från Vitale Barberis Canonico"
    ]
  },
  {
    id: 106,
    title: "Flanellkostym Ströms Sartorial Charcoal",
    handle: "flanellkostym-stroms-charcoal",
    vendor: "Ströms Man",
    category: "man",
    subcat: "kavajer",
    subcatLabel: "Kavajer & Skräddat",
    priceSEK: 9899,
    compareAtSEK: null,
    badge: "Sartorial",
    isNew: true,
    color: "Mörkgrå Flanell",
    material: "100% Ullflanell från Fox Brothers",
    sizes: ["46", "48", "50", "52", "54", "56"],
    images: [
      "https://stroms.com/cdn/shop/files/meny-herr-kavajer-kostymer-flanell-stromsman-polotrojor-aw26-1.jpg?v=1789565928&width=1000",
      "https://stroms.com/cdn/shop/files/sartorial-project-ss26-herr-800-2.jpg?v=1780310133&width=1000"
    ],
    description: "Det ultimata höst- och vinterplagget. En helskräddad flanellkostym med hög midja och dubbla veck på byxan, framtagen för den kräsne gentlemannen.",
    details: [
      "Brittisk flanell av högsta internationella klass",
      "Halvkanvas-konstruktion med handsydda rullslag",
      "Byxor med sidospännen och 4.5 cm slag",
      "Ingår i Ströms The Sartorial Project"
    ]
  },

  // --- MEN: TRÖJOR & STICKAT ---
  {
    id: 107,
    title: "Landford Cardigan Lammull Ljusgrå",
    handle: "landford-cardigan-lammull-ljusgra",
    vendor: "Gran Sasso",
    category: "man",
    subcat: "trojor",
    subcatLabel: "Tröjor & Stickat",
    priceSEK: 2499,
    compareAtSEK: null,
    badge: "Kashmir-känsla",
    isNew: false,
    color: "Ljusgrå Melange",
    material: "100% Superfine Geelong Lammull",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://cdn.shopify.com/s/files/1/0955/3369/5360/files/A3746415_e351352c-10cf-472c-864f-201d08e8ebc6.jpg?v=1791808138&width=1000",
      "https://cdn.shopify.com/s/files/1/0955/3369/5360/files/A3746415_2_612ed5e1-2e06-48de-9708-457734a7f5ef.jpg?v=1791808138&width=1000"
    ],
    description: "Klassisk stickad cardigan med v-ringning och knappar i äkta pärlemor. Stickad i Italien med förstklassigt lammullsgarn med oöverträffad mjukhet.",
    details: [
      "100% lammull från utvalda gårdar",
      "Ribbstickade muddar och fåll",
      "Tidlös italiensk passform",
      "Tillverkad i Abruzzo, Italien"
    ]
  },
  {
    id: 108,
    title: "Polotröja Kashmir Mörkbrun",
    handle: "polotroja-kashmir-morkbrun",
    vendor: "Gran Sasso",
    category: "man",
    subcat: "trojor",
    subcatLabel: "Tröjor & Stickat",
    priceSEK: 4599,
    compareAtSEK: 4999,
    badge: "100% Kashmir",
    isNew: true,
    color: "Mörkbrun Espresso",
    material: "100% 2-trådig Kashmir från Cariaggi",
    sizes: ["48", "50", "52", "54"],
    images: [
      "https://stroms.com/cdn/shop/files/herr-13-kat-trojor-gran-sasso-vit-1.jpg?v=1786950885&width=1000",
      "https://stroms.com/cdn/shop/files/meny-herr-gransasso-jacka-telagenova-jeans-aw26-1.jpg?v=1786974961&width=1000"
    ],
    description: "Lyxig polotröja i mjukaste 2-trådiga kashmir. Ett måste under kostymen eller kavajen under de kyliga månaderna.",
    details: [
      "Exklusivt garn från Cariaggi Lanificio",
      "Mjuk rullkrage som håller formen hela dagen",
      "Andas och reglerar värme naturligt",
      "Gjord för hand i Italien"
    ]
  },

  // --- MEN: SKJORTOR & BYXOR ---
  {
    id: 109,
    title: "Slim Fit Skjorta Twill Rutig Brun",
    handle: "slim-fit-skjorta-twill-brun",
    vendor: "Eton",
    category: "man",
    subcat: "skjortor",
    subcatLabel: "Skjortor",
    priceSEK: 1999,
    compareAtSEK: null,
    badge: "Strykfribomull",
    isNew: false,
    color: "Brun & Vit Twill",
    material: "100% Signature Twill Bomull",
    sizes: ["38", "39", "40", "41", "42", "43"],
    images: [
      "https://cdn.shopify.com/s/files/1/0955/3369/5360/files/A5300610.jpg?v=1790581833&width=1000",
      "https://cdn.shopify.com/s/files/1/0955/3369/5360/files/A5300610_2.jpg?v=1790581833&width=1000"
    ],
    description: "Etons legendariska signaturtwill med ett sofistikerat mikro-rutigt mönster i varma bruna toner. Skrynkelfri finish som håller sig felfri från morgon till kväll.",
    details: [
      "100% långfibrig pima-bomull",
      "Cutaway-krage passande både med och utan slips",
      "Enkla manschetter med dubbla knapphål",
      "Designad i Sverige av Eton Shirts"
    ]
  },
  {
    id: 110,
    title: "Bard 5-Ficksbyxa Manchester Brun",
    handle: "bard-manchester-brun",
    vendor: "Jacob Cohën",
    category: "man",
    subcat: "byxor",
    subcatLabel: "Byxor",
    priceSEK: 5499,
    compareAtSEK: null,
    badge: "Exklusiv",
    isNew: true,
    color: "Mörk Cognac Manchester",
    material: "98% Bomullsmanchester, 2% Elastan",
    sizes: ["31", "32", "33", "34", "35", "36"],
    images: [
      "https://cdn.shopify.com/s/files/1/0955/3369/5360/files/A5235811.jpg?v=1787041345&width=1000",
      "https://cdn.shopify.com/s/files/1/0955/3369/5360/files/A5235811_2.jpg?v=1787041345&width=1000"
    ],
    description: "Jacob Cohëns ikoniska modell Bard i finspårig manchester med diskret stretch. Detaljerad med ponnyhårsmärke på baksidan och silverpläterade knappar.",
    details: [
      "Skräddarsydd italiensk 5-ficksbyxa",
      "Signaturdoft av Jacob Cohën medföljer i flaskprov",
      "Matchande ficknäsduk ingår i bakfickan",
      "Hantverkstillverkad i Veneto, Italien"
    ]
  },
  {
    id: 111,
    title: "Nick Jeans Denim Stretch Vintage Blå",
    handle: "nick-jeans-denim-stretch-vintage-bla",
    vendor: "Jacob Cohën",
    category: "man",
    subcat: "byxor",
    subcatLabel: "Byxor",
    priceSEK: 5999,
    compareAtSEK: null,
    badge: "Kultmodell",
    isNew: false,
    color: "Vintage Indigo",
    material: "98% Kurabo Selvedge Denim, 2% Elastan",
    sizes: ["31", "32", "33", "34", "36"],
    images: [
      "https://cdn.shopify.com/s/files/1/0955/3369/5360/files/A5236810.jpg?v=1783000805&width=1000",
      "https://cdn.shopify.com/s/files/1/0955/3369/5360/files/A5236810_2.jpg?v=1783000805&width=1000"
    ],
    description: "Slim fit jeans i japansk selvedge denim, tvättad till perfektion med naturliga whiskers och slitage. Ultimat komfort kombinerat med skräddad estetik.",
    details: [
      "Japanskt lyxtygsgarn med tvåvägsstretch",
      "Klassisk 5-ficksdesign med broderad logotyp på myntfickan",
      "Exklusiv mockaskylt med präglad logotyp",
      "Garanterad lång livslängd"
    ]
  },
  {
    id: 112,
    title: "Penny Loafers Mörkbrun Mocka",
    handle: "penny-loafers-morkbrun-mocka",
    vendor: "Ströms Skor",
    category: "man",
    subcat: "skor",
    subcatLabel: "Skor & Accessoarer",
    priceSEK: 3999,
    compareAtSEK: null,
    badge: "Handgjord",
    isNew: true,
    color: "Espresso Suede",
    material: "100% Kalvmocka med Randsydd Lädersula",
    sizes: ["40", "41", "42", "43", "44", "45"],
    images: [
      "https://stroms.com/cdn/shop/files/meny-herr-skor-loafers-aw26-1.jpg?v=1789565711&width=1000",
      "https://stroms.com/cdn/shop/files/herr-800-hostens-5-trender-1.jpg?v=1789548308&width=1000"
    ],
    description: "Klassiska randsydda penny loafers tillverkade i mjukaste kalvmocka med gummiförstärkt lädersula för nordiska förhållanden.",
    details: [
      "Goodyear welted konstruktion",
      "Fullnarvigt kalvfoder för maximal andningsförmåga",
      "Klassisk mandelformad tå",
      "Handgjord i Northamptonshire för Ströms"
    ]
  },

  // ==========================================
  // --- WOMEN / DAM KOLLEKTIONEN ---
  // ==========================================
  {
    id: 201,
    title: "Alpacka Kappa Mörkbrun",
    handle: "alpacka-kappa-morkbrun",
    vendor: "Ströms Woman",
    category: "woman",
    subcat: "ytterplagg",
    subcatLabel: "Kappor & Jackor",
    priceSEK: 10599,
    compareAtSEK: 11999,
    badge: "Exklusiv",
    isNew: true,
    color: "Mörk Chokladbrun",
    material: "70% Baby Alpacka, 30% Ren Ull",
    sizes: ["34", "36", "38", "40", "42"],
    images: [
      "https://cdn.shopify.com/s/files/1/0955/3369/5360/files/A4241413_4d6ffa9a-9ab4-4951-aec0-d1afad013c90.jpg?v=1791555093&width=1000",
      "https://cdn.shopify.com/s/files/1/0955/3369/5360/files/A4241413_2_ceec3963-d7d0-4704-a810-bf537c943390.jpg?v=1791555094&width=1000",
      "https://stroms.com/cdn/shop/files/meny-dam-mbs-ytterplagg-kappor-ease-aw26-1.jpg?v=1789565928&width=1000"
    ],
    description: "En magnifik kappa tillverkad i silkeslen babyalpacka med en rik, glansig textur. Lätt oversized omlottmodell med knytskärp som framhäver midjan.",
    details: [
      "Lyxig babyalpackablandning med fjäderlätt värme",
      "Stora sjalslag och djupa infällda fickor",
      "Heldfodrad i cupro för ett elegant fall",
      "Skapad för Ströms Woman Atelier"
    ]
  },
  {
    id: 202,
    title: "Dubbelknäppt Kavaj Manchester Kanel",
    handle: "dubbelknappt-kavaj-manchester-kanel",
    vendor: "Ströms Woman",
    category: "woman",
    subcat: "kavajer",
    subcatLabel: "Kavajer & Kostymer",
    priceSEK: 4699,
    compareAtSEK: null,
    badge: "Säsongsfavorit",
    isNew: true,
    color: "Kanelbrun",
    material: "100% Italiensk Bomullsmanchester",
    sizes: ["34", "36", "38", "40", "42"],
    images: [
      "https://cdn.shopify.com/s/files/1/0955/3369/5360/files/A5287412.jpg?v=1790580271&width=1000",
      "https://cdn.shopify.com/s/files/1/0955/3369/5360/files/A5287412_2.jpg?v=1790580271&width=1000",
      "https://stroms.com/cdn/shop/files/dam-45-kostymguide-3.jpg?v=1789565928&width=1000"
    ],
    description: "Skräddad dubbelknäppt kavaj i varm kanelfärgad bredspårig manchester. Skarp axelmarkering och markerad midja för en modern power-silhuett.",
    details: [
      "100% bomullsmanchester från Italien",
      "6-knapps dubbelknäppning med hornknappar",
      "Fickor med ficklock och bröstficka",
      "Matchar perfekt med tillhörande Byxa Manchester"
    ]
  },
  {
    id: 203,
    title: "Byxa Manchester Kanel",
    handle: "byxa-manchester-kanel",
    vendor: "Ströms Woman",
    category: "woman",
    subcat: "byxor",
    subcatLabel: "Byxor & Jeans",
    priceSEK: 2599,
    compareAtSEK: null,
    badge: "Matchande Set",
    isNew: true,
    color: "Kanelbrun",
    material: "100% Italiensk Bomullsmanchester",
    sizes: ["34", "36", "38", "40", "42"],
    images: [
      "https://cdn.shopify.com/s/files/1/0955/3369/5360/files/A5287512.jpg?v=1791357818&width=1000",
      "https://cdn.shopify.com/s/files/1/0955/3369/5360/files/A5287512_2.jpg?v=1791357818&width=1000"
    ],
    description: "Vida manchesterbyxor med hög midja och pressveck som ger ett förlängande intryck. Bärs som hel kostym med tillhörande kavaj eller separat med stickad tröja.",
    details: [
      "Hög midja med skräddad linning",
      "Vid, rak benvidd med generös fåll",
      "Snedställda sidfickor och passpoalfickor bak",
      "Matchar Dubbelknäppt Kavaj Kanel"
    ]
  },
  {
    id: 204,
    title: "Modern Beadnell Quiltad Jacka Mörkgrön",
    handle: "modern-beadnell-quiltad-jacka",
    vendor: "Barbour",
    category: "woman",
    subcat: "ytterplagg",
    subcatLabel: "Kappor & Jackor",
    priceSEK: 3999,
    compareAtSEK: null,
    badge: "Klassiker",
    isNew: false,
    color: "Olive Mörkgrön",
    material: "100% Polyamid med Tartanfoder",
    sizes: ["34", "36", "38", "40", "42"],
    images: [
      "https://cdn.shopify.com/s/files/1/0955/3369/5360/files/A5088210_10.jpg?v=1791471496&width=1000",
      "https://cdn.shopify.com/s/files/1/0955/3369/5360/files/A5088210_11.jpg?v=1791471496&width=1000"
    ],
    description: "Feminin diamantquiltad jacka inspirerad av den klassiska Beadnell-modellen. Perfekt för stadspromenader och helger på landet med värmande vaddering.",
    details: [
      "Karakteristisk diamantquiltning",
      "Manchesterfodrad krage och uppvikbara manschetter",
      "Broderad Barbour-logo på ficklock",
      "Vindtät och vattenresistent"
    ]
  },
  {
    id: 205,
    title: "Palazzo Jeans Mörkblå",
    handle: "palazzo-jeans-morkbla",
    vendor: "Ströms Woman",
    category: "woman",
    subcat: "byxor",
    subcatLabel: "Byxor & Jeans",
    priceSEK: 2099,
    compareAtSEK: null,
    badge: "Bästsäljare",
    isNew: true,
    color: "Djup Mörkblå Rinse",
    material: "99% Ekologisk Bomull, 1% Elastan",
    sizes: ["26", "27", "28", "29", "30", "31"],
    images: [
      "https://cdn.shopify.com/s/files/1/0955/3369/5360/files/A5257710_14.jpg?v=1791796466&width=1000",
      "https://cdn.shopify.com/s/files/1/0955/3369/5360/files/A5257710_11.jpg?v=1791796466&width=1000"
    ],
    description: "Dramatiska palazzojeans med ultrahög midja och vida ben i djup mörkblå otvättad rådenim. Ger en sofistikerad 70-tals silhuett till höstens stickade tröjor.",
    details: [
      "Högkvalitativ ekologisk bomullsdenim",
      "Hög midja med ren ficklös framdel för slät passform",
      "Kontrastsömmar i guldbrun tråd",
      "Ströms Woman design"
    ]
  },
  {
    id: 206,
    title: "Kathryn Kjol Poplin Svart",
    handle: "kathryn-kjol-poplin-svart",
    vendor: "Ahlvar Gallery",
    category: "woman",
    subcat: "kjolar",
    subcatLabel: "Klänningar & Kjolar",
    priceSEK: 1999,
    compareAtSEK: null,
    badge: "Design",
    isNew: false,
    color: "Svart",
    material: "100% Krispig Bomullspoplin",
    sizes: ["XS", "S", "M", "L"],
    images: [
      "https://cdn.shopify.com/s/files/1/0955/3369/5360/files/A5072510.jpg?v=1787910071&width=1000",
      "https://cdn.shopify.com/s/files/1/0955/3369/5360/files/A5072510_2.jpg?v=1787910071&width=1000"
    ],
    description: "A-linjeformad midikjol i krispig bomullspoplin med skulpterad volym och dold dragkedja i sidan. Bärs lika snyggt till stövlar som till klackar.",
    details: [
      "Strukturerad krispig poplinkvalitet",
      "Dolda praktiska sidfickor",
      "Resårdetalj bak i linningen för optimal passform",
      "Skandinavisk minimalistisk design"
    ]
  },
  {
    id: 207,
    title: "Kashmirhalsduk Tartan Beige & Camel",
    handle: "kashmirhalsduk-tartan-camel",
    vendor: "Ströms Accessoarer",
    category: "woman",
    subcat: "accessoarer",
    subcatLabel: "Skor & Accessoarer",
    priceSEK: 1699,
    compareAtSEK: null,
    badge: "100% Kashmir",
    isNew: true,
    color: "Camel & Sand Tartan",
    material: "100% Ren Mongoliska Kashmir",
    sizes: ["One Size (190 x 35 cm)"],
    images: [
      "https://stroms.com/cdn/shop/files/meny-herr-rockar-stweed-stromsman-halsduk-aw26-1.jpg?v=1789565572&width=1000",
      "https://stroms.com/cdn/shop/files/meny-dam-troja-polotroja-stromswoman-aw26-2.jpg?v=1789565572&width=1000"
    ],
    description: "Fjäderlätt och underbart värmande halsduk vävd i 100% kashmir med fransade ändar och ett sobert rutmönster i sand och camel.",
    details: [
      "Tillverkad av finaste grade-A kashmirfiber",
      "Mjukt borstad yta som inte noppar",
      "Perfekt gåva eller lyxig vardagsaccessoar",
      "Levereras i signaturask från Ströms Stockholm"
    ]
  },
  {
    id: 208,
    title: "Skinnstövlar Knähöga Mörkbrun",
    handle: "skinnstovlar-knahoga-morkbrun",
    vendor: "ATP Atelier",
    category: "woman",
    subcat: "skor",
    subcatLabel: "Skor & Accessoarer",
    priceSEK: 5499,
    compareAtSEK: null,
    badge: "Italienskt Läder",
    isNew: true,
    color: "Mörkbrun Vacchetta",
    material: "100% Vegetabiliskt Garvat Kalvskinn",
    sizes: ["36", "37", "38", "39", "40", "41"],
    images: [
      "https://stroms.com/cdn/shop/files/meny-dam-skor-stovlar-stovletter-byxor-barrel-aw26-2.jpg?v=1789565572&width=1000",
      "https://stroms.com/cdn/shop/files/dam-herr-45-klackskor-menybild-1.jpg?v=1789565572&width=1000"
    ],
    description: "Eleganta knähöga stövlar i italienskt vegetabiliskt garvat kalvskinn med låg blockklack. Åldras vackert med en unik patina som fördjupas över tid.",
    details: [
      "Handgjorda i Toscana, Italien",
      "Vegetabiliskt garvat läder utan kemikalier",
      "Bekväm 4.5 cm klack för heldagskomfort",
      "Diskret dragkedja på insidan av skaftet"
    ]
  }
];

// Currency Rates (Base: SEK)
const CURRENCIES = {
  SEK: { symbol: "kr", rate: 1.0, format: (val) => `${Math.round(val).toLocaleString("sv-SE")} kr` },
  EUR: { symbol: "€", rate: 0.088, format: (val) => `€${Math.round(val * 0.088).toLocaleString("de-DE")}` },
  USD: { symbol: "$", rate: 0.095, format: (val) => `$${Math.round(val * 0.095).toLocaleString("en-US")}` },
  GBP: { symbol: "£", rate: 0.075, format: (val) => `£${Math.round(val * 0.075).toLocaleString("en-GB")}` }
};
