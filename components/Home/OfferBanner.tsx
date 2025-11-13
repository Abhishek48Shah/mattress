import Image from "next/image";
import { FiPhoneCall, FiCheckCircle, FiStar } from "react-icons/fi";
export default function OfferBanner() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden bg-[var(--background)]">
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)",
                        backgroundSize: "40px 40px",
                    }}
                ></div>
            </div>

            <div className="relative flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-12 lg:py-0 min-h-screen">
                <div className="w-full lg:w-1/2 z-10 mb-8 lg:mb-0">
                    <div className="space-y-6 lg:pr-12">
                        <div className="inline-flex items-center gap-2 bg-[var(--secondary)] text-[var(--on-secondary)] px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                            <FiStar />
                            <span>Limited Time Offer</span>
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-5xl lg:text-7xl font-black text-[var(--primary)] leading-tight">
                                Up To
                                <span className="block  text-[var(--primary)]">
                                    35% OFF
                                </span>
                            </h2>
                            <p className="text-xl lg:text-2xl text-[var(--text)] font-medium">
                                Valid In Store Only
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-[var(--text)] text-lg max-w-md">
                            Experience premium quality at unbeatable prices.
                            Visit our store today and discover the perfect
                            mattress for your comfort.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="px-8 py-3 bg-[var(--primary)] text-[var(--on-primary)] text-base font-semibold rounded-full hover:bg-[#003366] transition-all duration-300 shadow-lg hover:-translate-y-1">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    <FiPhoneCall />
                                    Call Now
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 relative">
                    <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                        <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-3xl opacity-30"></div>
                        <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-gradient-to-br from-slate-400 to-slate-500 rounded-full blur-3xl opacity-20"></div>

                        <Image
                            src="/photo/aus.png"
                            alt="Australian made mattress logo"
                            fill
                            className="object-contain lg:object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
