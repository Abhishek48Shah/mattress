import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

export default function SocialMediaIcon() {
    return (
        <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[var(--accent)]">
                <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[var(--accent)]">
                <FaInstagram />
            </a>
            <a href="#" className="hover:text-[var(--accent)]">
                <FaYoutube />
            </a>
            <a href="#" className="hover:text-[var(--accent)]">
                <FaTiktok />
            </a>
        </div>
    );
}
