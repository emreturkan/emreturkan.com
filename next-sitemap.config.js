/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://emreturkan.com",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  autoLastmod: false,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ["/api/*", "/_next/*", "/404", "/500", "/apple-icon"],
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/*", "/_next/*", "/404", "/500"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        crawlDelay: 1,
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/photos", "/og"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        crawlDelay: 1,
      },
      {
        userAgent: "Slurp",
        allow: "/",
      },
      {
        userAgent: "DuckDuckBot",
        allow: "/",
      },
      {
        userAgent: "facebookexternalhit",
        allow: "/",
      },
      {
        userAgent: "Twitterbot",
        allow: "/",
      },
      {
        userAgent: "LinkedInBot",
        allow: "/",
      },
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq for different pages
    const routeConfig = {
      "/": { priority: 1.0, changefreq: "daily" },
      "/photos": { priority: 0.9, changefreq: "weekly" },
      "/techs": { priority: 0.8, changefreq: "monthly" },
      "/bookmarks": { priority: 0.7, changefreq: "weekly" },
      "/spendwise": { priority: 0.9, changefreq: "weekly" },
      "/spendwise/privacy": { priority: 0.6, changefreq: "monthly" },
      "/spendwise/terms": { priority: 0.6, changefreq: "monthly" },
      "/spendwise/data-deletion": { priority: 0.6, changefreq: "monthly" },
    };

    const config_route = routeConfig[path] || { priority: 0.5, changefreq: "monthly" };

    return {
      loc: path,
      changefreq: config_route.changefreq,
      priority: config_route.priority,
    };
  },
};
