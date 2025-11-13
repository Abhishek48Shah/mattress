"use client";
import Image from "next/image";
import LinkButton from "@/components/Ui/LinkButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ArrowButton from "../Icons/ArrowButton";
import DotIndicator from "../Ui/DotIndicator";
import { products } from "../data";
export default function ProductOverview() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const route = useRouter();
    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(products.length - 1, prev + 1));
    };

    const currentProduct = products[currentIndex];

    return (
        <section className="min-h-screen w-full px-6 py-16 bg-[var(--bg-light)] flex items-center justify-center">
            <div className="max-w-7xl mx-auto w-full">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl  font-bold text-[var(--primary)] mb-4">
                        Crafted for Your Comfort
                    </h2>
                    <p className="text-base md:text-lg text-[var(--text)] max-w-3xl mx-auto">
                        Handcrafted comfort for your perfect sleep. We design
                        and manufacture premium mattresses, stylish bedheads,
                        and durable bed bases right here in Melbourne.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className=" hidden md:block space-y-6">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-2">
                                {currentProduct.name}
                            </h3>
                            <p className="text-xl text-[var(--text)] italic">
                                {currentProduct.tagline}
                            </p>
                        </div>

                        <p className="text-[var(--text)]  text-base sm:text-lg leading-relaxed">
                            {currentProduct.description}
                        </p>
                        <LinkButton
                            href={`/craftmanship?product_name=${currentProduct.link}`}
                            style="blue"
                        >
                            Learn How It's Made
                        </LinkButton>

                        {/* Progress Indicator */}
                        <div className="flex gap-2 pt-6">
                            {products.map((_, index) => (
                                <DotIndicator
                                    key={index}
                                    index={index}
                                    currentIndex={currentIndex}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative w-full max-w-xl max-h-[60vh] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src={currentProduct.image}
                                alt={currentProduct.name}
                                height={600}
                                width={800}
                                className="object-contain transition-opacity duration-500"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        {/* Gradient + mobile content overlay */}
                        <div className="md:hidden absolute inset-0 rounded-2xl overflow-hidden">
                            {/* Gradient */}
                            <div className=" md:block absolute inset-0 bg-gradient-to-br from-[#001F3F]/90 via-[#001F3F]/70 to-[#87CEEB]/60"></div>

                            {/* Text content centered inside */}
                            <div className="relative z-20 flex flex-col justify-center items-start h-full p-4 sm:p-6">
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {currentProduct.name}
                                </h3>
                                <p className="text-xl text-[var(--accent)] italic mb-2">
                                    {currentProduct.tagline}
                                </p>
                                <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-4">
                                    {currentProduct.description}
                                </p>
                                <LinkButton
                                    href={`/craftmanship?product_name=${currentProduct.link}`}
                                    style="blue"
                                >
                                    Learn How It's Made
                                </LinkButton>

                                {/* Progress Indicator */}
                                <div className="flex gap-2 pt-4">
                                    {products.map((_, index) => (
                                        <DotIndicator
                                            key={index}
                                            index={index}
                                            currentIndex={currentIndex}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <ArrowButton
                            onPrev={handlePrev}
                            onNext={handleNext}
                            canPrev={currentIndex > 0}
                            canNext={currentIndex < products.length - 1}
                        />

                        <div className="absolute top-4 right-4 bg-white/90 px-4 py-2 rounded-full shadow-lg">
                            <span className="text-sm font-semibold text-[var(--primary)]">
                                {currentIndex + 1} / {products.length}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
