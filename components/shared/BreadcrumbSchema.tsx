// Server-safe BreadcrumbList JSON-LD for richer Google results (breadcrumb trails + sitelinks).
// Pass an ordered list of { name, path } from Home down to the current page.

const BASE_URL = "https://skinmantraa.in";

export default function BreadcrumbSchema({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
