// app/privacy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Quantum Furniture",
    description:
        "Read our privacy policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        Privacy Policy
                    </h1>
                </header>

                {/* Table of Contents */}
                <nav className="bg-gray-50 p-6 rounded-lg mb-12">
                    <h3 className="font-semibold text-lg mb-4 text-gray-800">
                        Table of Contents
                    </h3>
                    <ul className="space-y-2 text-sm text-blue-600">
                        {[
                            { id: "who-we-are", label: "Who we are" },
                            { id: "comments", label: "Comments" },
                            { id: "media", label: "Media" },
                            { id: "cookies", label: "Cookies" },
                            {
                                id: "embedded-content",
                                label: "Embedded content from other websites",
                            },
                            {
                                id: "data-sharing",
                                label: "Who we share your data with",
                            },
                            {
                                id: "data-retention",
                                label: "How long we retain your data",
                            },
                            {
                                id: "data-rights",
                                label: "What rights you have over your data",
                            },
                            {
                                id: "data-transfer",
                                label: "Where your data is sent",
                            },
                        ].map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    className="hover:underline"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Privacy Sections */}
                <div className="prose prose-lg max-w-none text-gray-700 space-y-12">
                    {/* Who we are */}
                    <section id="who-we-are">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            Who we are
                        </h2>
                        <p>
                            Our website address is:{" "}
                            <a
                                href="https://www.quantumfurniture.com.au"
                                className="text-blue-600 underline"
                            >
                                https://www.quantumfurniture.com.au
                            </a>
                            .
                        </p>
                    </section>

                    {/* Comments */}
                    <section id="comments">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            Comments
                        </h2>
                        <p>
                            When visitors leave comments on the site we collect
                            the data shown in the comments form, and also the
                            visitor’s IP address and browser user agent string
                            to help spam detection.
                        </p>
                        <p className="mt-4">
                            An anonymized string created from your email address
                            (also called a hash) may be provided to the Gravatar
                            service to see if you are using it. The Gravatar
                            service privacy policy is available here:{" "}
                            <a
                                href="https://automattic.com/privacy/"
                                className="text-blue-600 underline"
                            >
                                https://automattic.com/privacy/
                            </a>
                            . After approval of your comment, your profile
                            picture is visible to the public in the context of
                            your comment.
                        </p>
                    </section>

                    {/* Media */}
                    <section id="media">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            Media
                        </h2>
                        <p>
                            If you upload images to the website, you should
                            avoid uploading images with embedded location data
                            (EXIF GPS) included. Visitors to the website can
                            download and extract any location data from images
                            on the website.
                        </p>
                    </section>

                    {/* Cookies */}
                    <section id="cookies">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            Cookies
                        </h2>
                        <ul className="list-disc pl-6 space-y-3 mt-4">
                            <li>
                                If you leave a comment on our site you may
                                opt-in to saving your name, email address and
                                website in cookies. These are for your
                                convenience so that you do not have to fill in
                                your details again when you leave another
                                comment. These cookies will last for{" "}
                                <strong>one year</strong>.
                            </li>
                            <li>
                                If you visit our login page, we will set a
                                temporary cookie to determine if your browser
                                accepts cookies. This cookie contains no
                                personal data and is discarded when you close
                                your browser.
                            </li>
                            <li>
                                When you log in, we will also set up several
                                cookies to save your login information and your
                                screen display choices. Login cookies last for{" "}
                                <strong>two days</strong>, and screen options
                                cookies last for <strong>one year</strong>. If
                                you select “Remember Me”, your login will
                                persist for <strong>two weeks</strong>. If you
                                log out of your account, the login cookies will
                                be removed.
                            </li>
                            <li>
                                If you edit or publish an article, an additional
                                cookie will be saved in your browser. This
                                cookie includes no personal data and simply
                                indicates the post ID of the article you just
                                edited. It expires after <strong>1 day</strong>.
                            </li>
                        </ul>
                    </section>

                    {/* Embedded Content */}
                    <section id="embedded-content">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            Embedded content from other websites
                        </h2>
                        <p>
                            Articles on this site may include embedded content
                            (e.g. videos, images, articles, etc.). Embedded
                            content from other websites behaves in the exact
                            same way as if the visitor has visited the other
                            website.
                        </p>
                        <p className="mt-4">
                            These websites may collect data about you, use
                            cookies, embed additional third-party tracking, and
                            monitor your interaction with that embedded content,
                            including tracking your interaction with the
                            embedded content if you have an account and are
                            logged in to that website.
                        </p>
                    </section>

                    {/* Data Sharing */}
                    <section id="data-sharing">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            Who we share your data with
                        </h2>
                        <p>
                            If you request a password reset, your IP address
                            will be included in the reset email.
                        </p>
                    </section>

                    {/* Data Retention */}
                    <section id="data-retention">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            How long we retain your data
                        </h2>
                        <ul className="list-disc pl-6 space-y-3 mt-4">
                            <li>
                                If you leave a comment, the comment and its
                                metadata are retained{" "}
                                <strong>indefinitely</strong>. This is so we can
                                recognize and approve any follow-up comments
                                automatically instead of holding them in a
                                moderation queue.
                            </li>
                            <li>
                                For users that register on our website (if any),
                                we also store the personal information they
                                provide in their user profile. All users can
                                see, edit, or delete their personal information
                                at any time (except they cannot change their
                                username). Website administrators can also see
                                and edit that information.
                            </li>
                        </ul>
                    </section>

                    {/* Data Rights */}
                    <section id="data-rights">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            What rights you have over your data
                        </h2>
                        <p>
                            If you have an account on this site, or have left
                            comments, you can request to receive an exported
                            file of the personal data we hold about you,
                            including any data you have provided to us. You can
                            also request that we erase any personal data we hold
                            about you. This does not include any data we are
                            obliged to keep for administrative, legal, or
                            security purposes.
                        </p>
                    </section>

                    {/* Data Transfer */}
                    <section id="data-transfer">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            Where your data is sent
                        </h2>
                        <p>
                            Visitor comments may be checked through an automated
                            spam detection service.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
