import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";

  
const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-base-200">
     
      <Navbar />

     
      <main className="flex-grow">
        <Outlet />

       


      </main>

       

      
      <Footer />
    </div>
  );
};

export default HomeLayout;