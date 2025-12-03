import React, { useState, useEffect } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdOutlineToys } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    document.title = "Contact Us - ToyTopia | Get In Touch";
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl text-primary" />,
      title: "Phone",
      detail: "+880 1234-567890",
      link: "tel:+8801234567890"
    },
    {
      icon: <FaEnvelope className="text-2xl text-primary" />,
      title: "Email",
      detail: "support@toytopia.com",
      link: "mailto:support@toytopia.com"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-primary" />,
      title: "Address",
      detail: "Dhaka, Bangladesh",
      link: "#"
    },
    {
      icon: <FaClock className="text-2xl text-primary" />,
      title: "Business Hours",
      detail: "Mon - Sat: 9AM - 8PM",
      link: "#"
    }
  ];

  const faqs = [
    {
      question: "How do I place an order?",
      answer: "Browse our toy collection, click on any item to view details, and use the contact information to reach the seller directly."
    },
    {
      question: "Is delivery available?",
      answer: "Yes! Most sellers offer delivery services. Delivery options and charges vary by seller and location."
    },
    {
      question: "Are the toys safe for children?",
      answer: "All sellers on ToyTopia are verified, and we encourage them to provide safe, quality toys. Check product descriptions for age recommendations."
    },
    {
      question: "Can I become a seller?",
      answer: "Absolutely! We welcome local toy sellers to join our platform. Contact us to learn about the registration process."
    }
  ];

  return (
    <div className="min-h-screen bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8">
        <div className="bg-base-100 rounded-2xl shadow-lg overflow-hidden mb-6">
          <div className="relative h-48 bg-gradient-to-r from-primary via-secondary to-primary">
            <img
              src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=1200&h=400&fit=crop"
              alt="Contact ToyTopia"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-neutral/40 flex flex-col items-center justify-center">
              <MdOutlineToys className="text-5xl text-white mb-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
                Get In Touch
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-base-100 rounded-xl shadow-sm p-6 mb-6">
          <div className="text-center max-w-2xl mx-auto" data-aos="fade-up">
            <p className="text-base text-neutral/70 leading-relaxed">
              Have questions or need assistance? We're here to help! Reach out to us and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-base-100 p-4 rounded-xl text-center hover:shadow-lg transition-all"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-center mb-3">
                {info.icon}
              </div>
              <h3 className="text-sm font-bold text-neutral mb-2">
                {info.title}
              </h3>
              <a 
                href={info.link}
                className="text-xs text-neutral/70 hover:text-primary transition-colors"
              >
                {info.detail}
              </a>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-base-100 p-6 rounded-xl shadow-sm" data-aos="fade-right">
            <h2 className="text-xl font-bold text-neutral mb-2">
              Send Us a Message
            </h2>
            <div className="h-1 w-12 bg-primary rounded-full mb-4"></div>
            
            {submitted && (
              <div className="alert alert-success mb-4 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Message sent successfully! We'll respond soon.</span>
              </div>
            )}

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-neutral mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="input input-bordered w-full input-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="input input-bordered w-full input-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="input input-bordered w-full input-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                  className="textarea textarea-bordered w-full h-24 resize-none text-sm"
                  required
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="btn btn-primary w-full btn-sm"
              >
                Send Message
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-base-100 p-6 rounded-xl shadow-sm" data-aos="fade-left">
              <h2 className="text-xl font-bold text-neutral mb-2">
                Visit Our Office
              </h2>
              <div className="h-1 w-12 bg-primary rounded-full mb-4"></div>
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.38703692693!2d90.25446063289183!3d23.780573258035957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="ToyTopia Location"
                ></iframe>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-xl" data-aos="fade-left" data-aos-delay="100">
              <h3 className="text-lg font-bold text-neutral mb-3">
                Connect With Us
              </h3>
              <p className="text-neutral/70 mb-4 text-xs leading-relaxed">
                Follow us on social media for the latest updates, promotions, and toy collections!
              </p>
              <div className="flex gap-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-sm bg-base-100 hover:bg-primary hover:text-white border-0 transition-all"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-sm bg-base-100 hover:bg-primary hover:text-white border-0 transition-all"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-sm bg-base-100 hover:bg-primary hover:text-white border-0 transition-all"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-sm bg-base-100 hover:bg-primary hover:text-white border-0 transition-all"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-base-100 rounded-xl shadow-sm p-6">
          <div className="text-center mb-6" data-aos="fade-up">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full mb-3">
              FAQ
            </span>
            <h2 className="text-2xl font-bold text-neutral mb-2">
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-12 bg-secondary rounded-full mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="collapse collapse-plus bg-base-200"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <input type="radio" name="faq-accordion" defaultChecked={index === 0} />
                <div className="collapse-title text-sm font-semibold text-neutral">
                  {faq.question}
                </div>
                <div className="collapse-content">
                  <p className="text-xs text-neutral/70 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;