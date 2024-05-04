import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `#1 After Builder Cleaning Service in ${location} - Post Construction Cleaner ${location}`,
        description: `Top-rated after builders cleaning services in ${location}. Reliable, experienced & insured cleaners. Book online in 60 seconds!`,
        alternates: {
            canonical: pathname,
        },
    };
};
