"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

export default function SignupPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: ""
  });

  const [darkMode, setDarkMode] = React.useState(false);

  const onLogIn=async()=>{

  };

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 relative transition-colors`}>
      {/* Dark/Light Mode Toggle Button */}
      <button
        className="absolute top-6 left-6 flex items-center gap-2 px-3 py-2 rounded bg-white dark:bg-gray-800 shadow hover:shadow-md transition"
        onClick={() => setDarkMode((v) => !v)}
      >
        {darkMode ? "🌙 Dark" : "☀️ Light"}
      </button>
      {/* Centered Card */}
      <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex flex-col gap-6">
        <h1 className="text-2xl font-semibold text-center text-gray-900 dark:text-gray-100 mb-2">Log In</h1>
        <div className="flex flex-col gap-4">
          <label className="flex flex-col gap-1">
            <span className="text-gray-700 dark:text-gray-200">Email</span>
            <input
              type="email"
              className="input input-bordered px-4 py-2 border rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white outline-none"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Enter your email"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-gray-700 dark:text-gray-200">Password</span>
            <input
              type="password"
              className="input input-bordered px-4 py-2 border rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white outline-none"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Enter your password"
            />
          </label>
          <button
            onClick={onLogIn}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded shadow mt-4 transition"
          >
            Sign In
          </button>
        </div>
        <div className="text-center text-gray-600 dark:text-gray-300 text-sm">
          Don't have an account?
          <Link href="/signup" className="underline ml-1 text-blue-600 dark:text-blue-400">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
