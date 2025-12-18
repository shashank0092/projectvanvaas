export interface Product {
  id: number;
  name: string;
  artisan: string;
  artisanId: number;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  badge: "Handcrafted" | "Limited Piece" | "Bestseller" | "New Arrival";
  category: string;
  craftType: string;
  description: string;
  materials: string[];
  dimensions?: string;
  weight?: string;
  careInstructions: string;
  artisanStory: string;
  impactStatement: string;
  inStock: boolean;
  stockCount: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Handwoven Silk Saree - Royal Blue",
    artisan: "Lakshmi Devi",
    artisanId: 1,
    price: 4500,
    originalPrice: 5500,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600",
      "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600",
    ],
    badge: "Handcrafted",
    category: "Textile",
    craftType: "Handwoven",
    description:
      "This exquisite silk saree is handwoven using traditional techniques passed down through generations. The royal blue color symbolizes dignity and elegance, while the intricate golden zari work adds a touch of royalty.",
    materials: ["Pure Silk", "Golden Zari Thread", "Natural Dyes"],
    dimensions: "6.5 meters length, 1.2 meters width",
    weight: "450 grams",
    careInstructions:
      "Dry clean only. Store in a cotton cloth away from direct sunlight. Iron on low heat with a pressing cloth.",
    artisanStory:
      "Lakshmi Devi has been weaving silk sarees for over 25 years. Coming from a family of traditional weavers in Varanasi, she learned the craft from her mother and grandmother.",
    impactStatement:
      "Your purchase supports Lakshmi Devi and her family of four, providing sustainable income and preserving the ancient art of silk weaving.",
    inStock: true,
    stockCount: 3,
  },
  {
    id: 2,
    name: "Terracotta Diya Set - Festival Collection",
    artisan: "Ramesh Kumar",
    artisanId: 2,
    price: 850,
    image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=600",
    images: [
      "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=600",
      "https://images.unsplash.com/photo-1604422999920-0547d8b5a323?w=600",
    ],
    badge: "Limited Piece",
    category: "Clay",
    craftType: "Molded",
    description:
      "A beautiful set of 12 handcrafted terracotta diyas, perfect for Diwali celebrations or home décor. Each diya is uniquely shaped and painted with traditional motifs.",
    materials: ["Natural Clay", "Eco-friendly Paints", "Gold Accents"],
    dimensions: "Each diya: 3 inches diameter",
    weight: "50 grams per diya",
    careInstructions:
      "Handle with care. Clean with dry cloth. Keep away from moisture.",
    artisanStory:
      "Ramesh Kumar is a third-generation potter from Rajasthan. He specializes in creating festival items that bring joy and light to homes.",
    impactStatement:
      "This purchase helps Ramesh continue his family's 60-year legacy of pottery making and supports his village community.",
    inStock: true,
    stockCount: 15,
  },
  {
    id: 3,
    name: "Wooden Elephant Carving - Rosewood",
    artisan: "Suresh Vishwakarma",
    artisanId: 3,
    price: 2200,
    originalPrice: 2800,
    image: "https://images.unsplash.com/photo-1584727638096-042c45049ebe?w=600",
    images: [
      "https://images.unsplash.com/photo-1584727638096-042c45049ebe?w=600",
      "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=600",
    ],
    badge: "Handcrafted",
    category: "Wood",
    craftType: "Carved",
    description:
      "An intricately carved wooden elephant made from sustainably sourced rosewood. This piece showcases the exceptional skill of Indian wood carvers and represents wisdom, strength, and good fortune.",
    materials: ["Rosewood", "Natural Polish"],
    dimensions: "8 inches height, 6 inches width",
    weight: "800 grams",
    careInstructions:
      "Dust regularly with soft cloth. Apply wood polish twice a year. Keep away from direct sunlight and moisture.",
    artisanStory:
      "Suresh Vishwakarma comes from a family of master woodworkers in Karnataka. Each piece takes him 3-4 days to complete.",
    impactStatement:
      "Your purchase enables Suresh to train young artisans in this dying art form and provides education for his two children.",
    inStock: true,
    stockCount: 5,
  },
  {
    id: 4,
    name: "Madhubani Painting - Tree of Life",
    artisan: "Sita Kumari",
    artisanId: 4,
    price: 3500,
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600",
    images: [
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600",
      "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?w=600",
    ],
    badge: "Limited Piece",
    category: "Paintings",
    craftType: "Hand Painted",
    description:
      "A stunning Madhubani painting depicting the sacred Tree of Life. This artwork uses natural colors and traditional brushwork techniques from Bihar's Mithila region.",
    materials: [
      "Handmade Paper",
      "Natural Pigments",
      "Bamboo Brush",
      "Nib Pen",
    ],
    dimensions: "24 x 18 inches",
    weight: "200 grams",
    careInstructions:
      "Frame behind glass. Keep away from direct sunlight. Do not expose to moisture.",
    artisanStory:
      "Sita Kumari learned Madhubani art from her grandmother in Jitwarpur village. She has won multiple state awards for preserving this 2500-year-old art form.",
    impactStatement:
      "This purchase supports a women's cooperative of 15 artists and helps preserve the ancient Madhubani tradition.",
    inStock: true,
    stockCount: 2,
  },
  {
    id: 5,
    name: "Brass Temple Bell - Handcrafted",
    artisan: "Mohan Lal",
    artisanId: 5,
    price: 1800,
    image: "https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=600",
    images: [
      "https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=600",
    ],
    badge: "Handcrafted",
    category: "Metal",
    craftType: "Cast",
    description:
      "A beautifully crafted brass temple bell with a pure, resonant sound. Each bell is individually cast and tuned to produce the perfect spiritual tone.",
    materials: ["Pure Brass", "Copper Alloy"],
    dimensions: "6 inches height, 4 inches diameter",
    weight: "600 grams",
    careInstructions:
      "Clean with lemon and salt paste for shine. Rinse and dry thoroughly. Apply brass polish monthly.",
    artisanStory:
      "Mohan Lal is a fourth-generation brass artisan from Moradabad. His family has been creating sacred items for temples across India.",
    impactStatement:
      "Your purchase helps preserve the traditional brass-making techniques and supports Mohan's family business.",
    inStock: true,
    stockCount: 8,
  },
  {
    id: 6,
    name: "Block Print Cushion Cover Set",
    artisan: "Fatima Begum",
    artisanId: 6,
    price: 650,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600",
    ],
    badge: "Handcrafted",
    category: "Textile",
    craftType: "Block Print",
    description:
      "A set of 2 beautiful hand block printed cushion covers featuring traditional Rajasthani patterns. Made from 100% cotton with natural dyes.",
    materials: ["100% Cotton", "Natural Vegetable Dyes", "Wooden Block Print"],
    dimensions: "18 x 18 inches each",
    weight: "150 grams per cover",
    careInstructions:
      "Machine wash cold separately. Do not bleach. Tumble dry low. Iron on medium heat.",
    artisanStory:
      "Fatima Begum leads a self-help group of 20 women artisans in Jaipur who specialize in block printing, an art form over 500 years old.",
    impactStatement:
      "This purchase empowers rural women artisans and provides them with sustainable livelihoods.",
    inStock: true,
    stockCount: 20,
  },
  {
    id: 7,
    name: "Dhokra Tribal Horse",
    artisan: "Biswanath Mahato",
    artisanId: 7,
    price: 2800,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600"],
    badge: "Limited Piece",
    category: "Metal",
    craftType: "Cast",
    description:
      "An exquisite Dhokra brass horse figurine made using the lost-wax casting technique. This 4000-year-old tribal art form creates unique, one-of-a-kind pieces.",
    materials: ["Brass", "Beeswax", "Clay Mold"],
    dimensions: "7 inches height, 5 inches length",
    weight: "450 grams",
    careInstructions:
      "Dust with soft cloth. The natural patina adds character - avoid polishing.",
    artisanStory:
      "Biswanath Mahato belongs to the Ghadwa community in West Bengal. His ancestors have practiced Dhokra art for over 15 generations.",
    impactStatement:
      "Your purchase helps revive this endangered art form and supports tribal communities in rural Bengal.",
    inStock: true,
    stockCount: 4,
  },
  {
    id: 8,
    name: "Kashmiri Papier Mâché Box",
    artisan: "Abdul Rashid",
    artisanId: 8,
    price: 1200,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=600",
    images: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=600",
    ],
    badge: "Handcrafted",
    category: "Paper Craft",
    craftType: "Hand Painted",
    description:
      "A beautifully hand-painted papier mâché jewelry box featuring traditional Kashmiri floral motifs. Each piece takes over a week to complete.",
    materials: [
      "Recycled Paper",
      "Natural Lacquer",
      "Gold Leaf",
      "Natural Pigments",
    ],
    dimensions: "6 x 4 x 3 inches",
    weight: "200 grams",
    careInstructions:
      "Keep away from water. Dust gently. Store in a cool, dry place.",
    artisanStory:
      "Abdul Rashid is a master artisan from Srinagar who has devoted 40 years to perfecting the intricate art of Kashmiri papier mâché.",
    impactStatement:
      "This purchase supports artisan families in Kashmir affected by political unrest and helps preserve their cultural heritage.",
    inStock: true,
    stockCount: 6,
  },
  {
    id: 9,
    name: "Warli Art Wall Hanging",
    artisan: "Jivya Soma Mashe",
    artisanId: 9,
    price: 1500,
    image: "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?w=600",
    images: [
      "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?w=600",
    ],
    badge: "Bestseller",
    category: "Paintings",
    craftType: "Hand Painted",
    description:
      "An authentic Warli tribal painting on canvas depicting village life and harvest celebrations. This minimalist art form uses only white paint on a mud-colored background.",
    materials: ["Canvas", "Rice Paste Paint", "Natural Earth Pigments"],
    dimensions: "18 x 12 inches",
    weight: "300 grams",
    careInstructions:
      "Frame recommended. Keep away from direct sunlight and moisture.",
    artisanStory:
      "Jivya Soma Mashe is from the Warli tribe of Maharashtra. His work has been exhibited internationally, bringing global recognition to this indigenous art form.",
    impactStatement:
      "Your purchase supports tribal education programs and helps preserve the Warli cultural identity.",
    inStock: true,
    stockCount: 7,
  },
  {
    id: 10,
    name: "Chikankari Embroidered Kurta",
    artisan: "Nasreen Bano",
    artisanId: 10,
    price: 2500,
    image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600",
    images: [
      "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600",
    ],
    badge: "New Arrival",
    category: "Textile",
    craftType: "Embroidered",
    description:
      "A stunning white cotton kurta with intricate Chikankari hand embroidery from Lucknow. Features delicate shadow work and fine needlework.",
    materials: ["100% Cotton", "White Thread", "Hand Embroidery"],
    dimensions: "Available in S, M, L, XL",
    weight: "250 grams",
    careInstructions:
      "Hand wash in cold water. Do not wring. Dry in shade. Iron on reverse side.",
    artisanStory:
      "Nasreen Bano is a master Chikankari embroiderer from Lucknow. She trains young women in this 400-year-old Mughal art form.",
    impactStatement:
      "This purchase supports women's empowerment initiatives and preserves Lucknow's rich embroidery heritage.",
    inStock: true,
    stockCount: 10,
  },
  {
    id: 11,
    name: "Blue Pottery Vase - Jaipur",
    artisan: "Kripal Singh",
    artisanId: 11,
    price: 1800,
    originalPrice: 2200,
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600",
    images: [
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600",
    ],
    badge: "Handcrafted",
    category: "Clay",
    craftType: "Glazed",
    description:
      "A stunning blue pottery vase featuring the signature turquoise and cobalt blue colors of Jaipur. Made using quartz stone powder and not clay.",
    materials: ["Quartz Stone Powder", "Multani Mitti", "Gum", "Cobalt Oxide"],
    dimensions: "10 inches height, 5 inches diameter",
    weight: "700 grams",
    careInstructions:
      "Wipe with damp cloth. Avoid harsh chemicals. Handle with care - fragile.",
    artisanStory:
      "Kripal Singh learned blue pottery from Persian artisans who settled in Jaipur. He is one of the few masters keeping this tradition alive.",
    impactStatement:
      "Your purchase helps sustain this rare craft and supports artisan training programs in Rajasthan.",
    inStock: true,
    stockCount: 4,
  },
  {
    id: 12,
    name: "Handloom Pashmina Shawl",
    artisan: "Ghulam Ahmad",
    artisanId: 12,
    price: 8500,
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600",
    images: [
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600",
    ],
    badge: "Limited Piece",
    category: "Textile",
    craftType: "Handwoven",
    description:
      "A luxurious pure Pashmina shawl handwoven in Kashmir. Made from the finest Changthangi goat wool, each shawl takes months to complete.",
    materials: ["100% Pure Pashmina Wool", "Natural Dyes"],
    dimensions: "80 x 28 inches",
    weight: "150 grams",
    careInstructions:
      "Dry clean only. Store folded with naphthalene balls. Air occasionally.",
    artisanStory:
      "Ghulam Ahmad is a master weaver from Srinagar whose family has been creating Pashmina for seven generations. His shawls are true works of art.",
    impactStatement:
      "This premium purchase directly supports Kashmiri artisan families and helps preserve the world-renowned Pashmina craft.",
    inStock: true,
    stockCount: 2,
  },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );
};

export const getProductsByCraftType = (craftType: string): Product[] => {
  return products.filter(
    (product) => product.craftType.toLowerCase() === craftType.toLowerCase()
  );
};

export const getProductsByPriceRange = (
  min: number,
  max: number
): Product[] => {
  return products.filter(
    (product) => product.price >= min && product.price <= max
  );
};
