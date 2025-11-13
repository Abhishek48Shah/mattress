import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
interface ButtonProps {
    onPrev: () => void;
    onNext: () => void;
    canPrev: boolean;
    canNext: boolean;
}
export default function ArrowButton({ ...props }: ButtonProps) {
    const { onPrev, onNext, canPrev, canNext } = props;
    return (
        <>
            {/* Left */}
            <button
                onClick={onPrev}
                disabled={!canPrev}
                aria-label="Go back"
                className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg transition-all ${
                    canPrev
                        ? "hover:bg-white hover:scale-110"
                        : "opacity-40 cursor-not-allowed"
                }`}
            >
                <FiChevronLeft className="w-6 h-6 text-gray-800" />
            </button>

            {/* Right */}
            <button
                onClick={onNext}
                disabled={!canNext}
                aria-label="Next"
                className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg transition-all ${
                    canNext
                        ? "hover:bg-white hover:scale-110"
                        : "opacity-40 cursor-not-allowed"
                }`}
            >
                <FiChevronRight className="w-6 h-6 text-gray-800" />
            </button>
        </>
    );
}
