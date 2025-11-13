import {
    UseFormRegister,
    FieldErrors,
    FieldValues,
    Control,
} from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Controller } from "react-hook-form";
import Button from "../Ui/Button";

interface FormProps {
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
    onSubmit: (e?: React.BaseSyntheticEvent) => void;
    control: Control<FieldValues>;
    btn_status: boolean;
    server_response: { message: string; status: boolean };
}

export default function ContactForm({
    register,
    errors,
    onSubmit,
    control,
    btn_status,
    server_response,
}: FormProps) {
    return (
        <form className="space-y-6" onSubmit={onSubmit}>
            <div className="grid sm:grid-cols-2 gap-4">
                <div>
                    <input
                        {...register("username", {
                            required: "User name is required",
                        })}
                        type="text"
                        placeholder="YOUR NAME"
                        className="w-full px-4 py-3 rounded-lg border-2 border-[var(--text)] focus:outline-none"
                    />
                    {errors.username && (
                        <p className="text-sm text-red-700 mt-1">
                            {errors.username.message}
                        </p>
                    )}
                </div>
                <div>
                    <input
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                            },
                        })}
                        type="email"
                        placeholder="EMAIL"
                        className="w-full px-4 py-3 rounded-lg border-2 border-[var(--text)] focus:outline-none"
                    />
                    {errors.email && (
                        <p className="text-sm text-red-700 mt-1">
                            {errors.email.message}
                        </p>
                    )}
                </div>
            </div>

            <div>
                <Controller
                    name="contact_number"
                    control={control}
                    rules={{
                        required: "Phone number is required",
                        validate: (value) =>
                            value?.length >= 10 ||
                            "Phone number must be at least 10 digits",
                    }}
                    render={({ field }) => (
                        <PhoneInput
                            country={"au"}
                            value={field.value}
                            onChange={field.onChange}
                            enableSearch={true}
                            inputStyle={{
                                width: "100%",
                                height: "58px",
                                paddingLeft: "60px",
                                paddingRight: "16px",
                                fontSize: "1rem",
                                fontfamily: "inharit",
                                borderRadius: "0.5rem",
                                border: "2px solid #6B7280",
                                transition: "border-color 0.2s",
                                backgroundColor: "#F0F8FF",
                            }}
                            buttonStyle={{
                                borderRadius: "0.5rem 0 0 0.5rem",
                                border: "2px solid #6B7280",
                                backgroundColor: "#F0F8FF",
                                width: "60px",
                            }}
                            dropdownStyle={{
                                borderRadius: "0.5rem",
                            }}
                            searchStyle={{
                                padding: "8px 12px",
                                margin: "8px",
                            }}
                        />
                    )}
                />
                {errors.contact_number && (
                    <p className="text-sm text-red-700 mt-1">
                        {errors.contact_number.message}
                    </p>
                )}
            </div>

            <div>
                <textarea
                    {...register("message", {
                        required: "Message is required",
                        minLength: {
                            value: 10,
                            message: "Message must be at least 10 characters",
                        },
                    })}
                    placeholder="YOUR MESSAGE"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[var(--text)] focus:outline-none resize-none"
                />
                {errors.message && (
                    <p className="text-sm text-red-700 mt-1">
                        {errors.message.message}
                    </p>
                )}
            </div>
            {server_response && (
                <p
                    className={`text-sm mt-1 ${
                        server_response.status
                            ? "text-green-600"
                            : "text-red-600"
                    }`}
                >
                    {server_response.message}
                </p>
            )}

            <div>
                <Button style="blue" type="submit" disabled={btn_status}>
                    {btn_status ? "Sending..." : "Send"}
                </Button>
            </div>
        </form>
    );
}
