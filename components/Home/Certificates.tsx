"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { certificates } from "../data";

const Certificates = () => {
    const trackRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);
    const shouldAnimate = certificates.length > 0;

    const items = shouldAnimate
        ? [...certificates, ...certificates]
        : certificates;
    useEffect(() => {
        if (!shouldAnimate || isPaused) return;

        const track = trackRef.current;
        if (!track) return;

        const style = getComputedStyle(track);
        const gap = parseInt(style.columnGap) || 0;
        const card = track.firstElementChild as HTMLElement;
        const cardWidth = card?.offsetWidth || 0;
        const totalWidth = (cardWidth + gap) * certificates.length;

        let pos = 0;
        let raf: number;

        const step = () => {
            pos += 0.5; // speed
            if (pos >= totalWidth) pos = 0;
            track.style.transform = `translateX(-${pos}px)`;
            raf = requestAnimationFrame(step);
        };

        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [certificates.length, shouldAnimate, isPaused]);

    if (certificates.length === 0) return null;

    return (
        <section
            className="py-8 md:py-12 overflow-hidden relative bg-[var(--bg-light)]"
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
        >
            <style jsx>{`
                .cert-slider {
                    --gap-sm: 0.75rem; /* 12px mobile */
                    --gap-md: 1rem; /* 16px tablet+ */
                }

                .ticker-track {
                    display: flex;
                    gap: var(--gap-sm);
                    will-change: transform;
                }
                @media (min-width: 640px) {
                    .ticker-track {
                        gap: var(--gap-md);
                    }
                }

                .cert-card {
                    flex: 0 0 auto;
                    width: calc(100vw - 2rem);
                    max-width: 320px;
                    background: transparent;
                    border-radius: 1rem;
                    overflow: hidden;
                }

                .cert-image {
                    width: 100%;
                    height: auto;
                    max-height: 150px;
                    object-fit: contain;
                }

                .gradient-overlay {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    width: 4rem;
                    pointer-events: none;
                    z-index: 10;
                }
                .gradient-left {
                    left: 0;
                    background: linear-gradient(to right, #f8f7f3, transparent);
                }
                .gradient-right {
                    right: 0;
                    background: linear-gradient(to left, #f8f7f3, transparent);
                }
                @media (max-width: 480px) {
                    .gradient-overlay {
                        width: 2rem;
                    }
                }
            `}</style>

            {certificates.length > 1 && (
                <>
                    <div className="gradient-overlay gradient-left" />
                    <div className="gradient-overlay gradient-right" />
                </>
            )}

            <div className="max-w-7xl mx-auto px-4 md:px-8 cert-slider">
                <div className="overflow-hidden">
                    <div ref={trackRef} className="ticker-track">
                        {items.map((cert, i) => (
                            <div key={`${cert.id}-${i}`} className="cert-card">
                                <Image
                                    src={cert.image}
                                    alt={cert.title}
                                    width={150}
                                    height={150}
                                    className="cert-image"
                                    priority={i < 2}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certificates;
