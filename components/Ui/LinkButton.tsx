"use client";
import Link from "next/link";
interface LinkProps {
    style: "blue" | "white" | "black";
    href: string | UrlObject;
    children: React.ReactNode;
}
export default function LinkButton({ ...props }) {
    const { style, href, children } = props;
    const varient = {
        blue: "px-8 py-3 bg-[var(--primary)] text-center text-[var(--on-primary)] text-base font-semibold rounded-full hover:bg-[#003366] transition-all duration-300 shadow-lg hover:-translate-y-1",
    };
    return (
        <Link href={href} className={varient[style]}>
            {children}
        </Link>
    );
}
