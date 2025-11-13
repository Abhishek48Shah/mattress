// components/faq/FAQSection.tsx
"use client";
import { useState, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

export default function FAQSection() {
    const [faqs, setFaqs] = useState<FAQItem[]>([]);
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/faq")
            .then((res) => res.json())
            .then((data) => {
                setFaqs(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    if (loading) {
        return (
            <div className="py-20 text-center">
                <div className="inline-block w-8 h-8 border-4 border-t-transparent border-blue-600 rounded-full animate-spin"></div>
            </div>
        );
    }

    if (faqs.length === 0) {
        return (
            <section className="py-16 md:py-20 bg-[var(--bg-light)]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <p className="text-gray-500">
                        No FAQs available at the moment.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16 md:py-20 bg-[var(--bg-light)]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--primary)] mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg">
                        Got questions? We’ve got answers.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqs.map((item, i) => (
                        <div
                            key={item.id}
                            className="bg-[var(--neutral)] rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
                        >
                            <button
                                onClick={() => toggle(i)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
                                aria-expanded={openIndex === i}
                            >
                                <span className="font-semibold text-lg text-[var(--primary)] pr-4">
                                    {item.question}
                                </span>
                                <FiChevronDown
                                    className={`w-6 h-6 text-[var(--accent)] transition-transform duration-300 ${
                                        openIndex === i ? "rotate-180" : ""
                                    }`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    openIndex === i
                                        ? "max-h-96 opacity-100"
                                        : "max-h-0 opacity-0"
                                }`}
                            >
                                <div className="px-6 pb-5 pt-2 text-gray-700 leading-relaxed">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-4">Still have questions?</p>
                    <a
                        href="/contact"
                        className="inline-flex items-center px-6 py-3 bg-[var(--accent)] text-white font-semibold rounded-full hover:bg-[var(--primary)] transition-all duration-300 hover:shadow-lg"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
}
