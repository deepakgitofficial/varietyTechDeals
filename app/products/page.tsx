"use client";

import { useState, useMemo } from "react";
import { products, categories } from "@/lib/data";
import { ProductCard } from "@/components/ui/ProductCard";
import { SearchBar } from "@/components/ui/SearchBar";
import { Pagination } from "@/components/ui/Pagination";

const ITEMS_PER_PAGE = 8;

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"price-asc" | "price-desc" | "rating">("rating");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [page, setPage] = useState(1);

  const filteredProducts = useMemo(() => {
    let result = products.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
    if (selectedCategory !== "all") {
      result = result.filter(
        (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    if (sortBy === "price-asc") result.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") result.sort((a, b) => b.price - a.price);
    else result.sort((a, b) => b.rating - a.rating);
    return result;
  }, [search, sortBy, selectedCategory]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paged = filteredProducts.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-2xl mb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          All Deals
        </h1>
        <p className="text-lg text-muted-foreground">
          Browse our full collection of curated tech deals from Amazon.
        </p>
      </div>

      {/* Filters Row */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8 p-4 bg-card border rounded-lg">
        <SearchBar
          onSearch={(q) => {
            setSearch(q);
            setPage(1);
          }}
          placeholder="Search all products..."
        />
        <div className="flex gap-3 flex-wrap">
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setPage(1);
            }}
            className="px-4 py-2.5 bg-background border border-border rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="all">All Categories</option>
            {categories.map((c) => (
              <option key={c.id} value={c.name.toLowerCase()}>
                {c.name}
              </option>
            ))}
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="px-4 py-2.5 bg-background border border-border rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="rating">Top Rated</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
          </select>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-6">
        Showing {paged.length} of {filteredProducts.length} products
      </p>

      {/* Products Grid */}
      {paged.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {paged.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-muted-foreground">
          <p className="text-lg">No products match your filters.</p>
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
