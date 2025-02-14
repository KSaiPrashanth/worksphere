"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import {
  FaBuilding,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
  FaBars,
  FaSuitcase,
  FaKey,
} from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import destroySession from "@/app/actions/destroySession";
import { toast } from "react-toastify";
import { useAuth } from "@/context/authContext";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const { isAuthenticated, setIsAuthenticated } = useAuth(null);

  const handleLogout = async () => {
    const { success, error } = await destroySession();

    if (success) {
      setIsAuthenticated(false);
      router.push("/login");
    } else {
      toast.error(error);
    }
  };

  return (
    <>
      <header className="bg-gray-300 border-b-2 border-white sticky top-0 z-50">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 font-semibold">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="flex items-center justify-center gap-2 text-2xl font-semibold"
              >
                <Image
                  className="h-12 w-12"
                  src={logo}
                  height={80}
                  alt="WorkSphere"
                  draggable="false"
                  priority={true}
                />
                WorkSphere
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-4">
                  <Link
                    href="/rooms"
                    className="rounded-md px-3 py-2 text-md font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                  >
                    Rooms
                  </Link>

                  {/* Logged In Only */}
                  {isAuthenticated && (
                    <>
                      <Link
                        href="/bookings"
                        className="rounded-md px-3 py-2 text-md font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                      >
                        Bookings
                      </Link>

                      <Link
                        href="/rooms/add"
                        className="rounded-md px-3 py-2 text-md font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                      >
                        Add Room
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Right Side Menu */}
            <div className="ml-auto">
              <div className="ml-4 flex items-center justify-center text-center md:ml-6">
                {/* Logged Out Only */}
                {!isAuthenticated && (
                  <>
                    <Link
                      href="/login"
                      className="hidden md:flex mr-3 text-blue-800 hover:text-blue-700 items-center gap-1 border-2 bg-blue-100 border-blue-700 px-3 py-2 rounded-md"
                    >
                      <FaSignInAlt className="inline" /> Login
                    </Link>
                    <Link
                      href="/register"
                      className="hidden md:flex mr-3 text-green-100 hover:text-green-700 hover:bg-green-100 items-center gap-1 border-2 bg-green-700 border-green-700 px-3 py-2 rounded-md"
                    >
                      <FaUser className="inline" /> Register
                    </Link>
                  </>
                )}

                {isAuthenticated && (
                  <>
                    <Link
                      href="/rooms/my"
                      className="hidden md:block mx-3 rounded-md px-3 text-gray-100 bg-gray-800 border py-2 border-gray-600
                      hover:text-gray-50
                      hover:bg-gray-700"
                    >
                      <FaBuildingUser className="inline mr-1" /> My Rooms
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="hidden md:block mx-3 rounded-md px-3 text-red-700 bg-red-100 border py-2 border-red-600 hover:text-red-600
                      hover:bg-red-200"
                    >
                      <FaSignOutAlt className="inline mr-1" /> Sign Out
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-800 focus:outline-none"
              >
                <FaBars className="h-6 w-6" />
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-300 px-2 pb-3 pt-2 sm:px-3 border-y border-gray-700">
            <Link
              href="/rooms"
              className="flex items-center gap-1 rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white "
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaBuilding />
              Rooms
            </Link>
            {/* Logged In Only */}
            {isAuthenticated && (
              <>
                <Link
                  href="/bookings"
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FaSuitcase />
                  Bookings
                </Link>
                <Link
                  href="/rooms/add"
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FaKey />
                  Add Room
                </Link>
                <Link
                  href="/rooms/my"
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FaBuildingUser /> My Rooms
                </Link>
                {/* Sign Out Button */}
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-base font-medium text-red-700 hover:text-white w-full hover:bg-red-700"
                >
                  <FaSignOutAlt />
                  Sign Out
                </button>
              </>
            )}
            {/* Logged Out Only */}
            {!isAuthenticated && (
              <>
                <Link
                  href="/login"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FaSignInAlt className="inline mr-1" /> Login
                </Link>
                <Link
                  href="/register"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FaUser className="inline mr-1" /> Register
                </Link>
              </>
            )}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
