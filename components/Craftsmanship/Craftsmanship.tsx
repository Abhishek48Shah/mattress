export default function Craftsmanship({ data }) {
    return (
        <section className="py-16 md:py-24 px-4 md:px-8">
            return (
            <div>
                {/* Hero section */}
                <div className="flex flex-col md:flex-row items-center mb-8">
                    <img
                        src={craftmanshipData.big_photo_url}
                        className="w-full md:w-1/2"
                    />
                    <h1 className="text-3xl mt-4 md:mt-0 md:ml-8">
                        {craftmanshipData.title}
                    </h1>
                </div>
                {/* Grid of items */}
                <div className="grid gap-8">
                    {items
                        .sort((a, b) => a.order - b.order)
                        .map((item) => (
                            <div
                                key={item.id}
                                className={`flex flex-col md:flex-row items-center ${
                                    item.photo_position === "right"
                                        ? "md:flex-row-reverse"
                                        : ""
                                }`}
                            >
                                <img
                                    src={item.photo_url}
                                    className="w-full md:w-1/2"
                                />
                                <p className="w-full md:w-1/2 p-4">
                                    {item.text_content}
                                </p>
                            </div>
                        ))}
                </div>
            </div>
            );
        </section>
    );
}
