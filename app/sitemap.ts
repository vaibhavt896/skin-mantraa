import { MetadataRoute } from 'next';
import { SERVICES } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://skinmantraa.in';

  const staticRoutes = [
    { path: '', priority: 1.0 },
    { path: '/about', priority: 0.9 },
    { path: '/dermatologist-kanpur', priority: 0.95 },
    { path: '/skin-specialist-swaroop-nagar', priority: 0.9 },
    { path: '/laser-hair-removal-kanpur', priority: 0.9 },
    { path: '/about/dr-mamta-bhura', priority: 0.9 },
    { path: '/services', priority: 0.85 },
    { path: '/results', priority: 0.75 },
    { path: '/skin-analysis', priority: 0.7 },
    { path: '/contact', priority: 0.8 },
    { path: '/skin-guide', priority: 0.8 },
  ].map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority,
  }));

  const serviceRoutes = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const articleSlugs = [
    'hifu-treatment-kanpur',
    'laser-hair-removal-kanpur',
    'laser-hair-removal-cost-kanpur',
    'prp-hair-loss-treatment-kanpur',
    'gfc-vs-prp-hair-loss',
    'botox-vs-dermal-fillers-kanpur',
    'botox-cost-kanpur',
    'melasma-treatment-kanpur',
    'acne-scar-treatment-kanpur',
  ];

  const articleRoutes = articleSlugs.map((slug) => ({
    url: `${baseUrl}/skin-guide/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...articleRoutes];
}
