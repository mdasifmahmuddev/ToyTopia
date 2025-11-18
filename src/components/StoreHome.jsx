import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
 
const StoreLocationSection = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoScrollInterval = useRef(null);

   const locations = [
    {
      src: "https://i.ibb.co.com/8DRrkL8J/hosein-charbaghi-Lnz-GSOpa2-Q-unsplash.jpg",
      alt: "Colorful Toy Store Display"
    },
    {
      src: "https://i.ibb.co.com/GftRM03V/jerry-wang-wjwmug0yv-HM-unsplash.jpg",
      alt: "Kids Playing with Toys"
    },
    {
      src: "https://i.ibb.co.com/xKGqysjZ/karen-vardazaryan-JBrfo-V-BZts-unsplash.jpg",
      alt: "Toy Store Shelves"
    },
    {
      src: "https://i.ibb.co.com/DgRr2NSR/nong-Wwdr-J2e-Qp58-unsplash.jpg",
      alt: "Toy Store Interior View"
    },
    {
      src: "https://i.ibb.co.com/Pv99m3yC/rushikesh-sonkusale-9-Gz-AHR5e24k-unsplash.jpg",
      alt: "Plush Toys Section"
    },
    {
      src: "https://i.ibb.co.com/Fkf9d1fj/smiling-little-girl-holding-big-teddy-bear.jpg",
      alt: "Toy Cars Collection"
    }
  ];

  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      const scrollAmount = 336;  
      carouselRef.current.scrollTo({
        left: scrollAmount * index,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const scroll = (direction) => {
    let newIndex;
    if (direction === 'left') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : locations.length - 1;
    } else {
      newIndex = currentIndex < locations.length - 1 ? currentIndex + 1 : 0;
    }
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    autoScrollInterval.current = setInterval(() => {
      scroll('right');
    }, 3000);  
    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    };
  }, [currentIndex]);

  return (
    <div className="w-full py-8 px-4 bg-base-200">
      <h2 className="text-4xl font-bold text-center mb-2 text-neutral">Our Store Locations</h2>
      <p className="text-center text-base-content/70 mb-8">Visit us at any of our beautiful toy stores</p>
      
      <div className="relative max-w-6xl mx-auto">
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary hover:bg-primary/90 rounded-full p-3 shadow-lg transition-all hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>

        <div 
          ref={carouselRef}
          className="overflow-x-hidden mx-12"
        >
          <div className="flex gap-4 transition-transform duration-500">
            {locations.map((location, index) => (
              <div key={index} className="w-80 h-64 flex-shrink-0">
                <img
                  src={location.src}
                  alt={location.alt}
                  className="rounded-lg w-full h-full object-cover shadow-xl hover:shadow-2xl transition-shadow"
                />
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary hover:bg-primary/90 rounded-full p-3 shadow-lg transition-all hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight size={24} className="text-white" />
        </button>
      </div>

      <div className="text-center mt-6 space-y-4">
        <div className="flex items-center justify-center gap-2">
          {locations.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'w-8 bg-primary' 
                  : 'w-2 bg-base-300 hover:bg-secondary'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={() => window.location.href = '/store-location'}
          className="px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-full shadow-md transition-all hover:scale-105 font-medium"
        >
          Visit Our Stores
        </button>
      </div>
    </div>
  );
};

export default StoreLocationSection;