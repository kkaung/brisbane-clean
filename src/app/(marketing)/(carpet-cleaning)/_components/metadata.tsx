import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `#1 Carpet Cleaning Service in ${location} - Carpet Cleaner ${location}`,
        description: `${location}'s top carpet cleaner tackles even the toughest stains. Breathe life back into your carpets! Book online in 60 seconds.`,
        alternates: {
            canonical: pathname,
        },
    };
};
