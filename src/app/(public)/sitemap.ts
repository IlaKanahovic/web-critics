import type { MetadataRoute } from 'next';
import { prisma } from "@/lib/db/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://web-critics.ru';

    const staticRoutes = [
        { route: '', priority: 1.0, freq: 'daily' },
        { route: '/about', priority: 0.8, freq: 'monthly' },
        { route: '/contacts', priority: 0.8, freq: 'monthly' },
        { route: '/portfolio', priority: 0.9, freq: 'weekly' },
        { route: '/reviews', priority: 0.8, freq: 'weekly' },

        { route: '/blog', priority: 0.9, freq: 'weekly' },
        { route: '/blog/cases', priority: 0.7, freq: 'weekly' },
        { route: '/blog/guides', priority: 0.7, freq: 'weekly' },
        { route: '/blog/business-solutions', priority: 0.7, freq: 'weekly' },
        { route: '/blog/technologies', priority: 0.7, freq: 'weekly' },
        { route: '/blog/stocks', priority: 0.7, freq: 'weekly' },

        { route: '/services/ai', priority: 0.7, freq: 'monthly' },
        { route: '/services/automation', priority: 0.7, freq: 'monthly' },
        { route: '/services/growth-analytics', priority: 0.7, freq: 'monthly' },
        { route: '/services/reliability', priority: 0.7, freq: 'monthly' },
        { route: '/services/web-development', priority: 0.8, freq: 'monthly' },
        { route: '/services/web-development/complex-webproducts', priority: 0.6, freq: 'monthly' },
        { route: '/services/web-development/interfaces', priority: 0.6, freq: 'monthly' },
        { route: '/services/web-development/online-stores', priority: 0.6, freq: 'monthly' },
        { route: '/services/web-development/sites', priority: 0.6, freq: 'monthly' },
        { route: '/services/web-development/web-application', priority: 0.6, freq: 'monthly' },

        { route: '/documents/guides', priority: 0.3, freq: 'yearly' },
        { route: '/documents/legal', priority: 0.3, freq: 'yearly' },
        { route: '/documents/legal/company-details', priority: 0.3, freq: 'yearly' },
        { route: '/documents/legal/consent-personal-data', priority: 0.3, freq: 'yearly' },
        { route: '/documents/legal/consent-receive-advertising', priority: 0.3, freq: 'yearly' },
        { route: '/documents/legal/cookie-policy', priority: 0.3, freq: 'yearly' },
        { route: '/documents/legal/offer', priority: 0.3, freq: 'yearly' },
    ].map((item) => ({
        url: `${baseUrl}${item.route}`,
        lastModified: new Date(),
        changeFrequency: item.freq as 'daily' | 'weekly' | 'monthly' | 'yearly',
        priority: item.priority,
    }));

    const articles = await prisma.article.findMany({
        select: { slug: true, date: true }
    });
    const articleRoutes = articles.map((article) => ({
        url: `${baseUrl}/blog/${article.slug}`,
        lastModified: article.date || new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    const projects = await prisma.case.findMany({
        select: { slug: true }
    });
    const projectRoutes = projects.map((project) => ({
        url: `${baseUrl}/portfolio/${project.slug}`,
        lastModified: new Date(), 
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticRoutes, ...articleRoutes, ...projectRoutes];
}