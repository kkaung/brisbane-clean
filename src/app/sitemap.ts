import { absoluteUrl } from '@/lib/utils';
import { allPosts, allPages } from 'contentlayer/generated';
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

    const routes = [
        '',
        '/imprint',
        '/blog',
        '/services',
        '/locations',
        '/careers',
        '/house-cleaning-pricing-brisbane',
        '/about-us',

        '/deep-cleaning-brisbane',
        'regular-cleaning-brisbane',
        '/bond-cleaning-brisbane',
        '/office-cleaning-brisbane',
        '/oven-cleaning-brisbane',
        '/carpet-cleaning-brisbane',
        '/window-cleaning-brisbane',
        '/after-builder-cleaning-brisbane',
        '/airbnb-cleaning-brisbane',
    ].map(route => ({
        url: absoluteUrl(route),
        lastModified: new Date().toISOString(),
    }));

    return [...routes, ...pagesRoutes, ...postsRoutes];
}
