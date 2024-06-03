const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const initCronJobs = require("@components/page/bookmarks");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(3000, (err) => {
    if (err) {
      console.error("Error starting server:", err);
      process.exit(1);
    }
    console.log("> Ready on http://localhost:3000");
  });

  // Initialize cron jobs
  try {
    initCronJobs();
    console.log("Cron jobs initialized.");
  } catch (err) {
    console.error("Error initializing cron jobs:", err);
  }
});
