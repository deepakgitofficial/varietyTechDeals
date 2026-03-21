
import { client } from "@/sanity/client";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// ─── Sanity Client ───────────────────────────────────────────────
export const client = createClient({
  projectId: "qx0ih5qz",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});
import Image from "next/image";
import Link from "next/link";


const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  "mainImage": mainImage.asset->url,
  "authorName": author->name
}`;

export default async function BlogPage() {
  const posts = await client.fetch(POSTS_QUERY);

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">School News & Updates</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post: any) => (
          <Link href={`/blog/${post.slug}`} key={post._id} className="border rounded-lg overflow-hidden hover:shadow-lg transition">
            {post.mainImage && (
              <img src={post.mainImage} alt={post.title} className="w-full h-48 object-cover" />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-500 text-sm">{new Date(post.publishedAt).toDateString()}</p>
              <p className="mt-2 text-gray-600 line-clamp-2">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}