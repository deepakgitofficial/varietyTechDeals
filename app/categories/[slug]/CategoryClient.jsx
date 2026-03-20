"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { ProductCard } from "@/components/ui/ProductCard";
import { SearchBar } from "@/components/ui/SearchBar";
import { Pagination } from "@/components/ui/Pagination";
import { Button } from "@/components/ui/button";

const ITEMS_PER_PAGE = 6;

export default function CategoryClient({ category, products }) {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("rating");
  const [page, setPage] = useState(1);

  const filteredProducts = useMemo(() => {
    let result = products.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
    if (sortBy === "price-asc") result.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") result.sort((a, b) => b.price - a.price);
    else result.sort((a, b) => b.rating - a.rating);
    return result;
  }, [search, sortBy, products]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paged = filteredProducts.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  if (!category) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Category not found</h1>
        <Button asChild>
          <Link href="/categories">Back to Categories</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      {/* Breadcrumb */}
      <Link
        href="/categories"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
        All Categories
      </Link>

      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
          {category.name}
        </h1>
        <p className="text-lg text-muted-foreground">{category.description}</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
        <SearchBar
          onSearch={(q) => {
            setSearch(q);
            setPage(1);
          }}
          placeholder={`Search ${category.name.toLowerCase()}...`}
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2.5 bg-card border border-border rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/50"
        >
          <option value="rating">Top Rated</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
        </select>
      </div>

      {/* Products Grid */}
      {paged.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paged.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-muted-foreground">
          <p className="text-lg">No products found.</p>
        </div>
      )}

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}
