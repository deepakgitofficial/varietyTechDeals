import { urlForImage } from "@/lib/sanity";

/**
 * Maps a raw Sanity product document to the Product shape
 * expected by all existing UI components (ProductCard, detail page, etc.)
 */
export function mapSanityProduct(p) {
  if (!p) return null;

  const mainImageUrl = p.mainImage
    ? urlForImage(p.mainImage).width(800).url()
    : "/placeholder-product.png";

  const galleryUrls = (p.gallery || []).map((img) =>
    urlForImage(img).width(800).url()
  );

  // Always include mainImage as the first gallery image
  const allImages = [mainImageUrl, ...galleryUrls];

  const badges = Array.isArray(p.badge)
    ? p.badge
    : typeof p.badge === "string"
    ? [p.badge]
    : [];

  return {
    id: p._id,
    title: p.title || "Untitled Product",
    slug: p.slug?.current || "",
    description: p.shortDescription || "",
    price: p.price || 0,
    originalPrice: p.originalPrice || undefined,
    rating: p.rating || 0,
    reviews: p.reviewCount || 0,
    image: mainImageUrl,
    images: allImages,
    category: p.category?.name || "Uncategorized",
    brand: p.brand || "",
    features: p.features || [],
    specs: {}, // Sanity schema doesn't have a specs field
    pros: [],  // Sanity schema doesn't have pros/cons
    cons: [],
    affiliateLink: p.affiliateLink || "#",
    badge: badges,
    isPopular:
      badges.includes("best_seller") ||
      badges.includes("amazon_choice") ||
      badges.includes("top_deal"),
    isNew: badges.includes("new_arrival") || badges.includes("trending"),
    // Extra Sanity fields
    discount: p.discount || undefined,
    availability: p.availability || undefined,
    delivery: p.delivery || undefined,
  };
}

/**
 * Maps a raw Sanity category document to the Category shape
 * expected by CategoryCard and other UI components.
 */
export function mapSanityCategory(c) {
  if (!c) return null;

  const imageUrl = c.image
    ? urlForImage(c.image).width(800).url()
    : "/placeholder-category.png";

  return {
    id: c._id,
    name: c.name || "Unnamed Category",
    slug: c.slug?.current || "",
    description: c.description || "",
    image: imageUrl,
    icon: c.icon || undefined,
  };
}
