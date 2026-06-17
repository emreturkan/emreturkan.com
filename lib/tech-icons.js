// Resolves a technology name to a reliable, brand-colored SVG icon.
// Icons come from a single dependable host (cdn.simpleicons.org), with a
// small devicon fallback for the few brands Simple Icons doesn't carry.
// This replaces the previous mix of flaky CDNs (worldvectorlogo, logowik,
// seeklogo, redbubble, twimg, ...) that 404'd or weren't whitelisted.
//
// To give a new tech a clean icon: add a row in the DB whose name matches
// one of the keys below (matching ignores case/spaces/punctuation).

const SIMPLE_ICONS = {
  // ── Languages ──
  javascript: "javascript",
  typescript: "typescript",
  python: "python",

  // ── Frameworks / libraries ──
  react: "react",
  rnative: "react",
  reactnative: "react",
  expo: "expo",
  next: "nextdotjs",
  nextjs: "nextdotjs",
  svelte: "svelte",
  vue: "vuedotjs",
  threejs: "threedotjs",
  three: "threedotjs",

  // ── UI / styling ──
  html: "html5",
  css: "css",
  sass: "sass",
  tailwind: "tailwindcss",
  bootstrap: "bootstrap",
  mantine: "mantine",
  shadcnui: "shadcnui",
  radixui: "radixui",
  radix: "radixui",
  framermotion: "framer",
  framer: "framer",

  // ── State / data fetching / forms ──
  redux: "redux",
  swr: "swr",
  reactquery: "reactquery",
  tanstackquery: "reactquery",
  axios: "axios",
  formhook: "reacthookform",
  reacthookform: "reacthookform",
  zod: "zod",

  // ── Backend / database ──
  nodejs: "nodedotjs",
  expressjs: "express",
  express: "express",
  fastify: "fastify",
  supabase: "supabase",
  postgresql: "postgresql",
  postgres: "postgresql",
  prisma: "prisma",
  graphql: "graphql",
  koa: "koa",
  mongodb: "mongodb",
  redis: "redis",
  knex: "knexdotjs",
  stripe: "stripe",
  jwt: "jsonwebtokens",
  jsonwebtoken: "jsonwebtokens",
  socketio: "socketdotio",
  socket: "socketdotio",
  styledcomponents: "styledcomponents",
  esbuild: "esbuild",
  vuex: "vuedotjs",

  // ── Tooling / DevOps ──
  docker: "docker",
  nx: "nx",
  vite: "vite",
  puppeteer: "puppeteer",
  vitest: "vitest",
  jest: "jest",
  cypress: "cypress",
  eslint: "eslint",
  prettier: "prettier",
  storybook: "storybook",
  pnpm: "pnpm",
  bun: "bun",
  githubactions: "githubactions",
  git: "git",
  github: "github",
  vercel: "vercel",
  cloudflare: "cloudflare",
  strapi: "strapi",
  figma: "figma",

  // ── AI / LLM ──
  claude: "claude",
  anthropic: "anthropic",
  cursor: "cursor",
  githubcopilot: "githubcopilot",
  copilot: "githubcopilot",
  v0: "v0",
  gemini: "googlegemini",
  googlegemini: "googlegemini",
  huggingface: "huggingface",
  langchain: "langchain",
  ollama: "ollama",
  perplexity: "perplexity",
  replicate: "replicate",

  // ── Creative ──
  unity: "unity",
  blender: "blender",

  // ── Daily tools / apps ──
  raycast: "raycast",
  bitbucket: "bitbucket",
  youtubemusic: "youtubemusic",
  notion: "notion",
  arc: "arc",
  spotify: "spotify",
  linear: "linear",
  warp: "warp",
  obsidian: "obsidian",
  ghostty: "ghostty",
};

// Brands Simple Icons doesn't carry — served from devicon instead.
const DEVICON = {
  csharp: "csharp/csharp-original",
  playwright: "playwright/playwright-original",
  vscode: "vscode/vscode-original",
  aws: "amazonwebservices/amazonwebservices-original-wordmark",
  amazonwebservices: "amazonwebservices/amazonwebservices-original-wordmark",
  feathers: "feathersjs/feathersjs-original",
  feathersjs: "feathersjs/feathersjs-original",
};

const normalize = (name) =>
  (name || "").toLowerCase().replace(/[^a-z0-9]/g, "");

// `color` (hex without #) forces a Simple Icons tint — handy for near-black
// brand marks (GitHub, Vercel…) that vanish on a dark tile. Ignored by devicon.
export const getTechIcon = (name, color) => {
  const key = normalize(name);

  const slug = SIMPLE_ICONS[key];
  if (slug) {
    return color
      ? `https://cdn.simpleicons.org/${slug}/${color}`
      : `https://cdn.simpleicons.org/${slug}`;
  }

  const devicon = DEVICON[key];
  if (devicon) {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${devicon}.svg`;
  }

  return null;
};
