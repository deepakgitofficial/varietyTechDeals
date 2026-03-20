"use client";
import { client } from "@/lib/sanity";
import imageUrlBuilder, { createImageUrlBuilder } from "@sanity/image-url";

export const revalidate = 60;

// Image builder
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

// Fetch function
async function getProducts() {
  return await client.fetch(`*[_type == "product"]{
    _id,
    title,
    slug,
    mainImage,
    price,
    originalPrice,
    discount,
    rating,
    reviewCount,
    brand,
    affiliateLink,
    badge
  }`);
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div style={{ padding: "20px" }}>
      <h1>🔥 Tech Deals</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
        gap: "20px"
      }}>
        
        {products.map((item) => (
          <div key={item._id} style={{
            border: "1px solid #eee",
            padding: "15px",
            borderRadius: "10px"
          }}>

            {/* 🖼️ Image */}
            <img
              src={urlFor(item.mainImage).width(300).url()}
              alt={item.title}
              style={{ width: "100%", height: "200px", objectFit: "contain" }}
            />

            {/* 🏷️ Badge */}
            {item.badge && (
              <p style={{ color: "red", fontWeight: "bold" }}>
                {item.badge}
              </p>
            )}

            {/* 📝 Title */}
            <h3>{item.title}</h3>

            {/* ⭐ Rating */}
            <p>
              ⭐ {item.rating} ({item.reviewCount})
            </p>

            {/* 💰 Price */}
            <p>
              <strong>₹{item.price}</strong>{" "}
              {item.originalPrice && (
                <span style={{ textDecoration: "line-through", color: "gray" }}>
                  ₹{item.originalPrice}
                </span>
              )}
            </p>

            {/* 🎯 Discount */}
            {item.discount && (
              <p style={{ color: "green" }}>
                {item.discount}% OFF
              </p>
            )}

            {/* 🛒 Button */}
            <a
              href={item.affiliateLink}
              target="_blank"
              style={{
                display: "inline-block",
                marginTop: "10px",
                background: "orange",
                padding: "8px 12px",
                color: "#000",
                textDecoration: "none",
                borderRadius: "5px"
              }}
            >
              Buy on Amazon
            </a>

          </div>
        ))}

      </div>
    </div>
  );
}