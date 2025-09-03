const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const sitemap = new SitemapStream({ hostname: 'https://yourdomain.com' });

// Add routes
sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
sitemap.write({ url: '/about', changefreq: 'weekly', priority: 0.8 });
sitemap.write({ url: '/contact', changefreq: 'monthly', priority: 0.7 });

sitemap.end();

streamToPromise(sitemap).then((data) => {
  createWriteStream('./public/sitemap.xml').write(data.toString());
  console.log("✅ sitemap.xml generated in /public");
});
