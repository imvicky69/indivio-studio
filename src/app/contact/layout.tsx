import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
    title: "Contact Us | Free Consultation & Project Estimate",
    description: "Get in touch with Indivio Studio. Free consultation for your web application, mobile app, or school ERP project — reach us via form, email, or WhatsApp.",
    keywords: [
        "contact Indivio Studio",
        "hire app developers India",
        "free website consultation",
        "web development inquiry India",
        "get a software quote",
        "software development company Nirmali Bihar contact",
    ],
    alternates: {
        canonical: `${siteConfig.url}/contact`,
    },
    openGraph: {
        title: "Contact Indivio Studio | Free Consultation & Quote",
        description: "Discuss your project with Indivio Studio. Direct founder communication, quick turnaround, and transparent project estimates.",
        url: `${siteConfig.url}/contact`,
        images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Contact Indivio Studio" }],
    },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children;
}
