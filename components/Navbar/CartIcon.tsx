"use client";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
export default function CartIcon() {
    return (
        <div className="relative">
            <Link
                href="/cart"
                className="text-md top-0 md:text-xl text-[var(--on-primary)]"
            >
                <FiShoppingCart />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                    3
                </span>
            </Link>
        </div>
    );
}
