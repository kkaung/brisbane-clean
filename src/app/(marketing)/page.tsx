import React from 'react';
import { Shell } from '@/components/shell';
import { type Metadata } from 'next';
import Commitment from '@/components/commitment';
import Services from './_components/services';
import About from '@/components/about';

import Hero from './_components/hero';
import HowWork from './_components/how-work';
import Reviews from './_components/reviews';
import FAQs from './_components/faqs';
import Checklist from './_components/checklist';
import Features from './_components/features';
import Gurantee from './_components/gurantee';
import LatestBlog from './_components/latest-blog';

import Featuring from './_components/featuring';
import SocialVideos from '@/components/social-videos';
import { ServicesDialog } from '@/components/services-dialog';
import { siteConfig } from '@/configs/site';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: `${siteConfig.name}`,
    description: `Our top-rated cleaning services come with a 200% satisfaction guarantee. We deliver sparkling results you'll love with our expert cleaners. Book online in 60 seconds!`,
};

export default function Page() {
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
