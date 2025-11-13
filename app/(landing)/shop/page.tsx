"use client";

import { use } from "react";
import ProductGrid from "@/components/Product/ProductGrid";
import { notFound } from "next/navigation";

interface Props {
    searchParams: Promise<{ category?: string }>;
}

export default function ShopPage({ searchParams }: Props) {
    // 1. unwrap with React.use()
    const { category } = use(searchParams);

    // 2. validation (same as above)
    const validCategories = ["Mattress", "Bedhead", "Bed Base"] as const;
    if (category && !validCategories.includes(category as any)) {
        notFound();
    }

    return <ProductGrid initialCategory={category as any} />;
}
