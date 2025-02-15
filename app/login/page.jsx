"use client";
import React, { useActionState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";
import createSession from "../actions/createSession";
import { useAuth } from "@/context/authContext";

const LoginPage = () => {
  const [state, formAction] = useActionState(createSession, {});

  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const router = useRouter();
  
  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/"); // Redirect to home page if already logged in
    }
  }, [isAuthenticated, router]);

  // Handle form submission and redirection
  useEffect(() => {
    if (state.error) {
      toast.error(state.error);
    }
    if (state.success) {
      toast.success("Logged in successfully!");
      setIsAuthenticated(true);
      router.push("/");
    }
  }, [router, setIsAuthenticated, state]);

  return (
    <div className="flex items-center justify-center">
      <div className="border border-gray-400 shadow-sm shadow-gray-400 rounded-lg p-6 w-full max-w-sm mt-4">
        <form action={formAction}>
          <h2 className="text-2xl font-bold text-center mb-6">
            Login
          </h2>

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
              className="bg-transparent border border-gray-400 rounded w-full py-2 px-3"
              autoComplete="email"
              placeholder="Email address"
              required
            />
          </div>

          <div className="mb-6">
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
              autoComplete="password"
              required
            />
          </div>

          <div className="flex flex-col gap-5">
            <button
              type="submit"
              className="bg-blue-700 px-4 py-2 rounded hover:bg-gray-700"
            >
              Login
            </button>

            <p className="text-center">
              No account?{" "}
              <Link
                href="/register"
                className="text-blue-400 hover:text-blue-500"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
