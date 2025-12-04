import React from "react";
import { Handshake, MessageCircleHeart, ShieldCheck, Sparkles, Package, TrendingUp, ThumbsUp, Trophy } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Handshake,
      title: "Support Local Sellers",
      description: "Connect directly with passionate local toy sellers in your community",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: MessageCircleHeart,
      title: "Community Driven",
      description: "Read real reviews and ratings from parents just like you",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: ShieldCheck,
      title: "Safe & Trusted",
      description: "Verified sellers and quality-checked toys for your peace of mind",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: Sparkles,
      title: "Discover & Share",
      description: "Browse unique toys and share your experiences with other families",
      gradient: "from-amber-500 to-orange-600"
    }
  ];

  const stats = [
    { label: "Local Sellers", value: "50+", icon: Handshake, subtext: "In your community", color: "text-cyan-600" },
    { label: "Toy Listings", value: "1000+", icon: Package, subtext: "Unique toys to explore", color: "text-purple-600" },
    { label: "Parent Reviews", value: "5K+", icon: MessageCircleHeart, subtext: "Real family feedback", color: "text-rose-600" },
    { label: "Happy Customers", value: "98%", icon: ThumbsUp, subtext: "Satisfaction rate", color: "text-emerald-600" }
  ];

  return (
    <div className="w-full py-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-base-200"></div>
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=1600)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
      <div className="max-w-7xl mx-auto relative z-10">
         
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2 text-neutral drop-shadow-sm">
            Why ToyTopia?
          </h2>
          <p className="text-center text-base-content/70 drop-shadow-sm">
            A vibrant marketplace connecting families with local toy sellers
          </p>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden border border-base-300/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className={`bg-gradient-to-br ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10`}>
                  <Icon className="text-white" size={32} strokeWidth={2.5} />
                </div>
                
                <h3 className="text-xl font-bold text-neutral mb-3 relative z-10 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-base-content/70 leading-relaxed relative z-10">
                  {feature.description}
                </p>
                
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>

         
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-primary/10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2   px-4 py-2 rounded-full mb-3">
              
              
              <h2 className="text-4xl font-bold mb-2 text-neutral drop-shadow-sm">
             Our Impact
          </h2>



            </div>

            <p className="text-center text-base-content/70 drop-shadow-sm">
           Real numbers from our growing community
          </p>


           </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="relative group bg-gradient-to-br from-base-200 to-base-100 rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-base-300/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  
                  <div className="relative bg-white w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Icon className={stat.color} size={28} strokeWidth={2.5} />
                  </div>
                  <div className={`text-4xl font-bold ${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-neutral mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-base-content/60">
                    {stat.subtext}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default WhyChooseUs;