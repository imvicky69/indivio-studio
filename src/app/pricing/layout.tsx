import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
    title: "Pricing Plans | Transparent Software & App Development Cost",
    description: "Transparent, flexible pricing for websites, web applications, and mobile apps by Indivio Studio. Starter from ₹15,000, Growth from ₹35,000, or tailored custom quotes.",
    keywords: [
        "website cost India",
        "web development pricing India",
        "mobile app development cost",
        "affordable website India",
        "school ERP pricing",
        "custom website quote",
        "Indivio Studio pricing",
    ],
    alternates: {
        canonical: `${siteConfig.url}/pricing`,
    },
    openGraph: {
        title: "Pricing Plans | Indivio Studio",
        description: "Affordable, transparent website and app development packages starting from ₹15,000. No hidden charges.",
        url: `${siteConfig.url}/pricing`,
        images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Indivio Studio Pricing" }],
    },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
    return children;
}
