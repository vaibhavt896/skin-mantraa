import { MetadataRoute } from 'next';
import { SERVICES } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://skinmantraa.com';

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/results',
    '/skin-analysis',
    '/contact',
    '/skin-guide',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Add dynamic service routes
  const serviceRoutes = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Article slugs (as per plan)
  const articleSlugs = [
    'sun-protection-guide',
    'adult-acne-causes',
    'laser-hair-removal-myths',
    'anti-aging-routine',
    'chemical-peel-benefits',
    'prp-hair-restoration',
    'pigmentation-solutions'
  ];

  const articleRoutes = articleSlugs.map((slug) => ({
    url: `${baseUrl}/skin-guide/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...articleRoutes];
}
