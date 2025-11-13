import { FiStar } from "react-icons/fi";
export default function StarRating({
    rating,
    className = "text-yellow-500",
}: {
    rating: number;
    className?: string;
}) {
    return (
        <div className={`flex space-x-1 mt-3 ${className}`}>
            {Array.from({ length: 5 }, (_, i) => (
                <FiStar
                    key={i}
                    className={`w-5 h-5 ${
                        i < rating ? "fill-current" : "stroke-current"
                    }`}
                />
            ))}
        </div>
    );
}
