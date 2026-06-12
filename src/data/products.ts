export const localProducts = [
  // --- Original Products ---
  {
    node: {
      id: "premium-caps",
      title: "Premium Caps",
      handle: "premium-caps",
      description: "High-quality premium caps.",
      priceRange: { minVariantPrice: { amount: "500.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Branded caps.jpg", altText: "Premium Caps" } }] },
      variants: {
        edges: [
          { node: { id: "cap-orange", title: "Orange", price: { amount: "500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Orange" }] } },
          { node: { id: "cap-red", title: "Red", price: { amount: "500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Red" }] } },
          { node: { id: "cap-neon-green", title: "Neon Green", price: { amount: "500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Neon Green" }] } },
          { node: { id: "cap-green", title: "Green", price: { amount: "500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Green" }] } },
        ]
      },
      options: [{ name: "Color", values: ["Orange", "Red", "Neon Green", "Green"] }],
    },
  },
  {
    node: {
      id: "premium-polo",
      title: "Premium Polo T-Shirt",
      handle: "premium-polo-t-shirt",
      description: "High quality premium polo t-shirt.",
      priceRange: { minVariantPrice: { amount: "1200.00", currencyCode: "KES" } },
      images: { 
        edges: [
          { node: { url: "/premium polo.jpg", altText: "Premium Polo" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-11 at 7.58.25 PM (3).jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-11 at 7.58.25 PM (4).jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-11 at 7.58.26 PM (1).jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-11 at 7.58.26 PM (2).jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-11 at 7.58.26 PM (3).jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-11 at 7.58.26 PM.jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-11 at 7.58.27 PM (1).jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-11 at 7.58.27 PM (2).jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-11 at 7.58.27 PM.jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-11 at 7.59.11 PM (2).jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-11 at 7.59.11 PM (3).jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-12 at 4.16.16 PM.jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-12 at 4.16.17 PM (1).jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-12 at 4.16.17 PM (2).jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-12 at 4.16.17 PM (3).jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-12 at 4.16.17 PM.jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-12 at 4.16.18 PM (1).jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-12 at 4.16.18 PM (2).jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-12 at 4.16.18 PM (3).jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-12 at 4.16.18 PM.jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-12 at 4.16.19 PM (1).jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-12 at 4.16.19 PM (2).jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-12 at 4.16.19 PM (3).jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-12 at 4.16.19 PM (4).jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-12 at 4.16.19 PM.jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-12 at 4.16.20 PM (1).jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-12 at 4.16.20 PM (2).jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-12 at 4.16.20 PM (3).jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-12 at 4.16.20 PM.jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-12 at 4.16.21 PM (1).jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-12 at 4.16.21 PM (2).jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-12 at 4.16.21 PM (3).jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-12 at 4.16.21 PM.jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-12 at 4.16.22 PM (1).jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-12 at 4.16.22 PM (2).jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-12 at 4.16.22 PM (3).jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-12 at 4.16.22 PM.jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-12 at 4.16.23 PM (1).jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-12 at 4.16.23 PM (2).jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-12 at 4.16.23 PM (3).jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-12 at 4.16.23 PM (4).jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-12 at 4.16.23 PM.jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-12 at 4.16.24 PM (1).jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-12 at 4.16.24 PM (2).jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-12 at 4.16.24 PM (3).jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-12 at 4.16.24 PM.jpeg", altText: "Premium Polo variant" } },
          { node: { url: "/Premium Polo/WhatsApp Image 2026-06-12 at 4.16.25 PM.jpeg", altText: "Premium Polo variant" } },
        ] 
      },
      variants: { 
        edges: [
          { node: { id: "pp-navy", title: "Navy Blue", price: { amount: "1200.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Navy Blue" }] } },
          { node: { id: "pp-black", title: "Black", price: { amount: "1200.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Black" }] } },
          { node: { id: "pp-white", title: "White", price: { amount: "1200.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "White" }] } },
          { node: { id: "pp-red", title: "Red", price: { amount: "1200.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Red" }] } },
          { node: { id: "pp-royal", title: "Royal Blue", price: { amount: "1200.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Royal Blue" }] } },
          { node: { id: "pp-orange", title: "Orange", price: { amount: "1200.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Orange" }] } },
          { node: { id: "pp-green", title: "Green", price: { amount: "1200.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Green" }] } },
        ] 
      },
      options: [{ name: "Color", values: ["Navy Blue", "Black", "White", "Red", "Royal Blue", "Orange", "Green"] }],
    },
  },
  {
    node: {
      id: "round-neck",
      title: "Round Neck T-Shirt",
      handle: "round-neck-t-shirt",
      description: "Comfortable round neck t-shirt.",
      priceRange: { minVariantPrice: { amount: "800.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/round neck.jpg", altText: "Round Neck" } }] },
      variants: { 
        edges: [
          { node: { id: "rn-maroon", title: "Maroon", price: { amount: "800.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Maroon" }] } },
          { node: { id: "rn-navy", title: "Navy Blue", price: { amount: "800.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Navy Blue" }] } },
          { node: { id: "rn-blue", title: "Blue", price: { amount: "800.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Blue" }] } },
          { node: { id: "rn-green", title: "Green", price: { amount: "800.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Green" }] } },
          { node: { id: "rn-yellow", title: "Yellow", price: { amount: "800.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Yellow" }] } },
          { node: { id: "rn-black", title: "Black", price: { amount: "800.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Black" }] } },
        ] 
      },
      options: [{ name: "Color", values: ["Maroon", "Navy Blue", "Blue", "Green", "Yellow", "Black"] }],
    },
  },
  {
    node: {
      id: "safety-wear",
      title: "Reflector Safety Wear",
      handle: "reflector-safety-wear",
      description: "High-visibility safety gear.",
      priceRange: { minVariantPrice: { amount: "1500.00", currencyCode: "KES" } },
      images: { 
        edges: [
          { node: { url: "/safetywear.jpg", altText: "Safety Wear" } },
          { node: { url: "/Reflectors/WhatsApp Image 2026-06-11 at 7.59.09 PM (2).jpeg", altText: "Safety Wear variant" } },
        ] 
      },
      variants: { 
        edges: [
          { node: { id: "sw-neon-orange", title: "Neon Orange", price: { amount: "1500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Neon Orange" }] } },
          { node: { id: "sw-neon-green", title: "Neon Green", price: { amount: "1500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Neon Green" }] } },
          { node: { id: "sw-neon-blue", title: "Neon Blue", price: { amount: "1500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Neon Blue" }] } },
        ] 
      },
      options: [{ name: "Color", values: ["Neon Orange", "Neon Green", "Neon Blue"] }],
    },
  },
  {
    node: {
      id: "hoodie",
      title: "Branded Hoodie",
      handle: "branded-hoodie",
      description: "Warm and stylish branded hoodies.",
      priceRange: { minVariantPrice: { amount: "2500.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/brandedhoodies.jpg", altText: "Hoodie" } }] },
      variants: { edges: [{ node: { id: "p5", title: "Standard", price: { amount: "2500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "puff-jackets",
      title: "Puff Jackets",
      handle: "puff-jackets",
      description: "Trendy puff jackets.",
      priceRange: { minVariantPrice: { amount: "2000.00", currencyCode: "KES" } },
      images: { 
        edges: [
          { node: { url: "/brandedhalfjacket.jpg", altText: "Puff Jacket" } },
          { node: { url: "/Half jackets/WhatsApp Image 2026-06-11 at 7.59.07 PM (4).jpeg", altText: "Puff Jacket variant" } },
          { node: { url: "/Half jackets/WhatsApp Image 2026-06-11 at 7.59.08 PM (1).jpeg", altText: "Puff Jacket variant" } },
          { node: { url: "/Half jackets/WhatsApp Image 2026-06-11 at 7.59.08 PM (2).jpeg", altText: "Puff Jacket variant" } },
          { node: { url: "/Half jackets/WhatsApp Image 2026-06-11 at 7.59.08 PM (3).jpeg", altText: "Puff Jacket variant" } },
          { node: { url: "/Half jackets/WhatsApp Image 2026-06-11 at 7.59.08 PM.jpeg", altText: "Puff Jacket variant" } },
        ] 
      },
      variants: { 
        edges: [
          { node: { id: "pj-pink", title: "Pink", price: { amount: "2000.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Pink" }] } },
          { node: { id: "pj-blue", title: "Blue", price: { amount: "2000.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Blue" }] } },
          { node: { id: "pj-yellow", title: "Yellow", price: { amount: "2000.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Yellow" }] } },
          { node: { id: "pj-white", title: "White", price: { amount: "2000.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "White" }] } },
        ] 
      },
      options: [{ name: "Color", values: ["Pink", "Blue", "Yellow", "White"] }],
    },
  },

  // --- New Products ---
  {
    node: {
      id: "diaries-notebooks",
      title: "Diaries and Notebooks",
      handle: "diaries-notebooks",
      description: "Custom branded diaries and notebooks for corporate gifting and personal use.",
      priceRange: { minVariantPrice: { amount: "500.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Diaries and notebooks.jpg", altText: "Diaries and Notebooks" } }] },
      variants: { edges: [{ node: { id: "v1", title: "Standard", price: { amount: "500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "gift-set",
      title: "Gift Set",
      handle: "gift-set",
      description: "Curated gift sets perfect for clients and events.",
      priceRange: { minVariantPrice: { amount: "2000.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Gift set.jpg", altText: "Gift Set" } }] },
      variants: { edges: [{ node: { id: "v2", title: "Standard", price: { amount: "2000.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "glasses-branding",
      title: "Glasses Branding",
      handle: "glasses-branding",
      description: "Custom branding on glassware for events and corporate identity.",
      priceRange: { minVariantPrice: { amount: "300.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Branded glasses.jpg", altText: "Glasses Branding" } }] },
      variants: { edges: [{ node: { id: "v3", title: "Standard", price: { amount: "300.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "school-uniform-branding",
      title: "School Uniform Branding",
      handle: "school-uniform-branding",
      description: "Professional embroidery and printing for school uniforms.",
      priceRange: { minVariantPrice: { amount: "100.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/School Uniforms.jpg", altText: "School Uniform Branding" } }] },
      variants: { edges: [{ node: { id: "v4", title: "Standard", price: { amount: "100.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "campaign-materials",
      title: "Campaign Materials",
      handle: "campaign-materials",
      description: "High-visibility materials for campaigns and events.",
      priceRange: { minVariantPrice: { amount: "1000.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Campaign materials.jpg", altText: "Campaign Materials" } }] },
      variants: { edges: [{ node: { id: "v5", title: "Standard", price: { amount: "1000.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "branded-water-bottles",
      title: "Branded Water Bottles",
      handle: "branded-water-bottles",
      description: "High-quality, durable branded water bottles.",
      priceRange: { minVariantPrice: { amount: "800.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/brandedwaterbottles.jpg", altText: "Branded Water Bottles" } }] },
      variants: { edges: [{ node: { id: "v6", title: "Standard", price: { amount: "800.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "rollup-x-banners",
      title: "Rollup/X Banners",
      handle: "rollup-x-banners",
      description: "Portable and professional banner displays.",
      priceRange: { minVariantPrice: { amount: "3500.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/banners.jpg", altText: "Rollup/X Banners" } }] },
      variants: { edges: [{ node: { id: "v7", title: "Standard", price: { amount: "3500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "tshirt-branding",
      title: "Tshirt Branding",
      handle: "tshirt-branding",
      description: "Custom printing and embroidery on T-shirts.",
      priceRange: { minVariantPrice: { amount: "600.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/tshirt branding.jpg", altText: "Tshirt Branding" } }] },
      variants: { edges: [{ node: { id: "v8", title: "Standard", price: { amount: "600.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "teardrops",
      title: "Teardrops",
      handle: "teardrops",
      description: "Dynamic teardrop banners for outdoor advertising.",
      priceRange: { minVariantPrice: { amount: "4000.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/teardrops.jpg", altText: "Teardrops" } }] },
      variants: { edges: [{ node: { id: "v9", title: "Standard", price: { amount: "4000.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  // --- Newest Additions ---
  {
    node: {
      id: "biro-pens",
      title: "Biro Pens Branding",
      handle: "biro-pens-branding",
      description: "Custom branding on quality biro pens.",
      priceRange: { minVariantPrice: { amount: "50.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Biro pens branding.jpg", altText: "Biro Pens Branding" } }] },
      variants: { edges: [{ node: { id: "v10", title: "Standard", price: { amount: "50.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "wooden-crafts",
      title: "Wooden Crafts",
      handle: "wooden-crafts",
      description: "Handcrafted and custom branded wooden items.",
      priceRange: { minVariantPrice: { amount: "1500.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Wooden Crafts.jpg", altText: "Wooden Crafts" } }] },
      variants: { edges: [{ node: { id: "v11", title: "Standard", price: { amount: "1500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "maasai-fleece",
      title: "Maasai Fleece",
      handle: "maasai-fleece",
      description: "High-quality branded Maasai fleece.",
      priceRange: { minVariantPrice: { amount: "2200.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Maasai fleece.jpg", altText: "Maasai Fleece" } }] },
      variants: { edges: [{ node: { id: "v12", title: "Standard", price: { amount: "2200.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "vehicle-branding",
      title: "Vehicle Branding",
      handle: "vehicle-branding",
      description: "Professional vehicle branding services.",
      priceRange: { minVariantPrice: { amount: "5000.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Vehicle branding.jpg", altText: "Vehicle Branding" } }] },
      variants: { edges: [{ node: { id: "v13", title: "Standard", price: { amount: "5000.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "media-banners",
      title: "Media Banners",
      handle: "media-banners",
      description: "Large format media banners for events.",
      priceRange: { minVariantPrice: { amount: "3000.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Media banners.jpg", altText: "Media Banners" } }] },
      variants: { edges: [{ node: { id: "v14", title: "Standard", price: { amount: "3000.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  // --- Even Newer Additions ---
  {
    node: {
      id: "imported-polo",
      title: "Imported Polo Shirt",
      handle: "imported-polo-shirt",
      description: "Premium imported polo shirts.",
      priceRange: { minVariantPrice: { amount: "1800.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Imported polo shirt.jpeg", altText: "Imported Polo Shirt" } }] },
      variants: { edges: [{ node: { id: "v15", title: "Standard", price: { amount: "1800.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "broadbase-roll-up",
      title: "Broadbase Roll-up Banners",
      handle: "broadbase-roll-up-banners",
      description: "Stable and professional broadbase roll-up banners.",
      priceRange: { minVariantPrice: { amount: "4500.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Broadbase Roll-up banners.jpg", altText: "Broadbase Roll-up Banners" } }] },
      variants: { edges: [{ node: { id: "v16", title: "Standard", price: { amount: "4500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "corporate-gifting",
      title: "Corporate Giftings",
      handle: "corporate-giftings",
      description: "Professional corporate gifting solutions.",
      priceRange: { minVariantPrice: { amount: "3000.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Corporate giftings.jpg", altText: "Corporate Giftings" } }] },
      variants: { edges: [{ node: { id: "v17", title: "Standard", price: { amount: "3000.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "stickers",
      title: "Stickers",
      handle: "stickers",
      description: "Custom branded stickers for branding.",
      priceRange: { minVariantPrice: { amount: "20.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Srickers.jpg", altText: "Stickers" } }] },
      variants: { edges: [{ node: { id: "v18", title: "Standard", price: { amount: "20.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  // --- Latest Store Additions ---
  {
    node: {
      id: "dry-fit-round-neck",
      title: "Dry fit round neck t-shirt",
      handle: "dry-fit-round-neck-t-shirt",
      description: "High-performance dry fit round neck t-shirts.",
      priceRange: { minVariantPrice: { amount: "1000.00", currencyCode: "KES" } },
      images: { 
        edges: [
          { node: { url: "/Dry fit round neck.jpg", altText: "Dry fit round neck t-shirt" } },
          { node: { url: "/Dry fit round neck/WhatsApp Image 2026-06-11 at 7.59.06 PM (1).jpeg", altText: "Dry fit round neck t-shirt variant" } },
          { node: { url: "/Dry fit round neck/WhatsApp Image 2026-06-11 at 7.59.06 PM.jpeg", altText: "Dry fit round neck t-shirt variant" } },
          { node: { url: "/Dry fit round neck/WhatsApp Image 2026-06-11 at 7.59.07 PM (1).jpeg", altText: "Dry fit round neck t-shirt variant" } },
          { node: { url: "/Dry fit round neck/WhatsApp Image 2026-06-11 at 7.59.07 PM (2).jpeg", altText: "Dry fit round neck t-shirt variant" } },
          { node: { url: "/Dry fit round neck/WhatsApp Image 2026-06-11 at 7.59.07 PM (3).jpeg", altText: "Dry fit round neck t-shirt variant" } },
          { node: { url: "/Dry fit round neck/WhatsApp Image 2026-06-11 at 7.59.07 PM.jpeg", altText: "Dry fit round neck t-shirt variant" } },
        ] 
      },
      variants: { 
        edges: [
          { node: { id: "df-blue", title: "Blue", price: { amount: "1000.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Blue" }] } },
          { node: { id: "df-orange", title: "Orange", price: { amount: "1000.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Orange" }] } },
          { node: { id: "df-black", title: "Black", price: { amount: "1000.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Black" }] } },
          { node: { id: "df-white", title: "White", price: { amount: "1000.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "White" }] } },
          { node: { id: "df-green", title: "Green", price: { amount: "1000.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Green" }] } },
        ] 
      },
      options: [{ name: "Color", values: ["Blue", "Orange", "Black", "White", "Green"] }],
    },
  },
  {
    node: {
      id: "shukas",
      title: "Maasai Shukas",
      handle: "shukas",
      description: "Traditional Maasai Shukas.",
      priceRange: { minVariantPrice: { amount: "1500.00", currencyCode: "KES" } },
      images: { 
        edges: [
          { node: { url: "/Shukas.jpg", altText: "Maasai Shukas" } },
          { node: { url: "/Maasai shukas/WhatsApp Image 2026-06-11 at 7.58.14 PM.jpeg", altText: "Maasai Shukas variant" } },
          { node: { url: "/Maasai shukas/WhatsApp Image 2026-06-11 at 7.58.15 PM (1).jpeg", altText: "Maasai Shukas variant" } },
          { node: { url: "/Maasai shukas/WhatsApp Image 2026-06-11 at 7.58.15 PM (2).jpeg", altText: "Maasai Shukas variant" } },
          { node: { url: "/Maasai shukas/WhatsApp Image 2026-06-11 at 7.58.15 PM (3).jpeg", altText: "Maasai Shukas variant" } },
          { node: { url: "/Maasai shukas/WhatsApp Image 2026-06-11 at 7.58.15 PM (4).jpeg", altText: "Maasai Shukas variant" } },
          { node: { url: "/Maasai shukas/WhatsApp Image 2026-06-11 at 7.58.15 PM.jpeg", altText: "Maasai Shukas variant" } },
          { node: { url: "/Maasai shukas/WhatsApp Image 2026-06-11 at 7.58.25 PM (1).jpeg", altText: "Maasai Shukas variant" } },
          { node: { url: "/Maasai shukas/WhatsApp Image 2026-06-11 at 7.58.25 PM (2).jpeg", altText: "Maasai Shukas variant" } },
        ] 
      },
      variants: { 
        edges: [
          { node: { id: "sh-red", title: "Red", price: { amount: "1500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Red" }] } },
          { node: { id: "sh-blue", title: "Blue", price: { amount: "1500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Blue" }] } },
          { node: { id: "sh-green", title: "Green", price: { amount: "1500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Green" }] } },
          { node: { id: "sh-white", title: "White", price: { amount: "1500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "White" }] } },
          { node: { id: "sh-yellow", title: "Yellow", price: { amount: "1500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Yellow" }] } },
        ] 
      },
      options: [{ name: "Color", values: ["Red", "Blue", "Green", "White", "Yellow"] }],
    },
  },
  {
    node: {
      id: "hoodies-new",
      title: "Hoodies",
      handle: "hoodies",
      description: "Premium quality hoodies.",
      priceRange: { minVariantPrice: { amount: "2800.00", currencyCode: "KES" } },
      images: { 
        edges: [
          { node: { url: "/Hoodies.jpg", altText: "Hoodies" } },
          { node: { url: "/Hoodies/WhatsApp Image 2026-06-11 at 7.58.19 PM (1).jpeg", altText: "Hoodie variant" } },
          { node: { url: "/Hoodies/WhatsApp Image 2026-06-11 at 7.58.19 PM (2).jpeg", altText: "Hoodie variant" } },
          { node: { url: "/Hoodies/WhatsApp Image 2026-06-11 at 7.58.19 PM (3).jpeg", altText: "Hoodie variant" } },
          { node: { url: "/Hoodies/WhatsApp Image 2026-06-11 at 7.58.19 PM.jpeg", altText: "Hoodie variant" } },
          { node: { url: "/Hoodies/WhatsApp Image 2026-06-11 at 7.58.20 PM (1).jpeg", altText: "Hoodie variant" } },
          { node: { url: "/Hoodies/WhatsApp Image 2026-06-11 at 7.58.20 PM (2).jpeg", altText: "Hoodie variant" } },
          { node: { url: "/Hoodies/WhatsApp Image 2026-06-11 at 7.58.20 PM.jpeg", altText: "Hoodie variant" } },
        ] 
      },
      variants: { 
        edges: [
          { node: { id: "h-blue", title: "Blue", price: { amount: "2800.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Blue" }] } },
          { node: { id: "h-orange", title: "Orange", price: { amount: "2800.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Orange" }] } },
          { node: { id: "h-red", title: "Red", price: { amount: "2800.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Red" }] } },
          { node: { id: "h-navy", title: "Navy Blue", price: { amount: "2800.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Navy Blue" }] } },
          { node: { id: "h-green", title: "Green", price: { amount: "2800.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Green" }] } },
        ] 
      },
      options: [{ name: "Color", values: ["Blue", "Orange", "Red", "Navy Blue", "Green"] }],
    },
  },
  {
    node: {
      id: "sport-tracksuits",
      title: "Sport Tracksuits",
      handle: "sport-tracksuits",
      description: "Comfortable and stylish sport tracksuits.",
      priceRange: { minVariantPrice: { amount: "3500.00", currencyCode: "KES" } },
      images: { 
        edges: [
          { node: { url: "/Sport Track suits.jpg", altText: "Sport Tracksuits" } },
          { node: { url: "/Track suits/WhatsApp Image 2026-06-11 at 7.58.27 PM (3).jpeg", altText: "Sport Tracksuits variant" } },
          { node: { url: "/Track suits/WhatsApp Image 2026-06-11 at 7.58.27 PM (4).jpeg", altText: "Sport Tracksuits variant" } },
          { node: { url: "/Track suits/WhatsApp Image 2026-06-11 at 7.58.28 PM.jpeg", altText: "Sport Tracksuits variant" } },
        ] 
      },
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
      id: "lessos",
      title: "Lessos",
      handle: "lessos",
      description: "Traditional Lessos with vibrant prints.",
      priceRange: { minVariantPrice: { amount: "1200.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Lessos.jpg", altText: "Lessos" } }] },
      variants: { edges: [{ node: { id: "v23", title: "Standard", price: { amount: "1200.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "safari-hat",
      title: "Safari Hat",
      handle: "safari-hat",
      description: "Durable and stylish Safari Hats.",
      priceRange: { minVariantPrice: { amount: "1200.00", currencyCode: "KES" } },
      images: { edges: [{ node: { url: "/Safari Hats.jpg", altText: "Safari Hat" } }] },
      variants: { edges: [{ node: { id: "v24", title: "Standard", price: { amount: "1200.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [] } }] },
      options: [],
    },
  },
  {
    node: {
      id: "jerseys",
      title: "Jerseys",
      handle: "jerseys",
      description: "Custom branded sports jerseys.",
      priceRange: { minVariantPrice: { amount: "1500.00", currencyCode: "KES" } },
      images: { 
        edges: [
          { node: { url: "/Jerseys/WhatsApp Image 2026-06-11 at 7.58.16 PM (1).jpeg", altText: "Jerseys variant" } },
          { node: { url: "/Jerseys/WhatsApp Image 2026-06-11 at 7.58.16 PM.jpeg", altText: "Jerseys variant" } },
          { node: { url: "/Jerseys/WhatsApp Image 2026-06-11 at 7.58.17 PM (1).jpeg", altText: "Jerseys variant" } },
          { node: { url: "/Jerseys/WhatsApp Image 2026-06-11 at 7.58.17 PM.jpeg", altText: "Jerseys variant" } },
          { node: { url: "/Jerseys/WhatsApp Image 2026-06-11 at 7.58.18 PM (1).jpeg", altText: "Jerseys variant" } },
          { node: { url: "/Jerseys/WhatsApp Image 2026-06-11 at 7.58.18 PM (2).jpeg", altText: "Jerseys variant" } },
          { node: { url: "/Jerseys/WhatsApp Image 2026-06-11 at 7.58.18 PM (3).jpeg", altText: "Jerseys variant" } },
          { node: { url: "/Jerseys/WhatsApp Image 2026-06-11 at 7.58.18 PM.jpeg", altText: "Jerseys variant" } },
        ] 
      },
      variants: { 
        edges: [
          { node: { id: "j-orange", title: "Orange", price: { amount: "1500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Orange" }] } },
          { node: { id: "j-blue", title: "Blue", price: { amount: "1500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Blue" }] } },
          { node: { id: "j-white", title: "White", price: { amount: "1500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "White" }] } },
          { node: { id: "j-green", title: "Green", price: { amount: "1500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Green" }] } },
          { node: { id: "j-red", title: "Red", price: { amount: "1500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Red" }] } },
          { node: { id: "j-grey", title: "Grey", price: { amount: "1500.00", currencyCode: "KES" }, availableForSale: true, selectedOptions: [{ name: "Color", value: "Grey" }] } },
        ] 
      },
      options: [{ name: "Color", values: ["Orange", "Blue", "White", "Green", "Red", "Grey"] }],
    },
  },
];
