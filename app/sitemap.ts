import type { MetadataRoute } from "next";
import { readdir } from "node:fs/promises";
import { join } from "node:path";

const baseUrl = "https://kynesia.com.br";

async function getBlogRoutes(): Promise<string[]> {
  const blogDir = join(process.cwd(), "app", "blog");
  const entries = await readdir(blogDir, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => `/blog/${entry.name}`)
    .sort((a, b) => a.localeCompare(b));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogRoutes = await getBlogRoutes();

  const staticRoutes = ["/", "/blog", "/checkout", "/planos", "/start-free", "/sucesso"];
  const allRoutes = [...new Set([...staticRoutes, ...blogRoutes])];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("/blog/") ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/blog" ? 0.9 : route.startsWith("/blog/") ? 0.8 : 0.7,
  }));
}
