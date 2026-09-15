import { siteConfig } from '@/lib/siteConfig';

export function StructuredData() {
    const localBusiness = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        description: siteConfig.description,
        url: siteConfig.url,
        email: siteConfig.email,
        logo: `${siteConfig.url}/images/logo.png`,
        image: `${siteConfig.url}/images/indivio.png`,
        telephone: siteConfig.phone,
        address: {
            '@type': 'PostalAddress',
            addressLocality: siteConfig.address.locality,
            addressRegion: siteConfig.address.region,
            addressCountry: siteConfig.address.country,
        },
        areaServed: [
            {
                '@type': 'Country',
                name: 'India',
            },
            {
                '@type': 'State',
                name: 'Bihar',
            },
            {
                '@type': 'State',
                name: 'Jharkhand',
            },
            {
                '@type': 'State',
                name: 'Uttar Pradesh',
            }
        ],
        serviceType: [
            'Digital Product Studio',
            'Custom Software Development',
            'Native Mobile App Development',
            'Web Application Development',
            'School Management Software ERP',
            'Coaching Institute Management Apps',
            'E-Commerce Development',
            'UI/UX Design',
        ],
        priceRange: '₹15,000 - ₹2,00,000+',
        knowsLanguage: ['English', 'Hindi'],
        sameAs: [
            siteConfig.socialLinks.whatsapp,
            siteConfig.socialLinks.github,
        ],
    };

    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteConfig.name,
        alternateName: ['Indivio Studio India', 'Indivio Software Studio'],
        url: siteConfig.url,
        logo: `${siteConfig.url}/images/logo.png`,
        description: siteConfig.description,
        foundingLocation: {
            '@type': 'Place',
            address: {
                '@type': 'PostalAddress',
                addressLocality: siteConfig.address.locality,
                addressRegion: siteConfig.address.region,
                addressCountry: siteConfig.address.country,
            }
        },
        founder: {
            '@type': 'Person',
            name: 'Vikky Raja',
            jobTitle: 'Founder & Lead Software Engineer',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            email: siteConfig.email,
            telephone: siteConfig.phone,
            availableLanguage: ['English', 'Hindi']
        }
    };

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteConfig.name,
        alternateName: 'Indivio Studio',
        url: siteConfig.url,
        description: siteConfig.description,
        publisher: {
            '@type': 'Organization',
            name: siteConfig.name,
            logo: {
                '@type': 'ImageObject',
                url: `${siteConfig.url}/images/logo.png`,
            },
        },
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
            { '@type': 'ListItem', position: 2, name: 'About', item: `${siteConfig.url}/about` },
            { '@type': 'ListItem', position: 3, name: 'Services', item: `${siteConfig.url}/services` },
            { '@type': 'ListItem', position: 4, name: 'Showcase', item: `${siteConfig.url}/showcase` },
            { '@type': 'ListItem', position: 5, name: 'Pricing', item: `${siteConfig.url}/pricing` },
            { '@type': 'ListItem', position: 6, name: 'Blog', item: `${siteConfig.url}/blog` },
            { '@type': 'ListItem', position: 7, name: 'Contact', item: `${siteConfig.url}/contact` },
        ],
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'What services does Indivio Studio provide?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Indivio Studio is a full-service digital product engineering studio. We build custom websites, high-performance web applications, native Android/iOS mobile apps, complete school & coaching ERP platforms, and custom business software.',
                },
            },
            {
                '@type': 'Question',
                name: 'How much does a project cost with Indivio Studio?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'A basic business website starts from ₹15,000. Custom web applications and mobile apps are quoted transparently based on project requirements and scope with no hidden charges.',
                },
            },
            {
                '@type': 'Question',
                name: 'How long does a development project take?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Standard business websites take 2-4 weeks. Complex digital products such as native mobile apps, custom SaaS platforms, or school management ERPs take 4-8 weeks.',
                },
            },
            {
                '@type': 'Question',
                name: 'Do you provide hosting, maintenance, and support?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. Indivio Studio provides complete deployment, high-speed cloud hosting, ongoing maintenance, security updates, and dedicated technical support.',
                },
            },
            {
                '@type': 'Question',
                name: 'Do you work with clients across India and globally?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes! While founded in Nirmali, Bihar, Indivio Studio serves clients across tier 1, tier 2, and tier 3 cities in India as well as international clients.',
                },
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </>
    );
}
