export interface Artisan {
  id: number;
  name: string;
  craft: string;
  location: string;
  image: string;
  coverImage: string;
  experience: string;
  story: string;
  shortBio: string;
  skills: string[];
  awards: string[];
  productIds: number[];
  impactStatement: string;
  familyMembers: number;
  trainedArtisans: number;
}

export const artisans: Artisan[] = [
  {
    id: 1,
    name: "Lakshmi Devi",
    craft: "Silk Weaving",
    location: "Varanasi, Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400",
    coverImage:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800",
    experience: "25+ years",
    story:
      "Lakshmi Devi was born into a family of traditional weavers in the ancient city of Varanasi. From the age of 8, she sat beside her mother and grandmother, learning the intricate art of silk weaving. Today, at 52, she is a master weaver whose sarees are prized for their exceptional quality and traditional designs. Despite facing financial hardships after her husband's illness, Lakshmi never gave up on her craft. She now leads a cooperative of 12 women weavers, passing on the knowledge that has been in her family for seven generations.",
    shortBio:
      "Master silk weaver from Varanasi with 25+ years of experience, keeping alive a 7-generation family tradition.",
    skills: [
      "Banarasi Silk Weaving",
      "Zari Work",
      "Traditional Motifs",
      "Natural Dyeing",
    ],
    awards: ["State Handicraft Award 2019", "National Merit Certificate 2021"],
    productIds: [1],
    impactStatement:
      "Your purchase supports Lakshmi's family of 4 and helps train young women in traditional weaving.",
    familyMembers: 4,
    trainedArtisans: 12,
  },
  {
    id: 2,
    name: "Ramesh Kumar",
    craft: "Terracotta Pottery",
    location: "Jaipur, Rajasthan",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    coverImage:
      "https://images.unsplash.com/photo-1604422999920-0547d8b5a323?w=800",
    experience: "30+ years",
    story:
      "Ramesh Kumar is a third-generation potter from a small village near Jaipur. His grandfather started the family pottery workshop in 1955. Ramesh learned the craft from his father and has been molding clay since he was a young boy. He specializes in creating festival items like diyas and decorative pieces. During lean seasons, Ramesh works tirelessly to innovate new designs while staying true to traditional techniques. His dedication to eco-friendly, handmade products has earned him recognition from various craft councils.",
    shortBio:
      "Third-generation potter from Rajasthan, specializing in traditional terracotta festival items.",
    skills: [
      "Wheel Throwing",
      "Hand Molding",
      "Traditional Painting",
      "Kiln Firing",
    ],
    awards: [
      "Rajasthan Shilp Award 2018",
      "Eco-Friendly Artisan Certificate 2020",
    ],
    productIds: [2],
    impactStatement:
      "Supporting Ramesh helps sustain a 60-year family legacy and supports his village community.",
    familyMembers: 5,
    trainedArtisans: 8,
  },
  {
    id: 3,
    name: "Suresh Vishwakarma",
    craft: "Wood Carving",
    location: "Mysore, Karnataka",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
    coverImage:
      "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=800",
    experience: "35+ years",
    story:
      "Suresh Vishwakarma comes from a lineage of master woodworkers in Karnataka. The Vishwakarma community has been creating intricate wooden sculptures and furniture for temples and palaces for centuries. Suresh began his apprenticeship at age 12 under his uncle's guidance. Each of his pieces takes days to complete, requiring patience, precision, and deep knowledge of wood grain patterns. He uses only sustainably sourced rosewood and sandalwood, ensuring his craft remains environmentally responsible.",
    shortBio:
      "Master woodcarver from Karnataka, creating intricate sculptures using traditional techniques for over 35 years.",
    skills: [
      "Rosewood Carving",
      "Sandalwood Work",
      "Temple Sculpture",
      "Furniture Making",
    ],
    awards: ["Karnataka State Award 2015", "Master Craftsman Certificate 2022"],
    productIds: [3],
    impactStatement:
      "Your purchase enables Suresh to train young artisans and provide education for his children.",
    familyMembers: 4,
    trainedArtisans: 15,
  },
  {
    id: 4,
    name: "Sita Kumari",
    craft: "Madhubani Painting",
    location: "Jitwarpur, Bihar",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
    coverImage:
      "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?w=800",
    experience: "28+ years",
    story:
      "Sita Kumari learned Madhubani art from her grandmother in the village of Jitwarpur, the birthplace of this 2,500-year-old art form. As a young girl, she would watch in fascination as her grandmother painted intricate designs on the mud walls of their home. Today, Sita is recognized as one of the finest Madhubani artists in India. She leads a women's cooperative of 15 artists, providing them with sustainable income while preserving their cultural heritage. Her work has been exhibited in galleries across India and internationally.",
    shortBio:
      "Award-winning Madhubani artist from Bihar, leading a cooperative of 15 women artists.",
    skills: [
      "Madhubani Painting",
      "Natural Pigment Making",
      "Traditional Motifs",
      "Canvas Work",
    ],
    awards: [
      "Bihar State Award 2016",
      "National Handicraft Award 2020",
      "International Folk Art Recognition 2021",
    ],
    productIds: [4],
    impactStatement:
      "This purchase supports a women's cooperative of 15 artists preserving the ancient Madhubani tradition.",
    familyMembers: 3,
    trainedArtisans: 15,
  },
  {
    id: 5,
    name: "Mohan Lal",
    craft: "Brass Work",
    location: "Moradabad, Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    coverImage:
      "https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=800",
    experience: "40+ years",
    story:
      "Mohan Lal belongs to a fourth-generation family of brass artisans from Moradabad, known as the 'Brass City of India.' His great-grandfather crafted brass items for temples during the pre-independence era. Mohan learned the art of metal casting and engraving from his father. Each bell he creates is individually tuned to produce the perfect spiritual tone. Despite the influx of machine-made products, Mohan remains committed to traditional handcrafting methods, believing that each piece carries the energy and intention of its maker.",
    shortBio:
      "Fourth-generation brass artisan from Moradabad, creating sacred items for temples across India.",
    skills: [
      "Brass Casting",
      "Hand Engraving",
      "Bell Tuning",
      "Metal Finishing",
    ],
    awards: ["UP State Craft Award 2017", "Temple Artisan Recognition 2019"],
    productIds: [5],
    impactStatement:
      "Your purchase helps preserve traditional brass-making techniques passed down through four generations.",
    familyMembers: 6,
    trainedArtisans: 10,
  },
  {
    id: 6,
    name: "Fatima Begum",
    craft: "Block Printing",
    location: "Jaipur, Rajasthan",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
    coverImage:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
    experience: "20+ years",
    story:
      "Fatima Begum leads a self-help group of 20 women artisans in Sanganer, near Jaipur. After losing her husband at a young age, Fatima turned to block printing to support her family. She trained under master printers and eventually became a master herself. Her group specializes in traditional Rajasthani patterns using natural vegetable dyes. Through her cooperative, Fatima has helped dozens of women gain financial independence while preserving a 500-year-old craft tradition.",
    shortBio:
      "Leader of a women's block printing cooperative, empowering rural artisans for over 20 years.",
    skills: [
      "Block Carving",
      "Natural Dyeing",
      "Pattern Design",
      "Fabric Printing",
    ],
    awards: ["Women Entrepreneur Award 2018", "Craft Revival Certificate 2021"],
    productIds: [6],
    impactStatement:
      "This purchase empowers rural women artisans and provides them with sustainable livelihoods.",
    familyMembers: 3,
    trainedArtisans: 20,
  },
  {
    id: 7,
    name: "Biswanath Mahato",
    craft: "Dhokra Art",
    location: "Bankura, West Bengal",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    coverImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    experience: "32+ years",
    story:
      "Biswanath Mahato belongs to the Ghadwa community in West Bengal, whose ancestors have practiced Dhokra art for over 15 generations. This 4,000-year-old lost-wax casting technique creates unique, one-of-a-kind brass figurines. Biswanath learned the craft from his father at age 10. Each piece he creates takes several weeks, involving intricate wax modeling, clay mold making, and brass casting. He is one of the few remaining masters of this endangered tribal art form.",
    shortBio:
      "Master of the 4,000-year-old Dhokra art, preserving tribal heritage through brass casting.",
    skills: ["Lost-Wax Casting", "Wax Modeling", "Brass Work", "Tribal Motifs"],
    awards: [
      "West Bengal State Award 2014",
      "Tribal Art Preservation Award 2020",
    ],
    productIds: [7],
    impactStatement:
      "Your purchase helps revive this endangered art form and supports tribal communities.",
    familyMembers: 5,
    trainedArtisans: 6,
  },
  {
    id: 8,
    name: "Abdul Rashid",
    craft: "Papier Mâché",
    location: "Srinagar, Kashmir",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
    coverImage:
      "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=800",
    experience: "40+ years",
    story:
      "Abdul Rashid is a master artisan from Srinagar who has devoted 40 years to perfecting the intricate art of Kashmiri papier mâché. He learned this Persian-influenced craft from his father, who learned from his father before him. Each piece Abdul creates involves multiple stages: paper pulp preparation, molding, drying, painting, and lacquering. His floral motifs are inspired by the beautiful gardens of Kashmir. Despite the challenges facing his region, Abdul continues to create beauty, believing his art brings peace and joy to people's homes.",
    shortBio:
      "40-year veteran of Kashmiri papier mâché, creating exquisite hand-painted treasures.",
    skills: [
      "Paper Pulp Art",
      "Persian Motifs",
      "Gold Leaf Work",
      "Lacquer Finishing",
    ],
    awards: ["J&K State Award 2012", "Master Craftsman Recognition 2018"],
    productIds: [8],
    impactStatement:
      "This purchase supports artisan families in Kashmir and helps preserve their cultural heritage.",
    familyMembers: 7,
    trainedArtisans: 12,
  },
  {
    id: 9,
    name: "Jivya Soma Mashe",
    craft: "Warli Art",
    location: "Dahanu, Maharashtra",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400",
    coverImage:
      "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?w=800",
    experience: "35+ years",
    story:
      "Jivya Soma Mashe is from the Warli tribe of Maharashtra. His work has been exhibited internationally, bringing global recognition to this indigenous art form. Warli paintings traditionally depict village life, harvests, and celebrations using only white paint on mud-colored backgrounds. Jivya learned from elders in his village and has spent decades documenting tribal stories through his minimalist yet powerful art. He now conducts workshops to teach young tribal members, ensuring this cultural identity survives.",
    shortBio:
      "Internationally recognized Warli artist, bringing global attention to indigenous tribal art.",
    skills: [
      "Warli Painting",
      "Rice Paste Technique",
      "Tribal Storytelling",
      "Natural Pigments",
    ],
    awards: [
      "Maharashtra State Award 2013",
      "International Folk Art Award 2019",
    ],
    productIds: [9],
    impactStatement:
      "Your purchase supports tribal education programs and helps preserve Warli cultural identity.",
    familyMembers: 4,
    trainedArtisans: 25,
  },
  {
    id: 10,
    name: "Nasreen Bano",
    craft: "Chikankari Embroidery",
    location: "Lucknow, Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    coverImage:
      "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800",
    experience: "25+ years",
    story:
      "Nasreen Bano is a master Chikankari embroiderer from Lucknow. This 400-year-old Mughal art form involves delicate shadow work and fine needlework on fabric. Nasreen learned from her mother and has been embroidering since she was 12. She leads a women's training center where she teaches young women this intricate craft, providing them with skills for financial independence. Her work is known for its exceptional fineness - some of her pieces have over 40 stitches per inch.",
    shortBio:
      "Master of Lucknowi Chikankari embroidery, training young women in this 400-year-old Mughal art.",
    skills: [
      "Shadow Work",
      "Chikankari Stitches",
      "Fine Needlework",
      "Pattern Design",
    ],
    awards: ["UP State Award 2016", "Women Artisan Excellence Award 2021"],
    productIds: [10],
    impactStatement:
      "This purchase supports women's empowerment and preserves Lucknow's rich embroidery heritage.",
    familyMembers: 5,
    trainedArtisans: 30,
  },
  {
    id: 11,
    name: "Kripal Singh",
    craft: "Blue Pottery",
    location: "Jaipur, Rajasthan",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400",
    coverImage:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800",
    experience: "38+ years",
    story:
      "Kripal Singh learned blue pottery from Persian artisans who settled in Jaipur. This unique craft uses quartz stone powder instead of clay, creating the distinctive turquoise and cobalt blue colors Jaipur is famous for. Kripal is one of the few remaining masters who knows the original Persian techniques. He has spent nearly four decades perfecting his craft and now runs a small workshop where he trains apprentices. Each piece he creates is a work of art, combining Persian traditions with Indian aesthetics.",
    shortBio:
      "One of the few masters of traditional Jaipur Blue Pottery, trained in original Persian techniques.",
    skills: [
      "Quartz Pottery",
      "Cobalt Blue Glazing",
      "Persian Motifs",
      "Kiln Techniques",
    ],
    awards: ["Rajasthan Heritage Award 2015", "Master Potter Recognition 2020"],
    productIds: [11],
    impactStatement:
      "Your purchase helps sustain this rare craft and supports artisan training programs.",
    familyMembers: 4,
    trainedArtisans: 8,
  },
  {
    id: 12,
    name: "Ghulam Ahmad",
    craft: "Pashmina Weaving",
    location: "Srinagar, Kashmir",
    image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=400",
    coverImage:
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800",
    experience: "45+ years",
    story:
      "Ghulam Ahmad is a master weaver from Srinagar whose family has been creating Pashmina shawls for seven generations. The finest Pashmina comes from the Changthangi goats of Ladakh, and Ghulam's family has maintained relationships with nomadic herders for over a century. Each shawl takes months to complete - from sourcing the raw wool to the final weaving. Ghulam's work is so fine that a full-sized shawl can pass through a ring. He is considered a living treasure of Kashmiri craftsmanship.",
    shortBio:
      "Seventh-generation Pashmina master weaver, creating some of the world's finest shawls.",
    skills: [
      "Pashmina Weaving",
      "Kani Work",
      "Sozni Embroidery",
      "Natural Dyeing",
    ],
    awards: [
      "National Award for Handicrafts 2010",
      "Kashmir Heritage Master 2018",
    ],
    productIds: [12],
    impactStatement:
      "This premium purchase directly supports Kashmiri artisan families and preserves world-renowned craftsmanship.",
    familyMembers: 8,
    trainedArtisans: 20,
  },
];

export const getArtisanById = (id: number): Artisan | undefined => {
  return artisans.find((artisan) => artisan.id === id);
};

export const getArtisanByCraft = (craft: string): Artisan[] => {
  return artisans.filter((artisan) =>
    artisan.craft.toLowerCase().includes(craft.toLowerCase())
  );
};

export const getArtisanByLocation = (location: string): Artisan[] => {
  return artisans.filter((artisan) =>
    artisan.location.toLowerCase().includes(location.toLowerCase())
  );
};
