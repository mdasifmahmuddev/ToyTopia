import React from "react";
import { Shield, Store, Users, Star } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Store,
      title: "Support Local Sellers",
      description: "Connect directly with passionate local toy sellers in your community"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Read real reviews and ratings from parents just like you"
    },
    {
      icon: Shield,
      title: "Safe & Trusted",
      description: "Verified sellers and quality-checked toys for your peace of mind"
    },
    {
      icon: Star,
      title: "Discover & Share",
      description: "Browse unique toys and share your experiences with other families"
    }
  ];

  return (
    <div className="w-full py-12 md:py-20 px-4 bg-gradient-to-b from-base-100 to-base-200">
      <div className="max-w-7xl mx-auto">
         
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-neutral">
            Why ToyTopia?
          </h2>
          <p className="text-base md:text-lg text-base-content/70 max-w-2xl mx-auto px-4">
            A vibrant marketplace connecting families with local toy sellers. Discover, review, and find the perfect toys for your kids!
          </p>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-base-100 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-base-300 hover:border-primary/30"
              >
                <div className="bg-primary/10 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="text-primary" size={28} strokeWidth={2} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-neutral mb-2 md:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-base-content/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

         
        <div className="flex justify-center">
          <div className="w-full max-w-4xl bg-base-100 rounded-2xl shadow-xl border border-base-300 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-base-300">
              <div className="p-6 md:p-8 text-center hover:bg-base-50 transition-colors duration-200">
                <div className="text-base-content/70 text-xs md:text-sm font-medium uppercase tracking-wide mb-2">
                  Local Sellers
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1">
                  50+
                </div>
                <div className="text-xs md:text-sm text-base-content/60">
                  In your community
                </div>
              </div>
              
              <div className="p-6 md:p-8 text-center hover:bg-base-50 transition-colors duration-200">
                <div className="text-base-content/70 text-xs md:text-sm font-medium uppercase tracking-wide mb-2">
                  Toy Listings
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1">
                  1000+
                </div>
                <div className="text-xs md:text-sm text-base-content/60">
                  Unique toys to explore
                </div>
              </div>
              
              <div className="p-6 md:p-8 text-center hover:bg-base-50 transition-colors duration-200">
                <div className="text-base-content/70 text-xs md:text-sm font-medium uppercase tracking-wide mb-2">
                  Parent Reviews
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1">
                  5K+
                </div>
                <div className="text-xs md:text-sm text-base-content/60">
                  Real family feedback
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-block bg-primary/5 border-2 border-primary/20 rounded-2xl px-6 py-4 md:px-8 md:py-5">
            <p className="text-sm md:text-base text-base-content/80">
              <span className="font-bold text-primary">Join our community</span> — Log in to browse toys, read detailed reviews, and share your own experiences with other families!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;