// components/ProductGrid.tsx
"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiFilter } from "react-icons/fi";

interface Product {
    id: number;
    slung: string;
    name: string;
    price: number;
    image: string;
    category: "Mattress" | "Bedhead" | "Bed Base";
}

const products: Product[] = [
    {
        id: 1,
        slug: "cloud-comfort-deluxe",
        name: "Cloud Comfort Deluxe",
        price: 1299,
        image: "/photo/mattress.jpg",
        category: "Mattress",
        description:
            "Luxury memory foam with cooling gel. Perfect for hot sleepers.",
        features: ["Cooling Gel", "Medium Firm", "10-Year Warranty"],
        specs: { size: "Queen", height: "30cm", weight: "28kg" },
    },
];

interface ProductGridProps {
    initialCategory?: "Mattress" | "Bedhead" | "Bed Base";
}

export default function ProductGrid({
    initialCategory,
}: ProductGridProps = {}) {
    const [priceRange, setPriceRange] = useState([0, 2000]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>(
        initialCategory ? [initialCategory] : []
    );
    const [showFilters, setShowFilters] = useState(false);

    const categories = ["Mattress", "Bedhead", "Bed Base"] as const;

    // Sync URL category on mount
    useEffect(() => {
        if (initialCategory && !selectedCategories.includes(initialCategory)) {
            setSelectedCategories([initialCategory]);
        }
    }, [initialCategory]);

    const filteredProducts = useMemo(() => {
        return products.filter((p) => {
            const inPrice =
                p.price >= priceRange[0] && p.price <= priceRange[1];
            const inCategory =
                selectedCategories.length === 0 ||
                selectedCategories.includes(p.category);
            return inPrice && inCategory;
        });
    }, [priceRange, selectedCategories]);

    const toggleCategory = (cat: string) => {
        setSelectedCategories((prev) =>
            prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
        );
    };

    return (
        <section className="py-12 md:py-24 bg-[var(--bg-light)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)]">
                        {initialCategory
                            ? `${initialCategory}s`
                            : "All Products"}
                    </h2>
                    <p className="mt-2 text-lg text-gray-600">
                        Premium comfort, handcrafted in Melbourne
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters */}
                    <aside
                        className={`lg:w-64 space-y-6 ${
                            showFilters ? "block" : "hidden lg:block"
                        }`}
                    >
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="lg:hidden w-full flex items-center justify-between p-3 bg-white rounded-lg shadow-sm border"
                        >
                            <span className="flex items-center gap-2">
                                <FiFilter className="w-5 h-5" />
                                Filters
                            </span>
                        </button>

                        <div className="bg-white p-6 rounded-xl shadow-sm space-y-6">
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-3">
                                    Category
                                </h3>
                                <div className="space-y-2">
                                    {categories.map((cat) => (
                                        <label
                                            key={cat}
                                            className="flex items-center gap-3 cursor-pointer"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={selectedCategories.includes(
                                                    cat
                                                )}
                                                onChange={() =>
                                                    toggleCategory(cat)
                                                }
                                                className="w-4 h-4 text-[var(--accent)] rounded"
                                            />
                                            <span className="text-gray-700">
                                                {cat}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-900 mb-3">
                                    Price Range
                                </h3>
                                <input
                                    type="range"
                                    min="0"
                                    max="2000"
                                    step="50"
                                    value={priceRange[1]}
                                    onChange={(e) =>
                                        setPriceRange([
                                            priceRange[0],
                                            Number(e.target.value),
                                        ])
                                    }
                                    className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
                                />
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>${priceRange[0]}</span>
                                    <span>${priceRange[1]}</span>
                                </div>
                            </div>

                            {(selectedCategories.length > 0 ||
                                priceRange[1] < 2000) && (
                                <button
                                    onClick={() => {
                                        setSelectedCategories([]);
                                        setPriceRange([0, 2000]);
                                    }}
                                    className="w-full text-sm text-[var(--accent)] hover:underline"
                                >
                                    Clear filters
                                </button>
                            )}
                        </div>
                    </aside>

                    {/* Grid */}
                    <div className="flex-1">
                        {filteredProducts.length === 0 ? (
                            <p className="text-center py-12 text-gray-500">
                                No products found.
                            </p>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredProducts.map((p) => (
                                    <div
                                        key={p.id}
                                        className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group"
                                    >
                                        <div className="relative aspect-square bg-gray-50">
                                            <Image
                                                src={p.image}
                                                alt={p.name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform"
                                            />
                                            <p>or 4 payments as low as </p>
                                            <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full text-xs font-medium">
                                                {p.category}
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <h3 className="font-semibold text-lg text-gray-900 mb-1">
                                                {p.name}
                                            </h3>
                                            <p className="text-2xl font-bold text-[var(--accent)]">
                                                ${p.price}
                                            </p>
                                            <Link
                                                href={`/shop/${p.id}`}
                                                className="mt-4 block"
                                            >
                                                <button className="w-full py-2 bg-[var(--primary)] text-white rounded-lg font-medium hover:bg-[#003366]">
                                                    View Details
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
