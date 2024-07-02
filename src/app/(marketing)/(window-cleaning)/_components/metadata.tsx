import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `${location} #1 Window Cleaning Service 🥇`,
        description: `Best Window Cleaning Service in ${location} ✔️ 100% Guarantee ✔️ 5 Star-Rated Bond Cleaning ✔️ Trusted & Vetted Cleaner ✔️ Instant Online Booking`,
        alternates: {
            canonical: pathname,
        },
    };
};
