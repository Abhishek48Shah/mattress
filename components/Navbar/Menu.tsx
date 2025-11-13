"use client";
import { FiAlignRight, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";
import Link from "next/link";
import { menu_data } from "./navItems";
import SocialMediaIcon from "../Icons/SocialMediaIcon";
export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => setIsOpen(false);
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
    return (
        <div className="xl:hidden relative">
            <button onClick={() => setIsOpen(!isOpen)} className="block">
                {isOpen ? (
                    <FiX className="text-xl md:text-2xl text-[var(--on-primary)]" />
                ) : (
                    <FiAlignRight className="text-xl md:text-2xl text-[var(--on-primary)]" />
                )}
            </button>

            <div
                className={` text-md font-bold bg-[var(--background)] text-[var(--primary)]  fixed h-screen w-screen top-16 gap-6 right-0  flex flex-col
                    transition-all duration-1000 ease-in-out items-start
                ${
                    isOpen
                        ? "translate-x-0 pointer-events-auto"
                        : "translate-x-full pointer-events-none"
                }
                `}
            >
                <div className="flex flex-col ml-5 mt-5">
                    {menu_data.map((item, index) => (
                        <Link
                            key={index}
                            onClick={closeMenu}
                            href={item.href}
                            className=" p-2 hover:text-[var(--text)]"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
                <div className="flex flex-col ml-5 ">
                    <Link
                        className="p-2 hover:text-[var(--text)]"
                        href="/about"
                        onClick={closeMenu}
                    >
                        About
                    </Link>
                    <Link
                        onClick={closeMenu}
                        className="p-2 hover:text-[var(--text)]"
                        href="/faq"
                    >
                        FAQ
                    </Link>
                    <Link
                        onClick={closeMenu}
                        className="p-2 hover:text-[var(--text)]"
                        href="/contact"
                    >
                        Contact
                    </Link>
                </div>
                <div className="flex w-full justify-center mt-28">
                    <SocialMediaIcon />
                </div>
            </div>
        </div>
    );
}
