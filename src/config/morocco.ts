// Morocco-specific configuration

export const moroccoConfig = {
  // Currency
  currency: {
    code: "MAD",
    symbol: "د.م.",
    name: "Moroccan Dirham",
  },

  // Major tourist regions
  regions: [
    {
      id: "marrakech",
      name: "Marrakech",
      coordinates: [31.6295, -8.0088],
      description: "The Red City - Imperial city known for its medina, souks, and cultural heritage",
      attractions: ["Koutoubia Mosque", "Jemaa el-Fnaa", "Bahia Palace", "Saadian Tombs"],
    },
    {
      id: "fez",
      name: "Fez",
      coordinates: [34.0333, -5.0],
      description: "The spiritual and cultural center with the oldest university in the world",
      attractions: ["Fez Medina", "Al Quaraouiyine University", "Bou Inania Madrasa", "Tanneries"],
    },
    {
      id: "casablanca",
      name: "Casablanca",
      coordinates: [33.5731, -7.5898],
      description: "The largest city and economic hub of Morocco",
      attractions: ["Hassan II Mosque", "Old Medina", "Corniche", "Royal Palace"],
    },
    {
      id: "tangier",
      name: "Tangier",
      coordinates: [35.7674, -5.8369],
      description: "The gateway to Africa, where the Mediterranean meets the Atlantic",
      attractions: ["Kasbah Museum", "American Legation", "Medina", "Cape Spartel"],
    },
    {
      id: "essaouira",
      name: "Essaouira",
      coordinates: [31.5085, -9.7673],
      description: "The coastal city of breezes with beautiful beaches and artistic culture",
      attractions: ["Skala de la Ville", "Port", "Taros Restaurant", "Orson Welles Cinema"],
    },
    {
      id: "meknes",
      name: "Meknes",
      coordinates: [33.8869, -5.5472],
      description: "The Imperial City with grand gates and historic medina",
      attractions: ["Bab Mansour Gate", "Royal Palace", "Medina", "Museum of Moroccan Arts"],
    },
    {
      id: "chefchaouen",
      name: "Chefchaouen",
      coordinates: [35.1783, -5.2689],
      description: "The Blue Pearl - a picturesque town in the mountains painted entirely in blue",
      attractions: ["Blue Medina", "Ras El Maa Waterfall", "Gran Mosque", "Plaza Uta el-Hammam"],
    },
    {
      id: "agadir",
      name: "Agadir",
      coordinates: [30.4204, -9.5982],
      description: "Modern beach resort with stunning coastline and resort facilities",
      attractions: ["Beach", "Oufella Kasbah", "Souk El Had", "Marina"],
    },
    {
      id: "ouarzazate",
      name: "Ouarzazate",
      coordinates: [31.926, -6.8742],
      description: "The gateway to the Sahara with film studios and kasbahs",
      attractions: ["Atlas Film Studios", "Kasbah Ait Benhaddou", "Taourirt Kasbah", "Dades Gorge"],
    },
    {
      id: "tetouan",
      name: "Tetouan",
      coordinates: [35.5784, -5.369],
      description: "The white dove - a Mediterranean city with Spanish influences",
      attractions: ["Medina", "Royal Palace", "Museum of Moroccan Art", "Beach"],
    },
  ],

  // Cultural elements
  cultural: {
    artifacts: ["Zellige (tile work)", "Berber carpets", "Leather work", "Cedar woodcraft", "Moroccan tea service"],
    traditions: ["Tea ceremony", "Hammam culture", "Souks and bartering", "Call to prayer", "Hospitality"],
    cuisine: ["Tagine", "Couscous", "Pastilla", "Harira soup", "Moroccan mint tea"],
    festivals: ["Morocco Tourism Festival", "Marrakech Film Festival", "Amazigh New Year", "Gnaoua Music Festival"],
  },

  // Languages commonly spoken
  languages: ["Arabic", "Darija (Moroccan Arabic)", "French", "English", "Tamazight/Berber"],

  // Time zone
  timeZone: "Africa/Casablanca",

  // Electrical info
  electricity: {
    voltage: 220,
    frequency: 50,
    outlets: ["Type C", "Type E", "Type H"],
  },

  // Best visiting seasons
  seasons: {
    spring: {
      months: ["March", "April", "May"],
      description: "Mild weather, flowers blooming, ideal for exploring",
    },
    autumn: {
      months: ["September", "October", "November"],
      description: "Warm but not too hot, perfect for trekking",
    },
  },
};

export type Region = (typeof moroccoConfig.regions)[0];
