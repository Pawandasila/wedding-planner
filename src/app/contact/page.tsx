'use client';
import React, { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import DecorativeLine from '../../components/DecorativeLine';
import WeddingButton from '../../components/WeddingButton';

const ContactPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div ref={ref} className="min-h-screen bg-gradient-to-b from-white to-secondary-background/30">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-5 bg-gradient-to-r from-secondary-background to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/hero-01.jpg"
            alt="Contact us background"
            fill
            quality={90}
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-wider intro-animate-slideInUp ${isInView ? 'animate' : ''}`}>
            Get In Touch
          </h1>
          
          {/* Decorative Line */}
          <div className={`flex justify-center mb-6 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-200' : ''}`}>
            <DecorativeLine isInView={isInView} />
          </div>
          
          <p className={`font-montserrat text-secondary-paragraphs text-lg md:text-xl max-w-3xl mx-auto leading-relaxed intro-animate-fadeInUp ${isInView ? 'animate animation-delay-400' : ''}`}>
            Ready to begin planning your dream Indian wedding? Let&rsquo;s create something magical together. 
            Our team is here to bring your vision to life with traditional elegance and modern sophistication.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Contact Form */}
            <div className={`intro-animate-fadeInUp ${isInView ? 'animate animation-delay-600' : ''}`}>
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-secondary-border/30">
                <h2 className="font-marcellus text-secondary-heading text-2xl md:text-3xl font-bold mb-6">
                  Start Your Journey
                </h2>
                <p className="font-montserrat text-secondary-paragraphs mb-8">
                  Tell us about your dream celebration and we&rsquo;ll create a personalized plan just for you.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-montserrat text-secondary-heading text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-secondary-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-accent/20 focus:border-secondary-accent transition-all duration-300 font-montserrat"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block font-montserrat text-secondary-heading text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-secondary-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-accent/20 focus:border-secondary-accent transition-all duration-300 font-montserrat"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone & Event Type Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-montserrat text-secondary-heading text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-secondary-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-accent/20 focus:border-secondary-accent transition-all duration-300 font-montserrat"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block font-montserrat text-secondary-heading text-sm font-medium mb-2">
                        Event Type *
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-secondary-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-accent/20 focus:border-secondary-accent transition-all duration-300 font-montserrat dropdown-scrollable"
                      >
                        <option value="">Select event type</option>
                        <option value="wedding">Complete Wedding</option>
                        <option value="engagement">Engagement Ceremony</option>
                        <option value="haldi">Haldi Ceremony</option>
                        <option value="mehendi">Mehendi Ceremony</option>
                        <option value="sangeet">Sangeet Night</option>
                        <option value="reception">Wedding Reception</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="other">Other Celebration</option>
                      </select>
                    </div>
                  </div>

                  {/* Event Date & Guest Count Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-montserrat text-secondary-heading text-sm font-medium mb-2">
                        Preferred Event Date
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-secondary-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-accent/20 focus:border-secondary-accent transition-all duration-300 font-montserrat"
                      />
                    </div>
                    <div>
                      <label className="block font-montserrat text-secondary-heading text-sm font-medium mb-2">
                        Expected Guests
                      </label>
                      <select
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-secondary-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-accent/20 focus:border-secondary-accent transition-all duration-300 font-montserrat"
                      >
                        <option value="">Select guest count</option>
                        <option value="50-100">50-100 guests</option>
                        <option value="100-200">100-200 guests</option>
                        <option value="200-300">200-300 guests</option>
                        <option value="300-500">300-500 guests</option>
                        <option value="500+">500+ guests</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block font-montserrat text-secondary-heading text-sm font-medium mb-2">
                      Approximate Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-secondary-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-accent/20 focus:border-secondary-accent transition-all duration-300 font-montserrat"
                    >
                      <option value="">Select budget range</option>
                      <option value="2-5L">₹2-5 Lakhs</option>
                      <option value="5-10L">₹5-10 Lakhs</option>
                      <option value="10-20L">₹10-20 Lakhs</option>
                      <option value="20-50L">₹20-50 Lakhs</option>
                      <option value="50L+">₹50+ Lakhs</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-montserrat text-secondary-heading text-sm font-medium mb-2">
                      Tell Us About Your Dream Wedding
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-secondary-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-accent/20 focus:border-secondary-accent transition-all duration-300 font-montserrat resize-none"
                      placeholder="Share your vision, preferred themes, special requirements, or any questions you have..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <WeddingButton className="w-full">
                      Send Message
                    </WeddingButton>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Information & Map */}
            <div className="space-y-8">
              
              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Office Location */}
                <div className={`bg-white p-6 rounded-2xl shadow-lg border border-secondary-border/30 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-800' : ''}`}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary-accent/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-secondary-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-marcellus text-secondary-heading text-xl font-semibold mb-2">Visit Our Studio</h3>
                      <p className="font-montserrat text-secondary-paragraphs mb-1">123 Wedding Plaza, Connaught Place</p>
                      <p className="font-montserrat text-secondary-paragraphs mb-1">New Delhi - 110001, India</p>
                      <p className="font-montserrat text-secondary-paragraphs text-sm">Open: Mon-Sat, 10 AM - 7 PM</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className={`bg-white p-6 rounded-2xl shadow-lg border border-secondary-border/30 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-1000' : ''}`}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary-accent/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-secondary-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-marcellus text-secondary-heading text-xl font-semibold mb-2">Call Us</h3>
                      <p className="font-montserrat text-secondary-paragraphs mb-1">+91 98765 43210</p>
                      <p className="font-montserrat text-secondary-paragraphs mb-1">+91 87654 32109</p>
                      <p className="font-montserrat text-secondary-paragraphs text-sm">Available: 9 AM - 9 PM (All days)</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className={`bg-white p-6 rounded-2xl shadow-lg border border-secondary-border/30 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-1200' : ''}`}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary-accent/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-secondary-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-marcellus text-secondary-heading text-xl font-semibold mb-2">Email Us</h3>
                      <p className="font-montserrat text-secondary-paragraphs mb-1">hello@pawandasila.com</p>
                      <p className="font-montserrat text-secondary-paragraphs mb-1">info@pawandasila.com</p>
                      <p className="font-montserrat text-secondary-paragraphs text-sm">Response within 24 hours</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className={`bg-white p-6 rounded-2xl shadow-lg border border-secondary-border/30 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-1400' : ''}`}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary-accent/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-secondary-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4l-2 14h14l-2-14M10 9v6M14 9v6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-marcellus text-secondary-heading text-xl font-semibold mb-2">Follow Us</h3>
                      <div className="flex space-x-4">
                        <a href="#" className="text-secondary-accent hover:text-secondary-heading transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                          </svg>
                        </a>
                        <a href="#" className="text-secondary-accent hover:text-secondary-heading transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.335 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.001 12.017z"/>
                          </svg>
                        </a>
                        <a href="#" className="text-secondary-accent hover:text-secondary-heading transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-5 bg-gradient-to-b from-white to-secondary-background/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-4 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-1600' : ''}`}>
              Frequently Asked Questions
            </h2>
            <p className={`font-montserrat text-secondary-paragraphs text-lg intro-animate-fadeInUp ${isInView ? 'animate animation-delay-1800' : ''}`}>
              Quick answers to common questions about our Indian wedding planning services
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How far in advance should I book your services?",
                answer: "We recommend booking 8-12 months in advance for traditional Indian weddings to ensure proper planning and vendor availability, especially during peak wedding seasons."
              },
              {
                question: "Do you handle destination weddings?",
                answer: "Yes! We specialize in destination weddings across India and internationally. We have experience with palaces in Rajasthan, beach resorts in Goa, and mountain venues in Himachal Pradesh."
              },
              {
                question: "What's included in your wedding planning packages?",
                answer: "Our packages include venue selection, vendor coordination, traditional décor, ceremony planning with pandits, catering coordination, timeline management, and day-of coordination."
              },
              {
                question: "Can you accommodate specific regional wedding traditions?",
                answer: "Absolutely! We have expertise in various regional traditions including Punjabi, South Indian, Bengali, Gujarati, and Rajasthani wedding customs and rituals."
              },
              {
                question: "Do you provide coordination for multiple events?",
                answer: "Yes, we handle complete wedding celebrations including Haldi, Mehendi, Sangeet, main wedding ceremony, and reception with seamless coordination between all events."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-xl shadow-sm border border-secondary-border/30 intro-animate-fadeInUp ${isInView ? 'animate' : ''}`}
                style={{ animationDelay: `${2.0 + index * 0.1}s` }}
              >
                <h3 className="font-marcellus text-secondary-heading text-lg font-semibold mb-3">
                  {faq.question}
                </h3>
                <p className="font-montserrat text-secondary-paragraphs leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animation Styles */}
      <style jsx global>{`
        .intro-animate-slideInUp {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        
        .intro-animate-slideInUp.animate {
          opacity: 1;
          transform: translateY(0);
        }
        
        .intro-animate-fadeInUp {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }
        
        .intro-animate-fadeInUp.animate {
          opacity: 1;
          transform: translateY(0);
        }
        
        @media (max-width: 768px) {
          .animation-delay-200 { animation-delay: 0.2s; }
          .animation-delay-400 { animation-delay: 0.4s; }
          .animation-delay-600 { animation-delay: 0.6s; }
          .animation-delay-800 { animation-delay: 0.8s; }
          .animation-delay-1000 { animation-delay: 1s; }
          .animation-delay-1200 { animation-delay: 1.2s; }
          .animation-delay-1400 { animation-delay: 1.4s; }
          .animation-delay-1600 { animation-delay: 1.6s; }
          .animation-delay-1800 { animation-delay: 1.8s; }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
