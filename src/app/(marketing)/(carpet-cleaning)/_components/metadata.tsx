import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `${location}'s #1 Carpet And Upholstery Cleaning Service 🥇`,
        description: `Best Carpet And Upholstery Cleaning Service in ${location} ✔️ 100% Guarantee ✔️ 5 Star-Rated Cleaning ✔️ Trusted & Vetted Cleaners ✔️ Instant Online Booking`,
        alternates: {
            canonical: pathname,
        },
        keywords: [
            'carpet cleaning',
            'carpet cleaner',
            'carpet cleaning perth',
            'carpet cleaner perth',
            'upholstery cleaner',
            'upholstery cleaner perth',
        ],
    };
};
