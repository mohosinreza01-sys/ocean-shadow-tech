
"use client";

import { motion } from "motion/react";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export default function WhatsAppFloat() {
    const [showTooltip, setShowTooltip] = useState(true);

    // Replace with your real WhatsApp number, including country code.
    const phoneNumber = "8801XXXXXXXXX";

    const message = encodeURIComponent(
        "Hi Ocean Shadow Tech! I would like to discuss a project."
    );

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <div className="fixed bottom-5 right-5 z-[9999] flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
            {/* Tooltip */}
            {showTooltip && (
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative flex max-w-[260px] items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 pr-9 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.22)]"
                >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#128C7E]">
                        <MessageCircle size={21} />
                    </div>

                    <div>
                        <p className="text-sm font-bold text-[#102B49]">
                            Let&apos;s talk!
                        </p>
                        <p className="mt-1 text-xs leading-5 text-slate-500">
                            Have a project in mind? Chat with our team.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={() => setShowTooltip(false)}
                        aria-label="Close WhatsApp tooltip"
                        className="absolute right-2 top-2 rounded-md p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                    >
                        <X size={14} />
                    </button>

                    {/* Tooltip pointer */}
                    <span className="absolute -bottom-1.5 right-7 h-3 w-3 rotate-45 border-b border-r border-slate-200 bg-white" />
                </motion.div>
            )}

            {/* WhatsApp button */}
            <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Ocean Shadow Tech on WhatsApp"
                title="Chat on WhatsApp"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                transition={{ duration: 0.25 }}
                className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.35)] outline-none transition-colors hover:bg-[#20BA5A] focus-visible:ring-4 focus-visible:ring-[#25D366]/30 sm:h-16 sm:w-16"
            >
                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-20" />

                {/* WhatsApp icon using inline SVG */}
                <svg
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    className="relative z-10 h-7 w-7 sm:h-8 sm:w-8"
                    aria-hidden="true"
                >
                    <path d="M16.02 3.2C9.03 3.2 3.35 8.85 3.35 15.8c0 2.22.59 4.39 1.71 6.31L3.2 28.8l6.87-1.8a12.72 12.72 0 0 0 5.95 1.48h.01c6.98 0 12.66-5.65 12.66-12.6 0-3.37-1.32-6.54-3.72-8.92a12.58 12.58 0 0 0-8.95-3.76Zm0 23.14h-.01a10.56 10.56 0 0 1-5.38-1.47l-.39-.23-4.08 1.07 1.09-3.97-.25-.4a10.46 10.46 0 0 1-1.61-5.54c0-5.86 4.78-10.62 10.65-10.62 2.84 0 5.51 1.1 7.52 3.12a10.54 10.54 0 0 1 3.12 7.5c0 5.86-4.78 10.54-10.66 10.54Zm5.85-7.93c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.51-.16-.72.16-.21.31-.83 1.05-1.02 1.27-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.84-1.6-1.87-1.79-2.19-.19-.31-.02-.48.14-.64.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.99-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.1-1.12 2.67s1.15 3.09 1.31 3.3c.16.21 2.26 3.44 5.47 4.82.76.33 1.36.52 1.82.67.77.24 1.46.21 2.01.13.62-.09 1.9-.77 2.17-1.51.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z" />
                </svg>

                {/* Hover label */}
                <span className="pointer-events-none absolute right-full mr-4 hidden whitespace-nowrap rounded-lg bg-[#0B2038] px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-xl transition duration-200 group-hover:opacity-100 sm:block">
                    Chat with us
                </span>
            </motion.a>
        </div>
    );
}
