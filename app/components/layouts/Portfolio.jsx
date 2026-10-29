
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight, ExternalLink } from "lucide-react";

const projects = [
    {
        number: "01",
        title: "E-commerce Experience",
        category: "E-commerce",
        description:
            "A modern online shopping experience focused on product discovery, usability and conversion.",
        image: "/images/portfolio-ecommerce.jpg",
        tags: ["Next.js", "E-commerce", "UI/UX"],
        href: "/contact",
        theme: "bg-[#EAF2F8]",
    },
    {
        number: "02",
        title: "Corporate Web Platform",
        category: "Web Development",
        description:
            "A polished digital presence designed to communicate brand value and build customer trust.",
        image: "/images/portfolio-corporate.jpg",
        tags: ["Web Design", "Development", "Responsive"],
        href: "/contact",
        theme: "bg-[#E8F3F1]",
    },
    {
        number: "03",
        title: "Business Dashboard",
        category: "Custom Software",
        description:
            "A clean dashboard concept that makes business information easier to understand and manage.",
        image: "/images/portfolio-dashboard.jpg",
        tags: ["Dashboard", "Software", "UX"],
        href: "/contact",
        theme: "bg-[#EEEAF8]",
    },
];

const filters = ["All Projects", "Web Development", "E-commerce", "Custom Software"];

export default function Portfolio() {
    const [activeFilter, setActiveFilter] = useState("All Projects");

    const filteredProjects =
        activeFilter === "All Projects"
            ? projects
            : projects.filter((project) => project.category === activeFilter);

    return (
        <section className="relative overflow-hidden bg-[#F4F8FC] py-20 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between"
                >
                    <div className="max-w-3xl">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2">
                            <span className="h-2 w-2 rounded-full bg-cyan-500" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0876C9] sm:text-xs">
                                Selected Work
                            </span>
                        </div>

                        <h2 className="text-3xl font-bold leading-tight tracking-[-0.045em] text-[#102B49] sm:text-4xl md:text-5xl lg:text-6xl">
                            Ideas made
                            <span className="text-[#0876C9]"> visible.</span>
                            <br />
                            Built for impact.
                        </h2>

                        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                            Explore our approach to digital experiences, from engaging
                            websites to practical e-commerce and software solutions.
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#123B66] transition hover:text-[#0876C9]"
                    >
                        Have a project in mind?
                        <ArrowUpRight
                            size={18}
                            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </Link>
                </motion.div>

                {/* Filter buttons */}
                <div className="mt-10 flex gap-2 overflow-x-auto pb-2">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            type="button"
                            onClick={() => setActiveFilter(filter)}
                            aria-pressed={activeFilter === filter}
                            className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-semibold transition duration-200 sm:px-5 sm:text-sm ${activeFilter === filter
                                    ? "border-[#123B66] bg-[#123B66] text-white shadow-md shadow-blue-950/10"
                                    : "border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:text-[#0876C9]"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Project grid */}
                <motion.div layout className="mt-7 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project, index) => (
                        <motion.article
                            layout
                            key={project.number}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, delay: index * 0.07 }}
                            className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-950/[0.08]"
                        >
                            {/* Project image */}
                            <Link
                                href={project.href}
                                aria-label={`Discuss a project like ${project.title}`}
                                className={`relative block aspect-[4/3] overflow-hidden ${project.theme}`}
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#071A2D]/35 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

                                <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#123B66] backdrop-blur-md">
                                    {project.category}
                                </span>

                                <span className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-[#123B66] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                    <ExternalLink size={17} />
                                </span>
                            </Link>

                            {/* Project details */}
                            <div className="p-5 sm:p-6">
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <p className="text-[10px] font-bold tracking-[0.18em] text-[#0876C9]">
                                            PROJECT / {project.number}
                                        </p>

                                        <h3 className="mt-2 text-xl font-bold tracking-tight text-[#102B49] transition-colors group-hover:text-[#0876C9]">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <ArrowUpRight
                                        size={20}
                                        className="mt-1 shrink-0 text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#0876C9]"
                                    />
                                </div>

                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    {project.description}
                                </p>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-md bg-slate-100 px-2.5 py-1.5 text-[10px] font-medium text-slate-600"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <div className="mt-14 overflow-hidden rounded-2xl bg-[#102B49] p-7 sm:p-10 lg:p-12">
                    <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
                        <div className="max-w-2xl">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                                Your project could be next
                            </p>
                            <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                Let&apos;s create something meaningful.
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-slate-300">
                                Tell us what you are planning. We&apos;ll help you explore the
                                right digital solution for your goals.
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#16B8D4] px-6 text-sm font-bold text-[#071A2D] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
                        >
                            Start Your Project
                            <ArrowRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
