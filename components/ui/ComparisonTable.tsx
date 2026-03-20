import Image from "next/image";
import Link from "next/link";
import { Star, Check, X } from "lucide-react";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { Button } from "./button";

interface ComparisonTableProps {
  products: Product[];
}

export function ComparisonTable({ products }: ComparisonTableProps) {
  if (products.length < 2) return null;

  // Gather all unique spec keys across compared products
  const allSpecKeys = Array.from(
    new Set(products.flatMap((p) => Object.keys(p.specs)))
  );

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse min-w-[600px]">
        <thead>
          <tr>
            <th className="p-4 text-left text-sm font-semibold text-muted-foreground border-b bg-muted/50 w-[180px]">
              Feature
            </th>
            {products.map((product) => (
              <th key={product.id} className="p-4 border-b bg-muted/50 text-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-white">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Link
                    href={`/products/${product.slug}`}
                    className="font-semibold text-sm hover:text-primary transition-colors"
                  >
                    {product.title}
                  </Link>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Price Row */}
          {/* <tr className="border-b">
            <td className="p-4 text-sm font-medium">Price</td>
            {products.map((p) => (
              <td key={p.id} className="p-4 text-center">
                <span className="font-bold text-lg">{formatPrice(p.price)}</span>
                {p.originalPrice && (
                  <span className="block text-xs text-muted-foreground line-through">
                    {formatPrice(p.originalPrice)}
                  </span>
                )}
              </td>
            ))}
          </tr> */}

          {/* Rating Row */}
          <tr className="border-b bg-muted/30">
            <td className="p-4 text-sm font-medium">Rating</td>
            {products.map((p) => (
              <td key={p.id} className="p-4 text-center">
                <div className="inline-flex items-center gap-1">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="font-medium">{p.rating}</span>
                  <span className="text-xs text-muted-foreground">
                    ({p.reviews})
                  </span>
                </div>
              </td>
            ))}
          </tr>

          {/* Brand Row */}
          <tr className="border-b">
            <td className="p-4 text-sm font-medium">Brand</td>
            {products.map((p) => (
              <td key={p.id} className="p-4 text-center text-sm">
                {p.brand}
              </td>
            ))}
          </tr>

          {/* Spec Rows */}
          {allSpecKeys.map((key, i) => (
            <tr key={key} className={`border-b ${i % 2 === 0 ? "bg-muted/30" : ""}`}>
              <td className="p-4 text-sm font-medium">{key}</td>
              {products.map((p) => (
                <td key={p.id} className="p-4 text-center text-sm">
                  {p.specs[key] || "—"}
                </td>
              ))}
            </tr>
          ))}

          {/* CTA Row */}
          <tr>
            <td className="p-4"></td>
            {products.map((p) => (
              <td key={p.id} className="p-4 text-center">
                <Button asChild size="sm" className="w-full max-w-[160px]">
                  <a
                    href={p.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon
                  </a>
                </Button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
