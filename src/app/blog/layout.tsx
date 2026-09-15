import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
    title: "Blog & Engineering Insights | Web, Apps & ERP Strategies",
    description: "Insights on software engineering, web application architecture, mobile apps, and school management ERPs — practical blueprints by Indivio Studio.",
    keywords: [
        "web development blog",
        "app development tips India",
        "school ERP guide",
        "SEO tips small business tier 2 cities",
        "software company Nirmali",
        "custom web apps India",
        "Indivio Studio blog",
    ],
    alternates: {
        canonical: `${siteConfig.url}/blog`,
    },
    openGraph: {
        title: "Blog & Insights | Indivio Studio",
        description: "Practical engineering insights on web development, mobile applications, and school ERPs for Indian businesses.",
        url: `${siteConfig.url}/blog`,
        images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Indivio Studio Blog" }],
    },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return children;
}
