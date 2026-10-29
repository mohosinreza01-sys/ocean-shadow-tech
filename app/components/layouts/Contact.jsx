
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
    ArrowUpRight,
    Mail,
    Phone,
    MapPin,
    Send,
    MessageCircle,
    CheckCircle2,
    Globe2,
} from "lucide-react";

const contactInfo = [
    {
        icon: Mail,
        label: "Email us",
        value: "hello@oceanshadowtech.com",
        href: "mailto:hello@oceanshadowtech.com",
    },
    {
        icon: Phone,
        label: "Call us",
        value: "+880 1XXX-XXXXXX",
        href: "tel:+8801XXXXXXXXX",
    },
    {
        icon: MapPin,
        label: "Our location",
        value: "Bangladesh",
        href: null,
    },
];

const projectTypes = [
    "Website Development",
    "E-commerce Website",
    "Custom Software",
    "UI/UX Design",
    "Mobile App",
    "Other",
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        project: "",
        budget: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = encodeURIComponent(
            `New Project Inquiry - ${formData.project}`
        );

        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Project Type: ${formData.project}\n` +
            `Budget: ${formData.budget || "Not specified"}\n\n` +
            `Project Details:\n${formData.message}`
        );

        window.location.href =
            `mailto:hello@oceanshadowtech.com?subject=${subject}&body=${body}`;

        setSubmitted(true);
    };

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[#F4F8FC] py-20 sm:py-28 lg:py-32"
        >
            {/* Background decoration */}
            <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-200/30 blur-[100px]" />
            <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-200/40 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-14 max-w-3xl text-center lg:mb-20"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 shadow-sm">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-[#16B8D4]" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0876C9]">
                            Let&apos;s Connect
                        </span>
                    </div>

                    <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-[#102B49] sm:text-5xl lg:text-6xl">
                        Let&apos;s build something{" "}
                        <span className="bg-gradient-to-r from-[#0876C9] to-[#16B8D4] bg-clip-text text-transparent">
                            extraordinary.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                        Have an idea in mind? Tell us about your project. We&apos;ll help
                        you turn your vision into a digital experience that makes a
                        difference.
                    </p>
                </motion.div>

                {/* Contact layout */}
                <div className="grid items-stretch gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
                    {/* Left information panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.65 }}
                        className="relative flex flex-col overflow-hidden rounded-[28px] bg-[#0B2038] p-7 text-white sm:p-10 lg:p-11"
                    >
                        {/* Ambient glow */}
                        <div className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-[#0876C9]/30 blur-[80px]" />
                        <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#16B8D4]/20 blur-[80px]" />

                        <div className="relative z-10">
                            <span className="text-sm font-semibold tracking-wide text-[#16B8D4]">
                                GET IN TOUCH
                            </span>

                            <h3 className="mt-5 text-3xl font-bold leading-snug sm:text-4xl">
                                Have a project?
                                <br />
                                <span className="text-slate-400">Let&apos;s talk.</span>
                            </h3>

                            <p className="mt-5 max-w-sm leading-7 text-slate-400">
                                Great digital products start with a conversation. Share your
                                goals, challenges, or ideas with our team.
                            </p>
                        </div>

                        {/* Contact details */}
                        <div className="relative z-10 mt-10 space-y-6">
                            {contactInfo.map((item, index) => {
                                const Icon = item.icon;

                                const content = (
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-[#16B8D4] transition duration-300 group-hover:border-[#16B8D4]/40 group-hover:bg-[#16B8D4]/10">
                                            <Icon size={21} />
                                        </div>

                                        <div className="min-w-0">
                                            <p className="text-sm text-slate-400">{item.label}</p>
                                            <p className="mt-1 break-words text-sm font-semibold text-white sm:text-base">
                                                {item.value}
                                            </p>
                                        </div>
                                    </div>
                                );

                                return (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.12, duration: 0.4 }}
                                    >
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="group block rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                                            >
                                                {content}
                                            </a>
                                        ) : (
                                            <div className="group">{content}</div>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Bottom availability card */}
                        <div className="relative z-10 mt-auto pt-10">
                            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#16B8D4]/10 text-[#16B8D4]">
                                        <Globe2 size={19} />
                                    </div>

                                    <div>
                                        <p className="font-semibold text-white">
                                            Building without boundaries
                                        </p>
                                        <p className="mt-2 text-sm leading-6 text-slate-400">
                                            Working with ambitious businesses and ideas, wherever
                                            they are.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex items-center gap-3 text-sm text-slate-400">
                                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]" />
                                Open to new project inquiries
                            </div>
                        </div>
                    </motion.div>

                    {/* Right form panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.65, delay: 0.1 }}
                        className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_20px_70px_-35px_rgba(16,43,73,0.2)] sm:p-9 lg:p-11"
                    >
                        <div className="mb-8 flex items-start justify-between gap-4">
                            <div>
                                <h3 className="text-2xl font-bold text-[#102B49] sm:text-3xl">
                                    Tell us about it
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                    Fill out the form and let&apos;s start a conversation.
                                </p>
                            </div>

                            <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EAF7FC] text-[#0876C9] sm:flex">
                                <MessageCircle size={23} />
                            </div>
                        </div>

                        {submitted && (
                            <div
                                role="status"
                                className="mb-6 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800"
                            >
                                <CheckCircle2 size={20} className="mt-0.5 shrink-0" />
                                <p>
                                    Your email app should open with your inquiry prepared. Send
                                    the email to complete your request.
                                </p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name and email */}
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="contact-name"
                                        className="mb-2 block text-sm font-semibold text-[#102B49]"
                                    >
                                        Your name <span className="text-[#0876C9]">*</span>
                                    </label>
                                    <input
                                        id="contact-name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        minLength={2}
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#102B49] outline-none transition placeholder:text-slate-400 focus:border-[#16B8D4] focus:bg-white focus:ring-4 focus:ring-cyan-100"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="contact-email"
                                        className="mb-2 block text-sm font-semibold text-[#102B49]"
                                    >
                                        Email address <span className="text-[#0876C9]">*</span>
                                    </label>
                                    <input
                                        id="contact-email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#102B49] outline-none transition placeholder:text-slate-400 focus:border-[#16B8D4] focus:bg-white focus:ring-4 focus:ring-cyan-100"
                                    />
                                </div>
                            </div>

                            {/* Project type and budget */}
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="contact-project"
                                        className="mb-2 block text-sm font-semibold text-[#102B49]"
                                    >
                                        Project type <span className="text-[#0876C9]">*</span>
                                    </label>
                                    <select
                                        id="contact-project"
                                        name="project"
                                        required
                                        value={formData.project}
                                        onChange={handleChange}
                                        className="w-full appearance-none rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#102B49] outline-none transition focus:border-[#16B8D4] focus:bg-white focus:ring-4 focus:ring-cyan-100"
                                    >
                                        <option value="">Select a service</option>
                                        {projectTypes.map((project) => (
                                            <option key={project} value={project}>
                                                {project}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor="contact-budget"
                                        className="mb-2 block text-sm font-semibold text-[#102B49]"
                                    >
                                        Estimated budget
                                    </label>
                                    <select
                                        id="contact-budget"
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        className="w-full appearance-none rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#102B49] outline-none transition focus:border-[#16B8D4] focus:bg-white focus:ring-4 focus:ring-cyan-100"
                                    >
                                        <option value="">Select a budget</option>
                                        <option value="Under ৳10,000">Under ৳10,000</option>
                                        <option value="৳10,000 - ৳30,000">
                                            ৳10,000 – ৳30,000
                                        </option>
                                        <option value="৳30,000 - ৳70,000">
                                            ৳30,000 – ৳70,000
                                        </option>
                                        <option value="৳70,000+">৳70,000+</option>
                                        <option value="Need consultation">
                                            Need consultation
                                        </option>
                                    </select>
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="contact-message"
                                    className="mb-2 block text-sm font-semibold text-[#102B49]"
                                >
                                    Project details <span className="text-[#0876C9]">*</span>
                                </label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    required
                                    minLength={10}
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your idea, goals, and what you need..."
                                    className="w-full resize-y rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3.5 text-sm leading-6 text-[#102B49] outline-none transition placeholder:text-slate-400 focus:border-[#16B8D4] focus:bg-white focus:ring-4 focus:ring-cyan-100"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#0876C9] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-900/15 transition duration-300 hover:-translate-y-0.5 hover:bg-[#075FA5] hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-200"
                            >
                                Send project inquiry
                                <Send
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                                />
                            </button>

                            <p className="text-center text-xs leading-5 text-slate-400">
                                By submitting, you agree to be contacted about your project.
                            </p>
                        </form>
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-slate-200/80 bg-white/70 p-6 sm:flex-row sm:px-8"
                >
                    <div>
                        <h4 className="text-lg font-bold text-[#102B49]">
                            Prefer a quick conversation?
                        </h4>
                        <p className="mt-1 text-sm text-slate-500">
                            Let&apos;s discuss your next big idea.
                        </p>
                    </div>

                    <Link
                        href="mailto:hello@oceanshadowtech.com"
                        className="inline-flex items-center gap-2 font-semibold text-[#0876C9] transition hover:text-[#16B8D4]"
                    >
                        Email our team
                        <ArrowUpRight size={18} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
