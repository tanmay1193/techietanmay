import { getCollection } from "astro:content";

export async function getAllSnippets() {
  return await getCollection("snippet");
}
