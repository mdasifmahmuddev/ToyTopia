import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const slides = [
    {
      id: 1,
      title: "Discover Amazing Toys",
      subtitle: "For Kids of All Ages",
      description: "Find the perfect toys from trusted local sellers",
      image: "https://i.ibb.co/Kj1cpcFz/2305-w056-n005-240-B-p15-240.jpg",
      buttonText: "Shop Now",
      link: "/all-products"
    },
    {
      id: 2,
      title: "Quality Toys, Happy Kids",
      subtitle: "Trusted by Families",
      description: "Browse our collection of safe and fun toys",
      image: "https://i.ibb.co/RGbYTrYD/2305-w062-n005-149-B-p15-149.jpg",
      buttonText: "Explore Collection",
      link: "/all-products"
    },
    {
      id: 3,
      title: "Support Local Sellers",
      subtitle: "Community Marketplace",
      description: "Connect with toy sellers in your area",
      image: "https://i.ibb.co/67NLxZHQ/6275119.jpg",
      buttonText: "Get Started",
      link: "/auth/register"
    },
  ];

  return (
    <div className="w-full hero-slider">
      <style jsx>{`
        .hero-slider .swiper-pagination-bullet {
          background-color: #B0CE88;
          opacity: 0.5;
          width: 12px;
          height: 12px;
        }
        
        .hero-slider .swiper-pagination-bullet-active {
          background-color: #4C763B;
          opacity: 1;
          width: 30px;
          border-radius: 6px;
        }
      `}</style>
      
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="w-full h-[60vh] md:h-[65vh] lg:h-[70vh]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-neutral/90 via-neutral/60 to-transparent"></div>
              
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
                  <div className="max-w-xl" data-aos="fade-up">
                    <span className="inline-block bg-secondary/90 text-neutral text-sm font-semibold px-4 py-2 rounded-full mb-4">
                      {slide.subtitle}
                    </span>
                    
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                      {slide.title}
                    </h1>
                    
                    <p className="text-base md:text-lg text-white/90 mb-6 leading-relaxed">
                      {slide.description}
                    </p>
                    
                    <Link to={slide.link} className="btn btn-primary text-white gap-2 btn-lg">
                      {slide.buttonText}
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;