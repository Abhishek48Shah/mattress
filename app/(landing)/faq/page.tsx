// app/faq/page.tsx
import FAQ from "@/components/FAQ/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQ – Quantum Furniture",
    description:
        "Answers to your questions about delivery, returns, finance, and more.",
};

export default function FAQPage() {
    return (
        <>
            {/* Breadcrumb */}
            <div className="bg-gray-50 border-b">
                <div className="max-w-7xl mx-auto px-4 py-3 text-sm">
                    <nav className="flex space-x-2 text-gray-600">
                        <a href="/" className="hover:text-gray-900">
                            Home
                        </a>
                        <span>/</span>
                        <span className="text-gray-900">FAQ</span>
                    </nav>
                </div>
            </div>

            {/* Hero Header */}
            <section className="bg-white py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Find quick answers to common questions about our
                        products and services.
                    </p>
                </div>
            </section>

            {/* Dynamic FAQ List */}
            <FAQ />
        </>
    );
}
