import type { Metadata } from "next";
import { categories } from "@/lib/data";
import { CategoryCard } from "@/components/ui/CategoryCard";

export const metadata: Metadata = {
  title: "Categories",
  description:
    "Browse our curated categories of tech products — mobiles, laptops, gaming gear, audio, and wearables.",
};

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-2xl mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Categories
        </h1>
        <p className="text-lg text-muted-foreground">
          Explore our curated categories to find the perfect tech for you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
