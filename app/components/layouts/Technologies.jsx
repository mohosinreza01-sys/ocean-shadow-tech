
"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
    Code2,
    Globe,
    Database,
    Palette,
    Smartphone,
    Cloud,
    Server,
    GitBranch,
    Layers,
    Terminal,
    Atom,
    Boxes,
    ArrowUpRight,
    Sparkles,
} from "lucide-react";

const categories = [
    "All Technologies",
    "Frontend",
    "Backend",
    "Database",
    "Tools",
];

const technologies = [
    {
        name: "Next.js",
        category: "Frontend",
        description: "Modern full-stack React framework",
        icon: Globe,
        color: "#FFFFFF",
        bg: "rgba(255,255,255,0.08)",
    },
    {
        name: "React",
        category: "Frontend",
        description: "Dynamic and interactive user interfaces",
        icon: Atom,
        color: "#61DAFB",
        bg: "rgba(97,218,251,0.10)",
    },
    {
        name: "JavaScript",
        category: "Frontend",
        description: "Powerful web application functionality",
        icon: Code2,
        color: "#F7DF1E",
        bg: "rgba(247,223,30,0.10)",
    },
    {
        name: "Tailwind CSS",
        category: "Frontend",
        description: "Responsive, utility-first styling",
        icon: Palette,
        color: "#38BDF8",
        bg: "rgba(56,189,248,0.10)",
    },
    {
        name: "Node.js",
        category: "Backend",
        description: "Scalable server-side applications",
        icon: Server,
        color: "#68A063",
        bg: "rgba(104,160,99,0.12)",
    },
    {
        name: "Laravel",
        category: "Backend",
        description: "Structured and maintainable web backends",
        icon: Layers,
        color: "#FF6B5E",
        bg: "rgba(255,107,94,0.10)",
    },
    {
        name: "Python",
        category: "Backend",
        description: "Automation and application development",
        icon: Terminal,
        color: "#FFD43B",
        bg: "rgba(255,212,59,0.10)",
    },
    {
        name: "PostgreSQL",
        category: "Database",
        description: "Reliable relational data storage",
        icon: Database,
        color: "#6AA6D8",
        bg: "rgba(106,166,216,0.12)",
    },
    {
        name: "MongoDB",
        category: "Database",
        description: "Flexible document-based data storage",
        icon: Boxes,
        color: "#4DBB83",
        bg: "rgba(77,187,131,0.10)",
    },
    {
        name: "Git",
        category: "Tools",
        description: "Version control and team collaboration",
        icon: GitBranch,
        color: "#F56C53",
        bg: "rgba(245,108,83,0.10)",
    },
    {
        name: "Cloud Hosting",
        category: "Tools",
        description: "Deployment and hosting workflows",
        icon: Cloud,
        color: "#60A5FA",
        bg: "rgba(96,165,250,0.10)",
    },
    {
        name: "Mobile Development",
        category: "Tools",
        description: "Mobile-first and cross-platform experiences",
        icon: Smartphone,
        color: "#C4B5FD",
        bg: "rgba(196,181,253,0.10)",
    },
];

export default function Technologies() {
    const [activeCategory, setActiveCategory] = useState("All Technologies");

    const filteredTechnologies =
        activeCategory === "All Technologies"
            ? technologies
            : technologies.filter(
                (technology) => technology.category === activeCategory
            );

    return (
        <section
            id="technologies"
            className="relative overflow-hidden bg-[#0B2038] py-24 sm:py-28 lg:py-32"
        >
            {/* Ambient background */}
            <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#0876C9]/15 blur-[120px]" />
            <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#16B8D4]/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2">
                        <Sparkles size={14} className="text-[#16B8D4]" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#16B8D4]">
                            Our Tech Stack
                        </span>
                    </div>

                    <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Technologies we use
                        <span className="mt-2 block bg-gradient-to-r from-[#16B8D4] to-[#68D5F0] bg-clip-text text-transparent">
                            to build better.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                        We choose modern, reliable technologies to build digital
                        experiences that are fast, scalable, and ready for what comes next.
                    </p>
                </motion.div>

                {/* Category filters */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="mt-10 flex flex-wrap justify-center gap-2"
                >
                    {categories.map((category) => {
                        const isActive = activeCategory === category;

                        return (
                            <button
                                key={category}
                                type="button"
                                onClick={() => setActiveCategory(category)}
                                className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition duration-300 ${isActive
                                        ? "border-[#16B8D4] bg-[#16B8D4] text-[#0B2038]"
                                        : "border-white/10 bg-white/[0.04] text-slate-400 hover:border-white/20 hover:text-white"
                                    }`}
                            >
                                {category}
                            </button>
                        );
                    })}
                </motion.div>

                {/* Technology grid */}
                <motion.div
                    layout
                    className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5"
                >
                    {filteredTechnologies.map((technology, index) => {
                        const Icon = technology.icon;

                        return (
                            <motion.div
                                layout
                                key={technology.name}
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{
                                    duration: 0.35,
                                    delay: index * 0.035,
                                }}
                                whileHover={{ y: -6 }}
                                className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.035] p-5 transition-colors duration-300 hover:border-[#16B8D4]/40 hover:bg-white/[0.065] sm:p-6"
                            >
                                {/* Hover glow */}
                                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#0876C9]/0 blur-3xl transition duration-500 group-hover:bg-[#0876C9]/25" />

                                <div className="relative flex items-start justify-between gap-3">
                                    <div
                                        className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.06] transition duration-300 group-hover:scale-105"
                                        style={{ backgroundColor: technology.bg }}
                                    >
                                        <Icon
                                            size={24}
                                            style={{ color: technology.color }}
                                            strokeWidth={1.8}
                                        />
                                    </div>

                                    <ArrowUpRight
                                        size={17}
                                        className="text-slate-600 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#16B8D4]"
                                    />
                                </div>

                                <div className="relative mt-6">
                                    <h3 className="text-base font-bold text-white sm:text-lg">
                                        {technology.name}
                                    </h3>

                                    <p className="mt-2 min-h-[44px] text-xs leading-5 text-slate-400 sm:text-sm sm:leading-6">
                                        {technology.description}
                                    </p>
                                </div>

                                <div className="relative mt-5 flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#16B8D4]" />
                                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                                        {technology.category}
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-14 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.035] p-6 text-center sm:flex-row sm:px-8 sm:text-left"
                >
                    <div>
                        <h3 className="text-lg font-bold text-white sm:text-xl">
                            The right technology for your idea.
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                            Let&apos;s choose the right stack for your next project.
                        </p>
                    </div>

                    <a
                        href="/contact"
                        className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#16B8D4] px-5 py-3.5 text-sm font-bold text-[#0B2038] transition hover:bg-[#68D5F0]"
                    >
                        Discuss Your Project
                        <ArrowUpRight
                            size={17}
                            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
