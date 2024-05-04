import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `#1 Commercial Office Cleaning Service in ${location} - Office Cleaner ${location}`,
        description: `Get a sparkling clean office with our professional office cleaners. ${location}'s trusted commercial office cleaning service. Book online in 60 seconds!`,
        alternates: {
            canonical: pathname,
        },
    };
};
