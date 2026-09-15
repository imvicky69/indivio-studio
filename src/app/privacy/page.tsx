import type { Metadata } from "next";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
    title: "Privacy Policy | Indivio Studio",
    description: "Indivio Studio's privacy policy — how we collect, use, and protect your personal information.",
    alternates: {
        canonical: `${siteConfig.url}/privacy`,
    },
};

export default function PrivacyPolicy() {
    return (
        <section className="pt-32 pb-24">
            <div className="max-w-3xl mx-auto px-6">
                <Reveal>
                    <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-2 tracking-tight">
                        Privacy Policy
                    </h1>
                </Reveal>
                <Reveal delay={0.1}>
                    <p className="text-sm text-muted mb-12">Last updated: March 2026</p>
                </Reveal>

                <div className="space-y-10 text-sm text-muted leading-relaxed">
                    <Reveal delay={0.15}>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">1. Information We Collect</h2>
                            <p className="mb-3">When you contact Indivio Studio through our website form, email, or WhatsApp, we may collect:</p>
                            <ul className="list-disc list-inside space-y-1 ml-2">
                                <li>Your name and email address</li>
                                <li>Phone number (if provided)</li>
                                <li>Project details and technical specifications</li>
                                <li>Budget range and timeline expectations</li>
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
                            <p>We use your information solely to:</p>
                            <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
                                <li>Respond to your project inquiry</li>
                                <li>Provide detailed technical quotes and proposals</li>
                                <li>Communicate regarding ongoing projects and development milestones</li>
                                <li>Deliver critical software updates and customer support</li>
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">3. Data Protection</h2>
                            <p>We do not sell, trade, or share your personal information with third parties. Your data is stored securely and accessed only by authorized team members for business and development purposes.</p>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">4. Cookies & Analytics</h2>
                            <p>Our website may use basic analytics cookies to understand visitor traffic and enhance user experience. These cookies do not collect personally identifiable information.</p>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">5. Third-Party Services</h2>
                            <p>We may integrate trusted third-party infrastructure (such as Google Cloud, Vercel, and WhatsApp) for communication and hosting. These providers operate under their own strict privacy standards.</p>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">6. Your Rights</h2>
                            <p>You have the right to request access to, correction of, or deletion of your personal data at any time. Contact us at {siteConfig.email} to exercise these rights.</p>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">7. Contact</h2>
                            <p>For any privacy-related questions, reach out to us at <a href={`mailto:${siteConfig.email}`} className="text-[var(--accent)] hover:underline">{siteConfig.email}</a>.</p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
