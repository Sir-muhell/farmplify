import type { BlogPost } from "../components/BlogCard";

/**
 * Shape your API can return. Adjust fields to match your backend.
 * Common patterns: REST array of posts, or { data: [...], meta: {} }
 */
export interface BlogPostApiItem {
  id: string | number;
  slug?: string;
  title: string;
  excerpt?: string;
  description?: string;
  content?: string;
  category?: string;
  category_name?: string;
  image?: string;
  featured_image?: string;
  thumbnail?: string;
  author_name?: string;
  authorName?: string;
  author_avatar?: string;
  authorAvatar?: string;
  author_image?: string;
  published_at?: string;
  date?: string;
  created_at?: string;
  updated_at?: string;
  [key: string]: unknown;
}

export type BlogApiResponse = BlogPostApiItem[] | { data: BlogPostApiItem[]; [key: string]: unknown };

function parseDate(raw: string | undefined): string {
  if (!raw) return "";
  const d = new Date(raw);
  if (Number.isNaN(d.getTime())) return raw;
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

/**
 * Maps an API item to the BlogPost shape used by BlogCard.
 * Customize field names to match your API.
 */
export function mapApiPostToBlogPost(item: BlogPostApiItem): BlogPost {
  const image =
    item.image ?? item.featured_image ?? item.thumbnail ?? "";
  const description = item.excerpt ?? item.description ?? "";
  const category = item.category ?? item.category_name ?? "Blog";
  const authorName = item.author_name ?? item.authorName ?? "Farmplify";
  const authorAvatar = item.author_avatar ?? item.authorAvatar ?? item.author_image;
  const dateRaw =
    item.published_at ?? item.date ?? item.created_at ?? item.updated_at;
  const link = item.slug ? `/blog/${item.slug}` : undefined;

  return {
    image,
    category,
    title: item.title,
    description,
    authorName,
    authorAvatar,
    date: parseDate(dateRaw),
    link,
  };
}

function getPostsFromResponse(response: BlogApiResponse): BlogPostApiItem[] {
  if (Array.isArray(response)) return response;
  if (response?.data && Array.isArray(response.data)) return response.data;
  return [];
}

const BLOG_API_URL = import.meta.env.VITE_BLOG_API_URL as string | undefined;

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  if (!BLOG_API_URL?.trim()) {
    return [];
  }
  const res = await fetch(BLOG_API_URL, {
    headers: { Accept: "application/json" },
  });
  if (!res.ok) {
    throw new Error(`Blog API error: ${res.status} ${res.statusText}`);
  }
  const json: BlogApiResponse = await res.json();
  const items = getPostsFromResponse(json);
  return items.map(mapApiPostToBlogPost);
}
