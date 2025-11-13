"use client";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import LinkButton from "../Ui/LinkButton";

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "What are your opening hours?",
        answer: "We are open 7 days a week. Mon–Fri: 9am–4:30pm, Sat: 10am–4pm, Sun: 11am–4pm. Public holiday hours may vary — check Google.",
    },
    {
        question: "Do you offer delivery?",
        answer: "Yes! We deliver across Melbourne and surrounding suburbs. Free delivery on orders over $500. Standard delivery is $49.",
    },
    {
        question: "What is your return policy?",
        answer: "30-day return policy on all unused items in original packaging. Mattresses must be in hygienic condition with protective cover.",
    },
    {
        question: "Can I try products in store?",
        answer: "Absolutely! Visit our showroom in Kalika-5, Chitwan to test mattresses, bedheads, and bases before buying.",
    },
    {
        question: "Do you offer finance options?",
        answer: "Yes, we partner with Zip and Afterpay. Interest-free plans available on purchases over $300.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 md:py-20 bg-[var(--background)]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-[var(--text)] text-base sm:text-lg">
                        Got questions? We've got answers.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[var(--surface)] rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[var(--secondary)]"
                        >
                            {/* Question Button */}
                            <button
                                onClick={() => toggle(index)}
                                className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:ring-offset-2 group"
                                aria-expanded={openIndex === index}
                            >
                                <span className="font-semibold text-base sm:text-lg text-[var(--primary)] pr-4  transition-colors duration-300">
                                    {item.question}
                                </span>
                                <FiChevronDown
                                    className={`w-5 h-5 sm:w-6 sm:h-6 text-[var(--primary)] group-hover:text-[var(--secondary)] flex-shrink-0 transition-all duration-300 ${
                                        openIndex === index ? "rotate-180" : ""
                                    }`}
                                />
                            </button>

                            {/* Answer Panel */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    openIndex === index
                                        ? "max-h-96 opacity-100"
                                        : "max-h-0 opacity-0"
                                }`}
                            >
                                <div className="px-5 sm:px-6 pb-4 sm:pb-5 pt-2 text-[var(--text)] text-sm sm:text-base leading-relaxed border-t border-gray-100">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <p className="text-[var(--text)] text-base sm:text-lg mb-4">
                        Still have questions?
                    </p>
                    <LinkButton href="/contact" style="blue">
                        Contact Us
                    </LinkButton>
                </div>
            </div>
        </section>
    );
}
