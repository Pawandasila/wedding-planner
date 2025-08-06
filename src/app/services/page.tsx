'use client';
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import DecorativeLine from '../../components/DecorativeLine';
import WeddingButton from '../../components/WeddingButton';

const ServicesPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const services = [
    {
      id: 1,
      title: "Wedding Planning",
      description: "Complete wedding planning services from engagement to reception with traditional Indian ceremonies and modern elegance.",
      image: "/gallery-01.jpg",
      price: "Starting from ₹2.5L",
      link: "/services/weddings",
      features: ["Full Planning", "Vendor Coordination", "Cultural Integration", "Timeline Management"]
    },
    {
      id: 2,
      title: "Event Coordination",
      description: "Day-of coordination and event management ensuring seamless execution of your celebration.",
      image: "/gallery-02.jpg",
      price: "Starting from ₹75K",
      link: "/services/event-coordination",
      features: ["Day-of Coordination", "Vendor Management", "Timeline Execution", "Guest Coordination"]
    },
    {
      id: 3,
      title: "Destination Weddings",
      description: "Exotic destination weddings across India and internationally with complete travel and logistics coordination.",
      image: "/gallery-03.jpg",
      price: "Starting from ₹12L",
      link: "/services/destination",
      features: ["Location Planning", "Travel Coordination", "Accommodation", "Local Vendors"]
    },
    {
      id: 4,
      title: "Cultural Ceremonies",
      description: "Authentic regional Indian wedding traditions and cultural ceremonies with expert guidance.",
      image: "/gallery-04.jpg",
      price: "Starting from ₹1.5L",
      link: "/services/cultural",
      features: ["Regional Traditions", "Cultural Authenticity", "Ritual Coordination", "Traditional Elements"]
    },
    {
      id: 5,
      title: "Corporate Events",
      description: "Professional corporate event planning with Indian hospitality elements for business celebrations.",
      image: "/gallery-05.jpg",
      price: "Starting from ₹3L",
      link: "/services/corporate",
      features: ["Corporate Planning", "Business Events", "Professional Service", "Indian Hospitality"]
    },
    {
      id: 6,
      title: "Wedding Consultation",
      description: "Expert consultation and guidance for couples planning their dream Indian wedding celebration.",
      image: "/gallery-06.jpg",
      price: "Starting from ₹15K",
      link: "/services/consultation",
      features: ["Expert Guidance", "Planning Advice", "Vendor Recommendations", "Budget Planning"]
    },
    {
      id: 7,
      title: "Indian Weddings",
      description: "Traditional Indian wedding ceremonies with authentic rituals, vibrant decorations, and cultural elegance.",
      image: "/hero-08.jpg",
      price: "Starting from ₹5L",
      link: "/services/weddings",
      features: ["Traditional Ceremonies", "Authentic Rituals", "Cultural Elements", "Regional Customs"]
    },
    {
      id: 8,
      title: "Event Design",
      description: "Bespoke event design services creating memorable experiences with stunning décor and ambiance.",
      image: "/service-01.jpg",
      price: "Starting from ₹2L",
      link: "/services/event-design",
      features: ["Custom Design", "Décor Planning", "Theme Development", "Visual Concepts"]
    },
    {
      id: 9,
      title: "Venue Coordination",
      description: "Complete venue management and coordination services ensuring flawless execution from setup to cleanup.",
      image: "/hero-07.jpg",
      price: "Starting from ₹1L",
      link: "/services/venue-coordination",
      features: ["Venue Management", "Setup Coordination", "Vendor Liaison", "Event Execution"]
    }
  ];

  return (
    <div ref={ref} className="min-h-screen bg-gradient-to-b from-white to-secondary-background/30">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-5 bg-gradient-to-r from-secondary-background to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/hero-04.jpg"
            alt="Wedding services background"
            fill
            quality={90}
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-wider intro-animate-slideInUp ${isInView ? 'animate' : ''}`}>
            Our Services
          </h1>
          
          <div className={`flex justify-center mb-6 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-200' : ''}`}>
            <DecorativeLine isInView={isInView} />
          </div>
          
          <p className={`font-montserrat text-secondary-paragraphs text-lg md:text-xl max-w-4xl mx-auto leading-relaxed intro-animate-fadeInUp ${isInView ? 'animate animation-delay-400' : ''}`}>
            From traditional Indian weddings to modern celebrations, we offer comprehensive services to make 
            your special day unforgettable. Explore our complete range of wedding and event planning services.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 intro-animate-fadeInUp ${isInView ? 'animate' : ''}`}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <Link href={service.link} className="block">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </Link>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Link href={service.link}>
                      <h3 className="font-marcellus text-secondary-heading text-xl font-bold hover:text-secondary-accent transition-colors">
                        {service.title}
                      </h3>
                    </Link>
                    <span className="font-montserrat text-secondary-accent text-sm font-medium bg-secondary-accent/10 px-2 py-1 rounded">
                      {service.price}
                    </span>
                  </div>
                  
                  <p className="font-montserrat text-secondary-paragraphs text-sm mb-4">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-secondary-accent rounded-full mr-2"></span>
                        <span className="font-montserrat text-xs text-secondary-paragraphs">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* <div className="text-center">
                    <WeddingButton size="sm" variant="wedding-light" asChild>
                      <Link href={service.link}>
                        Learn More
                      </Link>
                    </WeddingButton>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-5 bg-secondary-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-6 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-1600' : ''}`}>
            Ready to Start Planning?
          </h2>
          <p className={`font-montserrat text-secondary-paragraphs text-lg mb-8 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-1800' : ''}`}>
            Contact us today to discuss your dream wedding or event. Our expert team is ready to bring your vision to life 
            with authentic Indian traditions and modern elegance.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center intro-animate-fadeInUp ${isInView ? 'animate animation-delay-2000' : ''}`}>
            <WeddingButton asChild>
              <Link href="/contact">
                Get Free Consultation
              </Link>
            </WeddingButton>
            <WeddingButton variant="wedding-light" asChild>
              <Link href="tel:+919876543210">
                Call Now
              </Link>
            </WeddingButton>
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
          .animation-delay-2000 { animation-delay: 2s; }
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;
