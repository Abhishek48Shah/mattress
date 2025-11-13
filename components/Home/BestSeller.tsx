"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import LinkButton from "../Ui/LinkButton";
import ArrowButton from "../Icons/ArrowButton";
import DotIndicator from "../Ui/DotIndicator";
import { bestSellers } from "../data";

export default function BestSeller() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(3);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerView(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerView(2);
            } else {
                setItemsPerView(3);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Reset slide when itemsPerView changes
    useEffect(() => {
        setCurrentSlide(0);
    }, [itemsPerView]);

    // Recalculate maxSlide every time
    const maxSlide = Math.max(0, bestSellers.length - itemsPerView);

    const handlePrev = () => {
        setCurrentSlide((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => Math.min(maxSlide, prev + 1));
    };

    return (
        <section className="min-h-screen w-full pb-16 md:py-18 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
                        Our Best Sellers
                    </h2>
                    <p className="text-base sm:text-lg  text-[var(--text)] max-w-2xl mx-auto">
                        Discover why Melbourne loves these products. Quality,
                        comfort, and style that our customers can't get enough
                        of.
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{
                                transform: `translateX(-${
                                    currentSlide * (100 / itemsPerView)
                                }%)`,
                            }}
                        >
                            {bestSellers.map((product) => (
                                <div
                                    key={product.id}
                                    className="flex-shrink-0 px-3"
                                    style={{ width: `${100 / itemsPerView}%` }}
                                >
                                    <div className="bg-[var(--surface)] rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                                        <div className="relative aspect-square bg-[var(--background)] overflow-hidden">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute top-3 left-3 bg-[var(--secondary)] text-[var(--on-secondary)] px-3 py-1 rounded-full text-xs font-semibold">
                                                {product.badge}
                                            </div>
                                            <div className="absolute top-4 right-4 bg-white/90 text-[var(--primary)] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                                                {product.category}
                                            </div>
                                        </div>

                                        <div className=" p-4 md:p-6">
                                            <h3 className="text-2xl font-bold text-[var(--primary)] mb-2">
                                                {product.name}
                                            </h3>
                                            <p className="text-[var(--text)] mb-4 text-sm">
                                                {product.description}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm text-[var(--text)] uppercase tracking-wide">
                                                        From
                                                    </p>
                                                    <p className="text-2xl font-bold text-[var(--primary)]">
                                                        ${product.price}
                                                    </p>
                                                </div>
                                                <LinkButton
                                                    href="/shop"
                                                    style="blue"
                                                >
                                                    View Details
                                                </LinkButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Arrow Buttons – FIXED LOGIC */}
                    <ArrowButton
                        onPrev={handlePrev}
                        onNext={handleNext}
                        canPrev={currentSlide > 0}
                        canNext={currentSlide < maxSlide}
                    />
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-12">
                    {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                        <DotIndicator
                            key={index}
                            index={index}
                            currentIndex={currentSlide}
                        />
                    ))}
                </div>

                {/* View All */}
                <div className="text-center mt-12">
                    <LinkButton href="/shop" style="blue">
                        View All Products
                    </LinkButton>
                </div>
            </div>
        </section>
    );
}
