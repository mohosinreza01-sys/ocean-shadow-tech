
import Image from "next/image";
import Link from "next/link";
import {
    ArrowUpRight,
    Mail,
    Phone,
    MapPin,
    Globe,
} from "lucide-react";

const services = [
    { name: "Web Development", href: "/services" },
    { name: "E-commerce Solutions", href: "/services/ecommerce" },
    { name: "Custom Software", href: "/services/software" },
    { name: "UI/UX Design", href: "/services" },
];

const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Portfolio", href: "/portfolio" },
    { name: "Contact Us", href: "/contact" },
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#0B2038] text-white">
            {/* Decorative background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
            />

            <div className="relative mx-auto max-w-7xl px-5 md:px-6">
                {/* CTA section */}
                <div className="border-b border-white/10 py-12 md:py-16">
                    <div className="flex flex-col justify-between gap-7 rounded-2xl border border-white/10 bg-white/[0.04] p-7 sm:p-9 md:flex-row md:items-center md:p-10">
                        <div className="max-w-2xl">
                            <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                                <span className="h-2 w-2 rounded-full bg-[#FF8A3D]" />
                                Let&apos;s work together
                            </span>

                            <h2 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl">
                                Have a project in mind?
                                <span className="block text-cyan-400">
                                    Let&apos;s build it together.
                                </span>
                            </h2>

                            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                                Turn your ideas into digital experiences
                                that help your business grow.
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#FF8A3D] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#F47726]"
                        >
                            Start a Project
                            <ArrowUpRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </Link>
                    </div>
                </div>

                {/* Main footer columns */}
                <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:py-16">
                    {/* Company info */}
                    <div>
                        <Link
                            href="/"
                            aria-label="Ocean Shadow Tech home"
                            className="inline-flex items-center"
                        >
                            <Image
                                src="/images/logo.png"
                                alt="Ocean Shadow Tech"
                                width={240}
                                height={80}
                                priority
                                className="h-16 w-auto object-contain"
                            />
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
                            We create modern websites, e-commerce platforms
                            and custom digital solutions to help businesses
                            move forward.
                        </p>

                        <Link
                            href="/contact"
                            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-white"
                        >
                            Let&apos;s talk about your project
                            <ArrowUpRight size={16} />
                        </Link>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-base font-semibold text-white">
                            Our Services
                        </h3>

                        <div className="mt-6 flex flex-col gap-4">
                            {services.map((service) => (
                                <Link
                                    key={service.name}
                                    href={service.href}
                                    className="group flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-400"
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-500/70 transition group-hover:bg-[#FF8A3D]" />
                                    {service.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h3 className="text-base font-semibold text-white">
                            Quick Links
                        </h3>

                        <div className="mt-6 flex flex-col gap-4">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="w-fit text-sm text-slate-400 transition hover:translate-x-1 hover:text-cyan-400"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-base font-semibold text-white">
                            Get in Touch
                        </h3>

                        <p className="mt-4 text-sm leading-6 text-slate-400">
                            Have a question or a project to discuss?
                            We&apos;d love to hear from you.
                        </p>

                        <div className="mt-6 flex flex-col gap-5">
                            <a
                                href="mailto:hello@oceanshadowtech.com"
                                className="group flex items-start gap-3 text-sm text-slate-400 transition hover:text-cyan-400"
                            >
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                                    <Mail size={17} />
                                </span>

                                <span className="break-all pt-2">
                                    hello@oceanshadowtech.com
                                </span>
                            </a>

                            <a
                                href="tel:+8801000000000"
                                className="group flex items-start gap-3 text-sm text-slate-400 transition hover:text-cyan-400"
                            >
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                                    <Phone size={17} />
                                </span>

                                <span className="pt-2">
                                    +880 1000-000000
                                </span>
                            </a>

                            <div className="flex items-start gap-3 text-sm text-slate-400">
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                                    <MapPin size={17} />
                                </span>

                                <span className="pt-2 leading-6">
                                    Bangladesh
                                </span>
                            </div>

                            <Link
                                href="/contact"
                                className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-white"
                            >
                                Contact our team
                                <Globe size={16} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} Ocean Shadow Tech.
                        All rights reserved.
                    </p>

                    <div className="flex flex-wrap items-center gap-5">
                        <Link
                            href="/privacy-policy"
                            className="transition hover:text-cyan-400"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/terms"
                            className="transition hover:text-cyan-400"
                        >
                            Terms &amp; Conditions
                        </Link>
                    </div>

                    <p>
                        Built for{" "}
                        <span className="font-semibold text-slate-300">
                            digital growth.
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
