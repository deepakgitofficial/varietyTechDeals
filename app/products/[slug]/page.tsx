import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Star, ShieldCheck, Truck, ChevronLeft, Check, X, ExternalLink } from "lucide-react";
import { products } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Generate static paths for all products
export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Dynamic metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.title} Review — Best Price`,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [{ url: product.image, width: 800, height: 600 }],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  // Schema.org structured data for Product
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    image: product.images,
    description: product.description,
    brand: { "@type": "Brand", name: product.brand },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviews,
    },
    offers: {
      "@type": "Offer",
      url: product.affiliateLink,
      priceCurrency: "USD",
      price: product.price,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Breadcrumb */}
        <Link
          href="/products"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Deals
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-white rounded-xl overflow-hidden border">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {discount && (
                <Badge variant="destructive" className="absolute top-4 left-4 text-sm">
                  -{discount}%
                </Badge>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <div
                    key={i}
                    className="relative w-20 h-20 bg-white rounded-lg overflow-hidden border cursor-pointer hover:ring-2 hover:ring-primary transition-all"
                  >
                    <Image
                      src={img}
                      alt={`${product.title} view ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <p className="text-sm text-muted-foreground font-medium mb-1">
              {product.brand} • {product.category}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-primary text-primary"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="font-semibold">{product.rating}</span>
              <span className="text-muted-foreground text-sm">
                ({product.reviews.toLocaleString()} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl font-bold">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <Badge variant="destructive">Save {formatPrice(product.originalPrice - product.price)}</Badge>
                </>
              )}
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button asChild size="lg" className="gap-2 text-base flex-1">
                <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Buy on Amazon
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 text-base flex-1">
                <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                  Check Latest Price
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg text-sm">
                <Truck className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Free Shipping (Prime)</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg text-sm">
                <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Amazon Verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {product.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 bg-card border rounded-lg"
              >
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Specs Table */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Specifications</h2>
          <div className="border rounded-lg overflow-hidden">
            {Object.entries(product.specs).map(([key, value], i) => (
              <div
                key={key}
                className={`flex justify-between p-4 text-sm ${
                  i % 2 === 0 ? "bg-muted/30" : ""
                } ${i < Object.keys(product.specs).length - 1 ? "border-b" : ""}`}
              >
                <span className="font-medium">{key}</span>
                <span className="text-muted-foreground text-right">{value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Our Verdict</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pros */}
            <div className="border rounded-lg overflow-hidden">
              <div className="p-4 bg-green-500/10 border-b border-green-500/20">
                <h3 className="font-semibold text-green-600 dark:text-green-400 flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  Pros
                </h3>
              </div>
              <ul className="p-4 space-y-3">
                {product.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="border rounded-lg overflow-hidden">
              <div className="p-4 bg-red-500/10 border-b border-red-500/20">
                <h3 className="font-semibold text-red-600 dark:text-red-400 flex items-center gap-2">
                  <X className="w-5 h-5" />
                  Cons
                </h3>
              </div>
              <ul className="p-4 space-y-3">
                {product.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Final CTA banner */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to Buy the {product.title}?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Get the best price on Amazon today. Free shipping with Prime.
          </p>
          <Button asChild size="lg" className="gap-2 text-base px-10">
            <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              Buy on Amazon — {formatPrice(product.price)}
            </a>
          </Button>
        </section>
      </div>
    </>
  );
}
