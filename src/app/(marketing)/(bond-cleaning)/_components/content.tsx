import { Shell } from '@/components/shell';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import React from 'react';
import Commitment from '@/components/commitment';

import Hero from './hero';
import Features from './features';
import Reviews from './reviews';
import Services from './services';

interface ContentProps {
    city: string;
    suburb?: string;
    segments: { title: string; href: string }[];
}

export default function Content({ city, suburb, segments }: ContentProps) {
    return (
        <Shell>
            <Hero location={city} />
            <Reviews location={city} />
            <Features location={city} />
            <Services location={city} />
            <Commitment />
            <Breadcrumbs segments={segments} dottable={false} />
        </Shell>
    );
}
