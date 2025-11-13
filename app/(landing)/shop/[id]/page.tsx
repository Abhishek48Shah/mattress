"use client";
import Image from "next/image";
import { use } from "react";
import { notFound } from "next/navigation";
import ProductDetails from "@/components/Product/ProductDetails";
import RecommendedProducts from "@/components/Product/RecommendedProducts";

interface Props {
    params: Promise<{ id: string }>;
}
export default function ProductDetail({ params }: Props) {
    const { id } = use(params);
    const product_id = parseInt(id, 10);
    const handleClick = () => {};
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
        {
            id: 2,
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
        {
            id: 3,
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
        {
            id: 4,
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
        {
            id: 5,
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
    const product = products.find((p) => p.id === product_id);

    if (!product) notFound();

    return (
        <>
            <ProductDetails product={product} handleClick={handleClick} />
            <RecommendedProducts
                currentProductId={product.id}
                currentCategory={product.category}
                products={products}
            />
        </>
    );
}
