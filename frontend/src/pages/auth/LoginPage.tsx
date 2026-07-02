import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAuth } from "../../contexts/AuthContext";
import {
    loginSchema,
    type LoginFormData,
} from "../../validation/loginSchema";

export default function LoginPage() {
    const navigate = useNavigate();

    const { login } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    async function onSubmit(data: LoginFormData) {
        try {
            await login(data);

            navigate("/dashboard");

        } catch (error) {

            alert("Invalid email or password.");

        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-100">

            <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">

                <h1 className="mb-2 text-center text-3xl font-bold">
                    SmartHire AI
                </h1>

                <p className="mb-8 text-center text-gray-500">
                    Sign in to continue
                </p>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                >

                    <div>

                        <label className="mb-2 block">
                            Email
                        </label>

                        <input
                            type="email"
                            {...register("email")}
                            className="w-full rounded-lg border p-3"
                            placeholder="Enter email"
                        />

                        <p className="mt-1 text-sm text-red-500">
                            {errors.email?.message}
                        </p>

                    </div>

                    <div>

                        <label className="mb-2 block">
                            Password
                        </label>

                        <input
                            type="password"
                            {...register("password")}
                            className="w-full rounded-lg border p-3"
                            placeholder="Enter password"
                        />

                        <p className="mt-1 text-sm text-red-500">
                            {errors.password?.message}
                        </p>

                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-lg bg-blue-600 py-3 text-white transition hover:bg-blue-700 disabled:opacity-50"
                    >
                        {isSubmitting
                            ? "Signing In..."
                            : "Sign In"}
                    </button>

                </form>

            </div>

        </div>
    );
}