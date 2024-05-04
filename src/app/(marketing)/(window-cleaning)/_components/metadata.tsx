import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `#1 Residential Window Cleaning Service in ${location} - Window Cleaner ${location}`,
        description: `Crystal clear windows in ${location}! Get a free quote for professional residential window cleaning from trusted local companies.`,
        alternates: {
            canonical: pathname,
        },
    };
};
