import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("You logged out successfully");
        setIsDropdownOpen(false);
      })
      .catch(() => {
        toast.error("Logout failed. Please try again");
      });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest(".mobile-menu-container")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg font-medium text-sm transition-all ${
      isActive
        ? "bg-white text-primary shadow-sm"
        : "text-white/90 hover:bg-white/10 hover:text-white"
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `px-4 py-3 rounded-lg font-medium text-base transition-all block ${
      isActive ? "bg-primary text-white" : "text-neutral hover:bg-base-200"
    }`;

  return (
    <nav className="bg-gradient-to-r from-primary via-primary to-secondary shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="lg:hidden mobile-menu-container">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="btn btn-ghost btn-sm text-white hover:bg-white/10"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          <div className="flex-shrink-0">
            <Link
              to="/"
              className="flex items-center hover:opacity-90 transition-opacity"
            >
              <span className="font-bold text-white text-lg md:text-xl ml-1">
                ToyTopia
              </span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/all-products" className={navLinkClass}>
              All Products
            </NavLink>
            <NavLink to="/store-location" className={navLinkClass}>
              Store Location
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
            {user && (
              <NavLink to="/my-profile" className={navLinkClass}>
                My Profile
              </NavLink>
            )}
          </div>

          <div className="flex-shrink-0">
            {user ? (
              <div className="relative">
                <button
                  className="flex items-center justify-center w-10 h-10 rounded-full ring-2 ring-white ring-offset-2 ring-offset-primary bg-white hover:ring-offset-4 transition-all"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  aria-label="User menu"
                >
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="User avatar"
                      referrerPolicy="no-referrer"
                      className="rounded-full w-full h-full object-cover"
                    />
                  ) : (
                    <FaUserCircle className="text-3xl text-primary" />
                  )}
                </button>

                <div
                  className={`absolute right-0 mt-3 w-64 bg-base-100 rounded-xl shadow-xl overflow-hidden transition-all duration-200 ${
                    isDropdownOpen
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 -translate-y-2 invisible"
                  }`}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <div className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10">
                    <p className="font-semibold text-neutral truncate">
                      {user.displayName || "User"}
                    </p>
                    <p className="text-xs text-neutral/60 truncate">
                      {user.email}
                    </p>
                  </div>
                  <div className="p-2">
                    <NavLink
                      to="/my-profile"
                      className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-base-200 transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <span>My Profile</span>
                      <span className="badge badge-xs badge-primary">New</span>
                    </NavLink>
                    <div className="divider my-1"></div>
                    <button
                      onClick={handleLogOut}
                      className="w-full text-left px-4 py-3 text-error hover:bg-error/10 rounded-lg flex items-center gap-2 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                to="/auth/login"
                className="btn btn-sm md:btn-md bg-white text-primary hover:bg-white/90 border-0 shadow-md hover:shadow-lg transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 md:h-5 md:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                <span className="hidden sm:inline ml-2">Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ top: "64px" }}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`bg-base-100 w-full max-w-sm p-4 shadow-xl transition-transform duration-300 mobile-menu-container ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="space-y-2">
            <NavLink
              to="/"
              className={mobileNavLinkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/all-products"
              className={mobileNavLinkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              All Products
            </NavLink>
            <NavLink
              to="/store-location"
              className={mobileNavLinkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Store Location
            </NavLink>
            <NavLink
              to="/about"
              className={mobileNavLinkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={mobileNavLinkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </NavLink>
            {user && (
              <NavLink
                to="/my-profile"
                className={mobileNavLinkClass}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                My Profile
              </NavLink>
            )}
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;