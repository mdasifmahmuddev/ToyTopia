import React from "react";
import { Handshake, MessageCircleHeart, ShieldCheck, Sparkles, Package, TrendingUp, ThumbsUp, Trophy } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Handshake,
      title: "Support Local Sellers",
      description: "Connect directly with passionate local toy sellers in your community",
      gradient: "from-primary to-success"
    },
    {
      icon: MessageCircleHeart,
      title: "Community Driven",
      description: "Read real reviews and ratings from parents just like you",
      gradient: "from-secondary to-info"
    },
    {
      icon: ShieldCheck,
      title: "Safe & Trusted",
      description: "Verified sellers and quality-checked toys for your peace of mind",
      gradient: "from-success to-primary"
    },
    {
      icon: Sparkles,
      title: "Discover & Share",
      description: "Browse unique toys and share your experiences with other families",
      gradient: "from-info to-secondary"
    }
  ];

  const stats = [
    { label: "Local Sellers", value: "50+", icon: Handshake, subtext: "In your community", color: "text-primary", bgColor: "bg-primary/20" },
    { label: "Toy Listings", value: "1000+", icon: Package, subtext: "Unique toys to explore", color: "text-secondary", bgColor: "bg-secondary/20" },
    { label: "Parent Reviews", value: "5K+", icon: MessageCircleHeart, subtext: "Real family feedback", color: "text-success", bgColor: "bg-success/20" },
    { label: "Happy Customers", value: "98%", icon: ThumbsUp, subtext: "Satisfaction rate", color: "text-info", bgColor: "bg-info/20" }
  ];

  return (
    <div className="w-full py-20 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-base-100 via-base-200 to-base-300"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 px-4">
         
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="text-primary" size={18} />
            <span className="text-sm font-semibold text-primary">Why Choose Us</span>
          </div>
          <h2 className="text-5xl font-bold mb-4 text-neutral">
            Why ToyTopia?
          </h2>
          <p className="text-lg text-neutral/70 max-w-2xl mx-auto">
            A vibrant marketplace connecting families with local toy sellers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-base-300"
              >
                <div className={`bg-gradient-to-br ${feature.gradient} w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-all duration-300`}>
                  <Icon className="text-white" size={28} strokeWidth={2.5} />
                </div>
                
                <h3 className="text-lg font-bold text-neutral mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=1600)',
            }}
          ></div>
          
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-success/90 to-neutral/95 backdrop-blur-sm"></div>
          
          <div className="relative z-10 p-12">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full mb-4 border border-white/30">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-white">Live Stats</span>
              </div>
              
              <h2 className="text-5xl font-bold mb-4 text-white">
                Our Impact
              </h2>
              
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Real numbers from our growing community
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index} 
                    className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className={`${stat.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300`}>
                      <Icon className="text-white" size={32} strokeWidth={2.5} />
                    </div>
                    
                    <div className="text-5xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    
                    <div className="text-base font-semibold text-white mb-1">
                      {stat.label}
                    </div>
                    
                    <div className="text-sm text-white/80">
                      {stat.subtext}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default WhyChooseUs;