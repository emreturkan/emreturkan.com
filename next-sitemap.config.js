/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://emreturkan.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/*", "/_next/*"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
    ],
  },
  transform: async (config, path) => {
    // Custom priority for different pages
    let priority = 0.7;
    let changefreq = "weekly";

    if (path === "/") {
      priority = 1.0;
      changefreq = "daily";
    } else if (path === "/photos") {
      priority = 0.8;
      changefreq = "weekly";
    } else if (path === "/techs") {
      priority = 0.8;
      changefreq = "monthly";
    } else if (path === "/bookmarks") {
      priority = 0.6;
      changefreq = "weekly";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
