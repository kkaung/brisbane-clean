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
    logo: 'MasterMaid',
    name: 'Master Maid',
    title: `Master Maid Brisbane - Professional Cleaning Serivce in Brisbane`,
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
                    title: 'Oven Cleaning',
                    href: '/oven-cleaning-brisbane',
                },
                {
                    title: 'Carpet Cleaning',
                    href: '/carpet-cleaning-brisbane',
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
            items: [
                { title: 'About Us', href: '/about-us' },
                { title: 'Careers', href: '/careers' },
                { title: 'Sitemap', href: '/sitemap' },
            ],
        },
    ] satisfies FooterItem[],
    business: {
        email: 'contact@mastermaid.com.au',
        phone: '1302 245 417',
        address: '19 Ann St, Brisbane City QLD 4000',
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
