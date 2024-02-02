import React from 'react'
import Link from 'next/link';
import LogInBtn from './LogInBtn';

const LoginCard = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 color: var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));
    --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color); rounded-md shadow-xl lg:max-w-xl">
            <h1 className="text-3xl font-bold text-center text-white">Logo</h1>
            <form className="mt-6">
            <div className="mb-4">
                <input type="text" placeholder="Username or Email" 
                className="input input-bordered block w-full px-4 py-2 mt-2 "
                />
            </div>
            <div className="mb-2">
                <input
                type="password" placeholder='Password'
                className="input input-bordered block w-full px-4 py-2 mt-2"
                />
            </div>
            <Link
                href="/forget"
                className="btn btn-link no-underline text-xs hover:underline"
            >
                Forget Password?
            </Link>
            <div className="mt-2">
                <LogInBtn></LogInBtn>
            </div>
            </form>

            <p className="mt-4 text-sm text-center text-gray-700">
            Dont have an account?{" "}
            <Link
                href="/signup"
                className="font-medium btn btn-link no-underline hover:underline"
            >
                Sign up
            </Link>
            </p>
        </div>
        </div>
  )
}

export default LoginCard