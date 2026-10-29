
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
} from "lucide-react";

const slides = [
    {
        number: "01",
        eyebrow: "WEB DEVELOPMENT  /  DESIGN  /  DIGITAL SOLUTIONS",
        title: "Turning Ideas Into",
        highlight: "Powerful Digital Products.",
        description:
            "We build modern websites, scalable applications and digital solutions that help your business grow in the digital world.",
        image: "/images/hero-1.jpg",
    },
    {
        number: "02",
        eyebrow: "CREATIVE DESIGN  /  DEVELOPMENT  /  INNOVATION",
        title: "Digital Experiences",
        highlight: "Made to Matter.",
        description:
            "From thoughtful design to reliable development, we create digital experiences that connect brands with people.",
        image: "/images/hero-2.jpg",
    },
    {
        number: "03",
        eyebrow: "E-COMMERCE  /  WEB APPLICATIONS  /  GROWTH",
        title: "Build Your Vision.",
        highlight: "Grow Without Limits.",
        description:
            "Turn your next big idea into a high-performing digital product with a team focused on quality and results.",
        image: "/images/hero-3.jpg",
    },
];

export default function Hero() {
    const [active, setActive] = useState(0);
    const slide = slides[active];

    const nextSlide = () => {
        setActive((current) => (current + 1) % slides.length);
    };

    const prevSlide = () => {
        setActive(
            (current) => (current - 1 + slides.length) % slides.length
        );
    };

    useEffect(() => {
        const timer = window.setInterval(() => {
            setActive((current) => (current + 1) % slides.length);
        }, 6000);

        return () => window.clearInterval(timer);
    }, []);

    return (
        <section className="relative isolate flex min-h-[680px] items-center justify-center overflow-hidden bg-[#071827] text-white sm:min-h-[740px] lg:min-h-[800px]">

            {/* Background image */}
            <AnimatePresence mode="sync">
                <motion.div
                    key={slide.image}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.1, ease: "easeInOut" }}
                    className="absolute inset-0 -z-20"
                >
                    <Image
                        src={slide.image}
                        alt=""
                        fill
                        priority={active === 0}
                        sizes="100vw"
                        className="object-cover"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Premium dark overlays */}
            <div className="absolute inset-0 -z-10 bg-[#061626]/65" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#061626]/65 via-[#061626]/35 to-[#061626]/85" />

            {/* Ambient cyan glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

            {/* Centered content */}
            <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-5 pb-28 pt-32 text-center sm:px-8 sm:pb-32 lg:px-10">

                <AnimatePresence mode="wait">
                    <motion.div
                        key={slide.number}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -18 }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                        className="flex w-full flex-col items-center"
                    >
                        {/* Eyebrow */}
                        <div className="mb-7 flex items-center justify-center gap-3">
                            <span className="h-px w-7 bg-cyan-400 sm:w-10" />
                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-100 sm:text-xs sm:tracking-[0.28em]">
                                {slide.eyebrow}
                            </p>
                            <span className="h-px w-7 bg-cyan-400 sm:w-10" />
                        </div>

                        {/* Heading */}
                        <h1 className="max-w-5xl text-4xl font-bold leading-[1.12] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[82px]">
                            {slide.title}
                            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                                {slide.highlight}
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-7 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8 md:text-lg">
                            {slide.description}
                        </p>

                        {/* CTA buttons */}
                        <div className="mt-9 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
                            <Link
                                href="/contact"
                                className="group inline-flex h-12 w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-7 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/20 sm:w-auto"
                            >
                                Start a Project
                                <ArrowUpRight
                                    size={18}
                                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </Link>

                            <Link
                                href="/portfolio"
                                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/35 bg-white/[0.04] px-7 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:border-cyan-300/70 hover:bg-white/10 sm:w-auto"
                            >
                                Explore Our Work
                                <ArrowRight size={17} />
                            </Link>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Previous / next arrows */}
            <button
                type="button"
                aria-label="Previous slide"
                onClick={prevSlide}
                className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/10 text-white backdrop-blur-sm transition hover:border-cyan-300 hover:bg-cyan-500/20 sm:left-8 sm:h-12 sm:w-12 lg:left-12"
            >
                <ArrowLeft size={19} />
            </button>

            <button
                type="button"
                aria-label="Next slide"
                onClick={nextSlide}
                className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/10 text-white backdrop-blur-sm transition hover:border-cyan-300 hover:bg-cyan-500/20 sm:right-8 sm:h-12 sm:w-12 lg:right-12"
            >
                <ArrowRight size={19} />
            </button>

            {/* Bottom slider controls */}
            <div className="absolute inset-x-0 bottom-0 z-20">
                <div className="mx-auto flex max-w-7xl items-center justify-between border-t border-white/15 px-5 py-5 sm:px-8 lg:px-10">

                    <p className="hidden text-xs font-medium tracking-wide text-slate-300 sm:block">
                        OCEAN SHADOW TECH
                    </p>

                    <div className="flex items-center gap-4">
                        {slides.map((item, index) => (
                            <button
                                key={item.number}
                                type="button"
                                aria-label={`Go to slide ${index + 1}`}
                                aria-current={active === index ? "true" : undefined}
                                onClick={() => setActive(index)}
                                className="flex items-center gap-2"
                            >
                                <span
                                    className={`text-xs font-semibold transition-colors ${active === index
                                            ? "text-cyan-300"
                                            : "text-white/50 hover:text-white"
                                        }`}
                                >
                                    {item.number}
                                </span>

                                <span
                                    className={`h-1 rounded-full transition-all duration-500 ${active === index
                                            ? "w-8 bg-cyan-400"
                                            : "w-3 bg-white/30"
                                        }`}
                                />
                            </button>
                        ))}
                    </div>

                    <p className="hidden text-xs text-slate-300 sm:block">
                        Design. Develop. Deliver.
                    </p>
                </div>
            </div>
        </section>
    );
}
