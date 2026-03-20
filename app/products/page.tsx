import { getProducts, getCategories } from "@/lib/sanity";
import { mapSanityProduct, mapSanityCategory } from "@/lib/sanityMapper";
import ProductsClient from "./ProductsClient";

export const revalidate = 60;

export default async function ProductsPage() {
  const [rawProducts, rawCategories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  const products = rawProducts.map(mapSanityProduct).filter(Boolean);
  const categories = rawCategories.map(mapSanityCategory).filter(Boolean);

  return <ProductsClient products={products} categories={categories} />;
}
