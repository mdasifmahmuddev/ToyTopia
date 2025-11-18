import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import {
  FaStore,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaStar,
  FaBox,
  FaClock,
} from "react-icons/fa";

const StoreLocation = () => {
  const products = useLoaderData();
  const [stores, setStores] = useState([]);
  const [locations, setLocations] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null);

  useEffect(() => {
    document.title = "Store Locations - ToyTopia";
  }, []);

  useEffect(() => {
    fetch("/location.json")
      .then((res) => res.json())
      .then((locationData) => {
        setLocations(locationData);
        if (products && locationData) {
          const uniqueSellers = {};
          products.forEach((p) => {
            if (!uniqueSellers[p.sellerName]) {
              uniqueSellers[p.sellerName] = {
                name: p.sellerName,
                email: p.sellerEmail,
                products: [
                  {
                    name: p.toyName,
                    price: p.price,
                    rating: p.rating,
                    quantity: p.availableQuantity,
                    category: p.subCategory,
                  },
                ],
                totalProducts: 1,
                avgRating: p.rating,
                totalStock: p.availableQuantity,
              };
            } else {
              const s = uniqueSellers[p.sellerName];
              s.products.push({
                name: p.toyName,
                price: p.price,
                rating: p.rating,
                quantity: p.availableQuantity,
                category: p.subCategory,
              });
              s.totalProducts++;
              s.totalStock += p.availableQuantity;
              s.avgRating =
                (s.avgRating * (s.totalProducts - 1) + p.rating) /
                s.totalProducts;
            }
          });

          const storesData = Object.values(uniqueSellers).map((seller, i) => {
            const location = locationData[i % locationData.length];
            return {
              ...seller,
              ...location,
              id: i + 1,
              avgRating: parseFloat(seller.avgRating.toFixed(1)),
            };
          });

          setStores(storesData);
          if (storesData.length > 0) setSelectedStore(storesData[0]);
        }
      })
      .catch((err) => console.error("Error loading data:", err));
  }, [products]);

  return (
    <div className="min-h-screen bg-base-200 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        
        <div className="bg-base-100 rounded-2xl shadow-lg overflow-hidden mb-6">
          <div className="relative h-48 bg-gradient-to-r from-primary via-secondary to-primary">
            <img
              src="https://images.unsplash.com/photo-1642338269009-cd4aa00bcb3a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
              alt="Toy Store"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral/80 to-transparent flex items-end">
              <div className="p-6 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <FaStore className="w-7 h-7" />
                  <h1 className="text-3xl font-bold">All Stores</h1>
                </div>
                <p className="text-sm opacity-90">Visit ToyTopia stores across Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="grid lg:grid-cols-3 gap-5">
           
          <div className="bg-base-100 rounded-xl shadow p-4 h-fit max-h-[520px] overflow-y-auto">
            <h2 className="text-lg font-bold flex items-center gap-2 mb-3 text-neutral">
              <FaMapMarkerAlt className="w-4 h-4 text-primary" /> All Stores
            </h2>

            <div className="space-y-2">
              {stores.map((s) => (
                <div
                  key={s.id}
                  onClick={() => setSelectedStore(s)}
                  className={`p-3 rounded-lg cursor-pointer transition-all border ${
                    selectedStore?.id === s.id
                      ? "bg-primary text-white shadow-md border-transparent"
                      : "hover:bg-base-200 border-base-300"
                  }`}
                >
                  <p className="font-semibold text-sm">{s.name}</p>
                  <p
                    className={`text-xs mt-0.5 ${
                      selectedStore?.id === s.id
                        ? "text-white/90"
                        : "text-neutral/60"
                    }`}
                  >
                    {s.area}, {s.city}
                  </p>
                </div>
              ))}
            </div>
          </div>

         
          <div className="lg:col-span-2 bg-base-100 rounded-xl shadow p-5">
            {selectedStore ? (
              <>
              
                <div className="relative h-36 rounded-lg overflow-hidden mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&h=300&fit=crop"
                    alt="Store Interior"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral/60 to-transparent" />
                </div>

                <div className="mb-3">
                  <h2 className="text-2xl font-bold text-neutral">
                    {selectedStore.name}
                  </h2>
                  <p className="text-sm text-neutral/70 flex items-center gap-1 mt-1">
                    <FaMapMarkerAlt className="text-primary w-4 h-4" />
                    {selectedStore.area}, {selectedStore.city}
                  </p>
                </div>

                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="bg-accent/20 text-neutral px-3 py-1.5 text-xs rounded-full flex items-center gap-1 font-medium">
                    <FaStar className="w-3 h-3 text-warning" /> {selectedStore.avgRating}
                  </span>
                  <span className="bg-info/30 text-neutral px-3 py-1.5 text-xs rounded-full flex items-center gap-1 font-medium">
                    <FaBox className="w-3 h-3" /> {selectedStore.totalStock} in stock
                  </span>
                  <span className="bg-secondary/30 text-neutral px-3 py-1.5 text-xs rounded-full flex items-center gap-1 font-medium">
                    {selectedStore.totalProducts} toys
                  </span>
                </div>

                <h3 className="font-bold text-base mb-2 text-neutral">
                  Available Toys
                </h3>
                <div className="space-y-2 max-h-48 overflow-y-auto mb-4">
                  {selectedStore.products.map((p, i) => (
                    <div
                      key={i}
                      className="bg-base-200 p-2.5 rounded-lg flex justify-between items-center hover:bg-base-300 transition"
                    >
                      <div>
                        <p className="text-sm font-medium text-neutral">
                          {p.name}
                        </p>
                        <p className="text-xs text-neutral/60">
                          {p.category} • Qty: {p.quantity}
                        </p>
                      </div>
                      <p className="text-sm font-bold text-primary">
                        ${p.price}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-3 mb-3">
                  <div className="flex items-center gap-2 bg-base-200 p-3 rounded-lg">
                    <FaPhone className="w-4 h-4 text-success" />
                    <p className="text-sm text-neutral">
                      {selectedStore.phone || "N/A"}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 bg-base-200 p-3 rounded-lg">
                    <FaEnvelope className="w-4 h-4 text-info" />
                    <p className="text-sm text-neutral truncate">
                      {selectedStore.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-secondary/20 p-3 rounded-lg border border-secondary">
                  <FaClock className="w-4 h-4 text-primary" />
                  <p className="text-xs text-neutral font-medium">
                    Sat–Thu 10AM–9PM | Fri 2PM–9PM
                  </p>
                </div>
              </>
            ) : (
              <div className="text-center py-16 text-neutral/40">
                <FaStore className="w-12 h-12 mx-auto mb-3 opacity-30" />
                <p>Select a store to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreLocation;