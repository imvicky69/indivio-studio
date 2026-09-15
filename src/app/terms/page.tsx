import type { Metadata } from "next";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
    title: "Terms of Service | Indivio Studio",
    description: "Indivio Studio's terms of service — project terms, payments, intellectual property, and client responsibilities.",
    alternates: {
        canonical: `${siteConfig.url}/terms`,
    },
};

export default function TermsOfService() {
    return (
        <section className="pt-32 pb-24">
            <div className="max-w-3xl mx-auto px-6">
                <Reveal>
                    <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-2 tracking-tight">
                        Terms of Service
                    </h1>
                </Reveal>
                <Reveal delay={0.1}>
                    <p className="text-sm text-muted mb-12">Last updated: March 2026</p>
                </Reveal>

                <div className="space-y-10 text-sm text-muted leading-relaxed">
                    <Reveal delay={0.15}>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">1. Services</h2>
                            <p>Indivio Studio provides custom digital engineering services including web application development, native mobile app development, school and coaching ERP systems, custom software platforms, and digital product design. The specific scope of each project is defined in the formal project proposal agreed upon prior to commencement.</p>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">2. Project Process</h2>
                            <ul className="list-disc list-inside space-y-1 ml-2">
                                <li>All projects begin with an architectural discovery call and a written statement of work</li>
                                <li>Engineering begins only after mutual agreement on scope, timeline, and deliverables</li>
                                <li>We provide regular milestone demos and maintain direct engineering communication</li>
                                <li>Revision rounds are included as defined in your contract</li>
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">3. Payment Terms</h2>
                            <ul className="list-disc list-inside space-y-1 ml-2">
                                <li>50% advance payment to initiate engineering</li>
                                <li>50% upon final project delivery, QA, and sign-off</li>
                                <li>For enterprise projects, milestone-based installment schedules are established</li>
                                <li>All pricing is transparent with zero hidden fees</li>
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">4. Intellectual Property</h2>
                            <p className="mb-2">Upon full payment settlement:</p>
                            <ul className="list-disc list-inside space-y-1 ml-2">
                                <li>You own 100% of the custom source code written for your application</li>
                                <li>You own all custom UI/UX design assets, databases, and schemas</li>
                                <li>Third-party open-source libraries remain under their respective licenses (MIT, Apache, etc.)</li>
                                <li>Indivio Studio reserves the right to include non-confidential screenshots and case studies in our public portfolio</li>
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">5. Client Responsibilities</h2>
                            <ul className="list-disc list-inside space-y-1 ml-2">
                                <li>Provide necessary project inputs, brand assets, and API credentials in a timely manner</li>
                                <li>Review milestone deliverables and provide consolidated feedback</li>
                                <li>Ensure ownership or licensing rights for all provided media and text content</li>
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">6. Revisions & Scope Changes</h2>
                            <p>Every development tier includes structured revision rounds. Feature requests outside the agreed scope are quoted transparently via change orders before execution.</p>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">7. Cancellation & Refunds</h2>
                            <p>If a project is cancelled prior to completion, billing applies strictly to engineering hours completed. If Indivio Studio fails to deliver on agreed contractual terms, proportional refunds apply.</p>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">8. Contact</h2>
                            <p>For inquiries regarding these terms, contact us at <a href={`mailto:${siteConfig.email}`} className="text-[var(--accent)] hover:underline">{siteConfig.email}</a>.</p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
