import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `${location}'s #1 Deep Cleaning Service 🥇`,
        description: `Best Deep Cleaning Service in ${location} ✔️ 100% Guarantee ✔️ 5 Star-Rated Cleaning Service ✔️ Trusted & Vetted Cleaners ✔️ Instant Online Booking`,
        alternates: {
            canonical: pathname,
        },
    };
};
