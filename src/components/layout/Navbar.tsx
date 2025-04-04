"use client";

import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import ThemeToggle from "../ui/ThemeToggle";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const { theme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) setIsMobileMenuOpen(false);
  }, [isMobile]);

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={`${mobile ? "space-y-1" : "flex items-center space-x-8"}`}>
      {["about", "projects", "contact"].map((route) => (
        <Link
          key={route}
          href={`/${route}`}
          className={`${
            mobile
              ? "block px-3 py-2 rounded-md text-base"
              : "px-3 py-2 rounded-md text-sm"
          } font-medium ${
            theme === "dark"
              ? "text-gray-300 hover:text-white hover:bg-gray-700"
              : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          } transition-colors`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {route.charAt(0).toUpperCase() + route.slice(1)}
        </Link>
      ))}
    </div>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        theme === "dark" ? "bg-gray-900/80" : "bg-white/80"
      } backdrop-blur-md shadow-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className={`text-xl font-bold ${
                theme === "dark" ? "text-white" : "text-gray-900"
              } hover:opacity-80 transition-opacity`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Bruna Portfolio
            </Link>
          </div>

          {!isMobile && (
            <div className="hidden md:block">
              <NavLinks />
            </div>
          )}

          <div className="ml-4 flex items-center space-x-4">
            <ThemeToggle />

            {isMobile && (
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md ${
                  theme === "dark"
                    ? "text-gray-300 hover:bg-gray-700"
                    : "text-gray-500 hover:bg-gray-100"
                } transition-colors`}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <FiX className="h-6 w-6" />
                ) : (
                  <FiMenu className="h-6 w-6" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {isMobile && isMobileMenuOpen && (
        <div
          className={`md:hidden ${
            theme === "dark" ? "bg-gray-800" : "bg-white"
          }`}
        >
          <div className="px-2 pt-2 pb-3">
            <NavLinks mobile />
          </div>
        </div>
      )}
    </nav>
  );
}
