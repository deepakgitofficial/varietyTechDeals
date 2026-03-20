import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// client (reuse same config)
const client = createClient({
  projectId: "qx0ih5qz",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

// builder
const builder = imageUrlBuilder(client);

// reusable function
export function urlForImage(source) {
  return builder.image(source);
}