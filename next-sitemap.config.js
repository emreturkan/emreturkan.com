/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://emreturkan.com",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ["/api/*", "/_next/*", "/404", "/500"],
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
        allow: ["/photos", "/og-image.png"],
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
      // Block AI crawlers that don't respect content
      {
        userAgent: "GPTBot",
        disallow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        disallow: "/",
      },
      {
        userAgent: "CCBot",
        disallow: "/",
      },
      {
        userAgent: "anthropic-ai",
        disallow: "/",
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
      "/i-like-it": { priority: 0.6, changefreq: "monthly" },
    };

    const config_route = routeConfig[path] || { priority: 0.5, changefreq: "monthly" };

    return {
      loc: path,
      changefreq: config_route.changefreq,
      priority: config_route.priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: `https://emreturkan.com${path}`,
          hreflang: "en",
        },
        {
          href: `https://emreturkan.com${path}`,
          hreflang: "x-default",
        },
      ],
    };
  },
  additionalPaths: async (config) => {
    return [
      await config.transform(config, "/"),
      await config.transform(config, "/photos"),
      await config.transform(config, "/techs"),
      await config.transform(config, "/bookmarks"),
      await config.transform(config, "/i-like-it"),
    ];
  },
};
