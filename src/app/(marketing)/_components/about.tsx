import { headingVariants } from '@/components/page-header';
import { siteConfig } from '@/configs/site';
import { cn } from '@/lib/utils';
import React, { type HTMLAttributes } from 'react';

interface AboutPropse extends HTMLAttributes<HTMLElement> {
    location: string;
}
export default function About({location, ...props }: AboutPropse) {
    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className={cn(
                props.className,
                'p-12 space-y-12'
            )}
        >
            <h2 className={cn(headingVariants({}))}>
                Not Your Average House Cleaning Company in {location}
            </h2>
            <p>{siteConfig.description}</p>
        </section>
    );
}
