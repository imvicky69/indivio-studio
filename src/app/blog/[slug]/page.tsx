import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blogs';
import ArticleClient from './ArticleClient';
import { siteConfig } from '@/lib/siteConfig';

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const p = await params;
    const post = blogPosts.find((post) => post.slug === p.slug);

    if (!post) {
        return {
            title: 'Not Found | Indivio Studio',
        };
    }

    const url = `${siteConfig.url}/blog/${post.slug}`;

    return {
        title: `${post.title} | Indivio Studio Blog`,
        description: post.excerpt,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url,
            type: 'article',
            publishedTime: post.date,
            authors: [siteConfig.name],
            siteName: siteConfig.name,
            images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: post.title }],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [siteConfig.ogImage],
        },
    };
}

export default async function BlogArticlePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const p = await params;
    const post = blogPosts.find((post) => post.slug === p.slug);

    if (!post) {
        notFound();
    }

    const url = `${siteConfig.url}/blog/${post.slug}`;

    // Article schema for rich results
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url,
        },
        headline: post.title,
        description: post.excerpt,
        image: `${siteConfig.url}/images/indivio.png`,
        author: {
            '@type': 'Organization',
            name: siteConfig.name,
            url: siteConfig.url,
        },
        publisher: {
            '@type': 'Organization',
            name: siteConfig.name,
            logo: {
                '@type': 'ImageObject',
                url: `${siteConfig.url}/images/logo.png`,
            },
        },
        datePublished: post.date,
        dateModified: post.date,
        url: url,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ArticleClient slug={p.slug} />
        </>
    );
}
