import Link from "next/link";
import Image from "next/image";
import { Category } from "@/types";
import { Card, CardContent } from "./card";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/categories/${category.slug}`}>
      <Card className="overflow-hidden group cursor-pointer hover:border-primary/50 transition-colors">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
            <p className="text-sm text-white/90 line-clamp-2 max-w-[80%] opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              {category.description}
            </p>
          </div>
        </div>
      </Card>

    </Link>
  );
}
