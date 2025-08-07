'use client';
import React, { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import DecorativeLine from '../../../../components/DecorativeLine';
import WeddingButton from '../../../../components/WeddingButton';
import '../IntroSection/style.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section 
      ref={ref}
      className="relative py-16 md:py-20 px-5 overflow-hidden "
    >
      

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <h2 className={`font-marcellus tracking-wider font-bold text-secondary-heading text-2xl md:text-3xl lg:text-4xl mb-6 text-center intro-animate-slideInUp ${isInView ? 'animate' : ''}`}>
            Let&apos;s Plan Your Dream Wedding
          </h2>
          
          <DecorativeLine isInView={isInView} />
          
          <p className={`font-montserrat text-secondary-paragraphs text-base md:text-lg text-center mt-6 max-w-2xl intro-animate-fadeInUp ${isInView ? 'animate animation-delay-400' : ''}`}>
            Ready to begin your journey? Share your vision with us and let&apos;s create something magical together.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image with Overlap Effect */}
          <div className={`relative hidden md:block intro-animate-fadeInLeft ${isInView ? 'animate animation-delay-600' : ''}`}>
            <div className="relative">
              {/* Main Contact Image */}
              <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/gallery-01.jpg" // Replace with your preferred contact image
                  alt="Wedding planning consultation"
                  fill
                  className="object-cover"
                  quality={90}
                />
                
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Floating contact info card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <h3 className="font-marcellus text-secondary-heading text-xl font-semibold mb-3">
                    Get In Touch
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 text-secondary-accent">
                        <svg fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                      </div>
                      <span className="text-secondary-paragraphs">+91 98765 43210</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 text-secondary-accent">
                        <svg fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                      </div>
                      <span className="text-secondary-paragraphs">hello@lōōvio.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 text-secondary-accent">
                        <svg fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                      </div>
                      <span className="text-secondary-paragraphs">Mumbai, India</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className={`lg:pl-8 intro-animate-fadeInRight ${isInView ? 'animate animation-delay-800' : ''}`}>
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-secondary-accent/10 relative">
              {/* Form Header */}
              <div className="mb-8">
                <h3 className="font-marcellus text-secondary-heading text-2xl md:text-3xl font-semibold mb-4">
                  Start Your Journey
                </h3>
                <p className="font-montserrat text-secondary-paragraphs text-sm md:text-base">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-secondary-heading mb-2 font-montserrat">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-border rounded-xl focus:ring-2 focus:ring-secondary-accent/20 focus:border-secondary-accent transition-colors duration-200 font-montserrat placeholder-secondary-paragraphs/50"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-secondary-heading mb-2 font-montserrat">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-border rounded-xl focus:ring-2 focus:ring-secondary-accent/20 focus:border-secondary-accent transition-colors duration-200 font-montserrat placeholder-secondary-paragraphs/50"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary-heading mb-2 font-montserrat">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-border rounded-xl focus:ring-2 focus:ring-secondary-accent/20 focus:border-secondary-accent transition-colors duration-200 font-montserrat placeholder-secondary-paragraphs/50"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-heading mb-2 font-montserrat">
                    What would you like to tell us?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-secondary-border rounded-xl focus:ring-2 focus:ring-secondary-accent/20 focus:border-secondary-accent transition-colors duration-200 font-montserrat placeholder-secondary-paragraphs/50 resize-none"
                    placeholder="Tell us about your dream wedding, preferred dates, number of guests, or any specific requirements..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <WeddingButton type="submit" className="w-full">
                    Send Message
                  </WeddingButton>
                </div>
              </form>

              {/* Decorative Quote */}
              <div className="mt-6 pt-6 border-t border-secondary-border">
                <p className="font-montserrat text-secondary-paragraphs italic text-sm text-center">
                  &ldquo;Your dream wedding is just a conversation away&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(2deg); }
          50% { transform: translateY(-5px) rotate(-1deg); }
          75% { transform: translateY(-15px) rotate(1deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;