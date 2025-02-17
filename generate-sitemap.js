const fs = require("fs");
const path = require("path");

const pages = ["/", "/rooms", "/rooms/add", "/rooms/my", "/bookings"];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      return `
        <url>
          <loc>https://bookworksphere.vercel.app${page}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
      `;
    })
    .join("")}
</urlset>`;

fs.writeFileSync(path.join(__dirname, "public", "sitemap.xml"), sitemap);
console.log("Sitemap generated!");
