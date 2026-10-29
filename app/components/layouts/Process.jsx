
"use client";

import { motion } from "motion/react";
import {
    MessageCircle,
    ClipboardList,
    Code2,
    Rocket,
    ArrowDownRight,
    CheckCircle2,
} from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Discover",
        subtitle: "Understanding your vision",
        description:
            "We learn about your business, goals, audience, and challenges to understand exactly what your project needs.",
        icon: MessageCircle,
        details: ["Initial consultation", "Goals & requirements"],
    },
    {
        number: "02",
        title: "Plan & Design",
        subtitle: "Turning ideas into a plan",
        description:
            "We map out the experience, structure the solution, and shape a clear design direction before development begins.",
        icon: ClipboardList,
        details: ["Project roadmap", "UI/UX direction"],
    },
    {
        number: "03",
        title: "Build & Test",
        subtitle: "Bringing ideas to life",
        description:
            "We develop your solution with responsive design, reliable functionality, and testing throughout the process.",
        icon: Code2,
        details: ["Development", "Quality assurance"],
    },
    {
        number: "04",
        title: "Launch & Grow",
        subtitle: "Ready for the real world",
        description:
            "We prepare your project for launch and help you move forward with support and future improvements as agreed.",
        icon: Rocket,
        details: ["Deployment", "Post-launch support"],
    },
];

export default function Process() {
    return (
        <section
            id="process"
            className="relative overflow-hidden bg-[#0B2038] py-24 sm:py-28 lg:py-32"
        >
            {/* Ambient glow */}
            <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#0876C9]/15 blur-[130px]" />
            <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#16B8D4]/10 blur-[130px]" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2">
                        <span className="h-2 w-2 rounded-full bg-[#16B8D4]" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#16B8D4]">
                            Our Process
                        </span>
                    </div>

                    <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                        From first idea to
                        <span className="mt-2 block bg-gradient-to-r from-[#16B8D4] to-[#68D5F0] bg-clip-text text-transparent">
                            final launch.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                        A clear, collaborative process designed to turn your vision into
                        a reliable digital solution — one step at a time.
                    </p>
                </motion.div>

                {/* Process timeline */}
                <div className="relative mt-16 lg:mt-20">
                    {/* Connecting line — desktop */}
                    <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-10 hidden h-px bg-gradient-to-r from-[#0876C9]/20 via-[#16B8D4]/70 to-[#0876C9]/20 lg:block">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.4, ease: "easeInOut" }}
                            className="h-full origin-left bg-gradient-to-r from-[#0876C9] to-[#16B8D4]"
                        />
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                        {steps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.55,
                                        delay: index * 0.12,
                                    }}
                                    className="group relative"
                                >
                                    {/* Step number and icon */}
                                    <div className="relative z-10 mb-7 flex items-center justify-between lg:justify-start">
                                        <div className="flex h-[76px] w-[76px] items-center justify-center rounded-2xl border border-[#16B8D4]/25 bg-[#102B49] shadow-[0_0_30px_rgba(22,184,212,0.06)] transition duration-300 group-hover:border-[#16B8D4]/70 group-hover:shadow-[0_0_35px_rgba(22,184,212,0.15)]">
                                            <Icon
                                                size={29}
                                                strokeWidth={1.6}
                                                className="text-[#16B8D4] transition duration-300 group-hover:scale-110"
                                            />
                                        </div>

                                        <span className="text-4xl font-extrabold tracking-tighter text-white/[0.08] transition duration-300 group-hover:text-[#16B8D4]/30 lg:absolute lg:left-24">
                                            {step.number}
                                        </span>
                                    </div>

                                    {/* Card */}
                                    <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 group-hover:-translate-y-1 group-hover:border-[#16B8D4]/30 group-hover:bg-white/[0.045]">
                                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#16B8D4]">
                                            Step {step.number}
                                        </p>

                                        <h3 className="mt-3 text-xl font-bold text-white">
                                            {step.title}
                                        </h3>

                                        <p className="mt-2 text-sm font-medium text-slate-300">
                                            {step.subtitle}
                                        </p>

                                        <p className="mt-4 text-sm leading-7 text-slate-400">
                                            {step.description}
                                        </p>

                                        <div className="my-5 h-px bg-white/[0.08]" />

                                        <ul className="space-y-3">
                                            {step.details.map((detail) => (
                                                <li
                                                    key={detail}
                                                    className="flex items-center gap-2.5 text-xs text-slate-300"
                                                >
                                                    <CheckCircle2
                                                        size={15}
                                                        className="shrink-0 text-[#16B8D4]"
                                                    />
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Mobile connector */}
                                    {index !== steps.length - 1 && (
                                        <div className="flex justify-center py-2 lg:hidden">
                                            <ArrowDownRight
                                                size={20}
                                                className="text-[#16B8D4]/60"
                                            />
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="mt-14 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-gradient-to-r from-[#102B49] to-[#103452] p-6 sm:flex-row sm:px-8 sm:py-7"
                >
                    <div>
                        <h3 className="text-xl font-bold text-white">
                            Have an idea worth building?
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                            Let&apos;s discuss your goals and plan your next steps.
                        </p>
                    </div>

                    <a
                        href="/contact"
                        className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#16B8D4] px-5 py-3.5 text-sm font-bold text-[#0B2038] transition hover:bg-[#68D5F0]"
                    >
                        Start Your Project
                        <ArrowDownRight size={17} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
