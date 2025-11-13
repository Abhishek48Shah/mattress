"use client";

import { useState } from "react";
import Image from "next/image";
import ArrowButton from "../Icons/ArrowButton";
import StarRating from "../Ui/StarRating";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import { testimonials } from "../data";

interface Testimonial {
    id: number;
    name: string;
    location: string;
    message: string;
    rating: number;
    avatar: string;
}

export default function TestimonialSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const current = testimonials[currentIndex];

    const prev = () =>
        setCurrentIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));

    const next = () => setCurrentIndex((i) => (i + 1) % testimonials.length);

    const goTo = (idx: number) => setCurrentIndex(idx);

    return (
        <section className="py-12 md:py-20 bg-[var(--bg-light)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)]">
                        What Our Customers Say
                    </h2>
                    <p className="mt-2 text-lg text-[var(--primary)]">
                        Real stories from happy sleepers across Australia
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative">
                    {/* Desktop layout – side-by-side */}
                    <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
                        {/* LEFT – Avatar */}
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                            <Image
                                src={current.avatar}
                                alt={current.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* RIGHT – Text */}
                        <QuoteCard testimonial={current} />
                    </div>

                    {/* Mobile layout – stacked + background image */}
                    <div className="md:hidden relative">
                        <QuoteCardMobile testimonial={current} />
                    </div>

                    {/* Navigation – always visible on both layouts */}
                    <ArrowButton
                        onPrev={prev}
                        onNext={next}
                        canPrev={currentIndex > 0}
                        canNext={currentIndex < testimonials.length - 1}
                    />

                    {/* Dots */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                aria-label={`Go to testimonial ${i + 1}`}
                                className={` h-1 rounded-full transition-all ${
                                    i === currentIndex
                                        ? " w-12 bg-[var(--accent)] w-8"
                                        : " w-8 bg-gray-300"
                                }`}
                            />
                        ))}
                    </div>

                    {/* Counter badge (mobile only) */}
                    <div className="absolute top-4 right-4 md:hidden bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow">
                        {currentIndex + 1} / {testimonials.length}
                    </div>
                </div>
            </div>
        </section>
    );
}

function QuoteCard({ testimonial }: { testimonial: Testimonial }) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg">
            <QuoteIcon />
            <p className="mt-4 text-lg md:text-xl text-gray-700 italic">
                "{testimonial.message}"
            </p>

            <div className="mt-6 flex items-center space-x-3">
                <div className="flex-shrink-0">
                    <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="rounded-full object-cover"
                    />
                </div>
                <div>
                    <p className="font-semibold text-gray-900">
                        {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                        {testimonial.location}
                    </p>
                </div>
            </div>

            <StarRating rating={testimonial.rating} />
        </div>
    );
}

function QuoteCardMobile({ testimonial }: { testimonial: Testimonial }) {
    return (
        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            {/* Background image */}
            <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                fill
                className="object-cover"
                priority
            />

            {/* Dark scrim for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <QuoteIcon className="text-white/70" />
                <p className="mt-2 text-lg font-medium leading-snug">
                    "{testimonial.message}"
                </p>

                <div className="mt-4 flex items-center space-x-3">
                    <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full border-2 border-white/50"
                    />
                    <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm opacity-90">
                            {testimonial.location}
                        </p>
                    </div>
                </div>

                <StarRating
                    rating={testimonial.rating}
                    className="text-yellow-400"
                />
            </div>
        </div>
    );
}

function QuoteIcon({ className = "" }: { className?: string }) {
    return (
        <svg
            className={`w-10 h-10 ${className}`}
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
        </svg>
    );
}
