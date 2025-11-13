interface DotProps {
    key: number;
    index: number;
    currentIndex: number;
}
export default function DotIndicator({ ...props }: DotProps) {
    const { key, index, currentIndex } = props;
    return (
        <div
            key={key}
            className={`h-1 rounded-full transition-all duration -300 ${
                index === currentIndex
                    ? "w-12 bg-[var(--primary)]"
                    : "w-8 bg-gray-300"
            }`}
        />
    );
}
