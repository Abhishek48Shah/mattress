"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams, useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";
import ContactForm from "@/components/Form/Form";
import OurPromise from "@/components/section/our-promise";
import {
    contactSchema,
    ContactFormData,
} from "@/lib/validation/contactSchema.ts";
const ShopMap = dynamic(() => import("@/components/Map/ShopMap"), {
    ssr: false,
    loading: () => (
        <div className="w-full max-w-4xl mx-auto p-4">
                        
            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
                                <p className="text-gray-600">Loading map...</p>
                            
            </div>
                    
        </div>
    ),
});
interface FormValues {
    username: string;
    email: string;
    contact_number: string;
    message: string;
}
export default function Contact() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [response, Setresponse] = useState<{
        message: string;
        status: boolean;
    } | null>(null);
    const searchParams = useSearchParams();
    const prefilledEmail = searchParams.get("email") || "";
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            username: "",
            email: prefilledEmail,
            contact_number: "",
            message: "",
        },
    });
    const on_submit = (data: ContactFormData) => {
        setLoading(true);
        setError(null);
        try {
            setResponse({ message: response?.message, status: true });
            reset({
                username: "",
                email: "",
                contact_number: "",
                message: "",
            });
        } catch (err: any) {
            console.log(err);
            setResponse({
                message: err?.message || "Somthing went wrong",
                status: false,
            });
        } finally {
            setLoading(false);
        }
        router.replace("/contact");
    };
    const demo_values = {
        visit_us: "Nepa,Chitwan,kalika-5",
        email: "random123@gmail.com",
        number: "9800000000",
        opening_hours:
            "Open 7 days a week. Mon–Fri: 9am–4:30pm Sat: 10am–4pm | Sun: 11am–4pm Public holiday hours may vary — check Google.",
    };
    return (
        <>
            <section className="py-16 md:py-24 bg-[var(--bg-white)]">
                <div className="text-center my-8">
                    {" "}
                    <h1 className=" text-2xl  sm:text-4xl text-[var(--primary)] font-bold p-6">
                        Contact Us
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 m-16">
                    <div className="">
                        <ContactForm
                            register={register}
                            errors={errors}
                            onSubmit={handleSubmit(on_submit)}
                            control={control}
                            btn_status={loading}
                            server_response={response}
                        />
                    </div>
                    <div className="sm:ml-16 space-y-6">
                        <div>
                            <h3 className="font-heading font-bold text-lg mb-2 text-[var(--primary)]">
                                Visit Us:{" "}
                                <span className="text-base font-normal text-[var(--text)]">
                                    {demo_values.visit_us}
                                </span>
                            </h3>
                        </div>
                        <div>
                            <h3 className="font-heading font-bold text-lg mb-2 text-[var(--primary)]">
                                Email Us:{" "}
                                <span className="font-normal text-base text-[var(--text)]">
                                    {demo_values.email}
                                </span>
                            </h3>
                        </div>
                        <div>
                            <h3 className="font-heading font-bold text-lg mb-2 text-[var(--primary)]">
                                Call Us:{" "}
                                <span className="font-normal text-base text-[var(--text)]">
                                    {demo_values.number}
                                </span>
                            </h3>
                        </div>
                        <div>
                            <h3 className="font-heading font-bold text-lg mb-2 text-[var(--primary)]">
                                Opening Hours:{" "}
                                <span className="text-base leading-relaxed font-normal text-[var(--text)]">
                                    {demo_values.opening_hours}
                                </span>
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" pt-0 pb-16 md:pb-24 bg-[var(--bg-white)]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="h-[500px] lg:h-[700px] rounded-xl overflow-hidden shadow-xl">
                        <ShopMap />
                    </div>
                </div>
                <div></div>
            </section>
        </>
    );
}
