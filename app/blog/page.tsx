import type { Metadata } from "next";
import { BlogCard } from "@/components/ui/BlogCard";
import { createClient } from "next-sanity";
import { BlogPost } from "@/types";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tech reviews, buying guides, and news to help you make smarter purchasing decisions.",
};

// ─── Sanity Client ───────────────────────────────────────────────
export const client = createClient({
  projectId: "qx0ih5qz",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  "date": publishedAt,
  excerpt,
  "image": mainImage.asset->url,
  "authorName": author->name,
  "authorAvatar": author->image.asset->url,
  "category": categories[0]->title
}`;

export default async function BlogPage() {
  const posts = await client.fetch(POSTS_QUERY);

  const mappedPosts: BlogPost[] = posts.map((post: any) => ({
    id: post._id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt || "",
    content: "", // Content not needed for card list
    image: post.image,
    author: {
      name: post.authorName || "Unknown Author",
      avatar: post.authorAvatar || "/placeholder-avatar.png", // make sure we have this or use a valid fallback
    },
    date: post.date ? new Date(post.date).toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' }) : "",
    readTime: "5 min read",
    category: post.category || "Uncategorized",
  }));

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
        {mappedPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
