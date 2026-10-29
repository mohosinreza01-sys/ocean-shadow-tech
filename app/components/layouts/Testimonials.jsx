
"use client";

import { motion } from "motion/react";
import { Quote, MessageSquareQuote } from "lucide-react";

const rowOne = [
    {
        name: "Client One",
        role: "Business Owner",
        project: "Website Development",
        text: "A clean, professional website experience with a smooth development process.",
        initials: "C1",
    },
    {
        name: "Client Two",
        role: "Startup Founder",
        project: "E-commerce",
        text: "The design approach helped us visualize our brand's digital presence.",
        initials: "C2",
    },
    {
        name: "Client Three",
        role: "Business Manager",
        project: "Web Application",
        text: "Clear communication and a thoughtful approach throughout the project.",
        initials: "C3",
    },
];

const rowTwo = [
    {
        name: "Client Four",
        role: "Entrepreneur",
        project: "UI/UX Design",
        text: "The interface feels modern, organized, and easy for customers to navigate.",
        initials: "C4",
    },
    {
        name: "Client Five",
        role: "Company Owner",
        project: "Business Website",
        text: "A professional approach to turning our initial ideas into a digital concept.",
        initials: "C5",
    },
    {
        name: "Client Six",
        role: "Project Partner",
        project: "Custom Software",
        text: "The project was approached with care, structure, and attention to detail.",
        initials: "C6",
    },
];

function TestimonialCard({ item }) {
    return (
        <article className="group w-[290px] shrink-0 rounded-2xl border border-white/10 bg-[#102B49] p-5 transition-colors duration-300 hover:border-[#16B8D4]/50 sm:w-[360px] sm:p-6">
            <div className="mb-5 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#16B8D4]/10 text-[#16B8D4]">
                    <Quote size={20} />
                </div>
                <span className="text-xs text-slate-500">{item.project}</span>
            </div>

            <p className="min-h-[84px] text-sm leading-7 text-slate-300 sm:text-base">
                “{item.text}”
            </p>

            <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#16B8D4]/30 bg-[#123B66] text-sm font-bold text-[#7DD3FC]">
                    {item.initials}
                </div>

                <div>
                    <h3 className="text-sm font-semibold text-white">
                        {item.name}
                    </h3>
                    <p className="mt-1 text-xs text-slate-400">{item.role}</p>
                </div>
            </div>
        </article>
    );
}

function CarouselRow({ items, reverse = false }) {
    const duplicated = [...items, ...items];

    return (
        <div
            className="group relative overflow-hidden py-3"
            style={{
                maskImage:
                    "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
                WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
            }}
        >
            <motion.div
                className="flex w-max gap-5"
                animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
                transition={{
                    duration: 32,
                    ease: "linear",
                    repeat: Infinity,
                }}
                whileHover={{ transition: { duration: 32 } }}
            >
                {duplicated.map((item, index) => (
                    <TestimonialCard
                        key={`${item.initials}-${index}`}
                        item={item}
                    />
                ))}
            </motion.div>
        </div>
    );
}

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="relative overflow-hidden bg-[#0B2038] py-24 sm:py-28"
        >
            <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#0876C9]/15 blur-[130px]" />
            <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#16B8D4]/10 blur-[130px]" />

            <div className="relative mx-auto mb-12 max-w-4xl px-5 text-center sm:mb-16">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-[#16B8D4]">
                    <MessageSquareQuote size={16} />
                    Client Experiences
                </div>

                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Words that build
                    <span className="mt-2 block bg-gradient-to-r from-[#16B8D4] to-[#7DD3FC] bg-clip-text text-transparent">
                        lasting partnerships.
                    </span>
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                    Every collaboration is an opportunity to create something
                    meaningful, useful, and built to last.
                </p>
            </div>

            <div className="relative flex flex-col gap-3">
                <CarouselRow items={rowOne} />
                <CarouselRow items={rowTwo} reverse />
            </div>

            <div className="relative mt-12 px-5 text-center">
                <p className="text-sm text-slate-400">
                    Have a project in mind?
                </p>

                <a
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#16B8D4] px-6 py-3.5 text-sm font-semibold text-[#0B2038] transition hover:bg-[#7DD3FC]"
                >
                    Let’s Work Together
                    <span aria-hidden="true">↗</span>
                </a>
            </div>
        </section>
    );
}
