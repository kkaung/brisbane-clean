import React from 'react';
import { type Metadata } from 'next';

import Content from './_components/content';

export const metadata: Metadata = {
    title: `Brisbane's #1 House Cleaning And Maid Services`,
    description: `Best Cleaning Service in Brisbane ✔️ 100% Guarantee ✔️ 5 Star-Rated Cleaning ✔️ Trusted & Vetted Cleaners ✔️ Instant Online Booking
`,
};

export default function Page() {
    return <Content location="Brisbane" />;
}
