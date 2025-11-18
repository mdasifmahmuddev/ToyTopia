import React, { useState } from "react";
import { Link } from "react-router";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaShieldAlt, FaTruck } from "react-icons/fa";
import { MdOutlineToys, MdOutlinePolicy } from "react-icons/md";
import { RiRefund2Line } from "react-icons/ri";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <MdOutlineToys className="text-4xl text-primary" />
              <span className="text-2xl font-bold text-neutral">
                ToyTopia
              </span>
            </Link>
            <p className="text-sm text-neutral/70 leading-relaxed mb-4">
              ToyTopia is a vibrant marketplace connecting families with local toy sellers. Discover the perfect toys for your kids!
            </p>
            <div className="flex gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-sm bg-base-100 hover:bg-primary hover:text-white border-0 transition-all"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-sm bg-base-100 hover:bg-primary hover:text-white border-0 transition-all"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-sm bg-base-100 hover:bg-primary hover:text-white border-0 transition-all"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-sm bg-base-100 hover:bg-primary hover:text-white border-0 transition-all"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold text-neutral mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-neutral/70 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/my-profile"
                  className="text-sm text-neutral/70 hover:text-primary transition-colors"
                >
                  My Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/auth/login"
                  className="text-sm text-neutral/70 hover:text-primary transition-colors"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/auth/register"
                  className="text-sm text-neutral/70 hover:text-primary transition-colors"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-neutral mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li className="text-sm text-neutral/70 flex items-center gap-2">
                <MdOutlinePolicy className="text-primary" />
                <span>Terms & Conditions</span>
              </li>
              <li className="text-sm text-neutral/70 flex items-center gap-2">
                <FaShieldAlt className="text-primary text-xs" />
                <span>Privacy Policy</span>
              </li>
              <li className="text-sm text-neutral/70 flex items-center gap-2">
                <RiRefund2Line className="text-primary" />
                <span>Refund Policy</span>
              </li>
              <li className="text-sm text-neutral/70 flex items-center gap-2">
                <FaTruck className="text-primary text-xs" />
                <span>Shipping Policy</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-neutral mb-4">
              Newsletter
            </h3>
            <p className="text-sm text-neutral/70 leading-relaxed mb-4">
              Subscribe to get special offers and updates.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full text-sm"
                required
              />
              <button 
                type="submit"
                className="btn btn-primary w-full btn-sm"
              >
                <FaEnvelope />
                {subscribed ? "Subscribed!" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-sm text-neutral/60 text-center">
            © {new Date().getFullYear()} <span className="font-semibold text-primary">ToyTopia</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;