import { FiTag, FiTruck, FiLock, FiPackage } from "react-icons/fi";

export default function Promise() {
    return (
        <section className="py-16 md:py-20 px-6 bg-[var(--surface)]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-3">
                        Our Promise To You
                    </h2>
                    <p className="text-[var(--text)] text-base md:text-lg max-w-2xl mx-auto">
                        We're committed to providing the best experience from
                        browsing to delivery
                    </p>
                </div>

                {/* Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Card 1 - Big Discounts */}
                    <div className="group relative flex flex-col items-center text-center p-6 md:p-8 rounded-2xl bg-[var(--background)] border-2 border-gray-200 hover:border-[var(--secondary)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
                        {/* Background blob */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--secondary)] rounded-full opacity-20 group-hover:scale-150 group-hover:opacity-30 transition-all duration-500"></div>

                        {/* Icon container */}
                        <div className="relative z-10 mb-4">
                            <div className="p-4 md:p-5 rounded-2xl bg-[var(--surface)] shadow-md group-hover:shadow-lg group-hover:rotate-6 transition-all duration-300">
                                <FiTag className="text-4xl md:text-5xl text-[var(--primary)] group-hover:text-[var(--secondary)] transition-colors duration-300" />
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="relative z-10 font-bold text-lg md:text-xl text-[var(--primary)] mb-2">
                            Big Discounts
                        </h3>

                        {/* Description */}
                        <p className="relative z-10 text-sm text-[var(--text)]">
                            Save up to 35% on premium mattresses
                        </p>
                    </div>

                    {/* Card 2 - Delivery */}
                    <div className="group relative flex flex-col items-center text-center p-6 md:p-8 rounded-2xl bg-[var(--background)] border-2 border-gray-200 hover:border-[var(--secondary)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--secondary)] rounded-full opacity-20 group-hover:scale-150 group-hover:opacity-30 transition-all duration-500"></div>

                        <div className="relative z-10 mb-4">
                            <div className="p-4 md:p-5 rounded-2xl bg-[var(--surface)] shadow-md group-hover:shadow-lg group-hover:rotate-6 transition-all duration-300">
                                <FiTruck className="text-4xl md:text-5xl text-[var(--primary)] group-hover:text-[var(--secondary)] transition-colors duration-300" />
                            </div>
                        </div>

                        <h3 className="relative z-10 font-bold text-lg md:text-xl text-[var(--primary)] mb-2">
                            Free Delivery
                        </h3>

                        <p className="relative z-10 text-sm text-[var(--text)]">
                            Same-day delivery to your doorstep
                        </p>
                    </div>

                    {/* Card 3 - Secure Payments */}
                    <div className="group relative flex flex-col items-center text-center p-6 md:p-8 rounded-2xl bg-[var(--background)] border-2 border-gray-200 hover:border-[var(--secondary)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--secondary)] rounded-full opacity-20 group-hover:scale-150 group-hover:opacity-30 transition-all duration-500"></div>

                        <div className="relative z-10 mb-4">
                            <div className="p-4 md:p-5 rounded-2xl bg-[var(--surface)] shadow-md group-hover:shadow-lg group-hover:rotate-6 transition-all duration-300">
                                <FiLock className="text-4xl md:text-5xl text-[var(--primary)] group-hover:text-[var(--secondary)] transition-colors duration-300" />
                            </div>
                        </div>

                        <h3 className="relative z-10 font-bold text-lg md:text-xl text-[var(--primary)] mb-2">
                            Secure Payments
                        </h3>

                        <p className="relative z-10 text-sm text-[var(--text)]">
                            100% secure checkout process
                        </p>
                    </div>

                    {/* Card 4 - Order Tracking */}
                    <div className="group relative flex flex-col items-center text-center p-6 md:p-8 rounded-2xl bg-[var(--background)] border-2 border-gray-200 hover:border-[var(--secondary)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--secondary)] rounded-full opacity-20 group-hover:scale-150 group-hover:opacity-30 transition-all duration-500"></div>

                        <div className="relative z-10 mb-4">
                            <div className="p-4 md:p-5 rounded-2xl bg-[var(--surface)] shadow-md group-hover:shadow-lg group-hover:rotate-6 transition-all duration-300">
                                <FiPackage className="text-4xl md:text-5xl text-[var(--primary)] group-hover:text-[var(--secondary)] transition-colors duration-300" />
                            </div>
                        </div>

                        <h3 className="relative z-10 font-bold text-lg md:text-xl text-[var(--primary)] mb-2">
                            Order Tracking
                        </h3>

                        <p className="relative z-10 text-sm text-[var(--text)]">
                            Real-time updates on your order
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
