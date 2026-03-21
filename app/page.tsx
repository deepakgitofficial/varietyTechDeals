import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, TrendingUp, Award, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/ProductCard";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { BlogCard } from "@/components/ui/BlogCard";
import { Newsletter } from "@/components/ui/Newsletter";
import { ComparisonTable } from "@/components/ui/ComparisonTable";
import { Badge } from "@/components/ui/badge";
import { getProducts, getCategories } from "@/lib/sanity";
import { mapSanityProduct, mapSanityCategory } from "@/lib/sanityMapper";
import { blogPosts } from "@/lib/data";
import { CategorySlider } from "@/components/ui/CategorySlider";




export const revalidate = 60; // ISR: revalidate every 60 seconds

export default async function Home() {
  // Fetch live data from Sanity
  const [rawProducts, rawCategories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  const products = rawProducts.map(mapSanityProduct).filter(Boolean);
  const categories = rawCategories.map(mapSanityCategory).filter(Boolean);

  const featuredProducts = products.filter((p: any) => p.isPopular);
  const newProducts = products.filter((p: any) => p.isNew);
  const topPicks = products.slice(0, 3); // Top 3 for comparison

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm gap-2">
              <Zap className="w-3.5 h-3.5" />
              Trending Deals — Updated Daily
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              The Best Tech Deals,{" "}
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                All in One Place.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
              Curated deals on laptops, phones, gaming gear, and more from Amazon.
              Expert reviews to help you choose the perfect tech.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="gap-2 text-base px-8">
                <Link href="/products">
                  Browse Deals <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8">
                <Link href="/categories">View Categories</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span>500+ Products Reviewed</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                <span>Trusted by 50K+ Readers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED CATEGORIES ===== */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Shop by Category
              </h2>
              <p className="text-muted-foreground mt-2">
                Find what you&apos;re looking for, fast.
              </p>
            </div>
            <Button asChild variant="ghost" className="hidden md:inline-flex gap-1">
              <Link href="/categories">
                View All <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="">
            <CategorySlider categories={categories} />

          </div>
        </div>
      </section>

      {/* ===== TOP DEALS ===== */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <Badge variant="secondary" className="mb-3">
                <Zap className="w-3 h-3 mr-1" /> Hot Deals
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Top Deals Right Now
              </h2>
              <p className="text-muted-foreground mt-2">
                Hand-picked deals with the biggest savings.
              </p>
            </div>
            <Button asChild variant="ghost" className="hidden md:inline-flex gap-1">
              <Link href="/products">
                See All <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== TOP PICKS FOR 2026 ===== */}
      {topPicks.length >= 3 && (
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <Badge className="mb-3">
                <Award className="w-3 h-3 mr-1" /> Editor&apos;s Choice
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Top Picks for 2026
              </h2>
              <p className="text-muted-foreground mt-2 max-w-lg mx-auto">
                Our editors&apos; favorite products this year, compared side by side.
              </p>
            </div>

            <div className="bg-card border rounded-xl p-4 md:p-6 overflow-hidden">
              <ComparisonTable products={topPicks} />
            </div>
          </div>
        </section>
      )}

      {/* ===== NEW ARRIVALS ===== */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                New Arrivals
              </h2>
              <p className="text-muted-foreground mt-2">
                Just dropped — the latest in tech.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newProducts.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== LATEST BLOG POSTS ===== */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                From the Blog
              </h2>
              <p className="text-muted-foreground mt-2">
                Guides, reviews, and news to keep you informed.
              </p>
            </div>
            <Button asChild variant="ghost" className="hidden md:inline-flex gap-1">
              <Link href="/blog">
                All Posts <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <Newsletter />
    </>
  );
}
