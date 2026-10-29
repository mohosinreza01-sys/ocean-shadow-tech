
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    ArrowUpRight,
    Menu,
    X,
    Mail,
    Phone,
    ChevronDown,
    Code2,
    ShoppingBag,
    Layers3,
} from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services", dropdown: true },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
];

const serviceLinks = [
    {
        name: "Web Development",
        description: "Fast, modern business websites",
        href: "/services",
        icon: Code2,
    },
    {
        name: "E-commerce Solutions",
        description: "Online stores built to sell",
        href: "/services/ecommerce",
        icon: ShoppingBag,
    },
    {
        name: "Custom Software",
        description: "Solutions built around your needs",
        href: "/services/software",
        icon: Layers3,
    },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (href) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    const closeMobileMenu = () => {
        setMobileOpen(false);
        setMobileServicesOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 w-full">
            {/* Premium top information bar */}
            <div className="hidden bg-[#0B2038] text-white md:block">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
                    <p className="flex items-center gap-2 text-[11px] font-medium tracking-wide text-slate-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        Your digital growth partner — from ideas to innovation.
                    </p>

                    <div className="flex items-center gap-5 text-[11px] font-medium text-slate-300">
                        <a
                            href="mailto:hello@oceanshadowtech.com"
                            className="flex items-center gap-2 transition hover:text-cyan-300"
                        >
                            <Mail size={13} className="text-cyan-400" />
                            hello@oceanshadowtech.com
                        </a>

                        <span className="h-3 w-px bg-white/15" />

                        <a
                            href="tel:+8801000000000"
                            className="flex items-center gap-2 transition hover:text-cyan-300"
                        >
                            <Phone size={13} className="text-cyan-400" />
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>

            {/* Main navigation */}
            <div className="border-b border-slate-200/70 bg-white/95 shadow-[0_5px_30px_rgba(15,35,60,0.04)] backdrop-blur-2xl">
                <nav
                    aria-label="Main navigation"
                    className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:h-[88px] lg:px-8"
                >
                    {/* Brand */}
                    <Link
                        href="/"
                        onClick={closeMobileMenu}
                        aria-label="Ocean Shadow Tech home"
                        className="group flex shrink-0 items-center"
                    >
                        <Image
                            src="/images/logo.jpeg"
                            alt="Ocean Shadow Tech"
                            width={300}
                            height={120}
                            priority
                            sizes="(max-width: 640px) 175px, 210px"
                            className="h-12 w-auto object-contain transition duration-300 group-hover:opacity-85 sm:h-[54px] lg:h-[58px]"
                        />
                    </Link>

                    {/* Desktop links */}
                    <div className="hidden h-full items-center gap-1 lg:flex">
                        {navLinks.map((link) => {
                            const active = isActive(link.href);

                            return (
                                <div key={link.name} className="group relative flex h-full items-center">
                                    <Link
                                        href={link.href}
                                        aria-current={active ? "page" : undefined}
                                        className={`relative flex items-center gap-1.5 px-3.5 py-3 text-[13px] font-semibold transition-colors duration-200 xl:px-4 ${active
                                            ? "text-[#0876C9]"
                                            : "text-slate-600 hover:text-[#0876C9]"
                                            }`}
                                    >
                                        {link.name}

                                        {link.dropdown && (
                                            <ChevronDown
                                                size={14}
                                                className="transition-transform duration-200 group-hover:rotate-180"
                                            />
                                        )}

                                        <span
                                            className={`absolute inset-x-4 bottom-0 h-[2px] rounded-full bg-gradient-to-r from-[#16B8D4] to-[#0876C9] transition-transform duration-300 ${active
                                                ? "scale-x-100"
                                                : "scale-x-0 group-hover:scale-x-100"
                                                }`}
                                        />
                                    </Link>

                                    {/* Services dropdown */}
                                    {link.dropdown && (
                                        <div className="invisible absolute left-0 top-[calc(100%-2px)] w-[320px] translate-y-3 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                                            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-2 shadow-[0_20px_60px_rgba(15,35,60,0.14)]">
                                                <div className="px-3 pb-2 pt-3">
                                                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0876C9]">
                                                        What we do
                                                    </p>
                                                    <p className="mt-1 text-sm font-semibold text-[#102B49]">
                                                        Digital solutions for growth
                                                    </p>
                                                </div>

                                                {serviceLinks.map((service) => {
                                                    const Icon = service.icon;

                                                    return (
                                                        <Link
                                                            key={service.name}
                                                            href={service.href}
                                                            className="group/item flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-sky-50"
                                                        >
                                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-sky-100 bg-sky-50 text-[#0876C9] transition group-hover/item:border-sky-200 group-hover/item:bg-white">
                                                                <Icon size={19} />
                                                            </span>

                                                            <span className="min-w-0 flex-1">
                                                                <span className="block text-[13px] font-semibold text-slate-800 transition group-hover/item:text-[#0876C9]">
                                                                    {service.name}
                                                                </span>
                                                                <span className="mt-1 block text-[11px] text-slate-500">
                                                                    {service.description}
                                                                </span>
                                                            </span>

                                                            <ArrowUpRight
                                                                size={15}
                                                                className="text-slate-400 transition group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 group-hover/item:text-[#0876C9]"
                                                            />
                                                        </Link>
                                                    );
                                                })}

                                                <div className="mx-2 mt-1 border-t border-slate-100" />

                                                <Link
                                                    href="/services"
                                                    className="flex items-center justify-between px-3 py-3 text-xs font-semibold text-[#0876C9] transition hover:text-[#102B49]"
                                                >
                                                    Explore all services
                                                    <ArrowUpRight size={15} />
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:block">
                        <Link
                            href="/contact"
                            className="group relative inline-flex h-11 items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#123B66] px-5 text-[13px] font-semibold text-white shadow-md shadow-blue-950/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#0876C9] hover:shadow-lg hover:shadow-blue-900/15 xl:px-6"
                        >
                            <span className="relative z-10">Start a Project</span>
                            <ArrowUpRight
                                size={16}
                                className="relative z-10 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </Link>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        type="button"
                        onClick={() => setMobileOpen((open) => !open)}
                        aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
                        aria-expanded={mobileOpen}
                        aria-controls="mobile-navigation"
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#123B66] transition hover:border-sky-200 hover:bg-sky-50 lg:hidden"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </nav>

                {/* Mobile menu */}
                <div
                    id="mobile-navigation"
                    className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out lg:hidden ${mobileOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "pointer-events-none grid-rows-[0fr] opacity-0"
                        }`}
                    aria-hidden={!mobileOpen}
                >
                    <div className="min-h-0 overflow-hidden">
                        <div className="border-t border-slate-100 bg-white px-5 pb-6 pt-3 sm:px-6">
                            <div className="mx-auto flex max-w-7xl flex-col">
                                {navLinks.map((link) => {
                                    const active = isActive(link.href);

                                    if (link.dropdown) {
                                        return (
                                            <div key={link.name} className="border-b border-slate-100">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setMobileServicesOpen((open) => !open)
                                                    }
                                                    aria-expanded={mobileServicesOpen}
                                                    className={`flex w-full items-center justify-between py-4 text-sm font-semibold transition ${active ? "text-[#0876C9]" : "text-slate-700"
                                                        }`}
                                                >
                                                    Services
                                                    <ChevronDown
                                                        size={17}
                                                        className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""
                                                            }`}
                                                    />
                                                </button>

                                                <div
                                                    className={`grid overflow-hidden transition-[grid-template-rows] duration-200 ${mobileServicesOpen
                                                        ? "grid-rows-[1fr]"
                                                        : "grid-rows-[0fr]"
                                                        }`}
                                                >
                                                    <div className="min-h-0 overflow-hidden">
                                                        <div className="mb-3 ml-2 space-y-1 border-l-2 border-sky-100 pl-3">
                                                            {serviceLinks.map((service) => (
                                                                <Link
                                                                    key={service.name}
                                                                    href={service.href}
                                                                    tabIndex={mobileServicesOpen ? 0 : -1}
                                                                    onClick={closeMobileMenu}
                                                                    className="block rounded-lg px-3 py-3 text-sm text-slate-600 transition hover:bg-sky-50 hover:text-[#0876C9]"
                                                                >
                                                                    {service.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }

                                    return (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            onClick={closeMobileMenu}
                                            aria-current={active ? "page" : undefined}
                                            className={`border-b border-slate-100 py-4 text-sm font-semibold transition ${active
                                                ? "text-[#0876C9]"
                                                : "text-slate-700 hover:text-[#0876C9]"
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    );
                                })}

                                <Link
                                    href="/contact"
                                    onClick={closeMobileMenu}
                                    className="group mt-5 flex h-12 items-center justify-center gap-2 rounded-lg bg-[#123B66] px-5 text-sm font-semibold text-white transition hover:bg-[#0876C9]"
                                >
                                    Start a Project
                                    <ArrowUpRight
                                        size={17}
                                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </Link>

                                <div className="mt-5 flex flex-col gap-3 rounded-xl bg-slate-50 p-4">
                                    <a
                                        href="mailto:hello@oceanshadowtech.com"
                                        className="flex items-center gap-2.5 text-xs text-slate-600"
                                    >
                                        <Mail size={15} className="text-[#0876C9]" />
                                        hello@oceanshadowtech.com
                                    </a>

                                    <a
                                        href="tel:+8801000000000"
                                        className="flex items-center gap-2.5 text-xs text-slate-600"
                                    >
                                        <Phone size={15} className="text-[#0876C9]" />
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
