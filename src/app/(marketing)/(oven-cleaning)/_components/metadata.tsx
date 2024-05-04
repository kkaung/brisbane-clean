import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `#1 Oven Cleaning Service in ${location} - Oven Cleaner ${location}`,
        description: `We are top-rated oven cleaning company in ${location}. Book online in 60 seconds!`,
        alternates: {
            canonical: pathname,
        },
    };
};
