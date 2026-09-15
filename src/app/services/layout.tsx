import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
    title: "Engineering Services | Web Apps, Mobile Apps & ERPs",
    description: "Explore Indivio Studio's engineering services: Custom Web Applications, Native iOS & Android Apps, Coaching & School ERPs, E-Commerce platforms, and UI/UX Design.",
    keywords: [
        "website development India",
        "mobile app development India",
        "custom web application development",
        "school ERP software India",
        "coaching institute management system",
        "e-commerce web development",
        "landing page design",
        "Next.js development company",
        "React web development",
        "Indivio Studio services",
    ],
    alternates: {
        canonical: `${siteConfig.url}/services`,
    },
    openGraph: {
        title: "Engineering Services | Indivio Studio",
        description: "Custom web applications, native mobile apps, school management ERPs, and high-converting digital solutions.",
        url: `${siteConfig.url}/services`,
        images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Indivio Studio Services" }],
    },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return children;
}
