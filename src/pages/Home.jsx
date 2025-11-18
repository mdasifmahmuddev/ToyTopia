import React, { useEffect } from "react";
import Hero from "../components/Hero";
import PopularToys from "../components/PopularToys";
import StoreLocationSection from "../components/StoreHome";
import WhyChooseUs from "../components/WhyChooseUs.jsx";

const Home = () => {
  useEffect(() => {
    document.title = "Home - ToyStore | Discover Local Toy Treasures";
  }, []);

  return (
    <div>
      <Hero />
      <PopularToys />
      <StoreLocationSection />
      <WhyChooseUs />
    </div>
  );
};

export default Home;