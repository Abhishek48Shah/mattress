"use client";
import Button from "../Ui/Button";
import Image from "next/image";
import LinkButton from "../Ui/LinkButton";
export default function ProductDetails({ ...props }) {
    const { product, handleClick } = props;
    return (
        <section className="py-12 md:py-24 bg-[var(--bg-light)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left: Image */}
                    <div className="relative aspect-square md:aspect-auto md:h-full rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Right: Details */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div>
                            <span className="text-sm font-medium text-[var(--accent)] uppercase tracking-wide">
                                {product.category}
                            </span>
                            <h1 className="mt-2 text-3xl md:text-4xl font-bold text-[var(--primary)]">
                                {product.name}
                            </h1>
                            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        <div className="text-4xl font-bold text-[var(--accent)]">
                            ${product.price}
                        </div>

                        {/* Features */}
                        {product.features && (
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-2">
                                    Key Features
                                </h3>
                                <ul className="space-y-1">
                                    {product.features.map((f) => (
                                        <li
                                            key={f}
                                            className="flex items-center gap-2 text-gray-700"
                                        >
                                            <span className="text-[var(--accent)]">
                                                Check
                                            </span>{" "}
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Specs */}
                        {product.specs && (
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-2">
                                    Specifications
                                </h3>
                                <dl className="grid grid-cols-2 gap-2 text-sm">
                                    {Object.entries(product.specs).map(
                                        ([key, value]) => (
                                            <div key={key}>
                                                <dt className="font-medium text-gray-600 capitalize">
                                                    {key}
                                                </dt>
                                                <dd className="text-gray-900">
                                                    {value}
                                                </dd>
                                            </div>
                                        )
                                    )}
                                </dl>
                            </div>
                        )}

                        {/* CTA */}
                        <LinkButton href="/cart" style="blue">
                            Add to Cart
                        </LinkButton>
                    </div>
                </div>
            </div>
        </section>
    );
}
