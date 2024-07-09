import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const hostname = 'https://runpakistan.com';
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/club-in-pakistan', changefreq: 'weekly', priority: 0.8 },
  { url: '/margalla-backyard-ultra-2024', changefreq: 'monthly', priority: 0.7 },
  { url: '/galiyat-mountain-trail-2024', changefreq: 'monthly', priority: 0.7 },
  { url: '/inter-club-hill-half-marathon-2025', changefreq: 'monthly', priority: 0.7 },
  { url: '/islamabad-marathon-2025', changefreq: 'monthly', priority: 0.7 },
  { url: '/capital-half-marathon-2025', changefreq: 'monthly', priority: 0.7 },
  { url: '/karachi-marathon-2025', changefreq: 'monthly', priority: 0.7 },
  { url: '/lahore-marathon-2025', changefreq: 'monthly', priority: 0.7 },
  { url: '/abbot-world-major-marathons', changefreq: 'monthly', priority: 0.7 },
  { url: '/events-main-page', changefreq: 'monthly', priority: 0.7 },
  { url: '/five-training-plan', changefreq: 'monthly', priority: 0.7 },
  { url: '/ten-training-plan', changefreq: 'monthly', priority: 0.7 },
  { url: '/half-marathon-training-plan', changefreq: 'monthly', priority: 0.7 },
  { url: '/marathon-training-plan', changefreq: 'monthly', priority: 0.7 },
  { url: '/ultra-marathon-training-plan', changefreq: 'monthly', priority: 0.7 },
  { url: '/vo2-max-for-runners', changefreq: 'monthly', priority: 0.7 },
  { url: '/twenty-rule-for-life', changefreq: 'monthly', priority: 0.7 },
  { url: '/training-homepage', changefreq: 'monthly', priority: 0.7 },
  { url: '/news-main-page', changefreq: 'monthly', priority: 0.7 },
  { url: '/boston-marathon-2024', changefreq: 'monthly', priority: 0.7 },
  { url: '/london-marathon-2024', changefreq: 'monthly', priority: 0.7 },
  { url: '/barkley-jasmin-2024', changefreq: 'monthly', priority: 0.7 },
  { url: '/messenger-marathon-pheid', changefreq: 'monthly', priority: 0.7 },
  { url: '/hardest-geezer-africa', changefreq: 'monthly', priority: 0.7 },
  { url: '/kiptum-death', changefreq: 'monthly', priority: 0.7 },
  { url: '/beijing-contro-2024', changefreq: 'monthly', priority: 0.7 },
  { url: '/injury-homepage', changefreq: 'monthly', priority: 0.7 },
  { url: '/injury-hamstring', changefreq: 'monthly', priority: 0.7 },
  { url: '/injury-prevention', changefreq: 'monthly', priority: 0.7 },
  { url: '/injury-itband', changefreq: 'monthly', priority: 0.7 },
  { url: '/injury-nutrition', changefreq: 'monthly', priority: 0.7 },
  { url: '/injury-piriformis', changefreq: 'monthly', priority: 0.7 },
  { url: '/injury-plantar', changefreq: 'monthly', priority: 0.7 },
  { url: '/injury-recovery', changefreq: 'monthly', priority: 0.7 },
  { url: '/injury-shin', changefreq: 'monthly', priority: 0.7 },
  { url: '/injury-knee-comeback', changefreq: 'monthly', priority: 0.7 },
  { url: '/injury-knee-common-injury', changefreq: 'monthly', priority: 0.7 },
  { url: '/injury-knee-common-rehab', changefreq: 'monthly', priority: 0.7 },
  { url: '/injury-knee-over-use', changefreq: 'monthly', priority: 0.7 },
  { url: '/injury-knee-running-bad', changefreq: 'monthly', priority: 0.7 },
  { url: '/injury-knee-running-surface', changefreq: 'monthly', priority: 0.7 },
  { url: '/injury-knee-running-technique', changefreq: 'monthly', priority: 0.7 },
  { url: '/injury-knee-strength', changefreq: 'monthly', priority: 0.7 },
];

const sitemap = new SitemapStream({ hostname });
const writeStream = createWriteStream('./dist/sitemap.xml');

sitemap.pipe(writeStream);
links.forEach(link => sitemap.write(link));
sitemap.end();

streamToPromise(sitemap).then(() => {
  console.log('Sitemap created successfully.');
}).catch(console.error);
