
"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
    ArrowUpRight,
    Code2,
    ShoppingCart,
    Layers3,
    Smartphone,
    Palette,
    Search,
    Cloud,
    Workflow,
} from "lucide-react";

const services = [
    {
        number: "01",
        title: "Web Development",
        description:
            "High-performance websites designed to establish your brand, engage visitors and support business growth.",
        icon: Code2,
        tags: ["Business Websites", "Next.js", "Web Applications"],
        href: "/services",
        featured: true,
    },
    {
        number: "02",
        title: "E-commerce Solutions",
        description:
            "Flexible online stores with intuitive shopping experiences and the tools you need to manage your business.",
        icon: ShoppingCart,
        tags: ["Online Stores", "WooCommerce", "Custom Shops"],
        href: "/services/ecommerce",
    },
    {
        number: "03",
        title: "Custom Software",
        description:
            "Purpose-built software that streamlines workflows and helps your team solve real operational challenges.",
        icon: Layers3,
        tags: ["Business Systems", "Dashboards", "Automation"],
        href: "/services/software",
    },
    {
        number: "04",
        title: "Mobile App Development",
        description:
            "User-friendly mobile experiences planned around your audience, product requirements and business goals.",
        icon: Smartphone,
        tags: ["Mobile Experiences", "UI/UX", "App Strategy"],
        href: "/services",
    },
    {
        number: "05",
        title: "UI/UX & Web Design",
        description:
            "Clear, thoughtful interfaces that make digital products easier to understand, navigate and use.",
        icon: Palette,
        tags: ["Interface Design", "Prototyping", "User Experience"],
        href: "/services",
    },
    {
        number: "06",
        title: "SEO & Digital Growth",
        description:
            "Build a stronger online presence with search-friendly foundations and a practical digital growth strategy.",
        icon: Search,
        tags: ["Technical SEO", "Site Structure", "Optimization"],
        href: "/services",
    },
    {
        number: "07",
        title: "Cloud & Deployment",
        description:
            "Launch and maintain digital products with reliable deployment workflows and production-ready foundations.",
        icon: Cloud,
        tags: ["Deployment", "Hosting Setup", "Performance"],
        href: "/services",
    },
    {
        number: "08",
        title: "Business Automation",
        description:
            "Reduce repetitive tasks by connecting business processes with practical integrations and automation.",
        icon: Workflow,
        tags: ["Integrations", "Workflow Design", "Efficiency"],
        href: "/services/software",
    },
];

export default function Services() {
    return (
        <section className="relative overflow-hidden bg-[#081827] py-20 text-white sm:py-24 lg:py-32">
            {/* Ambient background */}
            <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/15 blur-[120px]" />
            <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.6 }}
                    className="mb-14 flex flex-col gap-7 lg:mb-16 lg:flex-row lg:items-end lg:justify-between"
                >
                    <div className="max-w-3xl">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-2">
                            <span className="h-2 w-2 rounded-full bg-cyan-400" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300 sm:text-xs">
                                What We Do
                            </span>
                        </div>

                        <h2 className="text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl md:text-5xl lg:text-6xl">
                            Digital services.
                            <span className="mt-2 block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                                Real-world solutions.
                            </span>
                        </h2>

                        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                            From your first website to complex digital systems, we help turn
                            business challenges into thoughtful, practical technology.
                        </p>
                    </div>

                    <Link
                        href="/services"
                        className="group inline-flex w-fit shrink-0 items-center gap-3 border-b border-cyan-400/40 pb-2 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
                    >
                        Explore all services
                        <ArrowUpRight
                            size={18}
                            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </Link>
                </motion.div>

                {/* Service cards */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={service.number}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.12 }}
                                transition={{
                                    duration: 0.5,
                                    delay: (index % 4) * 0.07,
                                }}
                                className={`group relative flex min-h-[310px] flex-col overflow-hidden rounded-2xl border p-6 transition duration-300 hover:-translate-y-1.5 sm:p-7 ${service.featured
                                        ? "border-cyan-400/30 bg-gradient-to-br from-[#103758] to-[#0C243A] hover:border-cyan-300/60"
                                        : "border-white/[0.09] bg-white/[0.035] hover:border-cyan-400/30 hover:bg-white/[0.06]"
                                    }`}
                            >
                                {/* Hover glow */}
                                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/0 blur-3xl transition duration-500 group-hover:bg-cyan-400/10" />

                                <div className="relative flex items-center justify-between">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-300 transition duration-300 group-hover:border-cyan-300/30 group-hover:bg-cyan-300/[0.12]">
                                        <Icon size={23} strokeWidth={1.7} />
                                    </div>

                                    <span className="text-xs font-semibold tracking-widest text-slate-500 transition group-hover:text-cyan-300">
                                        / {service.number}
                                    </span>
                                </div>

                                <h3 className="relative mt-7 text-lg font-semibold tracking-tight text-white sm:text-xl">
                                    {service.title}
                                </h3>

                                <p className="relative mt-3 flex-1 text-sm leading-7 text-slate-400">
                                    {service.description}
                                </p>

                                <div className="relative mt-5 flex flex-wrap gap-2">
                                    {service.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-md border border-white/[0.08] bg-black/10 px-2.5 py-1.5 text-[10px] font-medium text-slate-400"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <Link
                                    href={service.href}
                                    aria-label={`Explore ${service.title}`}
                                    className="relative mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm font-semibold text-slate-300 transition group-hover:text-cyan-300"
                                >
                                    <span>Explore service</span>
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition duration-300 group-hover:border-cyan-300/30 group-hover:bg-cyan-300/10">
                                        <ArrowUpRight
                                            size={17}
                                            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                        />
                                    </span>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-12 flex flex-col gap-6 rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.055] to-white/[0.02] p-6 sm:p-8 md:flex-row md:items-center md:justify-between"
                >
                    <div>
                        <p className="text-lg font-semibold text-white sm:text-xl">
                            Have a project in mind?
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                            Let&apos;s discuss your goals and find the right digital solution.
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 px-6 text-sm font-semibold text-white shadow-lg shadow-blue-950/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-blue-500/20"
                    >
                        Discuss Your Project
                        <ArrowUpRight
                            size={18}
                            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
