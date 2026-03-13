import Link from 'next/link'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'

const RegisterForm = () => {
  return (
    // আগের লেআউট লজিক অনুযায়ী এটি ঠিক থাকবে
    <div className="flex min-h-screen justify-center items-center bg-gray-100 p-4">
      
      <div className="card w-full max-w-md bg-base-100 shadow-xl border border-gray-200">
        <div className="card-body p-8">
          
          {/* হেডার সেকশন */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary">Create Account</h1>
            <p className="text-neutral/70 mt-2">Join us and start your journey</p>
          </div>

          <form>
            {/* Full Name Input */}
            <div className="form-control mb-5 space-y-1">
              <label className="label">
                <span className="label-text text-neutral font-medium">Full Name</span>
              </label>
              <input 
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
                type="email" 
                placeholder="you@example.com" 
                className="input input-bordered input-primary w-full" 
              />
            </div>

            {/* Password Input */}
            <div className="form-control mb-6 space-y-1">
              <label className="label">
                <span className="label-text text-neutral font-medium">Password</span>
              </label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="input input-bordered input-primary w-full" 
              />
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