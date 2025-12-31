export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "DaruAala",
    image: "https://daruaala.com/logo1.png", // Replace with actual domain
    "@id": "https://daruaala.com",
    url: "https://daruaala.com",
    telephone: "7340050070",
    email: "Aaladaru8@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "17, Tonk Rd, Barkat Nagar, Lalkothi",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      postalCode: "302015",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.8851417, // Approximate coordinates for Lalkothi, Jaipur
      longitude: 75.8080829,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "22:00",
    },
    sameAs: [
      "https://www.facebook.com/daruaala", // Add actual social links
      "https://www.instagram.com/daruaala",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
