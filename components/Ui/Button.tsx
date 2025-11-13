"use client";
interface ButtonProps {
    style?: "green" | "black" | "white";
    onClick?: () => void;
    type?: "button" | "submit";
    disabled?: boolean;
    children: React.ReactNode;
}
export default function Button({ ...props }: ButtonProps) {
    const { style, onClick, type, disabled, children } = props;
    const varient = {
        blue: "px-8 py-3 bg-[var(--primary)] text-[var(--on-primary)] text-base font-semibold rounded-full hover:bg-[#003366] transition-all duration-300 shadow-lg hover:-translate-y-1",
        small: "bg-[var(--secondary)] text-[var(--primary)] text-sm font-semibold px-4 py-2 rounded-md hover:bg-[var(--secondary)]/90 transition",
    };
    return (
        <button
            className={varient[style]}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
