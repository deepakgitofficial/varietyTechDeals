"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight, Clock, TrendingUp, Star, Loader2 } from "lucide-react";
import { products, categories, blogPosts } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

// ==========================================
// Types
// ==========================================
interface SearchResult {
  id: string;
  type: "product" | "category" | "blog";
  title: string;
  subtitle: string;
  image: string;
  href: string;
  price?: number;
  rating?: number;
}

// ==========================================
// Helpers
// ==========================================
const RECENT_KEY = "tvd_recent_searches";
const MAX_RECENT = 5;

function getRecentSearches(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(RECENT_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveRecentSearch(query: string) {
  if (!query.trim()) return;
  const recents = getRecentSearches().filter((s) => s !== query);
  recents.unshift(query);
  localStorage.setItem(RECENT_KEY, JSON.stringify(recents.slice(0, MAX_RECENT)));
}

function clearRecentSearches() {
  localStorage.removeItem(RECENT_KEY);
}

function searchAll(query: string): SearchResult[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const results: SearchResult[] = [];

  // Search products
  products.forEach((p) => {
    const match =
      p.title.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q);
    if (match) {
      results.push({
        id: p.id,
        type: "product",
        title: p.title,
        subtitle: `${p.brand} • ${p.category}`,
        image: p.image,
        href: `/products/${p.slug}`,
        price: p.price,
        rating: p.rating,
      });
    }
  });

  // Search categories
  categories.forEach((c) => {
    if (c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)) {
      results.push({
        id: c.id,
        type: "category",
        title: c.name,
        subtitle: c.description,
        image: c.image,
        href: `/categories/${c.slug}`,
      });
    }
  });

  // Search blog
  blogPosts.forEach((b) => {
    if (b.title.toLowerCase().includes(q) || b.excerpt.toLowerCase().includes(q)) {
      results.push({
        id: b.id,
        type: "blog",
        title: b.title,
        subtitle: `${b.author.name} • ${b.readTime}`,
        image: b.image,
        href: `/blog/${b.slug}`,
      });
    }
  });

  return results;
}

// Trending suggestions (pre-programmed)
const trendingSuggestions = [
  "RTX 5080",
  "Gaming Mouse",
  "Noise Cancelling",
  "Laptop OLED",
  "Smartwatch",
];

