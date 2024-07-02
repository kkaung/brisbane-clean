import { cn } from '@/lib/utils';
import React, { type HTMLAttributes } from 'react';
import Image from 'next/image';
import BookOnlieImage from '/public/assets/images/book-online.png';
import WeCleanImage from '/public/assets/images/we-clean.png';
import YouRelaxImage from '/public/assets/images/you-relax.png';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';

interface HowWorkProps extends HTMLAttributes<HTMLElement> {}

export default function HowWork({ ...props }: HowWorkProps) {
    return (
        <section
            id="how-works"
            aria-labelledby="how-works-heading"
            className={cn(
                props.className,
                'space-y-12 max-w-5xl w-full mx-auto py-12 md:text-center'
            )}
            {...props}
        >
            <div className="font-extrabold text-4xl">How It Works</div>
            <div className="grid grid-cols-1 gap-6 grid-flow-row md:grid-cols-3">
                <div>
                    <div className="flex space-y-2 gap-4 sm:gap-6 md:flex-col md:gap-4">
                        <Image
                            width={150}
                            height={150}
                            src={BookOnlieImage}
                            className="md:mx-auto"
                            alt="Book Online"
                        />
                        <div className="space-y-3">
                            <div className="font-semibold text-lg">
                                1. Book Online
                            </div>
                            <div>
                                Book your cleaning service online in 60 seconds.
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex space-y-2 gap-4 sm:gap-6 md:flex-col md:gap-4">
                        <Image
                            width={150}
                            height={150}
                            src={WeCleanImage}
                            className="md:mx-auto"
                            alt="We Clean"
                        />
                        <div className="space-y-3">
                            <div className="font-semibold text-lg">
                                2. We Clean
                            </div>
                            <div>
                                Our cleaners will come over & professionally
                                clean your home.
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex space-y-2 gap-4 sm:gap-6 md:flex-col md:gap-4">
                        <Image
                            width={150}
                            height={150}
                            src={YouRelaxImage}
                            alt="Book Online"
                            className="md:mx-auto"
                        />
                        <div className="space-y-3">
                            <div className="font-semibold text-lg">
                                3. You Relax
                            </div>
                            <div>
                                Sit back, relax and have your rental bond
                                returned.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div>
                    <Link
                        href="/house-cleaning-pricing"
                        className={cn(buttonVariants())}
                    >
                        <Icons.dollarSign className="w-4 h-4 mr-1" /> View All
                        Pricings
                    </Link>
                </div>
            </div>
        </section>
    );
}
