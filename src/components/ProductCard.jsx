import React from "react";
import { Link } from "react-router";
import { FaStar, FaBox } from "react-icons/fa";

const ProductCard = ({ product }) => {
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

        <div className="mb-3">
          <p className="text-xs text-neutral/60 mb-1">Seller</p>
          <p className="text-sm font-medium text-neutral">{product.sellerName}</p>
        </div>

        <div className="mt-auto">
          <div className="flex items-end justify-between mb-3">
            <div>
              <p className="text-xs text-neutral/60">Price</p>
              <p className="text-2xl font-bold text-primary">${product.price}</p>
            </div>
          </div>

          <Link to={`/product-details/${product.id}`}>
            <button className="w-full bg-primary text-white py-2.5 rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;