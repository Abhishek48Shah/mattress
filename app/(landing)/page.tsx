import {
    VideoShowcase,
    ProductOverview,
    BestSeller,
    Certificates,
    OfferBanner,
    Promise,
    FAQ,
} from "@/components/Home/index";
export default function Home() {
    return (
        <main className="w-full relative">
            <VideoShowcase />
            <ProductOverview />
            <BestSeller />
            <Certificates />
            <OfferBanner />
            <Promise />
            <FAQ />
        </main>
    );
}
