import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";
import { FaFire } from "react-icons/fa";
import StoreHome from "../components/StoreHome.jsx";

const ProductPage = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [products, setProducts] = useState([]);

  const getCategoryTitle = () => {
    if (id === "0" || id === "all") return "All Products";
    return id.charAt(0).toUpperCase() + id.slice(1);
  };

  useEffect(() => {
    const categoryTitle = getCategoryTitle();
    document.title = `${categoryTitle} - ToyTopia | Browse Our Collection`;
  }, [id]);

  useEffect(() => {
    if (!data || !Array.isArray(data)) {
      console.error("No data loaded or data is not an array:", data);
      setProducts([]);
      return;
    }

    if (id === "0" || id === "all") {
      setProducts(data.slice(0, 8));
    } else {
      const filteredProducts = data.filter(
        (product) => product.subCategory.toLowerCase() === id.toLowerCase()
      );
      setProducts(filteredProducts.slice(0, 8));
    }
  }, [id, data]);

  const isPopularProducts = id === "0" || id === "all";

  return (
    <div className="min-h-screen bg-base-200">
      <Hero className="pt-20"></Hero>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8">
        <div className="mb-6">
          {isPopularProducts && (
            <div className="flex items-center gap-2 mb-2">
              <FaFire className="text-orange-500 text-xl animate-pulse" />
              <span className="text-sm font-semibold text-orange-500 uppercase tracking-wide">
                Popular Products
              </span>
            </div>
          )}
          <h1 className="text-2xl md:text-3xl font-bold text-neutral mb-1">
            {getCategoryTitle()}
          </h1>
          <div className="flex items-center gap-2">
            <div className="h-1 w-12 bg-primary rounded-full"></div>
          </div>
        </div>

        {products.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="bg-base-100 rounded-full p-6 mb-4 shadow-md">
              <svg className="w-20 h-20 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-neutral mb-1">No Products Found</h3>
            <p className="text-sm text-gray-500 text-center max-w-md">
              We couldn't find any products in this category. Try exploring other categories.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      <section>
        <StoreHome></StoreHome>
      </section>
    </div>
  );
};

export default ProductPage;