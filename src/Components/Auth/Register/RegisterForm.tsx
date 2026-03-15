'use client'
import { uploadImageToImgbb } from '@/lib/imgbb'
import { RegisterDataTypes } from '@/types/authTypes'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FcGoogle } from 'react-icons/fc'

const RegisterForm = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<RegisterDataTypes>()

    const onSubmit: SubmitHandler<RegisterDataTypes> = async (data) => {
        try {

            const imageFile = data.image?.[0];
            if (!imageFile) return;

            const imageUrl = await uploadImageToImgbb(imageFile);

            console.log(imageUrl)

        }

        catch (er) {
            console.error(er)
        }
    };

    return (
        <div className="flex min-h-screen justify-center items-center bg-gray-100 p-4">

            <div className="card w-full max-w-md bg-base-100 shadow-xl border border-gray-200">
                <div className="card-body p-8">

                    {/* Header Section */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-primary">Create Account</h1>
                        <p className="text-neutral/70 mt-2">Join us and start your journey</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Full Name Input */}
                        <div className="form-control mb-5 space-y-1">
                            <label className="label">
                                <span className="label-text text-neutral font-medium">Full Name</span>
                            </label>
                            <input
                                {...register('name')}
                                type="text"
                                placeholder="John Doe"
                                className="input input-bordered input-primary w-full"
                            />
                        </div>

                        {/* Image Input (File Upload) */}
                        <div className="form-control mb-5 space-y-1">
                            <label className="label">
                                <span className="label-text text-neutral font-medium">Profile Image</span>
                            </label>
                            <input
                                {...register('image')}
                                type="file"
                                className="file-input file-input-bordered file-input-primary w-full"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="form-control mb-5 space-y-1">
                            <label className="label">
                                <span className="label-text text-neutral font-medium">Email</span>
                            </label>
                            <input
                                {...register('email', {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address"
                                    }
                                })}
                                type="email"
                                placeholder="you@example.com"
                                className="input input-bordered input-primary w-full"
                            />
                            {errors?.email && <span className='text-red-400 text-sm'>errors.email.message</span>}
                        </div>
                        

                        {/* Password Input */}
                        <div className="form-control mb-6 space-y-1">
                            <label className="label">
                                <span className="label-text text-neutral font-medium">Password</span>
                            </label>
                            <input
                                {...register('password', {
                                    required: "Password is required",
                                    minLength: {
                                        value: 8,
                                        message: "Password must be at least 8 characters long."
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Z])(?=.*\d).+$/,
                                        message: "There will be one uppercase letter and one number."
                                    }
                                })}
                                type="password"
                                placeholder="••••••••"
                                className="input input-bordered input-primary w-full"
                            />
                            {errors?.password && <span className='text-red-400 text-sm'>{errors.password.message}</span>}
                        </div>
                        

                        {/* Submit Button */}
                        <div className="form-control">
                            <button className="btn btn-primary text-white font-semibold text-lg tracking-wide w-full">
                                Sign Up
                            </button>
                        </div>
                    </form>

                    {/* Divider */}
                    <div className="divider text-neutral/50 my-8">OR</div>

                    {/* Google Signup Button */}
                    <button className="btn btn-outline btn-neutral w-full gap-2 mb-4">
                        <FcGoogle size={24} />
                        Continue with Google
                    </button>

                    {/* Login Link */}
                    <p className="text-center text-neutral mt-4">
                        Already have an account?{' '}
                        <Link href="/login" className="text-secondary font-bold hover:underline">
                            Login
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    )
}

export default RegisterForm