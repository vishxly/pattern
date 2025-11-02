"use client";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    alert(`Logging in with:\nEmail: ${email}\nPassword: ${password}`);
    console.log("Login submitted", { email, password });
  };

  const handleRegister = () => {
    // Handle registration logic here
    alert("Redirecting to registration page...");
    console.log("Register button clicked");
  };

  return (
    <div className="py-16 bg-white dark:bg-black">
      <div className="container mx-auto px-4 flex items-center justify-center min-h-[400px]">
        <div className="w-full max-w-lg">
          <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-md rounded-xl p-8 border border-gray-200 dark:border-neutral-600 shadow-md">
            <h3 className="text-gray-900 dark:text-white text-xl font-semibold mb-2">
              Login
            </h3>
            <p className="text-gray-600 dark:text-neutral-300 text-sm mb-6">
              Enter your credentials to access your account.
            </p>

            <form onSubmit={handleLogin}>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700 dark:text-neutral-300 block mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 bg-white dark:bg-neutral-700 border border-gray-300 dark:border-neutral-600 rounded-md text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent shadow-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700 dark:text-neutral-300 block mb-2"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-3 py-2 bg-white dark:bg-neutral-700 border border-gray-300 dark:border-neutral-600 rounded-md text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent shadow-sm"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleRegister}
                    className="px-4 py-2 bg-gradient-to-b from-[#d4d4d4] to-[#a3a3a3] dark:from-neutral-600 dark:to-neutral-700 text-white rounded-md text-sm hover:brightness-110 transition"
                  >
                    Register
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-white dark:bg-neutral-800 text-black dark:text-white border border-gray-300 dark:border-neutral-600 rounded-md text-sm hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors ml-auto"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
