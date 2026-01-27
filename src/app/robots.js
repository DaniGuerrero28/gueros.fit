import { SITE_CONFIG } from "./config";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_CONFIG.siteUrl}/sitemap.xml`,
  };
}
