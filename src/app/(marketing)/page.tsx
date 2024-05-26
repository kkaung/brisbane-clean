import React from 'react';
import { Shell } from '@/components/shell';
import { type Metadata } from 'next';
import About from '@/components/about';
import Commitment from '@/components/commitment';
import { siteConfig } from '@/configs/site';

import Services from './_components/services';
import Hero from './_components/hero';
import HowWork from './_components/how-work';
import Reviews from './_components/reviews';
import FAQs from './_components/faqs';
import Checklist from './_components/checklist';
import Features from './_components/features';
import Gurantee from './_components/gurantee';
import LatestBlog from './_components/latest-blog';

import { checkUserAgentForGooglebot } from '@/lib/next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: `#1 House Cleaning Service in Brisbane - ${siteConfig.title}`,
    description: `Our top-rated cleaning services come with a 200% satisfaction guarantee. We deliver sparkling results you'll love with our expert cleaners. Book online in 60 seconds!`,
};

export default function Page() {
    const isGooglebot = checkUserAgentForGooglebot();

    return (
        <>
            <Shell>
                <Hero />
                <Reviews location="Brisbane" />
                <HowWork />
                <Features />
                <Services />
                <Checklist />
                <Gurantee />
                <FAQs />
                <About />
                <LatestBlog />
                <Commitment />
            </Shell>
        </>
    );
}
