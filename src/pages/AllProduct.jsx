import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import ProductCard from "../components/ProductCard";
import { FaBoxOpen, FaSearch, FaFilter, FaSortAmountDown } from "react-icons/fa";

const AllProduct = () => {
  const data = useLoaderData();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [priceRange, setPriceRange] = useState("all");

  useEffect(() => {
    document.title = "All Products - ToyTopia | Browse Our Collection";
  }, []);

  useEffect(() => {
    if (Array.isArray(data)) {
      setProducts(data);
      setFilteredProducts(data);
    } else {
      console.error("Invalid data format:", data);
    }
  }, [data]);

  const categories = ["All", ...new Set(products.map(p => p.subCategory))];

  useEffect(() => {
    let filtered = [...products];

    if (searchTerm) {
      filtered = filtered.filter(p =>
        p.toyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.sellerName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== "All") {
      filtered = filtered.filter(p => p.subCategory === selectedCategory);
    }

    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(Number);
      if (max) {
        filtered = filtered.filter(p => p.price >= min && p.price <= max);
      } else {
        filtered = filtered.filter(p => p.price >= min);
      }
    }

    if (sortBy === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "name") {
      filtered.sort((a, b) => a.toyName.localeCompare(b.toyName));
    }

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, sortBy, priceRange, products]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSortBy("default");
    setPriceRange("all");
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8">
        <div className="bg-base-100 rounded-2xl shadow-lg overflow-hidden mb-6">
          <div className="relative h-48 bg-gradient-to-r from-primary via-secondary to-primary">
            <img
              src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1200&h=400&fit=crop"
              alt="Kids Toys"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-neutral/40 flex items-center justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
                Discover Amazing Toys for Kids
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-base-100 rounded-xl shadow-sm p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral/40" />
              <input
                type="text"
                placeholder="Search toys..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input input-bordered w-full pl-10 text-sm"
              />
            </div>

            <div className="relative">
              <FaFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral/40" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="select select-bordered w-full pl-10 text-sm"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="select select-bordered w-full text-sm"
            >
              <option value="all">All Prices</option>
              <option value="0-20">Under $20</option>
              <option value="20-50">$20 - $50</option>
              <option value="50-100">$50 - $100</option>
              <option value="100">Over $100</option>
            </select>

            <div className="relative">
              <FaSortAmountDown className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral/40" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="select select-bordered w-full pl-10 text-sm"
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>

          {(searchTerm || selectedCategory !== "All" || sortBy !== "default" || priceRange !== "all") && (
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-base-300">
              <span className="text-xs text-neutral/60">Active filters:</span>
              <div className="flex flex-wrap gap-2 flex-1">
                {searchTerm && (
                  <span className="badge badge-primary badge-sm">
                    Search: {searchTerm}
                  </span>
                )}
                {selectedCategory !== "All" && (
                  <span className="badge badge-secondary badge-sm">
                    {selectedCategory}
                  </span>
                )}
                {priceRange !== "all" && (
                  <span className="badge badge-accent badge-sm">
                    {priceRange === "100" ? "Over $100" : `$${priceRange.replace("-", " - $")}`}
                  </span>
                )}
                {sortBy !== "default" && (
                  <span className="badge badge-info badge-sm">
                    Sorted by: {sortBy.replace("-", " ")}
                  </span>
                )}
              </div>
              <button
                onClick={clearFilters}
                className="btn btn-ghost btn-sm text-xs"
              >
                Clear All
              </button>
            </div>
          )}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 bg-base-100 rounded-xl shadow-sm">
            <div className="bg-base-200 rounded-full p-6 mb-4">
              <FaBoxOpen className="w-16 h-16 text-neutral/30" />
            </div>
            <h3 className="text-lg font-semibold text-neutral mb-2">
              No Products Found
            </h3>
            <p className="text-sm text-neutral/60 text-center max-w-md mb-4">
              {products.length === 0
                ? "We couldn't load the products right now. Please try again later."
                : "Try adjusting your filters or search terms."}
            </p>
            {products.length > 0 && (
              <button onClick={clearFilters} className="btn btn-primary btn-sm">
                Clear Filters
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProduct;