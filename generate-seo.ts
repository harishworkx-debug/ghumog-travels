import fs from 'fs';
import path from 'path';

// Instead of importing data.ts and triggering asset load errors in Node,
// we simply parse the slug definitions using Regex directly from the source code.
const dataContent = fs.readFileSync(path.resolve('src/lib/data.ts'), 'utf-8');
const seoContent = fs.readFileSync(path.resolve('src/lib/seo-models.ts'), 'utf-8');

// Function to extract all slugs from a specific array in the file string
function extractSlugs(content: string, arrayName: string): string[] {
  const regex = new RegExp(`export const ${arrayName}[\\s\\S]*?(?=export const|$)`);
  const match = content.match(regex);
  if (!match) return [];
  
  const block = match[0];
  const slugs: string[] = [];
  const slugRegex = /slug:\s*['"]([^'"]+)['"]/g;
  let slugMatch;
  while ((slugMatch = slugRegex.exec(block)) !== null) {
    slugs.push(slugMatch[1]);
  }
  return slugs;
}

const HOTELS = extractSlugs(dataContent, 'HOTELS');
const BLOGS = extractSlugs(dataContent, 'BLOGS');
const CITIES = extractSlugs(seoContent, 'CITIES');
const AREAS = extractSlugs(seoContent, 'AREAS');
const DESTINATIONS = extractSlugs(seoContent, 'DESTINATIONS');

const DOMAIN = 'https://ghumog.com';

const sitemapUrls = new Map<string, { changefreq: string, priority: string }>();

function addUrl(path: string, changefreq: string, priority: string) {
  const loc = `${DOMAIN}${path}`;
  if (!sitemapUrls.has(loc)) {
    sitemapUrls.set(loc, { changefreq, priority });
  }
}

// Add static pages
addUrl('/', 'daily', '1.0');
addUrl('/hotels', 'daily', '0.9');
addUrl('/blog', 'daily', '0.9');

const IGNORED_HOTEL_SLUGS = new Set(['exterior', 'rooms', 'food', 'parking', 'pool']);

DESTINATIONS.forEach((slug) => {
  addUrl(`/destinations/${slug}`, 'weekly', '0.8');
});

CITIES.forEach((slug) => {
  addUrl(`/hotels/${slug}`, 'weekly', '0.8');
});

AREAS.forEach((slug) => {
  addUrl(`/hotels/${slug}`, 'weekly', '0.7');
});

HOTELS.forEach((slug) => {
  if (IGNORED_HOTEL_SLUGS.has(slug)) return;
  addUrl(`/hotels/${slug}`, 'weekly', '0.9');
});

BLOGS.forEach((slug) => {
  addUrl(`/blog/${slug}`, 'monthly', '0.7');
});

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

for (const [loc, data] of sitemapUrls.entries()) {
  xml += `  <url>\n    <loc>${loc}</loc>\n    <changefreq>${data.changefreq}</changefreq>\n    <priority>${data.priority}</priority>\n  </url>\n`;
}

xml += `</urlset>`;

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml
`;

const distDir = path.resolve(process.cwd(), 'dist');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml);
console.log('✅ sitemap.xml generated dynamically');

fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt);
console.log('✅ robots.txt generated');
