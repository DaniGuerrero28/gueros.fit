import { SITE_CONFIG, SITEMAP_CONFIG } from "./config";

export default function sitemap() {
  const baseUrl = SITE_CONFIG.siteUrl;

  return SITEMAP_CONFIG.pages.map(page => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
