"use client";

import Link from "next/link";
import React, { useActionState, useEffect } from "react";
import createUser from "../actions/createUser";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAuth } from "@/context/authContext";

const RegisterPage = () => {
  const [state, formAction] = useActionState(createUser, {});

  const router = useRouter();

  const { isAuthenticated, setIsAuthenticated } = useAuth();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/"); // Redirect to home page if already logged in
    }
  }, [isAuthenticated, router]);

  // Handle form submission and redirection
  useEffect(() => {
    if (state.error) toast.error(state.error);
    if (state.success) {
      toast.success("You can now login!");
      router.push("/login");
    }
  }, [router, state]);

  return (
    <div className="flex items-center justify-center">
      <div className="border border-gray-400 shadow-sm shadow-gray-400 rounded-lg p-6 w-full max-w-sm mt-4">
        <form action={formAction}>
          <h2 className="text-2xl font-bold text-center mb-6">
            Register
          </h2>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block  font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              className="bg-transparent border border-gray-400 rounded w-full py-2 px-3"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block  font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              className="bg-transparent border border-gray-400 rounded w-full py-2 px-3"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block  font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="bg-transparent border border-gray-400 rounded w-full py-2 px-3"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="confirm-password"
              className="block  font-bold mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Password"
              className="bg-transparent border border-gray-400 rounded w-full py-2 px-3"
              required
            />
          </div>

          <div className="flex flex-col gap-5">
            <button
              type="submit"
              className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Register
            </button>

            <p className="text-center">
              Have an account?{" "}
              <Link
                href="/login"
                className="text-blue-400 hover:text-blue-500"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
