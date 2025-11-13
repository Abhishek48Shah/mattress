import { z } from "zod";
export const contactSchema = z.object({
    username: z.string().min(3, "Name must be at least 3 characters long"),
    email: z
        .string()
        .email("Invalid email address")
        .refine((val) => val.endsWith("@gmail.com"), {
            message: "Only gmail addresses are allowed",
        }),
    contact_number: z
        .string()
        .min(10, "Phone number must be at least 10 digits"),
    message: z.string().min(5, "Message should be at least 5 characters long"),
});
export type ContactFormData = z.infer<typeof contactSchema>;
