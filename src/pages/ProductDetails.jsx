import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams, useNavigate } from 'react-router';
import { FaStar, FaBox, FaUser, FaShoppingCart, FaArrowLeft, FaTruck, FaShieldAlt, FaGift, FaHeart, FaShareAlt } from 'react-icons/fa';
import { MdEmail, MdVerified, MdLocalOffer } from 'react-icons/md';
import { BiPackage } from 'react-icons/bi';
import { AiFillSafetyCertificate } from 'react-icons/ai';

const ProductDetails = () => {
  const products = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = products.find(p => p.id === id || p.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (product) {
      document.title = `${product.toyName} - ToyTopia | Product Details`;
    } else {
      document.title = "Product Not Found - ToyTopia";
    }
  }, [product]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setFormData({ name: '', email: '' });
    
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <div className="text-center">
          <BiPackage className="text-8xl text-error mx-auto mb-4 opacity-50" />
          <h2 className="text-3xl font-bold text-error mb-3">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/')} className="btn btn-primary">
            <FaArrowLeft className="mr-2" />
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-6">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <button 
          onClick={() => navigate(-1)} 
          className="btn btn-ghost btn-sm mb-4 hover:bg-base-300"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>

        {showSuccess && (
          <div className="alert alert-success shadow-lg mb-6 animate-bounce">
            <div className="flex items-center gap-2">
              <MdVerified className="text-2xl" />
              <span className="font-semibold">Success! Your Try Now request has been submitted.</span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          <div className="bg-base-100 rounded-xl shadow-lg p-4">
            <div className="aspect-square rounded-xl overflow-hidden bg-base-200 mb-3 relative group">
              <img 
                src={product.pictureURL} 
                alt={product.toyName}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <button 
                onClick={() => setIsFavorite(!isFavorite)}
                className="absolute top-3 right-3 btn btn-circle btn-sm bg-base-100/80 hover:bg-base-100 border-none"
              >
                <FaHeart className={`text-lg ${isFavorite ? 'text-error' : 'text-gray-400'}`} />
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="badge badge-md badge-info font-semibold gap-1">
                <MdLocalOffer className="text-xs" />
                {product.subCategory}
              </span>
              <div className="flex items-center gap-1.5">
                <FaStar className="text-warning text-sm" />
                <span className="text-lg font-bold text-neutral">{product.rating}</span>
                <span className="text-xs text-gray-500">/ 5.0</span>
              </div>
            </div>

             
          </div>

          <div className="space-y-4">
            
            <div className="bg-base-100 rounded-xl shadow-lg p-5">
              <h1 className="text-2xl md:text-3xl font-bold text-neutral mb-3">
                {product.toyName}
              </h1>

              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-3xl font-bold text-success">${product.price}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                <div className="badge badge-outline gap-1">
                  <BiPackage className="text-xs" />
                  {product.availableQuantity} in stock
                </div>
                <div className="badge badge-outline gap-1">
                  <FaTruck className="text-xs" />
                  Fast Shipping
                </div>
                <div className="badge badge-outline gap-1">
                  <FaShieldAlt className="text-xs" />
                  Verified
                </div>
              </div>
            </div>

            <div className="bg-base-100 rounded-xl shadow-lg p-5">
              <h3 className="text-lg font-bold text-neutral mb-3 flex items-center gap-2">
                <FaBox className="text-primary text-sm" />
                Product Information
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-base-200 rounded-lg">
                  <BiPackage className="text-primary text-lg mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-xs text-gray-500">Available Quantity</p>
                    <p className="font-semibold text-neutral">{product.availableQuantity} units</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-base-200 rounded-lg">
                  <FaUser className="text-primary text-lg mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-xs text-gray-500">Seller</p>
                    <p className="font-semibold text-neutral">{product.sellerName}</p>
                  </div>
                </div>

                {product.sellerEmail && (
                  <div className="flex items-start gap-3 p-3 bg-base-200 rounded-lg">
                    <MdEmail className="text-primary text-lg mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-xs text-gray-500">Contact</p>
                      <p className="font-semibold text-neutral text-sm">{product.sellerEmail}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-base-100 rounded-xl shadow-lg p-5">
              <h3 className="text-lg font-bold text-neutral mb-2">Description</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {product.detailDescription || product.description || 
                  `Discover the amazing ${product.toyName}! This ${product.subCategory} toy brings endless fun and excitement. Perfect for creative play and imagination. High-quality construction ensures durability and long-lasting enjoyment.`}
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl shadow-lg p-5 border border-primary/10">
              <h3 className="text-xl font-bold text-neutral mb-3 flex items-center gap-2">
                <FaShoppingCart className="text-primary text-lg" />
                Try Now
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="form-control">
                  <label className="label py-1">
                    <span className="label-text text-xs font-semibold flex items-center gap-1">
                      <FaUser className="text-xs" />
                      Your Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="input input-bordered input-sm w-full focus:input-primary"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label py-1">
                    <span className="label-text text-xs font-semibold flex items-center gap-1">
                      <MdEmail className="text-xs" />
                      Your Email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="input input-bordered input-sm w-full focus:input-primary"
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary w-full text-base-100 font-bold hover:btn-success transition-colors"
                >
                  <FaShoppingCart className="mr-2 text-sm" />
                  Try Now
                </button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-3 flex items-center justify-center gap-1">
                <AiFillSafetyCertificate className="text-success" />
                Your information is safe with us
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default ProductDetails;