import { getCategories, getProductsByCategory, getCategoryBySlug } from "@/lib/sanity";
import { mapSanityProduct, mapSanityCategory } from "@/lib/sanityMapper";
import CategoryClient from "./CategoryClient";

export const revalidate = 60;

// Generate static paths for all categories from Sanity
export async function generateStaticParams() {
  const categories = await getCategories();
  return categories
    .filter((c) => c.slug?.current)
    .map((c) => ({
      slug: c.slug.current,
    }));
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;

  const [rawCategory, rawProducts] = await Promise.all([
    getCategoryBySlug(slug),
    getProductsByCategory(slug),
  ]);

  const category = mapSanityCategory(rawCategory);
  const products = rawProducts.map(mapSanityProduct).filter(Boolean);

  if (!category) {
    const { notFound } = await import("next/navigation");
    notFound();
  }

  return <CategoryClient category={category} products={products} />;
}
