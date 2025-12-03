import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import ProductCard from "./ProductCard";

const PopularToys = () => {
  const [popularToys, setPopularToys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const firstEight = data.slice(0, 8);
        setPopularToys(firstEight);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="loading loading-spinner loading-lg text-primary"></span>
          <p className="mt-4 text-neutral/60">Loading popular toys...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="alert alert-error">
            <span>Error loading toys: {error}</span>
          </div>
        </div>
      </section>
    );
  }

  if (popularToys.length === 0) {
    return (
      <section className="py-16 bg-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="alert alert-warning">
            <span>No toys found in products.json</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-2 text-neutral">
            Popular Toys
          </h2>
          <p className="text-center text-base-content/70 mb-8">
            Our best-selling toys loved by children everywhere
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {popularToys.map((toy) => (
            <ProductCard key={toy.id} product={toy} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/all-products" className="btn btn-primary px-8">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularToys;