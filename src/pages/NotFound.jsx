import React, { useEffect } from "react";
import { Link } from "react-router";
import { FaHome, FaGamepad, FaSadTear } from "react-icons/fa";
import { MdOutlineToys } from "react-icons/md";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 - Page Not Found | ToyTopia";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <div className="text-6xl mb-4 flex justify-center items-center gap-4">
            <FaSadTear className="text-error" />
            <MdOutlineToys />
          </div>
          <h2 className="text-4xl font-bold text-base-content mb-2">
            Oops! Toy Not Found
          </h2>
          <p className="text-xl text-base-content/70 mb-8">
            Looks like this toy got lost in the playroom!
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn btn-primary btn-lg">
            <FaHome size={20} /> Go Back Home
          </Link>
          <Link to="/all-products" className="btn btn-outline btn-lg">
            
            <FaGamepad size={20} /> Browse Toys
          </Link>
        </div>

        <div className="mt-12 text-base-content/60">
          <p className="text-sm">
            Can't find what you're looking for? Try searching from the homepage!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;