import { absoluteUrl } from '@/lib/utils';
import { allPosts, allPages, allAuthors } from 'contentlayer/generated';
import { type MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const pagesRoutes = allPages.map(page => ({
        url: absoluteUrl(`/${page.slugAsParams}`),
        lastModified: new Date().toISOString(),
    }));

    const postsRoutes = allPosts.map(post => ({
        url: absoluteUrl(`${post.slug}`),
        lastModified: new Date().toISOString(),
    }));

    const authorsRoutes = allAuthors.map(post => ({
        url: absoluteUrl(`${post.slug}`),
        lastModified: new Date().toISOString(),
    }));

    const routes = [
        '',
        '/cleaning-services',
        '/pricing',
        '/house-cleaning-pricing-brisbane',
        '/blog',
        '/booking',
        '/frequently-asked-questions',
        '/house-cleaning-checklist',

        '/deep-cleaning-brisbane',
        '/regular-cleaning-brisbane',
        '/end-of-lease-cleaning-brisbane',
        '/office-cleaning-brisbane',
        '/oven-cleaning-brisbane',
        '/carpet-cleaning-brisbane',
        '/window-cleaning-brisbane',
        '/builder-cleaning-brisbane',
        '/airbnb-cleaning-brisbane',
    ].map(route => ({
        url: absoluteUrl(route),
        lastModified: new Date().toISOString(),
    }));

    return [...routes, ...pagesRoutes, ...postsRoutes, ...authorsRoutes];
}
