import { Metadata } from 'next';
import { showcaseProjects } from '@/data/showcase';
import { ShowcaseClient } from '@/app/showcase/ShowcaseClient';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
    title: 'Showcase & Case Studies | Production Apps & Digital Platforms',
    description: 'Explore the engineering portfolio of Indivio Studio. In-depth case studies of production mobile apps (like Lele Delivery on Google Play Store), scalable web stores, and custom software systems.',
    keywords: [
        'Indivio Studio showcase',
        'Indivio Studio portfolio',
        'lele delivery app case study',
        'lele india web store Next.js',
        'software development case studies Bihar',
        'mobile app developers India portfolio',
        'production grade web applications',
    ],
    alternates: {
        canonical: `${siteConfig.url}/showcase`,
    },
    openGraph: {
        title: 'Showcase & Case Studies | Indivio Studio',
        description: 'Explore production mobile apps and scalable web platforms engineered by Indivio Studio.',
        url: `${siteConfig.url}/showcase`,
        images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: 'Indivio Studio Showcase' }],
    },
};

export default function ShowcasePage() {
    return (
        <div className="pt-24 min-h-screen">
            <ShowcaseClient projects={showcaseProjects} />
        </div>
    );
}
