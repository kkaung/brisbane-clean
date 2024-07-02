import { Icons } from '@/components/icons';
import type { FooterItem, MainNavItem } from '@/types';

export type SiteConfig = typeof siteConfig;

const links = {
    facebook: 'https://www.facebook.com/p/Master-Maid-61557584825753/',
    instagram: 'https://www.instagram.com/mastermaidau',
    twitter: 'https://twitter.com/mastermaid_',
    pinterest: 'https://www.pinterest.com/mastermaid_',
    linkedin: 'https://www.linkedin.com/company/master-maid',
    youtube: 'https://www.youtube.com/channel/UC5sXd89738AKwrieLN00xbQ',

    googlemap: '',
};

export const siteConfig = {
    logo: 'Master Maid',
    name: 'Master Maid',
    title: `Master Maid`,
    description: `Master Maid is a top-rated cleaning company in Brisbane, QLD. We offer tailored house cleaning and maid services for your homes, apartments and offices.`,
    url: 'https://mastermaid.com.au',
    domain: 'mastermaid.com.au',
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
                { title: 'Services', href: '/services' },
                { title: 'Locations', href: '/locations' },
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
            ],
        },
    ] satisfies FooterItem[],
    business: {
        email: 'contact@mastermaid.com.au',
        phone: '+61 414076980',
        address: 'Suite 101, 3/123 Albert St, Brisbane City QLD 4000',
        openingHour: 'Mon – Sun: 9:00 AM – 5:00 PM',
        detailsAddress: {
            streetAddress: 'Suite 101, 3/123 Albert St',
            addressLocality: 'Brisbane City',
            addressRegion: 'QLD',
            postalCode: '4000',
            addressCountry: 'Australia',
        },
    },
    rating: {
        ratingValue: '4.9',
        ratingCount: 1127,
    },
};

export const siteServices: {
    title: string;
    slug: string;
    icon?: keyof typeof Icons;
}[] = [];
