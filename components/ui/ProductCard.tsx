import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader } from "./card";
import { Badge } from "./badge";
import { Button } from "./button";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden group">
      <div className="relative aspect-square overflow-hidden bg-white">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {product.isNew && <Badge>New</Badge>}
          {product.isPopular && <Badge variant="secondary">Popular</Badge>}
        </div>
      </div>
      
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start gap-2">
          <div>
            <p className="text-xs text-muted-foreground font-medium mb-1">
              {product.brand}
            </p>
            <Link href={`/products/${product.slug}`} className="hover:underline">
              <h3 className="font-semibold text-lg line-clamp-2 leading-tight">
                {product.title}
              </h3>
            </Link>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 pt-0 flex-1">
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-4 h-4 fill-primary text-primary" />
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-sm text-muted-foreground">
            ({product.reviews})
          </span>
        </div>
        
        <div className="flex items-baseline gap-2 mt-auto">
          {/* <span className="text-xl font-bold">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )} */}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 gap-2">
        <Button asChild className="w-full" variant="outline">
          <Link href={`/products/${product.slug}`}>Details</Link>
        </Button>
        <Button asChild className="w-full">
          <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
            Buy Now
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
