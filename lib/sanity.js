import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// ─── Sanity Client ───────────────────────────────────────────────
export const client = createClient({
  projectId: "qx0ih5qz",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

// ─── Image URL Builder ───────────────────────────────────────────
const builder = imageUrlBuilder(client);

export function urlForImage(source) {
  if (!source) return null;
  return builder.image(source);
}

// ─── GROQ Queries ────────────────────────────────────────────────

// Fetch all products (with dereferenced category)
export async function getProducts() {
  return await client.fetch(`*[_type == "product"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    gallery,
    price,
    originalPrice,
    discount,
    rating,
    reviewCount,
    brand,
    category -> { _id, name, slug },
    shortDescription,
    features,
    affiliateLink,
    availability,
    delivery,
    badge,
    publishedAt
  }`);
}

// Fetch all categories
export async function getCategories() {
  return await client.fetch(`*[_type == "category"] {
    _id,
    name,
    slug,
    description,
    image,
    icon
  }`);
}

// Fetch a single product by slug
export async function getProductBySlug(slug) {
  return await client.fetch(
    `*[_type == "product" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      mainImage,
      gallery,
      price,
      originalPrice,
      discount,
      rating,
      reviewCount,
      brand,
      category -> { _id, name, slug },
      shortDescription,
      features,
      affiliateLink,
      availability,
      delivery,
      badge,
      publishedAt
    }`,
    { slug }
  );
}

// Fetch products by category slug
export async function getProductsByCategory(categorySlug) {
  return await client.fetch(
    `*[_type == "product" && category->slug.current == $categorySlug] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      gallery,
      price,
      originalPrice,
      discount,
      rating,
      reviewCount,
      brand,
      category -> { _id, name, slug },
      shortDescription,
      features,
      affiliateLink,
      availability,
      delivery,
      badge,
      publishedAt
    }`,
    { categorySlug }
  );
}

// Fetch a single category by slug
export async function getCategoryBySlug(slug) {
  return await client.fetch(
    `*[_type == "category" && slug.current == $slug][0] {
      _id,
      name,
      slug,
      description,
      image,
      icon
    }`,
    { slug }
  );
}

// Fetch latest blog posts
export async function getLatestPosts(limit = 3) {
  return await client.fetch(
    `*[_type == "post"] | order(publishedAt desc)[0...$limit] {
      _id,
      title,
      "slug": slug.current,
      "date": publishedAt,
      excerpt,
      "image": mainImage.asset->url,
      "authorName": author->name,
      "authorAvatar": author->image.asset->url,
      "category": categories[0]->title
    }`,
    { limit }
  );
}