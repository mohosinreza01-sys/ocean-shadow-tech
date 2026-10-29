
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
    ArrowRight,
    Check,
    Sparkles,
    Zap,
    Rocket,
    ShieldCheck,
} from "lucide-react";

const plans = [
    {
        name: "Starter",
        description: "Perfect for small businesses starting their digital journey.",
        icon: Zap,
        price: "৳15,000",
        period: "project",
        badge: null,
        featured: false,
        features: [
            "Professional business website",
            "Up to 5 pages",
            "Responsive mobile design",
            "Contact form integration",
            "Basic on-page SEO setup",
            "Social media integration",
            "30 days of support",
        ],
        button: "Start a Project",
    },
    {
        name: "Professional",
        description: "A complete digital experience for growing businesses.",
        icon: Sparkles,
        price: "৳35,000",
        period: "project",
        badge: "MOST POPULAR",
        featured: true,
        features: [
            "Everything in Starter",
            "Up to 10 pages",
            "Premium UI/UX design",
            "Advanced animations",
            "CMS or content management",
            "Performance optimization",
            "Analytics integration",
            "60 days of support",
        ],
        button: "Choose Professional",
    },
    {
        name: "Enterprise",
        description: "Powerful custom solutions built around your business.",
        icon: Rocket,
        price: "Custom",
        period: "pricing",
        badge: null,
        featured: false,
        features: [
            "Everything your project needs",
            "Custom web application",
            "Advanced integrations",
            "Database & API development",
            "Custom dashboard features",
            "Security-focused architecture",
            "Scalable infrastructure planning",
            "Dedicated project support",
        ],
        button: "Discuss Your Project",
    },
];

