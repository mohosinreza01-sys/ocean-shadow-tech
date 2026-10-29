
"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
    ArrowUpRight,
    CheckCircle2,
    Code2,
    Lightbulb,
    Target,
    Layers3,
} from "lucide-react";

const highlights = [
    "Business-focused digital solutions",
    "Modern and scalable technologies",
    "Clean design with user-first thinking",
    "Reliable support and collaboration",
];

const principles = [
    {
        icon: Lightbulb,
        number: "01",
        title: "Think Strategically",
        description:
            "We understand your goals first, then shape a digital approach around your business needs.",
    },
    {
        icon: Code2,
        number: "02",
        title: "Build With Purpose",
        description:
            "We turn ideas into useful digital products with thoughtful design and dependable development.",
    },
    {
        icon: Target,
        number: "03",
        title: "Focus On Results",
        description:
            "We keep usability, performance and long-term business growth at the center of every project.",
    },
];

export default function About() {
    return (
        <section className="relative overflow-hidden bg-[#F4F8FC] py-20 sm:py-24 lg:py-32">
            {/* Background decoration */}
            <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-sky-200/30 blur-[100px]" />
            <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-[110px]" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-16 max-w-3xl text-center"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 shadow-sm">
                        <span className="h-2 w-2 rounded-full bg-cyan-500" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0876C9]">
                            About Ocean Shadow Tech
                        </span>
                    </div>

                    <h2 className="text-3xl font-bold leading-tight tracking-[-0.04em] text-[#102B49] sm:text-4xl md:text-5xl">
                        Technology with purpose.
                        <span className="mt-2 block bg-gradient-to-r from-[#0876C9] to-[#16B8D4] bg-clip-text text-transparent">
                            Digital built for growth.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                        We help businesses turn ideas into meaningful digital experiences
                        through modern web development, creative design and practical
                        technology solutions.
                    </p>
                </motion.div>

                {/* Main content */}
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Visual panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -28 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7 }}
                        className="relative mx-auto w-full max-w-xl"
                    >
                        <div className="relative overflow-hidden rounded-3xl bg-[#0B2038] p-6 shadow-2xl shadow-blue-950/15 sm:p-9">
                            {/* Decorative glow */}
                            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
                            <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />

                            <div className="relative">
                                <div className="flex items-center justify-between border-b border-white/10 pb-6">
                                    <div>
                                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
                                            Our approach
                                        </p>
                                        <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                                            Ideas into impact.
                                        </h3>
                                    </div>

                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300">
                                        <Layers3 size={23} />
                                    </div>
                                </div>

                                {/* Three principles */}
                                <div className="mt-3 divide-y divide-white/10">
                                    {principles.map((item, index) => {
                                        const Icon = item.icon;

                                        return (
                                            <motion.div
                                                key={item.number}
                                                initial={{ opacity: 0, y: 12 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 0.45,
                                                    delay: index * 0.12,
                                                }}
                                                className="group flex gap-4 py-6"
                                            >
                                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-cyan-300 transition duration-300 group-hover:border-cyan-300/30 group-hover:bg-cyan-300/10">
                                                    <Icon size={20} />
                                                </div>

                                                <div>
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-[10px] font-bold tracking-widest text-cyan-400/70">
                                                            {item.number}
                                                        </span>
                                                        <h4 className="text-sm font-semibold text-white sm:text-base">
                                                            {item.title}
                                                        </h4>
                                                    </div>

                                                    <p className="mt-2 text-xs leading-6 text-slate-400 sm:text-sm">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>

                                <div className="mt-2 flex items-center gap-3 rounded-xl border border-cyan-300/15 bg-cyan-300/[0.06] p-4">
                                    <div className="h-8 w-1 rounded-full bg-gradient-to-b from-cyan-300 to-blue-500" />
                                    <p className="text-xs leading-6 text-slate-300 sm:text-sm">
                                        Thoughtful strategy. Quality execution. Technology that
                                        serves a purpose.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Floating corner accent */}
                        <div className="absolute -bottom-3 -right-3 -z-10 h-28 w-28 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 sm:-bottom-4 sm:-right-4" />
                    </motion.div>

                    {/* About copy */}
                    <motion.div
                        initial={{ opacity: 0, x: 28 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0876C9]">
                            Who we are
                        </p>

                        <h3 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.035em] text-[#102B49] sm:text-4xl">
                            Your vision deserves
                            <span className="text-[#0876C9]"> the right technology.</span>
                        </h3>

                        <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                            At Ocean Shadow Tech, we believe technology should make business
                            simpler, experiences better and opportunities more accessible.
                            Our focus is on creating digital solutions that solve real
                            problems—not just look good on screen.
                        </p>

                        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                            Whether you need a professional website, an e-commerce platform
                            or a custom digital solution, we approach every project with
                            care, clarity and a commitment to quality.
                        </p>

                        {/* Highlights */}
                        <div className="mt-7 grid gap-4 sm:grid-cols-2">
                            {highlights.map((item) => (
                                <div key={item} className="flex items-start gap-3">
                                    <CheckCircle2
                                        size={19}
                                        className="mt-0.5 shrink-0 text-[#0876C9]"
                                    />
                                    <span className="text-sm font-medium leading-6 text-slate-700">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="mt-9 flex flex-wrap items-center gap-5">
                            <Link
                                href="/about"
                                className="group inline-flex h-12 items-center gap-3 rounded-lg bg-[#123B66] px-6 text-sm font-semibold text-white shadow-lg shadow-blue-950/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#0876C9]"
                            >
                                Discover Our Story
                                <ArrowUpRight
                                    size={18}
                                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </Link>

                            <Link
                                href="/contact"
                                className="text-sm font-semibold text-[#123B66] transition hover:text-[#0876C9]"
                            >
                                Let&apos;s talk about your project
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
