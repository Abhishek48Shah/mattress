import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
interface LandingLayoutProps {
    children: React.ReactNode;
}
export default function LandingLayout({
    children,
}: LandingLayoutProps): JSX.Element {
    return (
        <div className="">
            <Navbar />
            <main> {children}</main>
            <Footer />
        </div>
    );
}
