import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronLeft, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, width: 800, height: 450 }],
      type: "article",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
        Back to Blog
      </Link>

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-sm">{post.author.name}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-10 border">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <p className="lead text-lg text-muted-foreground leading-relaxed mb-6">
            {post.excerpt}
          </p>

          <div dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* Placeholder extended content */}
          <h2>Key Takeaways</h2>
          <ul>
            <li>Technology continues to evolve at a rapid pace in 2026</li>
            <li>AI integration is now standard across all product categories</li>
            <li>Battery technology has made significant leaps</li>
            <li>Sustainability is becoming a key differentiator</li>
          </ul>

          <h2>What We Think</h2>
          <p>
            After extensive testing and research, we believe this year&apos;s product
            lineup represents a significant step forward. Whether you&apos;re a
            casual user or a power user, there&apos;s something for everyone in the
            current market. The key is finding the right balance between features,
            performance, and price — and that&apos;s exactly what we help you do
            here at Tech Variety Deals.
          </p>

          <blockquote>
            <p>
              &quot;The best tech is the tech that fits your lifestyle and budget
              perfectly.&quot;
            </p>
          </blockquote>

          <h2>Final Thoughts</h2>
          <p>
            Stay tuned for more in-depth reviews and comparisons. Make sure to
            subscribe to our newsletter to never miss a deal or review.
          </p>
        </div>
      </div>
    </article>
  );
}
