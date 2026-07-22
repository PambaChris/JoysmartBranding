const rawProducts = [
  {
    node: {
      id: "linda-mwananchi-round-neck",
      title: "Linda Mwananchi Round Neck",
      handle: "linda-mwananchi-round-neck",
      description: "Comfortable Linda Mwananchi campaign round neck T-shirt.",
      priceRange: { minVariantPrice: { amount: "450.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Sifuna/Linda mwananchi Round Neck.jpg", altText: "Linda Mwananchi Round Neck" } }] },
      variants: { edges: [{ node: { id: "lmrn-standard", title: "Standard", price: { amount: "450.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "mimi-ndio-sifuna-polo",
      title: "Mimi Ndio Sifuna Polo",
      handle: "mimi-ndio-sifuna-polo",
      description: "Premium Mimi Ndio Sifuna campaign polo T-shirt.",
      priceRange: { minVariantPrice: { amount: "800.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Sifuna/Mimi Ndio Sifuna Polo.jpg", altText: "Mimi Ndio Sifuna Polo" } }] },
      variants: { edges: [{ node: { id: "mnsp-standard", title: "Standard", price: { amount: "800.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "mimi-ndio-sifuna-round-neck",
      title: "Mimi Ndio Sifuna Round Neck",
      handle: "mimi-ndio-sifuna-round-neck",
      description: "Comfortable Mimi Ndio Sifuna campaign round neck T-shirt.",
      priceRange: { minVariantPrice: { amount: "450.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Sifuna/Mimi ndio sifuna Round neck.jpg", altText: "Mimi Ndio Sifuna Round Neck" } }] },
      variants: { edges: [{ node: { id: "mnsrn-standard", title: "Standard", price: { amount: "450.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "sifuna-cap",
      title: "Sifuna Cap",
      handle: "sifuna-cap",
      description: "Branded Sifuna campaign cap.",
      priceRange: { minVariantPrice: { amount: "300.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Sifuna/Sifuna Cap.jpg", altText: "Sifuna Cap" } }] },
      variants: { edges: [{ node: { id: "sc-standard", title: "Standard", price: { amount: "300.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "sifuna-headscarf",
      title: "Sifuna Headscarf",
      handle: "sifuna-headscarf",
      description: "Stylish Sifuna campaign headscarf.",
      priceRange: { minVariantPrice: { amount: "200.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Sifuna/Sifuna HeadScarf.jpg", altText: "Sifuna Headscarf" } }] },
      variants: { edges: [{ node: { id: "shs-standard", title: "Standard", price: { amount: "200.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "sifuna-the-6th-leso",
      title: "Sifuna The 6th Leso",
      handle: "sifuna-the-6th-leso",
      description: "Beautifully printed Sifuna The 6th campaign Leso fabric.",
      priceRange: { minVariantPrice: { amount: "450.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Sifuna/Sifuna The 6th Leso.jpg", altText: "Sifuna The 6th Leso" } }] },
      variants: { edges: [{ node: { id: "s6l-standard", title: "Standard", price: { amount: "450.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "normal-cap",
      title: "Normal cap",
      handle: "normal-cap",
      description: "High-quality branded normal caps.",
      priceRange: { minVariantPrice: { amount: "200.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Branded caps.jpg", altText: "Normal cap" } }] },
      variants: {
        edges: [
          { node: { id: "cap-orange", title: "Orange", price: { amount: "200.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Orange" }] } },
          { node: { id: "cap-red", title: "Red", price: { amount: "200.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Red" }] } },
          { node: { id: "cap-neon-green", title: "Neon Green", price: { amount: "200.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Neon Green" }] } },
          { node: { id: "cap-green", title: "Green", price: { amount: "200.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Green" }] } },
        ]
      },
      options: [{ name: "Color", values: ["Orange", "Red", "Neon Green", "Green"] }],
    },
  },
  {
    node: {
      id: "polycotton-polo-t-shirt",
      title: "Polycotton polo T-shirt",
      handle: "polycotton-polo-t-shirt",
      description: "Comfortable and durable polycotton polo t-shirts.",
      priceRange: { minVariantPrice: { amount: "500.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/premium polo.jpg", altText: "Polycotton polo T-shirt" } }] },
      variants: {
        edges: [
          { node: { id: "pp-navy", title: "Navy Blue", price: { amount: "500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Navy Blue" }] } },
          { node: { id: "pp-black", title: "Black", price: { amount: "500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Black" }] } },
          { node: { id: "pp-white", title: "White", price: { amount: "500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "White" }] } },
          { node: { id: "pp-red", title: "Red", price: { amount: "500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Red" }] } },
          { node: { id: "pp-royal", title: "Royal Blue", price: { amount: "500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Royal Blue" }] } },
          { node: { id: "pp-orange", title: "Orange", price: { amount: "500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Orange" }] } },
          { node: { id: "pp-green", title: "Green", price: { amount: "500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Green" }] } },
        ]
      },
      options: [{ name: "Color", values: ["Navy Blue", "Black", "White", "Red", "Royal Blue", "Orange", "Green"] }],
    },
  },
  {
    node: {
      id: "premium-polo",
      title: "Premium Polo",
      handle: "premium-polo",
      description: "High-quality premium polo t-shirts, available in various colors.",
      priceRange: { minVariantPrice: { amount: "600.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Polo new.png", altText: "Premium Polo" } }] },
      variants: {
        edges: [
          { node: { id: "prep-navy", title: "Navy Blue", price: { amount: "600.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Navy Blue" }] } },
          { node: { id: "prep-black", title: "Black", price: { amount: "600.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Black" }] } },
          { node: { id: "prep-white", title: "White", price: { amount: "600.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "White" }] } },
          { node: { id: "prep-red", title: "Red", price: { amount: "600.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Red" }] } },
          { node: { id: "prep-grey", title: "Grey", price: { amount: "600.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Grey" }] } },
        ]
      },
      options: [{ name: "Color", values: ["Navy Blue", "Black", "White", "Red", "Grey"] }],
    },
  },
  {
    node: {
      id: "polycotton-round-neck-tshirt",
      title: "Polycotton round neck Tshirt",
      handle: "polycotton-round-neck-tshirt",
      description: "Soft and light polycotton round neck t-shirts.",
      priceRange: { minVariantPrice: { amount: "300.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/round neck.jpg", altText: "Polycotton round neck Tshirt" } }] },
      variants: {
        edges: [
          { node: { id: "rn-maroon", title: "Maroon", price: { amount: "300.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Maroon" }] } },
          { node: { id: "rn-navy", title: "Navy Blue", price: { amount: "300.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Navy Blue" }] } },
          { node: { id: "rn-blue", title: "Blue", price: { amount: "300.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Blue" }] } },
          { node: { id: "rn-green", title: "Green", price: { amount: "300.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Green" }] } },
          { node: { id: "rn-yellow", title: "Yellow", price: { amount: "300.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Yellow" }] } },
          { node: { id: "rn-black", title: "Black", price: { amount: "300.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Black" }] } },
        ]
      },
      options: [{ name: "Color", values: ["Maroon", "Navy Blue", "Blue", "Green", "Yellow", "Black"] }],
    },
  },
  {
    node: {
      id: "reflector-safety-wear",
      title: "Reflector safety wear",
      handle: "reflector-safety-wear",
      description: "High-visibility safety reflectors.",
      priceRange: { minVariantPrice: { amount: "350.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/safetywear.jpg", altText: "Reflector safety wear" } }] },
      variants: {
        edges: [
          { node: { id: "sw-neon-orange", title: "Neon Orange", price: { amount: "350.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Neon Orange" }] } },
          { node: { id: "sw-neon-green", title: "Neon Green", price: { amount: "350.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Neon Green" }] } },
          { node: { id: "sw-neon-blue", title: "Neon Blue", price: { amount: "350.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Neon Blue" }] } },
        ]
      },
      options: [{ name: "Color", values: ["Neon Orange", "Neon Green", "Neon Blue"] }],
    },
  },
  {
    node: {
      id: "sweat-pant-set",
      title: "Sweat pant set",
      handle: "sweat-pant-set",
      description: "Cozy and stylish sweat pant sets.",
      priceRange: { minVariantPrice: { amount: "3500.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Sport Track suits.jpg", altText: "Sweat pant set" } }] },
      variants: {
        edges: [
          { node: { id: "sps-black", title: "Black", price: { amount: "3500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Black" }] } },
          { node: { id: "sps-navy", title: "Navy Blue", price: { amount: "3500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Navy Blue" }] } },
          { node: { id: "sps-grey", title: "Grey", price: { amount: "3500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Grey" }] } },
        ]
      },
      options: [{ name: "Color", values: ["Black", "Navy Blue", "Grey"] }],
    },
  },
  {
    node: {
      id: "puff-jackets",
      title: "Puff Jackets",
      handle: "puff-jackets",
      description: "Warm, padded puff jackets.",
      priceRange: { minVariantPrice: { amount: "3000.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/brandedhalfjacket.jpg", altText: "Puff Jackets" } }] },
      variants: {
        edges: [
          { node: { id: "pj-pink", title: "Pink", price: { amount: "3000.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Pink" }] } },
          { node: { id: "pj-blue", title: "Blue", price: { amount: "3000.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Blue" }] } },
          { node: { id: "pj-yellow", title: "Yellow", price: { amount: "3000.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Yellow" }] } },
          { node: { id: "pj-white", title: "White", price: { amount: "3000.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "White" }] } },
        ]
      },
      options: [{ name: "Color", values: ["Pink", "Blue", "Yellow", "White"] }],
    },
  },
  {
    node: {
      id: "diaries-and-notebooks",
      title: "Diaries and notebooks",
      handle: "diaries-and-notebooks",
      description: "Custom branded diaries and notebooks.",
      priceRange: { minVariantPrice: { amount: "1500.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Diaries and notebooks.jpg", altText: "Diaries and notebooks" } }] },
      variants: { edges: [{ node: { id: "dn-standard", title: "Standard", price: { amount: "1500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "gift-set",
      title: "Gift set",
      handle: "gift-set",
      description: "Exquisite personalized gift sets.",
      priceRange: { minVariantPrice: { amount: "4500.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Gift set.jpg", altText: "Gift set" } }] },
      variants: { edges: [{ node: { id: "gs-standard", title: "Standard", price: { amount: "4500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "mugs-and-glasses",
      title: "Mugs and Glasses",
      handle: "mugs-and-glasses",
      description: "Branded mugs and glassware.",
      priceRange: { minVariantPrice: { amount: "1000.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/brandedmugs.jpg", altText: "Mugs and Glasses" } }] },
      variants: {
        edges: [
          { node: { id: "mg-mug", title: "Mug", price: { amount: "1000.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Type", value: "Mug" }] } },
          { node: { id: "mg-glass", title: "Glass", price: { amount: "1000.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Type", value: "Glass" }] } },
        ]
      },
      options: [{ name: "Type", values: ["Mug", "Glass"] }],
    },
  },
  {
    node: {
      id: "logo-branding",
      title: "Logo branding",
      handle: "logo-branding",
      description: "Professional logo design and branding services.",
      priceRange: { minVariantPrice: { amount: "500.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/tshirt branding.jpg", altText: "Logo branding" } }] },
      variants: { edges: [{ node: { id: "lb-standard", title: "Standard", price: { amount: "500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "campaign-reflector",
      title: "Campaign reflector",
      handle: "campaign-reflector",
      description: "High-visibility reflectors for campaigns.",
      priceRange: { minVariantPrice: { amount: "300.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Campaign materials.jpg", altText: "Campaign reflector" } }] },
      variants: { edges: [{ node: { id: "cr-standard", title: "Standard", price: { amount: "300.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "water-bottle",
      title: "Water bottle",
      handle: "water-bottle",
      description: "Custom branded water bottles.",
      priceRange: { minVariantPrice: { amount: "1000.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/brandedwaterbottles.jpg", altText: "Water bottle" } }] },
      variants: { edges: [{ node: { id: "wb-standard", title: "Standard", price: { amount: "1000.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "outdoor-banner",
      title: "Outdoor banner",
      handle: "outdoor-banner",
      description: "Large outdoor advertising banners.",
      priceRange: { minVariantPrice: { amount: "25000.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/banners.jpg", altText: "Outdoor banner" } }] },
      variants: { edges: [{ node: { id: "ob-standard", title: "Standard", price: { amount: "25000.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "branded-round-neck-tshirt",
      title: "Branded round neck Tshirt",
      handle: "branded-round-neck-tshirt",
      description: "Quality printed round neck t-shirts.",
      priceRange: { minVariantPrice: { amount: "600.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/round neck.jpg", altText: "Branded round neck Tshirt" } }] },
      variants: { edges: [{ node: { id: "brn-standard", title: "Standard", price: { amount: "600.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "teardrop",
      title: "Teardrop",
      handle: "teardrop",
      description: "Teardrop promotional banners.",
      priceRange: { minVariantPrice: { amount: "20000.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/teardrops.jpg", altText: "Teardrop" } }] },
      variants: { edges: [{ node: { id: "td-standard", title: "Standard", price: { amount: "20000.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "biro-pen",
      title: "Biro pen",
      handle: "biro-pen",
      description: "Branded corporate biro pens.",
      priceRange: { minVariantPrice: { amount: "150.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Biro pens branding.jpg", altText: "Biro pen" } }] },
      variants: { edges: [{ node: { id: "bp-standard", title: "Standard", price: { amount: "150.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "wooden-crafts",
      title: "Wooden crafts",
      handle: "wooden-crafts",
      description: "Custom branded wooden items.",
      priceRange: { minVariantPrice: { amount: "500.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Wooden Crafts.jpg", altText: "Wooden crafts" } }] },
      variants: { edges: [{ node: { id: "wc-standard", title: "Standard", price: { amount: "500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "maasai-fleece-blankets",
      title: "Maasai fleece blankets",
      handle: "maasai-fleece-blankets",
      description: "Warm Maasai fleece blankets with custom branding.",
      priceRange: { minVariantPrice: { amount: "3000.00", currencyCode: "KES" } },
      images: { 
        edges: [
          { node: { url: "/Maasai Fleece/IMG-20260624-WA0008.jpg", altText: "Maasai fleece blankets" } },
          { node: { url: "/Maasai Fleece/IMG-20260624-WA0009.jpg", altText: "Maasai fleece blankets variant" } },
        ] 
      },
      variants: { edges: [{ node: { id: "mfb-standard", title: "Standard", price: { amount: "3000.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "vehicle-branding",
      title: "Vehicle branding",
      handle: "vehicle-branding",
      description: "High-quality vehicle advertising graphics.",
      priceRange: { minVariantPrice: { amount: "35000.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Vehicle branding.jpg", altText: "Vehicle branding" } }] },
      variants: { edges: [{ node: { id: "vb-standard", title: "Standard", price: { amount: "35000.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "media-banner",
      title: "Media Banner",
      handle: "media-banner",
      description: "Promotional media banners for backdrops.",
      priceRange: { minVariantPrice: { amount: "45000.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Media banners.jpg", altText: "Media Banner" } }] },
      variants: { edges: [{ node: { id: "mb-standard", title: "Standard", price: { amount: "45000.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "corporate-broadbase-roll-up-banner",
      title: "Corporate Broadbase roll-up banner",
      handle: "corporate-broadbase-roll-up-banner",
      description: "Premium heavy-duty roll-up banners.",
      priceRange: { minVariantPrice: { amount: "15000.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Broadbase Roll-up banners.jpg", altText: "Corporate Broadbase roll-up banner" } }] },
      variants: { edges: [{ node: { id: "cbrb-standard", title: "Standard", price: { amount: "15000.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "corporate-gift-set",
      title: "Corporate gift set",
      handle: "corporate-gift-set",
      description: "Curated gift items for businesses.",
      priceRange: { minVariantPrice: { amount: "5500.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Corporate giftings.jpg", altText: "Corporate gift set" } }] },
      variants: { edges: [{ node: { id: "cgs-standard", title: "Standard", price: { amount: "5500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "stickers",
      title: "Stickers",
      handle: "stickers",
      description: "Branded self-adhesive vinyl stickers.",
      priceRange: { minVariantPrice: { amount: "1500.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Srickers.jpg", altText: "Stickers" } }] },
      variants: { edges: [{ node: { id: "s-standard", title: "Standard", price: { amount: "1500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "dry-fit-round-neck-tshirt",
      title: "Dry fit round neck Tshirt",
      handle: "dry-fit-round-neck-tshirt",
      description: "Moisture-wicking activewear shirts.",
      priceRange: { minVariantPrice: { amount: "300.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Dry fit round neck.jpg", altText: "Dry fit round neck Tshirt" } }] },
      variants: {
        edges: [
          { node: { id: "df-blue", title: "Blue", price: { amount: "300.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Blue" }] } },
          { node: { id: "df-orange", title: "Orange", price: { amount: "300.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Orange" }] } },
          { node: { id: "df-black", title: "Black", price: { amount: "300.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Black" }] } },
          { node: { id: "df-white", title: "White", price: { amount: "300.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "White" }] } },
          { node: { id: "df-green", title: "Green", price: { amount: "300.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Green" }] } },
        ]
      },
      options: [{ name: "Color", values: ["Blue", "Orange", "Black", "White", "Green"] }],
    },
  },
  {
    node: {
      id: "kikoi",
      title: "Kikoi",
      handle: "kikoi",
      description: "Traditional East African Kikoi fabrics.",
      priceRange: { minVariantPrice: { amount: "650.00", currencyCode: "KES" } },
      images: { 
        edges: [
          { node: { url: "/Kikoi/WhatsApp Image 2026-06-11 at 7.58.14 PM.jpeg", altText: "Kikoi" } },
          { node: { url: "/Kikoi/WhatsApp Image 2026-06-11 at 7.58.15 PM.jpeg", altText: "Kikoi variant" } },
          { node: { url: "/Kikoi/WhatsApp Image 2026-06-11 at 7.58.15 PM (1).jpeg", altText: "Kikoi variant" } },
          { node: { url: "/Kikoi/WhatsApp Image 2026-06-11 at 7.58.15 PM (2).jpeg", altText: "Kikoi variant" } },
          { node: { url: "/Kikoi/WhatsApp Image 2026-06-11 at 7.58.15 PM (3).jpeg", altText: "Kikoi variant" } },
          { node: { url: "/Kikoi/WhatsApp Image 2026-06-11 at 7.58.15 PM (4).jpeg", altText: "Kikoi variant" } },
        ] 
      },
      variants: { edges: [{ node: { id: "k-standard", title: "Standard", price: { amount: "650.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "hoodies",
      title: "Hoodies",
      handle: "hoodies",
      description: "Warm and cozy branded hoodies.",
      priceRange: { minVariantPrice: { amount: "2000.00", currencyCode: "KES" } },
      images: { 
        edges: [
          { node: { url: "/Hoodies.jpg", altText: "Hoodies" } },
          { node: { url: "/Hoodies/WhatsApp Image 2026-06-11 at 7.58.19 PM.jpeg", altText: "Hoodie variant" } },
          { node: { url: "/Hoodies/WhatsApp Image 2026-06-11 at 7.58.19 PM (1).jpeg", altText: "Hoodie variant" } },
          { node: { url: "/Hoodies/WhatsApp Image 2026-06-11 at 7.58.19 PM (2).jpeg", altText: "Hoodie variant" } },
          { node: { url: "/Hoodies/WhatsApp Image 2026-06-11 at 7.58.19 PM (3).jpeg", altText: "Hoodie variant" } },
          { node: { url: "/Hoodies/WhatsApp Image 2026-06-11 at 7.58.20 PM.jpeg", altText: "Hoodie variant" } },
          { node: { url: "/Hoodies/WhatsApp Image 2026-06-11 at 7.58.20 PM (1).jpeg", altText: "Hoodie variant" } },
          { node: { url: "/Hoodies/WhatsApp Image 2026-06-11 at 7.58.20 PM (2).jpeg", altText: "Hoodie variant" } },
        ] 
      },
      variants: {
        edges: [
          { node: { id: "h-blue", title: "Blue", price: { amount: "2000.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Blue" }] } },
          { node: { id: "h-orange", title: "Orange", price: { amount: "2000.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Orange" }] } },
          { node: { id: "h-red", title: "Red", price: { amount: "2000.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Red" }] } },
          { node: { id: "h-navy", title: "Navy Blue", price: { amount: "2000.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Navy Blue" }] } },
          { node: { id: "h-green", title: "Green", price: { amount: "2000.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Green" }] } },
        ]
      },
      options: [{ name: "Color", values: ["Blue", "Orange", "Red", "Navy Blue", "Green"] }],
    },
  },
  {
    node: {
      id: "sports-tracksuits",
      title: "Sports tracksuits",
      handle: "sports-tracksuits",
      description: "Comfortable athletic tracksuits.",
      priceRange: { minVariantPrice: { amount: "3500.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Sport Track suits.jpg", altText: "Sports tracksuits" } }] },
      variants: {
        edges: [
          { node: { id: "ts-black", title: "Black", price: { amount: "3500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Black" }] } },
          { node: { id: "ts-navy", title: "Navy Blue", price: { amount: "3500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Navy Blue" }] } },
          { node: { id: "ts-grey", title: "Grey", price: { amount: "3500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Grey" }] } },
        ]
      },
      options: [{ name: "Color", values: ["Black", "Navy Blue", "Grey"] }],
    },
  },
  {
    node: {
      id: "leso-pair",
      title: "Leso pair",
      handle: "leso-pair",
      description: "Beautifully patterned pairs of Leso fabrics.",
      priceRange: { minVariantPrice: { amount: "550.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Lessos.jpg", altText: "Leso pair" } }] },
      variants: { edges: [{ node: { id: "lp-standard", title: "Standard", price: { amount: "550.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "safari-hats",
      title: "Safari hats",
      handle: "safari-hats",
      description: "Outdoor branded safari hats.",
      priceRange: { minVariantPrice: { amount: "1500.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Safari Hats.jpg", altText: "Safari hats" } }] },
      variants: { edges: [{ node: { id: "sh-standard", title: "Standard", price: { amount: "1500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "jerseys",
      title: "Jerseys",
      handle: "jerseys",
      description: "Custom sports jerseys.",
      priceRange: { minVariantPrice: { amount: "750.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Jerseys/WhatsApp Image 2026-06-11 at 7.58.18 PM.jpeg", altText: "Jerseys" } }] },
      variants: {
        edges: [
          { node: { id: "j-orange", title: "Orange", price: { amount: "750.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Orange" }] } },
          { node: { id: "j-blue", title: "Blue", price: { amount: "750.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Blue" }] } },
          { node: { id: "j-white", title: "White", price: { amount: "750.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "White" }] } },
          { node: { id: "j-green", title: "Green", price: { amount: "750.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Green" }] } },
          { node: { id: "j-red", title: "Red", price: { amount: "750.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Red" }] } },
          { node: { id: "j-grey", title: "Grey", price: { amount: "750.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Grey" }] } },
        ]
      },
      options: [{ name: "Color", values: ["Orange", "Blue", "White", "Green", "Red", "Grey"] }],
    },
  },
  {
    node: {
      id: "maasai-shukas",
      title: "Maasai Shukas",
      handle: "maasai-shukas",
      description: "Traditional Maasai Shukas, available branded or unbranded.",
      priceRange: { minVariantPrice: { amount: "850.00", currencyCode: "KES" } },
      images: { 
        edges: [
          { node: { url: "/Maasai shukas/WhatsApp Image 2026-06-11 at 7.58.25 PM (1).jpeg", altText: "Maasai Shukas" } },
          { node: { url: "/Maasai shukas/WhatsApp Image 2026-06-11 at 7.58.25 PM (2).jpeg", altText: "Maasai Shukas variant" } },
          { node: { url: "/Maasai shukas.jpg", altText: "Maasai Shukas variant" } },
          { node: { url: "/Shukas.jpg", altText: "Maasai Shukas variant" } },
        ] 
      },
      variants: {
        edges: [
          { node: { id: "ms-red-unbranded", title: "Red / Unbranded", price: { amount: "850.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Red" }, { name: "Branding", value: "Unbranded" }] } },
          { node: { id: "ms-red-branded", title: "Red / Branded", price: { amount: "1350.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Red" }, { name: "Branding", value: "Branded" }] } },
          { node: { id: "ms-blue-unbranded", title: "Blue / Unbranded", price: { amount: "850.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Blue" }, { name: "Branding", value: "Unbranded" }] } },
          { node: { id: "ms-blue-branded", title: "Blue / Branded", price: { amount: "1350.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Blue" }, { name: "Branding", value: "Branded" }] } },
          { node: { id: "ms-green-unbranded", title: "Green / Unbranded", price: { amount: "850.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Green" }, { name: "Branding", value: "Unbranded" }] } },
          { node: { id: "ms-green-branded", title: "Green / Branded", price: { amount: "1350.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Green" }, { name: "Branding", value: "Branded" }] } },
          { node: { id: "ms-white-unbranded", title: "White / Unbranded", price: { amount: "850.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "White" }, { name: "Branding", value: "Unbranded" }] } },
          { node: { id: "ms-white-branded", title: "White / Branded", price: { amount: "1350.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "White" }, { name: "Branding", value: "Branded" }] } },
          { node: { id: "ms-yellow-unbranded", title: "Yellow / Unbranded", price: { amount: "850.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Yellow" }, { name: "Branding", value: "Unbranded" }] } },
          { node: { id: "ms-yellow-branded", title: "Yellow / Branded", price: { amount: "1350.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Yellow" }, { name: "Branding", value: "Branded" }] } },
        ]
      },
      options: [
        { name: "Color", values: ["Red", "Blue", "Green", "White", "Yellow"] },
        { name: "Branding", values: ["Unbranded", "Branded"] },
      ],
    },
  },
];

function getBrandedPrice(basePrice: number): number {
  if (basePrice >= 20000) return basePrice + 3000;
  if (basePrice >= 10000) return basePrice + 1500;
  if (basePrice >= 3000) return basePrice + 500;
  if (basePrice >= 1000) return basePrice + 300;
  if (basePrice >= 500) return basePrice + 200;
  if (basePrice >= 200) return basePrice + 100;
  return basePrice + 50;
}

export const localProducts = rawProducts.map((product) => {
  const node = product.node;
  // If the product already has the Branding option, don't modify it
  if (node.options.some((opt: any) => opt.name === "Branding")) {
    return product;
  }

  // Create new options
  const newOptions = [...node.options, { name: "Branding", values: ["Unbranded", "Branded"] }];

  // Create new variants
  const newEdges = node.variants.edges.flatMap((edge: any) => {
    const originalNode = edge.node;
    const basePrice = parseFloat(originalNode.price.amount);
    const brandedPrice = getBrandedPrice(basePrice);

    return [
      {
        node: {
          ...originalNode,
          id: `${originalNode.id}-unbranded`,
          title: originalNode.title !== "Standard" ? `${originalNode.title} / Unbranded` : "Unbranded",
          price: {
            ...originalNode.price,
            amount: basePrice.toFixed(2),
          },
          selectedOptions: [...(originalNode.selectedOptions || []), { name: "Branding", value: "Unbranded" }],
        },
      },
      {
        node: {
          ...originalNode,
          id: `${originalNode.id}-branded`,
          title: originalNode.title !== "Standard" ? `${originalNode.title} / Branded` : "Branded",
          price: {
            ...originalNode.price,
            amount: brandedPrice.toFixed(2),
          },
          selectedOptions: [...(originalNode.selectedOptions || []), { name: "Branding", value: "Branded" }],
        },
      },
    ];
  });

  return {
    ...product,
    node: {
      ...node,
      options: newOptions,
      variants: {
        edges: newEdges,
      },
    },
  };
});
