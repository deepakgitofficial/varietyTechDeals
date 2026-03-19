import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "qx0ih5qz",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});