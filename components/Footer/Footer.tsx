"use client";
import { useState, useEffect } from "react";
import Button from "../Ui/Button";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { quickLinks, legal } from "./footer-items";
import SocialMediaIcon from "../Icons/SocialMediaIcon";
export default function Footer() {
    const [email, setEmail] = useState("");
    const router = useRouter();
    const pathname = usePathname();
    useEffect(() => {
        setEmail("");
    }, [pathname]);
    const handleClick = () => {
        const user_input = email.trim();
        if (!user_input) return;
        router.push(`/contact?email=${encodeURIComponent(user_input)}`);
    };
    return (
        <footer
            key={pathname}
            className="bg-[var(--primary)] text-[var(--on-primary] px-8 py-12 md:px-16 lg:px-24"
        >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16">
                {/* Brand / About */}
                <div>
                    <h2 className="text-2xl font-semibold  mb-4 text-[var(--on-primary)]">
                        Quantum Furniture
                    </h2>
                    <p className=" text-base sm:text-md leading-relaxed text-[var(--on-primary)]">
                        We craft premium mattresses and bedding designed for
                        perfect sleep and modern comfort. Dream better, sleep
                        smarter.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-[var(--on-primary)]">
                        Quick Links
                    </h3>
                    <ul className="space-y-2 text-base md:text-md text-[var(--on-primary)]">
                        {quickLinks.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    className="hover:text-[var(--accent)] transition"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-[var(--on-primary)]">
                        Lagal
                    </h3>
                    <ul className="space-y-2 text-base md:text-md text-[var(--on-primary)]">
                        {legal.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    className="hover:text-[var(--accent)] transition"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-[var(--on-primary)]">
                        Stay Updated
                    </h3>
                    <p className="text-sm mb-3 text-[var(--on-primary)]">
                        Subscribe for exclusive deals, new product launches, and
                        sleep tips.
                    </p>
                    <div className="flex flex-col  gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-3 py-2 rounded-md text-(var(--on-primary)) border border-[var(--on-primary)]/30 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--secondary)] placeholder-gray-400 caret-white"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Button
                            style="small"
                            onClick={handleClick}
                            type="button"
                            disabled={email ? false : true}
                        >
                            Subscribe
                        </Button>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[var(--accent)]/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--on-primary)]">
                <p>
                    © {new Date().getFullYear()} Quantum Furniture. All rights
                    reserved.
                </p>

                <div className="flex items-center gap-4">
                    <SocialMediaIcon />
                </div>
            </div>
        </footer>
    );
}
