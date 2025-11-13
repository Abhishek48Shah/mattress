"use client";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Logo from "./Logo";
import Menu from "./Menu";
import { usePathname } from "next/navigation";
import { nav_data } from "./navItems";

export default function NavBar() {
    const pathname = usePathname();
    return (
        <header className="absolute h-16 md:h-18 w-full  flex items-center justify-between p-2 z-50 shadow-xl bg-[var(--primary)]">
            <div className=" ml-2 md:ml-4">
                <Logo />
            </div>
            <nav className="text-sm font-bold hidden xl:flex  md:text-md gap-6 md:gap-10 absolute left-1/2 -translate-x-1/2">
                {nav_data.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className={` p-2 relative group transition-colors ${
                            pathname === item.href
                                ? "text-[var(--on-primary)]"
                                : "text-[var(--on-primary)]"
                        }`}
                    >
                        {item.label}
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5  transition-all duration-300 group-hover:w-full bg-[var(--on-primary)]"></span>
                    </Link>
                ))}
            </nav>
            <div className="flex items-center justify-center gap-6 mr-2 md:mr-8">
                <CartIcon />
                <Menu />
            </div>
        </header>
    );
}
