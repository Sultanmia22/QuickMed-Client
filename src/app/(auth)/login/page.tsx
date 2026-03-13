import Link from 'next/link'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'

const LoginForm = () => {
  return (
   
    <div className="flex min-h-screen justify-center items-center bg-gray-100 p-4">
      
      <div className="card w-full max-w-md bg-base-100 shadow-xl border border-gray-200">
        <div className="card-body p-8">
          
          
          <div className="text-center mb-8">
            
            <h1 className="text-3xl font-bold text-primary">Welcome Back</h1>
            <p className="text-neutral/70 mt-2">Login to your account</p>
          </div>

          <form>
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

            <div className="form-control mb-3 space-y-1">
              <label className="label">
                <span className="label-text text-neutral font-medium">Password</span>
              </label>
              <input 
                type="password" 
                placeholder="••••••••" 
              
                className="input input-bordered input-primary w-full" 
              />
            </div>

         
            <div className="flex justify-end mb-6">
              <Link href="#" className="text-sm text-secondary font-medium hover:underline">
                Forgot password?
              </Link>
            </div>

            
            <div className="form-control mb-6">
              <label className="label cursor-pointer justify-start gap-3">
                <input type="checkbox" className="checkbox checkbox-accent" />
                <span className="label-text text-neutral">Remember me</span>
              </label>
            </div>

       
            <div className="form-control">
              <button className="btn btn-primary text-white font-semibold text-lg tracking-wide w-full">
                Sign In
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="divider text-neutral/50 my-8">OR</div>

        
          <button className="btn btn-outline btn-neutral w-full gap-2 mb-4">
           <FcGoogle size={24} />
            Continue with Google
          </button>

          {/* Sign Up Link */}
          <p className="text-center text-neutral mt-4">
            Don't have an account?{' '}
            <Link href="/register" className="text-secondary font-bold hover:underline">
              Sign Up
            </Link>
          </p>

        </div>
      </div>
    </div>
  )
}

export default LoginForm