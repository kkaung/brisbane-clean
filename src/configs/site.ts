import { Icons } from '@/components/icons';
import type { FooterItem, MainNavItem } from '@/types';

export type SiteConfig = typeof siteConfig;

const links = {
    facebook: 'https://www.facebook.com/p/Master-Maid-61557584825753/',
    instagram: 'https://www.instagram.com/mastermaidau',
    twitter: 'https://twitter.com/mastermaid_',
    pinterest: 'https://www.pinterest.com/mastermaid_',
    linkin: 'https://www.linkedin.com/company/master-maid',
    youtube: 'https://www.youtube.com/channel/UC5sXd89738AKwrieLN00xbQ',
    googlemap: '',

    yelp: 'https://www.yelp.com/biz/',
};

export const siteConfig = {
    logo: 'Master Maid Brisbane',
    name: 'Master Maid Brisbane',
    title: `Master Maid Brisbane`,
    description: `Our top-rated cleaning services come with a 200% satisfaction guarantee. We deliver sparkling results you'll love with our professional cleaners. Book online in 60 seconds!`,
    url: 'https://mastermaid.com.au',
    ogImage: 'https://mastermaid.com.au/opengraph-image.png',
    mainNav: [
        {
            title: 'Services',
            items: [
                {
                    title: 'Deep Cleaning',
                    href: '/deep-cleaning-brisbane',
                },
                {
                    title: 'Regular Cleaning',
                    href: '/regular-cleaning-brisbane',
                },
                {
                    title: 'Bond Cleaning',
                    href: '/bond-cleaning-brisbane',
                },
                {
                    title: 'Office Cleaning',
                    href: '/office-cleaning-brisbane',
                },
                {
                    title: 'Carpet Cleaning',
                    href: '/carpet-cleaning-brisbane',
                },
                {
                    title: 'Oven Cleaning',
                    href: '/oven-cleaning-brisbane',
                },
                {
                    title: 'Window Cleaning',
                    href: '/window-cleaning-brisbane',
                },
                {
                    title: 'After Builder Cleaning',
                    href: '/after-builder-cleaning-brisbane',
                },
                {
                    title: 'Airbnb Cleaning',
                    href: '/airbnb-cleaning-brisbane',
                },
            ],
        },
        {
            title: 'Pricing',
            href: '/house-cleaning-pricing-brisbane',
        },
    ] satisfies MainNavItem[],
    links,
    footerNav: [
        {
            title: 'Services',
            items: [
                {
                    title: 'Deep Cleaning Brisbane',
                    href: '/deep-cleaning-brisbane',
                },
                {
                    title: 'Regular Cleaning Brisbane',
                    href: '/regular-cleaning-brisbane',
                },
                {
                    title: 'Bond Cleaning Brisbane',
                    href: '/bond-cleaning-brisbane',
                },
                {
                    title: 'Office Cleaning Brisbane',
                    href: '/office-cleaning-brisbane',
                },
                {
                    title: 'Oven Cleaning Brisbane',
                    href: '/oven-cleaning-brisbane',
                },
                {
                    title: 'Carpet Cleaning Brisbane',
                    href: '/carpet-cleaning-brisbane',
                },
                {
                    title: 'Window Cleaning Brisbane',
                    href: '/window-cleaning-brisbane',
                },
                {
                    title: 'After Builder Cleaning Brisbane',
                    href: '/after-builder-cleaning-brisbane',
                },
                {
                    title: 'Airbnb Cleaning Brisbane',
                    href: '/airbnb-cleaning-brisbane',
                },
                {
                    title: 'House Cleaning Service Brisbane',
                    href: '/',
                },
            ],
        },
        {
            title: 'Useful Links',
            items: [
                { title: 'Contact Us', href: '/contact' },
                { title: 'Blog', href: '/blog' },
                { title: 'Pricing', href: '/house-cleaning-pricing-brisbane' },
                { title: 'Checklist', href: '/house-cleaning-checklist' },
                { title: 'FAQs', href: '/frequently-asked-questions' },
                { title: 'Privacy Policy', href: '/privacy' },
                { title: 'Terms And Conditions', href: '/terms' },
            ],
        },
        {
            title: 'Company',
            items: [{ title: 'About Us', href: '/about-us' }],
        },
    ] satisfies FooterItem[],
    business: {
        email: 'contact@mastermaid.com.au',
        phone: '+61 414076980',
        address: 'Suite 101, 3/123 Albert St, Brisbane City QLD 4000',
        openingHour: 'Mon – Sun: 9:00 AM – 5:00 PM',
    },
    rating: {
        ratingValue: '4.9',
        ratingCount: 727,
    },
};

export const siteServices: {
    title: string;
    slug: string;
    icon?: keyof typeof Icons;
}[] = [];