// ==========================================
// Component
// ==========================================
interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Load recent searches on open
  useEffect(() => {
    if (isOpen) {
      setRecentSearches(getRecentSearches());
      setQuery("");
      setResults([]);
      setActiveIndex(-1);
      // Focus after DOM paint
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Debounced search — feels snappy with 150ms delay
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setIsSearching(false);
      return;
    }
    setIsSearching(true);
    const timer = setTimeout(() => {
      setResults(searchAll(query));
      setActiveIndex(-1);
      setIsSearching(false);
    }, 150);
    return () => clearTimeout(timer);
  }, [query]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((prev) => Math.min(prev + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((prev) => Math.max(prev - 1, -1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (activeIndex >= 0 && results[activeIndex]) {
          navigateTo(results[activeIndex].href, results[activeIndex].title);
        } else if (query.trim()) {
          // Search for products with the query
          saveRecentSearch(query.trim());
          onClose();
          router.push(`/products?q=${encodeURIComponent(query.trim())}`);
        }
      } else if (e.key === "Escape") {
        onClose();
      }
    },
    [activeIndex, results, query, onClose, router]
  );

  // Scroll active item into view
  useEffect(() => {
    if (activeIndex >= 0 && listRef.current) {
      const el = listRef.current.children[activeIndex] as HTMLElement;
      el?.scrollIntoView({ block: "nearest" });
    }
  }, [activeIndex]);

  const navigateTo = (href: string, title: string) => {
    saveRecentSearch(title);
    onClose();
    router.push(href);
  };

  const handleClearRecents = () => {
    clearRecentSearches();
    setRecentSearches([]);
  };

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const showEmpty = query.trim() && !isSearching && results.length === 0;
  const showRecents = !query.trim() && recentSearches.length > 0;
  const showTrending = !query.trim();

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative flex flex-col mx-auto mt-[10vh] w-full max-w-2xl max-h-[70vh] bg-background border shadow-2xl rounded-xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
        {/* Search Input */}
        <div className="flex items-center gap-3 px-5 border-b">
          <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search products, categories, articles..."
            className="w-full py-4 text-base bg-transparent outline-none placeholder:text-muted-foreground"
            autoComplete="off"
            spellCheck={false}
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex h-6 items-center gap-1 rounded border bg-muted px-2 text-[10px] font-medium text-muted-foreground">
            ESC
          </kbd>
        </div>

        {/* Results Area */}
        <div className="flex-1 overflow-y-auto p-2" ref={listRef}>
          {/* Loading state */}
          {isSearching && (
            <div className="flex items-center justify-center py-12 text-muted-foreground gap-2">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span className="text-sm">Searching...</span>
            </div>
          )}

          {/* Search Results */}
          {!isSearching && results.length > 0 && (
            <>
              <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {results.length} result{results.length !== 1 ? "s" : ""}
              </div>
              {results.map((result, i) => (
                <button
                  key={result.id}
                  onClick={() => navigateTo(result.href, result.title)}
                  onMouseEnter={() => setActiveIndex(i)}
                  className={`flex items-center gap-4 w-full p-3 rounded-lg text-left transition-colors ${
                    i === activeIndex
                      ? "bg-primary/10 text-foreground"
                      : "hover:bg-muted/80"
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-white flex-shrink-0 border">
                    <Image
                      src={result.image}
                      alt={result.title}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm truncate">
                        {result.title}
                      </span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold uppercase ${
                          result.type === "product"
                            ? "bg-primary/10 text-primary"
                            : result.type === "category"
                            ? "bg-green-500/10 text-green-600 dark:text-green-400"
                            : "bg-orange-500/10 text-orange-600 dark:text-orange-400"
                        }`}
                      >
                        {result.type}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground truncate mt-0.5">
                      {result.subtitle}
                    </p>
                  </div>

                  {/* Price / Rating */}
                  <div className="flex items-center gap-3 flex-shrink-0">
                    {result.price && (
                      <span className="text-sm font-bold">
                        {formatPrice(result.price)}
                      </span>
                    )}
                    {result.rating && (
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Star className="w-3 h-3 fill-primary text-primary" />
                        {result.rating}
                      </span>
                    )}
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                </button>
              ))}
            </>
          )}

          {/* Empty state */}
          {showEmpty && (
            <div className="text-center py-12">
              <Search className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-1">
                No results for &quot;{query}&quot;
              </p>
              <p className="text-xs text-muted-foreground">
                Try different keywords or browse categories
              </p>
            </div>
          )}

          {/* Recent Searches */}
          {showRecents && (
            <div className="mb-4">
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-3 h-3" />
                  Recent Searches
                </span>
                <button
                  onClick={handleClearRecents}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Clear all
                </button>
              </div>
              {recentSearches.map((term, i) => (
                <button
                  key={`recent-${i}`}
                  onClick={() => setQuery(term)}
                  className="flex items-center gap-3 w-full p-3 rounded-lg text-left hover:bg-muted/80 transition-colors"
                >
                  <Clock className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-sm">{term}</span>
                  <ArrowRight className="w-3 h-3 text-muted-foreground ml-auto" />
                </button>
              ))}
            </div>
          )}

          {/* Trending */}
          {showTrending && (
            <div>
              <div className="px-3 py-2">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                  <TrendingUp className="w-3 h-3" />
                  Trending Searches
                </span>
              </div>
              <div className="flex flex-wrap gap-2 px-3 py-1">
                {trendingSuggestions.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 bg-muted hover:bg-primary/10 hover:text-primary rounded-full text-sm transition-colors border border-transparent hover:border-primary/20"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Hints */}
        <div className="flex items-center justify-between px-5 py-2.5 border-t bg-muted/30 text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="inline-flex h-5 w-5 items-center justify-center rounded border bg-muted text-[10px]">↑</kbd>
              <kbd className="inline-flex h-5 w-5 items-center justify-center rounded border bg-muted text-[10px]">↓</kbd>
              navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="inline-flex h-5 items-center justify-center rounded border bg-muted px-1.5 text-[10px]">↵</kbd>
              select
            </span>
          </div>
          <span className="flex items-center gap-1">
            <kbd className="inline-flex h-5 items-center justify-center rounded border bg-muted px-1.5 text-[10px]">esc</kbd>
            close
          </span>
        </div>
      </div>
    </div>
  );
}
