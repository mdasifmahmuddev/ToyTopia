import React, { useEffect } from "react";
import { FaUsers, FaHandshake, FaHeart, FaShieldAlt, FaTruck, FaStar } from "react-icons/fa";
import { MdOutlineToys } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    document.title = "About Us - ToyTopia | Learn Our Story";
  }, []);

  const values = [
    {
      icon: <FaShieldAlt className="text-4xl text-primary" />,
      title: "Quality & Safety",
      description: "We ensure all toys meet the highest safety standards for your children's wellbeing."
    },
    {
      icon: <FaHandshake className="text-4xl text-primary" />,
      title: "Trust & Transparency",
      description: "Building lasting relationships with our community through honest practices."
    },
    {
      icon: <FaHeart className="text-4xl text-primary" />,
      title: "Customer First",
      description: "Your satisfaction and happiness are at the heart of everything we do."
    },
    {
      icon: <FaTruck className="text-4xl text-primary" />,
      title: "Fast Delivery",
      description: "Quick and reliable shipping to get toys to your doorstep promptly."
    }
  ];

  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "5K+", label: "Toys Available" },
    { number: "500+", label: "Local Sellers" },
    { number: "4.8", label: "Average Rating" }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      description: "Passionate about bringing joy to children through quality toys."
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      description: "Ensures smooth operations and excellent seller partnerships."
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Success Lead",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      description: "Dedicated to making every customer experience exceptional."
    }
  ];

  return (
    <div className="min-h-screen bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8">
        <div className="bg-base-100 rounded-2xl shadow-lg overflow-hidden mb-6">
          <div className="relative h-48 bg-gradient-to-r from-primary via-secondary to-primary">
            <img
              src="https://images.unsplash.com/photo-1560582861-45078880e48e?w=1200&h=400&fit=crop"
              alt="About ToyTopia"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-neutral/40 flex flex-col items-center justify-center">
              <MdOutlineToys className="text-5xl text-white mb-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
                About ToyTopia
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-base-100 rounded-xl shadow-sm p-6 mb-6">
          <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
            <p className="text-base text-neutral/70 leading-relaxed">
              We are a vibrant marketplace connecting families with trusted local toy sellers, 
              bringing joy and wonder to children across communities since 2020. Our mission is 
              to make toy shopping convenient, reliable, and enjoyable.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-base-100 rounded-xl shadow-sm p-6" data-aos="fade-right">
            <div className="relative h-64 rounded-lg overflow-hidden mb-4">
              <img 
                src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=400&fit=crop" 
                alt="Happy kids playing"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full mb-3">
              Our Story
            </span>
            <h2 className="text-2xl font-bold text-neutral mb-3">
              Building Dreams, One Toy at a Time
            </h2>
            <div className="h-1 w-12 bg-secondary rounded-full mb-4"></div>
            <p className="text-sm text-neutral/70 mb-3 leading-relaxed">
              ToyTopia was born from a simple belief that every child deserves access to quality, 
              safe, and affordable toys. We started as a small community initiative and have grown 
              into a trusted platform connecting thousands of families with local toy sellers.
            </p>
            <p className="text-sm text-neutral/70 leading-relaxed">
              Our platform supports local businesses while bringing smiles to children's faces 
              across the country, making toy shopping a delightful experience for everyone.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-base-100 rounded-xl shadow-sm p-6" data-aos="fade-left">
              <h3 className="text-xl font-bold text-neutral mb-4">Our Values</h3>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      {value.icon}
                    </div>
                    <h4 className="text-sm font-bold text-neutral mb-1">
                      {value.title}
                    </h4>
                    <p className="text-xs text-neutral/60 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-primary/90 rounded-xl shadow-sm p-6" data-aos="fade-left" data-aos-delay="100">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Our Impact</h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-white/90 text-xs">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-base-100 rounded-xl shadow-sm p-6 mb-6">
          <div className="text-center mb-6" data-aos="fade-up">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full mb-3">
              Meet Our Team
            </span>
            <h2 className="text-2xl font-bold text-neutral mb-2">
              The People Behind ToyTopia
            </h2>
            <div className="h-1 w-12 bg-secondary rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-base-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-neutral mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs text-primary font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-neutral/70 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl shadow-sm p-8 text-center" data-aos="fade-up">
          <FaStar className="text-4xl text-warning mx-auto mb-3" />
          <h2 className="text-2xl font-bold text-neutral mb-3">
            Join Our Growing Community
          </h2>
          <p className="text-neutral/70 mb-6 leading-relaxed max-w-2xl mx-auto text-sm">
            Whether you're a parent looking for the perfect toy or a seller wanting to reach more customers, 
            ToyTopia is the place for you. Let's create magical moments together.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/all-products" className="btn btn-primary btn-sm px-6">
              Browse Toys
            </a>
            <a href="/contact" className="btn btn-outline btn-primary btn-sm px-6">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;