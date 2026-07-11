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

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${DOMAIN}/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${DOMAIN}/hotels</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${DOMAIN}/blog</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
`;

DESTINATIONS.forEach((slug) => {
  xml += `  <url>\n    <loc>${DOMAIN}/destinations/${slug}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
});

CITIES.forEach((slug) => {
  xml += `  <url>\n    <loc>${DOMAIN}/hotels/${slug}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
});

AREAS.forEach((slug) => {
  xml += `  <url>\n    <loc>${DOMAIN}/hotels/${slug}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
});

HOTELS.forEach((slug) => {
  xml += `  <url>\n    <loc>${DOMAIN}/hotels/${slug}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
});

BLOGS.forEach((slug) => {
  xml += `  <url>\n    <loc>${DOMAIN}/blog/${slug}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
});

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
