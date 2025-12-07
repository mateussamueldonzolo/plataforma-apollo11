"use client";
import Image from "next/image";
import { FaApple, FaGoogle } from "react-icons/fa";

export default function Login() {
  return (
    <main className="min-h-screen bg-[#131313] flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-6xl rounded-3xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        {/* LEFT SIDE */}
        <div className="relative flex flex-col justify-between">
          <Image
            src="/mockup1.jpg"
            fill
            alt="Houses"
            className="absolute inset-0 object-cover"
          />
          
          <div className="relative p-6 ">
            <button className="flex items-center gap-2 bg-white/50 backdrop-blur px-4 py-2 rounded-full ">
              <span className="font-bold">Apollo 11</span>
            </button>
          </div>

          <div className="relative text-white p-6 pb-10">
            <h2 className="text-2xl font-semibold">Manage Properties Efficiently</h2>
            <p className="text-sm opacity-90 mt-2 max-w-xs">
              Easily track rent payments, maintenance requests,
              and tenant communications in one place. Say goodbye
              to complicated manual management.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-10 flex flex-col justify-center">
          <div className="flex justify-end">
            <button className="bg-black text-white px-6 py-2 rounded-full text-sm">
              Login
            </button>
          </div>

          <h2 className="text-3xl font-bold mt-6">Welcome Back to Real Nest!</h2>
          <p className="text-slate-500 text-sm mt-2">Sign in your account</p>

          {/* FORM */}
          <form className="mt-8 space-y-5">
            <div>
              <label className="text-sm text-slate-600">Your Email</label>
              <input
                type="email"
                placeholder="info.madhu786@gmail.com"
                className="w-full mt-2 border border-slate-300 rounded-full px-4 py-3 text-sm outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="text-sm text-slate-600">Password</label>
              <input
                type="password"
                className="w-full mt-2 border border-slate-300 rounded-full px-4 py-3 text-sm outline-none focus:border-black"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                Remember Me
              </label>
              <button className="text-slate-600 hover:text-black transition">
                Forgot Password?
              </button>
            </div>

            <button className="w-full bg-[#131313] hover:bg-[#1e6eca] transition text-white py-3 rounded-full font-semibold text-sm">
              Login
            </button>
          </form>

          <div className="text-center my-5 text-sm text-slate-500">
            or Instant Login
          </div>

          {/* SOCIAL LOGIN */}
          <div className="flex gap-4">
            <button className="flex items-center justify-center gap-2 border w-full py-3 rounded-full text-sm hover:bg-slate-100 transition">
              <FaGoogle /> Sign in with Google
            </button>

            <button className="flex items-center justify-center gap-2 border w-full py-3 rounded-full text-sm hover:bg-slate-100 transition">
              <FaApple /> Sign in with Apple
            </button>
          </div>

          <p className="text-center text-sm mt-6 text-slate-500">
            Don't have any account?{" "}
            <span className="text-blue-600 cursor-pointer">Register</span>
          </p>
        </div>
      </div>
    </main>
  );
}
