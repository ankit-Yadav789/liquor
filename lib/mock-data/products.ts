import type { Product } from "@/types"

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Château Margaux 2015",
    slug: "chateau-margaux-2015",
    description:
      "A legendary Bordeaux wine with exceptional aging potential. Notes of blackcurrant, violet, and cedar with silky tannins.",
    category: "wine",
    brand: "Château Margaux",
    price: 45000,
    originalPrice: 50000,
    discount: 10,
    alcoholPercentage: 13.5,
    volume: "750ml",
    origin: "Bordeaux, France",
    images: ["/red-wine-bottle-chateau-margaux.jpg"],
    stock: 12,
    featured: true,
    rating: 4.9,
    reviewCount: 125,
    tags: ["red wine", "bordeaux", "premium", "aged"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "Johnnie Walker Blue Label",
    slug: "johnnie-walker-blue-label",
    description:
      "An exceptional blend of rare whiskies. Smooth and complex with hints of honey, dried fruit, and smoke.",
    category: "whisky",
    brand: "Johnnie Walker",
    price: 18000,
    alcoholPercentage: 40,
    volume: "750ml",
    origin: "Scotland",
    images: ["/johnnie-walker-blue-label-whisky.jpg"],
    stock: 25,
    featured: true,
    rating: 4.8,
    reviewCount: 89,
    tags: ["scotch", "blended", "premium"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    name: "Dom Pérignon Vintage 2012",
    slug: "dom-perignon-vintage-2012",
    description:
      "The ultimate expression of champagne excellence. Elegant and refined with notes of citrus, white flowers, and brioche.",
    category: "wine",
    brand: "Dom Pérignon",
    price: 25000,
    originalPrice: 28000,
    discount: 11,
    alcoholPercentage: 12.5,
    volume: "750ml",
    origin: "Champagne, France",
    images: ["/dom-perignon-champagne-bottle.jpg"],
    stock: 8,
    featured: true,
    rating: 5.0,
    reviewCount: 156,
    tags: ["champagne", "sparkling", "luxury"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    name: "Glenfiddich 18 Year Old",
    slug: "glenfiddich-18-year-old",
    description:
      "Rich and complex single malt scotch. Matured in oak casks with notes of apple, cinnamon, and robust oak.",
    category: "whisky",
    brand: "Glenfiddich",
    price: 8500,
    alcoholPercentage: 40,
    volume: "750ml",
    origin: "Speyside, Scotland",
    images: ["/glenfiddich-18-whisky.png"],
    stock: 30,
    featured: true,
    rating: 4.7,
    reviewCount: 203,
    tags: ["single malt", "aged", "scotch"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "5",
    name: "Heineken Lager Beer",
    slug: "heineken-lager-beer",
    description: "Premium lager beer with a crisp, refreshing taste. Perfect for any occasion.",
    category: "beer",
    brand: "Heineken",
    price: 350,
    alcoholPercentage: 5,
    volume: "650ml",
    origin: "Netherlands",
    images: ["/heineken-beer-bottle.jpg"],
    stock: 150,
    featured: false,
    rating: 4.3,
    reviewCount: 432,
    tags: ["lager", "beer", "refreshing"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "6",
    name: "Grey Goose Vodka",
    slug: "grey-goose-vodka",
    description: "Premium French vodka crafted from the finest wheat. Smooth and clean with a hint of almond.",
    category: "vodka",
    brand: "Grey Goose",
    price: 5500,
    alcoholPercentage: 40,
    volume: "750ml",
    origin: "France",
    images: ["/grey-goose-vodka-bottle.jpg"],
    stock: 40,
    featured: false,
    rating: 4.6,
    reviewCount: 178,
    tags: ["vodka", "premium", "french"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "7",
    name: "Bacardi Superior Rum",
    slug: "bacardi-superior-rum",
    description: "Light and smooth white rum. Perfect for cocktails with notes of vanilla and almond.",
    category: "rum",
    brand: "Bacardi",
    price: 1800,
    alcoholPercentage: 40,
    volume: "750ml",
    origin: "Puerto Rico",
    images: ["/bacardi-rum-bottle.jpg"],
    stock: 60,
    featured: false,
    rating: 4.4,
    reviewCount: 267,
    tags: ["rum", "white rum", "cocktails"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "8",
    name: "Bombay Sapphire Gin",
    slug: "bombay-sapphire-gin",
    description:
      "Premium London dry gin with 10 exotic botanicals. Crisp and refreshing with juniper and citrus notes.",
    category: "gin",
    brand: "Bombay Sapphire",
    price: 2200,
    alcoholPercentage: 40,
    volume: "750ml",
    origin: "England",
    images: ["/bombay-sapphire-gin.jpg"],
    stock: 45,
    featured: false,
    rating: 4.5,
    reviewCount: 312,
    tags: ["gin", "botanical", "cocktails"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "9",
    name: "Patrón Silver Tequila",
    slug: "patron-silver-tequila",
    description: "Ultra-premium tequila with a smooth, sweet taste. Notes of citrus, agave, and pepper.",
    category: "tequila",
    brand: "Patrón",
    price: 6500,
    alcoholPercentage: 40,
    volume: "750ml",
    origin: "Mexico",
    images: ["/patron-tequila-bottle.jpg"],
    stock: 35,
    featured: false,
    rating: 4.7,
    reviewCount: 189,
    tags: ["tequila", "premium", "silver"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "10",
    name: "Hennessy VS Cognac",
    slug: "hennessy-vs-cognac",
    description: "Classic cognac with bold flavors. Notes of oak, vanilla, and dried fruit.",
    category: "brandy",
    brand: "Hennessy",
    price: 4200,
    alcoholPercentage: 40,
    volume: "700ml",
    origin: "Cognac, France",
    images: ["/hennessy-cognac-bottle.jpg"],
    stock: 28,
    featured: false,
    rating: 4.6,
    reviewCount: 145,
    tags: ["cognac", "brandy", "french"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "11",
    name: "Corona Extra Beer",
    slug: "corona-extra-beer",
    description: "Light and refreshing Mexican beer. Best served with a lime wedge.",
    category: "beer",
    brand: "Corona",
    price: 280,
    alcoholPercentage: 4.6,
    volume: "355ml",
    origin: "Mexico",
    images: ["/corona-beer-bottle.jpg"],
    stock: 200,
    featured: false,
    rating: 4.2,
    reviewCount: 567,
    tags: ["beer", "lager", "mexican"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "12",
    name: "The Macallan 12 Year",
    slug: "macallan-12-year",
    description: "Exceptional single malt scotch aged in sherry casks. Rich and complex with dried fruits and spice.",
    category: "whisky",
    brand: "The Macallan",
    price: 9800,
    alcoholPercentage: 40,
    volume: "700ml",
    origin: "Speyside, Scotland",
    images: ["/macallan-12-whisky.jpg"],
    stock: 22,
    featured: true,
    rating: 4.9,
    reviewCount: 234,
    tags: ["single malt", "scotch", "sherry cask"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

export const MOCK_PRODUCTS = mockProducts

// Helper function to filter and sort products
export function getFilteredProducts(filters: {
  category?: string
  brand?: string
  minPrice?: number
  maxPrice?: number
  minAlcohol?: number
  maxAlcohol?: number
  rating?: number
  inStock?: boolean
  search?: string
  sortBy?: string
  page?: number
  limit?: number
}) {
  let filtered = [...mockProducts]

  // Apply filters
  if (filters.category) {
    filtered = filtered.filter((p) => p.category === filters.category)
  }

  if (filters.brand) {
    filtered = filtered.filter((p) => p.brand === filters.brand)
  }

  if (filters.minPrice !== undefined) {
    filtered = filtered.filter((p) => p.price >= filters.minPrice!)
  }

  if (filters.maxPrice !== undefined) {
    filtered = filtered.filter((p) => p.price <= filters.maxPrice!)
  }

  if (filters.minAlcohol !== undefined) {
    filtered = filtered.filter((p) => p.alcoholPercentage >= filters.minAlcohol!)
  }

  if (filters.maxAlcohol !== undefined) {
    filtered = filtered.filter((p) => p.alcoholPercentage <= filters.maxAlcohol!)
  }

  if (filters.rating !== undefined) {
    filtered = filtered.filter((p) => p.rating >= filters.rating!)
  }

  if (filters.inStock) {
    filtered = filtered.filter((p) => p.stock > 0)
  }

  if (filters.search) {
    const searchLower = filters.search.toLowerCase()
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower) ||
        p.brand.toLowerCase().includes(searchLower) ||
        p.tags.some((tag) => tag.toLowerCase().includes(searchLower)),
    )
  }

  // Apply sorting
  if (filters.sortBy) {
    switch (filters.sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "name-asc":
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "name-desc":
        filtered.sort((a, b) => b.name.localeCompare(a.name))
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "newest":
        filtered.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
        break
    }
  }

  // Pagination
  const page = filters.page || 1
  const limit = filters.limit || 12
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit

  const paginated = filtered.slice(startIndex, endIndex)

  return {
    products: paginated,
    total: filtered.length,
    page,
    limit,
    totalPages: Math.ceil(filtered.length / limit),
  }
}

export function getProductBySlug(slug: string): Product | undefined {
  return mockProducts.find((p) => p.slug === slug)
}

export function getBrands(): string[] {
  return Array.from(new Set(mockProducts.map((p) => p.brand))).sort()
}
