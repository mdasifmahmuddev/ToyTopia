import React from "react";
import { Link } from "react-router";
import { FaStar, FaBox } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const truncateDescription = (text, maxLength = 80) => {
    if (!text) return "High-quality toy perfect for children of all ages";
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  return (
    <div className="bg-base-100 rounded-xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
      <div className="relative h-48 overflow-hidden bg-base-200">
        <img 
          src={product.pictureURL} 
          alt={product.toyName}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-secondary text-neutral text-xs font-bold px-2.5 py-1 rounded-full">
          {product.subCategory}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-bold text-neutral mb-2 line-clamp-2 min-h-[3rem]">
          {product.toyName}
        </h2>

        <p className="text-sm text-neutral/70 mb-3 min-h-[2.5rem]">
          {truncateDescription(product.description)}
        </p>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            <FaStar className="text-warning text-sm" />
            <span className="text-neutral font-semibold text-sm">{product.rating}</span>
            <span className="text-neutral/50 text-xs">/5</span>
          </div>
          <div className="flex items-center gap-1 text-info">
            <FaBox className="text-xs" />
            <span className="text-sm font-medium">{product.availableQuantity}</span>
          </div>
        </div>

        <div className="mb-3 pb-3 border-b border-base-300">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs text-neutral/60 mb-0.5">Seller</p>
              <p className="text-sm font-medium text-neutral">{product.sellerName}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-neutral/60 mb-0.5">Price</p>
              <p className="text-xl font-bold text-primary">${product.price}</p>
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <Link to={`/product-details/${product.id}`}>
            <button className="w-full bg-primary text-white py-2.5 rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm">
              See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;