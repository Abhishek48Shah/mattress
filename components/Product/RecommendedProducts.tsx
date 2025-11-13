"use client";

import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

interface Product {
    id: number;
    slug: string;
    name: string;
    price: number;
    image: string;
    category: "Mattress" | "Bedhead" | "Bed Base";
}

interface RecommendedProductsProps {
    currentProductId: number;
    currentCategory: "Mattress" | "Bedhead" | "Bed Base";
    products: Product[];
    maxItems?: number;
}

export default function RecommendedProducts({
    currentProductId,
    currentCategory,
    products,
    maxItems = 4,
}: RecommendedProductsProps) {
    const recommendedProducts = useMemo(() => {
        const otherProducts = products.filter((p) => p.id !== currentProductId);
        const sameCategory = otherProducts.filter(
            (p) => p.category === currentCategory
        );
        const otherCategories = otherProducts.filter(
            (p) => p.category !== currentCategory
        );
        const combined = [...sameCategory, ...otherCategories];
        const shuffled = combined.sort(() => Math.random() - 0.5);
        return shuffled.slice(0, maxItems);
    }, [currentProductId, currentCategory, products, maxItems]);

    if (recommendedProducts.length === 0) {
        return null;
    }

    return (
        <section className="py-16 bg-[var(--background)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10">
                    <h2 className="text-3xl font-bold text-[var(--primary)] mb-2">
                        You May Also Like
                    </h2>
                    <p className="text-lg text-[var(--text)]">
                        Complete your bedroom with these carefully selected
                        products
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {recommendedProducts.map((product) => (
                        <Link
                            key={product.id}
                            href={`/shop/${product.id}`}
                            className="group"
                        >
                            <div className="bg-[var(--surface)] rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                                {/* Product Image */}
                                <div className="relative aspect-square bg-[var(--background)] overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />

                                    {/* Category Badge */}
                                    <div className="absolute top-3 left-3 bg-[var(--secondary)] text-[var(--on-secondary)] px-3 py-1 rounded-full text-xs font-semibold">
                                        {product.category}
                                    </div>
                                </div>

                                {/* Product Info */}
                                <div className="p-5">
                                    <h3 className="font-semibold text-lg text-[var(--primary)] mb-2 line-clamp-2 group-hover:text-[#003366] transition-colors">
                                        {product.name}
                                    </h3>

                                    <div className="flex items-center justify-between">
                                        <p className="text-2xl font-bold text-[var(--primary)]">
                                            ${product.price}
                                        </p>

                                        <span className="text-sm text-[var(--text)] group-hover:text-[var(--secondary)] transition-colors font-medium">
                                            View →
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View All Link */}
                <div className="text-center mt-10">
                    <Link
                        href="/shop"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-[var(--on-primary)] rounded-lg font-semibold hover:bg-[#003366] transition-colors"
                    >
                        View All Products
                    </Link>
                </div>
            </div>
        </section>
    );
}