export default function Pricing() {
    const [billing, setBilling] = useState("project");

    return (
        <section
            id="pricing"
            className="relative overflow-hidden bg-[#0B2038] py-24 sm:py-28 lg:py-32"
        >
            {/* Background effects */}
            <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#0876C9]/20 blur-[120px]" />
            <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#16B8D4]/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-14 max-w-3xl text-center lg:mb-16"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2">
                        <span className="h-2 w-2 rounded-full bg-[#16B8D4]" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#16B8D4]">
                            Transparent Pricing
                        </span>
                    </div>

                    <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                        The right plan for your{" "}
                        <span className="bg-gradient-to-r from-[#16B8D4] to-[#68D5F0] bg-clip-text text-transparent">
                            next big idea.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                        Clear starting prices, flexible solutions, and a plan that fits
                        your business goals. Every project begins with understanding what
                        you need.
                    </p>

                    {/* Pricing type selector */}
                    <div className="mt-8 inline-flex rounded-xl border border-white/10 bg-white/[0.05] p-1.5">
                        <button
                            type="button"
                            onClick={() => setBilling("project")}
                            className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition ${billing === "project"
                                ? "bg-[#16B8D4] text-[#0B2038] shadow-lg"
                                : "text-slate-400 hover:text-white"
                                }`}
                        >
                            Project Based
                        </button>

                        <button
                            type="button"
                            onClick={() => setBilling("custom")}
                            className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition ${billing === "custom"
                                ? "bg-[#16B8D4] text-[#0B2038] shadow-lg"
                                : "text-slate-400 hover:text-white"
                                }`}
                        >
                            Custom Quote
                        </button>
                    </div>
                </motion.div>

                {/* Pricing cards */}
                <div className="grid items-stretch gap-6 lg:grid-cols-3 lg:gap-7">
                    {plans.map((plan, index) => {
                        const Icon = plan.icon;

                        const displayPrice =
                            billing === "custom" && plan.name !== "Enterprise"
                                ? "Let's Talk"
                                : plan.price;

                        const displayPeriod =
                            billing === "custom" && plan.name !== "Enterprise"
                                ? "for your requirements"
                                : plan.period === "project"
                                    ? "one-time project"
                                    : "tailored to your needs";

                        return (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.5, delay: index * 0.12 }}
                                whileHover={{ y: -7 }}
                                className={`relative flex flex-col rounded-3xl border p-7 transition-shadow duration-300 sm:p-8 ${plan.featured
                                    ? "border-[#16B8D4]/70 bg-gradient-to-b from-[#123B66] to-[#102B49] shadow-[0_20px_80px_-25px_rgba(22,184,212,0.2)] lg:scale-[1.03]"
                                    : "border-white/10 bg-white/[0.035] hover:border-white/20 hover:bg-white/[0.06]"
                                    }`}
                            >
                                {/* Popular badge */}
                                {plan.badge && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#16B8D4] px-4 py-1.5 text-[10px] font-extrabold tracking-[0.15em] text-[#0B2038]">
                                        {plan.badge}
                                    </div>
                                )}

                                {/* Icon and plan name */}
                                <div className="flex items-center gap-4">
                                    <div
                                        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${plan.featured
                                            ? "bg-[#16B8D4]/15 text-[#16B8D4]"
                                            : "bg-white/[0.07] text-slate-300"
                                            }`}
                                    >
                                        <Icon size={23} />
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-white">
                                            {plan.name}
                                        </h3>
                                        <p className="mt-1 text-xs text-slate-400">
                                            {plan.name === "Starter"
                                                ? "Essential package"
                                                : plan.name === "Professional"
                                                    ? "Growth package"
                                                    : "Bespoke package"}
                                        </p>
                                    </div>
                                </div>

                                <p className="mt-6 min-h-[48px] text-sm leading-6 text-slate-400">
                                    {plan.description}
                                </p>

                                {/* Price */}
                                <div className="mt-7 border-b border-white/10 pb-7">
                                    <div className="flex flex-wrap items-baseline gap-2">
                                        <span className="text-4xl font-extrabold tracking-tight text-white sm:text-[42px]">
                                            {displayPrice}
                                        </span>
                                    </div>
                                    <p className="mt-2 text-sm text-slate-400">
                                        {displayPeriod}
                                    </p>
                                </div>

                                {/* CTA */}
                                <Link
                                    href={`/contact?plan=${encodeURIComponent(plan.name)}`}
                                    className={`group mt-7 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition duration-300 ${plan.featured
                                        ? "bg-[#16B8D4] text-[#0B2038] hover:bg-[#45CEE4]"
                                        : "border border-white/15 bg-white/[0.05] text-white hover:border-[#16B8D4]/50 hover:bg-white/10"
                                        }`}
                                >
                                    {billing === "custom"
                                        ? "Request a Quote"
                                        : plan.button}
                                    <ArrowRight
                                        size={17}
                                        className="transition-transform group-hover:translate-x-1"
                                    />
                                </Link>

                                {/* Features */}
                                <div className="mt-8">
                                    <p className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-slate-300">
                                        What&apos;s included
                                    </p>

                                    <ul className="space-y-4">
                                        {plan.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                                            >
                                                <span
                                                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${plan.featured
                                                        ? "bg-[#16B8D4]/15 text-[#16B8D4]"
                                                        : "bg-white/[0.07] text-slate-300"
                                                        }`}
                                                >
                                                    <Check size={13} strokeWidth={3} />
                                                </span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom note */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-14 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.035] p-6 text-center sm:flex-row sm:text-left sm:px-8"
                >
                    <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#16B8D4]/10 text-[#16B8D4]">
                            <ShieldCheck size={21} />
                        </div>
                        <div>
                            <h4 className="font-bold text-white">
                                Need something more specific?
                            </h4>
                            <p className="mt-1 text-sm leading-6 text-slate-400">
                                We can tailor the scope, features, and timeline to your needs.
                            </p>
                        </div>
                    </div>

                    <Link
                        href="/contact"
                        className="inline-flex shrink-0 items-center gap-2 font-semibold text-[#16B8D4] transition hover:text-white"
                    >
                        Get a custom quote
                        <ArrowRight size={17} />
                    </Link>
                </motion.div>

                <p className="mt-6 text-center text-xs leading-6 text-slate-500">
                    Prices shown are illustrative starting prices, not a final quotation.
                    Final cost depends on scope, features, and project requirements.
                </p>
            </div>
        </section>
    );
}
