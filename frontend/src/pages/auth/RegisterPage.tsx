import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { register as registerUser } from "../../services/authService";

interface RegisterForm {

    full_name: string;

    email: string;

    password: string;

}

export default function RegisterPage() {

    const navigate = useNavigate();

    const {

        register,

        handleSubmit,

        formState: { errors, isSubmitting },

    } = useForm<RegisterForm>();

    async function onSubmit(data: RegisterForm) {

        try {

            await registerUser(data);

            alert("Registration successful!");

            navigate("/login");

        }

        catch {

            alert("Registration failed.");

        }

    }

    return (

        <div className="min-h-screen flex items-center justify-center bg-slate-100">

            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">

                <h1 className="text-3xl font-bold text-center mb-2">
                    SmartHire AI
                </h1>

                <p className="text-center text-gray-500 mb-8">
                    Create your account
                </p>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                >

                    <div>

                        <label>Name</label>

                        <input
                            {...register("full_name", {
                                required: "Name is required",
                            })}
                            className="w-full border rounded-lg p-3"
                        />

                        <p className="text-red-500 text-sm">

                            {errors.full_name?.message}

                        </p>

                    </div>

                    <div>

                        <label>Email</label>

                        <input
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                            })}
                            className="w-full border rounded-lg p-3"
                        />

                        <p className="text-red-500 text-sm">

                            {errors.email?.message}

                        </p>

                    </div>

                    <div>

                        <label>Password</label>

                        <input
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: 8,
                            })}
                            className="w-full border rounded-lg p-3"
                        />

                        <p className="text-red-500 text-sm">

                            {errors.password?.message}

                        </p>

                    </div>

                    <button
                        disabled={isSubmitting}
                        className="w-full bg-green-600 text-white py-3 rounded-lg"
                    >

                        Register

                    </button>

                </form>

            </div>

        </div>

    );

}