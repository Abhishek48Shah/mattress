// components/ShoppingCart.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiX, FiMinus, FiPlus, FiTrash2, FiShoppingBag } from "react-icons/fi";

interface CartItem {
    id: number;
    slug: string;
    name: string;
    price: number;
    image: string;
    category: string;
    quantity: number;
}

interface ShoppingCartProps {
    isOpen: boolean;
    onClose: () => void;
    items: CartItem[];
    onUpdateQuantity: (id: number, quantity: number) => void;
    onRemoveItem: (id: number) => void;
}

export default function ShippingCart({
    isOpen,
    onClose,
    items,
    onUpdateQuantity,
    onRemoveItem,
}: ShoppingCartProps) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Calculate totals
    const subtotal = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const shipping = subtotal > 0 ? (subtotal > 1000 ? 0 : 50) : 0;
    const total = subtotal + shipping;

    // Prevent body scroll when cart is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isClient) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                onClick={onClose}
            />

            {/* Cart Panel */}
            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-[var(--surface)] shadow-2xl z-50 transform transition-transform duration-300 flex flex-col ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                        <FiShoppingBag className="w-6 h-6 text-[var(--primary)]" />
                        <h2 className="text-2xl font-bold text-[var(--primary)]">
                            Shopping Cart
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-[var(--background)] rounded-lg transition-colors"
                        aria-label="Close cart"
                    >
                        <FiX className="w-6 h-6 text-[var(--text)]" />
                    </button>
                </div>

                {/* Items Count */}
                {items.length > 0 && (
                    <div className="px-6 py-3 bg-[var(--background)]">
                        <p className="text-sm text-[var(--text)]">
                            {items.length}{" "}
                            {items.length === 1 ? "item" : "items"} in your cart
                        </p>
                    </div>
                )}

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center">
                            <div className="w-24 h-24 bg-[var(--background)] rounded-full flex items-center justify-center mb-4">
                                <FiShoppingBag className="w-12 h-12 text-[var(--text)]" />
                            </div>
                            <h3 className="text-xl font-semibold text-[var(--primary)] mb-2">
                                Your cart is empty
                            </h3>
                            <p className="text-[var(--text)] mb-6">
                                Add some products to get started!
                            </p>
                            <Link href="/shop">
                                <button
                                    onClick={onClose}
                                    className="px-6 py-3 bg-[var(--primary)] text-[var(--on-primary)] rounded-lg font-semibold hover:bg-[#003366] transition-colors"
                                >
                                    Browse Products
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {items.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex gap-4 p-4 bg-[var(--background)] rounded-xl"
                                >
                                    {/* Product Image */}
                                    <div className="relative w-20 h-20 flex-shrink-0 bg-white rounded-lg overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Product Details */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between gap-2 mb-1">
                                            <Link
                                                href={`/shop/${item.slug}`}
                                                onClick={onClose}
                                                className="font-semibold text-[var(--primary)] hover:text-[#003366] transition-colors line-clamp-1"
                                            >
                                                {item.name}
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    onRemoveItem(item.id)
                                                }
                                                className="p-1 hover:bg-white rounded transition-colors flex-shrink-0"
                                                aria-label="Remove item"
                                            >
                                                <FiTrash2 className="w-4 h-4 text-red-500" />
                                            </button>
                                        </div>

                                        <p className="text-xs text-[var(--text)] mb-3">
                                            {item.category}
                                        </p>

                                        <div className="flex items-center justify-between">
                                            {/* Quantity Controls */}
                                            <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200">
                                                <button
                                                    onClick={() =>
                                                        onUpdateQuantity(
                                                            item.id,
                                                            Math.max(
                                                                1,
                                                                item.quantity -
                                                                    1
                                                            )
                                                        )
                                                    }
                                                    className="p-2 hover:bg-[var(--background)] transition-colors rounded-l-lg"
                                                    aria-label="Decrease quantity"
                                                >
                                                    <FiMinus className="w-4 h-4 text-[var(--primary)]" />
                                                </button>
                                                <span className="w-8 text-center font-semibold text-[var(--primary)]">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() =>
                                                        onUpdateQuantity(
                                                            item.id,
                                                            item.quantity + 1
                                                        )
                                                    }
                                                    className="p-2 hover:bg-[var(--background)] transition-colors rounded-r-lg"
                                                    aria-label="Increase quantity"
                                                >
                                                    <FiPlus className="w-4 h-4 text-[var(--primary)]" />
                                                </button>
                                            </div>

                                            {/* Price */}
                                            <p className="text-lg font-bold text-[var(--primary)]">
                                                $
                                                {(
                                                    item.price * item.quantity
                                                ).toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer - Summary & Checkout */}
                {items.length > 0 && (
                    <div className="border-t border-gray-200 p-6 space-y-4">
                        {/* Subtotal */}
                        <div className="flex justify-between text-[var(--text)]">
                            <span>Subtotal</span>
                            <span className="font-semibold">
                                ${subtotal.toFixed(2)}
                            </span>
                        </div>

                        {/* Shipping */}
                        <div className="flex justify-between text-[var(--text)]">
                            <span>Shipping</span>
                            <span className="font-semibold">
                                {shipping === 0 ? (
                                    <span className="text-green-600">FREE</span>
                                ) : (
                                    `$${shipping.toFixed(2)}`
                                )}
                            </span>
                        </div>

                        {/* Free Shipping Notice */}
                        {shipping > 0 && subtotal < 1000 && (
                            <div className="text-xs text-[var(--secondary)] bg-[var(--background)] p-3 rounded-lg">
                                Add ${(1000 - subtotal).toFixed(2)} more for
                                FREE shipping!
                            </div>
                        )}

                        {/* Total */}
                        <div className="flex justify-between text-lg font-bold text-[var(--primary)] pt-4 border-t border-gray-200">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>

                        {/* Installment Info */}
                        <p className="text-xs text-center text-[var(--text)]">
                            or 4 interest-free payments of $
                            {(total / 4).toFixed(2)}
                        </p>

                        {/* Checkout Button */}
                        <Link href="/checkout">
                            <button
                                onClick={onClose}
                                className="w-full py-4 bg-[var(--primary)] text-[var(--on-primary)] rounded-lg font-bold text-lg hover:bg-[#003366] transition-colors shadow-lg hover:shadow-xl"
                            >
                                Proceed to Checkout
                            </button>
                        </Link>

                        {/* Continue Shopping */}
                        <button
                            onClick={onClose}
                            className="w-full py-3 text-[var(--primary)] font-semibold hover:underline"
                        >
                            Continue Shopping
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
