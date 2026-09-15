import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
    title: "About Us | Our Story & Engineering Philosophy",
    description: "Meet Indivio Studio — an elite digital product and software engineering studio founded by Vikky Raja, building custom web apps, mobile apps, and school ERPs across India.",
    keywords: [
        "about Indivio Studio",
        "Vikky Raja software engineer",
        "digital product studio India",
        "Bihar web development studio",
        "custom software engineering team",
        "app development company Nirmali Bihar",
    ],
    alternates: {
        canonical: `${siteConfig.url}/about`,
    },
    openGraph: {
        title: "About Indivio Studio | Precision Engineering & Digital Craftsmanship",
        description: "From student pilot discipline to full-scale digital engineering. Learn about Indivio Studio's mission, values, and client results.",
        url: `${siteConfig.url}/about`,
        images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "About Indivio Studio" }],
    },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children;
}
