
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import {
    Home,
    Layers,
    BriefcaseBusiness,
    Tags,
    MessageCircle,
} from "lucide-react";

const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Services", href: "/services", icon: Layers },
    { label: "Work", href: "/portfolio", icon: BriefcaseBusiness },
    { label: "Pricing", href: "/pricing", icon: Tags },
    { label: "Contact", href: "/contact", icon: MessageCircle },
];

export default function BottomNav() {
    const pathname = usePathname();

    const isActive = (href) =>
        href === "/"
            ? pathname === "/"
            : pathname === href || pathname.startsWith(`${href}/`);

    return (
        <nav
            aria-label="Mobile navigation"
            className="fixed inset-x-0 bottom-0 z-[999] px-3 pb-[max(10px,env(safe-area-inset-bottom))] pt-2 md:hidden"
        >
            {/* Floating glass container */}
            <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#0B2038]/95 shadow-[0_-8px_40px_rgba(11,32,56,0.18)] backdrop-blur-2xl">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#16B8D4]/70 to-transparent" />

                <div className="grid grid-cols-5 px-1.5 py-2">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const active = isActive(item.href);

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                aria-label={item.label}
                                aria-current={active ? "page" : undefined}
                                className="relative flex min-w-0 flex-col items-center justify-center gap-1.5 rounded-xl px-1 py-2 outline-none focus-visible:ring-2 focus-visible:ring-[#16B8D4]"
                            >
                                {active && (
                                    <motion.div
                                        layoutId="bottom-nav-active"
                                        className="absolute inset-0 rounded-xl bg-[#16B8D4]/10"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    />
                                )}

                                <span className="relative flex h-6 items-center justify-center">
                                    <Icon
                                        size={21}
                                        strokeWidth={active ? 2.4 : 1.8}
                                        className={`transition-colors duration-200 ${active
                                                ? "text-[#16B8D4]"
                                                : "text-slate-400"
                                            }`}
                                    />
                                    {active && (
                                        <motion.span
                                            layoutId="bottom-nav-dot"
                                            className="absolute -right-1 -top-1 h-1.5 w-1.5 rounded-full bg-[#16B8D4]"
                                        />
                                    )}
                                </span>

                                <span
                                    className={`relative truncate text-[10px] font-semibold transition-colors duration-200 ${active
                                            ? "text-white"
                                            : "text-slate-400"
                                        }`}
                                >
                                    {item.label}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
