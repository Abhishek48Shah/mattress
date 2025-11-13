"use client";
import { useRef, useEffect } from "react";
import { FiArrowDownCircle } from "react-icons/fi";
import LinkButton from "@/components/Ui/LinkButton";
import Image from "next/image";
import Button from "../Ui/Button";
export default function VideoShowcase() {
    const videoRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (videoRef.current) {
                if (window.innerWidth < 768) {
                    // Mobile: pause video at last frame
                    videoRef.current.pause();
                    videoRef.current.currentTime =
                        videoRef.current.duration || 0;
                } else {
                    // Desktop: play video
                    videoRef.current.play();
                }
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full hidden md:block">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object:fill sm:object-cover"
                    onLoadedMetadata={(e) => {
                        // On mobile, seek to end when loaded
                        if (window.innerWidth < 768) {
                            e.target.currentTime = e.target.duration;
                        }
                    }}
                >
                    <source src="/video/hero.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="absolute inset-0 w-full h-full md:hidden">
                <Image src="/photo/mattress.jpg" fill alt="mattress.jpg" />
            </div>
            {/* Gradient Overlay - Using your color palette */}

            <div className="absolute inset-0 bg-gradient-to-br from-[#001F3F]/90 via-[#001F3F]/70 to-[#87CEEB]/60"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-start px-6 md:px-12 lg:px-20">
                <div className="max-w-4xl text-white">
                    {/* Subtitle */}
                    <div className="mb-4 animate-fade-in-up">
                        <p className="text-[var(--secondary)] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] font-light">
                            Melbourne's Premier Choice
                        </p>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--on-primary)] mb-6 leading-tight animate-fade-in-up animation-delay-200">
                        Comfort Made Fresh,
                        <br />
                        Directly at Your Doorstep
                    </h1>

                    {/* Description */}
                    <p className="text-[var(--secondary)]  sm:text-base  lg:text-lg mb-4 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-400">
                        Melbourne's premium bed bases, bed heads, and luxury
                        mattresses. Australian-made quality manufactured locally
                        and delivered straight to your home.
                    </p>

                    {/* Tagline */}
                    <p className="text-[--on-primary] text-lg sm:text-xl md:text-2xl lg:text-3xl italic mb-10 animate-fade-in-up animation-delay-600">
                        "Sweet dreams begin with Quantum Furniture"
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-800">
                        <LinkButton style="blue" href="/shop">
                            Shop Mattresses
                        </LinkButton>
                    </div>
                </div>
            </div>
            {/* Scroll Indicator */}
            <div className="absolute bottom-16  sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce ">
                <FiArrowDownCircle className="w-6 h-6 text-[var(--surface)]" />
            </div>
        </section>
    );
}
