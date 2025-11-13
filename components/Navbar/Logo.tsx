import Link from "next/link";
import Image from "next/image";
export default function Logo() {
    return (
        <div>
            <Link href="/" className="text-[var(--on-primary)] font-bold">
                Quantum Furniture
            </Link>
        </div>
    );
}
