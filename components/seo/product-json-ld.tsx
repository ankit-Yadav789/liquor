
export function ProductJsonLd({ product }: { product: any }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.images[0],
    description: product.description,
    brand: {
      "@type": "Brand",
      name: product.brand || "DaruAala",
    },
    offers: {
      "@type": "Offer",
      url: `https://daruaala.com/products/${product.slug}`,
      priceCurrency: "INR",
      price: product.price,
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      priceValidUntil: "2025-12-31", // Update logically or leave generic
    },
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: product.rating || "4.5",
        reviewCount: product.reviewCount || "10",
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
