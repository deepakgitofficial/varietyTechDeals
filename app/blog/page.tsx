import type { Metadata } from "next";
import { blogPosts } from "@/lib/data";
import { BlogCard } from "@/components/ui/BlogCard";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tech reviews, buying guides, and news to help you make smarter purchasing decisions.",
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-2xl mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Blog
        </h1>
        <p className="text-lg text-muted-foreground">
          Expert reviews, buying guides, and the latest tech news — all in one place.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
