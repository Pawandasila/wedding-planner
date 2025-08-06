'use client';
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import DecorativeLine from '../../../components/DecorativeLine';
import WeddingButton from '../../../components/WeddingButton';

const DestinationWeddingsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const destinations = [
    {
      name: "Rajasthan Palaces",
      location: "Udaipur, Jodhpur, Jaipur",
      image: "/gallery-01.jpg",
      description: "Majestic palaces and heritage hotels with royal Indian wedding experiences.",
      highlights: ["Palace Venues", "Royal Ambiance", "Cultural Richness", "Luxury Accommodations"]
    },
    {
      name: "Goa Beach Resorts",
      location: "North & South Goa",
      image: "/gallery-02.jpg",
      description: "Beachfront celebrations with Indian traditions meeting coastal beauty.",
      highlights: ["Beach Ceremonies", "Resort Facilities", "Sunset Celebrations", "Coastal Cuisine"]
    },
    {
      name: "Kerala Backwaters",
      location: "Alleppey, Kumarakom",
      image: "/gallery-03.jpg",
      description: "Serene backwater settings with traditional Kerala wedding customs.",
      highlights: ["Houseboat Venues", "Traditional Decor", "Ayurvedic Treatments", "Cultural Programs"]
    },
    {
      name: "Himachal Hill Stations",
      location: "Shimla, Manali, Dharamshala",
      image: "/gallery-04.jpg",
      description: "Mountain weddings with breathtaking views and cool climate celebrations.",
      highlights: ["Mountain Views", "Cool Climate", "Adventure Activities", "Intimate Settings"]
    },
    {
      name: "International Destinations",
      location: "Thailand, Bali, Dubai",
      image: "/gallery-05.jpg",
      description: "Exotic international locations for couples seeking unique destination weddings.",
      highlights: ["Exotic Locations", "International Cuisine", "Luxury Resorts", "Cultural Fusion"]
    },
    {
      name: "Heritage Properties",
      location: "Rajasthan, Gujarat, MP",
      image: "/gallery-06.jpg",
      description: "Historic forts and heritage properties offering authentic royal wedding experiences.",
      highlights: ["Historic Venues", "Architectural Beauty", "Traditional Cuisine", "Royal Treatment"]
    }
  ];

  const services = [
    {
      icon: "🏨",
      title: "Venue Selection & Booking",
      description: "Curated selection of the finest destination venues matching your vision and requirements.",
      features: ["Site Inspections", "Venue Negotiations", "Contract Management", "Backup Options"]
    },
    {
      icon: "✈️",
      title: "Travel & Logistics",
      description: "Complete travel coordination for wedding party and guests including flights and transfers.",
      features: ["Flight Bookings", "Airport Transfers", "Local Transportation", "Itinerary Planning"]
    },
    {
      icon: "🏡",
      title: "Accommodation Management",
      description: "Luxury accommodation arrangements for all guests with special rates and amenities.",
      features: ["Room Blocks", "Guest Services", "Welcome Amenities", "Concierge Support"]
    },
    {
      icon: "📋",
      title: "Legal Documentation",
      description: "Assistance with marriage registration, documentation, and legal requirements.",
      features: ["Marriage Registration", "Document Assistance", "Legal Guidance", "Certificate Processing"]
    },
    {
      icon: "🎪",
      title: "Local Vendor Network",
      description: "Access to trusted local vendors including decorators, caterers, and entertainers.",
      features: ["Vendor Vetting", "Quality Assurance", "Local Expertise", "Cultural Authenticity"]
    },
    {
      icon: "🎯",
      title: "Guest Experience",
      description: "Curated experiences and activities for guests to make the most of the destination.",
      features: ["Welcome Events", "Local Tours", "Cultural Activities", "Guest Coordination"]
    }
  ];

  const packages = [
    {
      name: "Intimate Destination",
      price: "₹12,00,000",
      guests: "Up to 50 guests",
      duration: "3 days celebration",
      description: "Perfect for intimate destination weddings with close family and friends.",
      features: [
        "Venue selection and booking assistance",
        "3-day celebration planning",
        "Travel coordination for wedding party",
        "Accommodation arrangements (2 nights)",
        "Local vendor coordination",
        "Basic decoration and setup",
        "Photography coordination",
        "Guest welcome package",
        "On-site coordination team"
      ],
      popular: false
    },
    {
      name: "Grand Destination",
      price: "₹25,00,000",
      guests: "Up to 150 guests",
      duration: "4-5 days celebration",
      description: "Comprehensive destination wedding with multiple events and luxury experiences.",
      features: [
        "All Intimate Destination services",
        "Multiple venue coordination",
        "Extended celebration planning (4-5 days)",
        "Guest travel assistance and coordination",
        "Luxury accommodation management",
        "Premium decoration and theming",
        "Entertainment and cultural programs",
        "Welcome and farewell events",
        "Local experience curation",
        "Dedicated destination manager"
      ],
      popular: true
    },
    {
      name: "Royal Destination",
      price: "₹45,00,000",
      guests: "150+ guests",
      duration: "Week-long celebration",
      description: "Ultra-luxury destination wedding with personalized experiences and royal treatment.",
      features: [
        "All Grand Destination services",
        "Palace/luxury resort exclusive bookings",
        "Week-long celebration coordination",
        "Private charter arrangements",
        "Personalized guest experiences",
        "Celebrity entertainment options",
        "Professional photography/videography",
        "Spa and wellness arrangements",
        "Cultural immersion programs",
        "24/7 concierge services",
        "Post-wedding tour coordination"
      ],
      popular: false
    }
  ];

  const planning_process = [
    {
      step: "01",
      title: "Destination Consultation",
      description: "Understanding your vision, budget, and preferred destinations for your dream wedding.",
      timeline: "12-18 months before"
    },
    {
      step: "02",
      title: "Site Visits & Selection",
      description: "Organized site visits to shortlisted destinations and venues for final selection.",
      timeline: "10-12 months before"
    },
    {
      step: "03",
      title: "Travel & Accommodation",
      description: "Booking flights, accommodations, and coordinating travel logistics for all guests.",
      timeline: "6-8 months before"
    },
    {
      step: "04",
      title: "Local Coordination",
      description: "Finalizing local vendors, decorations, and cultural requirements for the destination.",
      timeline: "3-4 months before"
    },
    {
      step: "05",
      title: "Pre-Wedding Setup",
      description: "On-ground team coordination and setup management at the destination venue.",
      timeline: "1 week before"
    },
    {
      step: "06",
      title: "Celebration Execution",
      description: "Complete on-site management ensuring seamless execution of your destination wedding.",
      timeline: "Wedding days"
    }
  ];

  return (
    <div ref={ref} className="min-h-screen bg-gradient-to-b from-white to-secondary-background/30">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-5 bg-gradient-to-r from-secondary-background to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/hero-05.jpg"
            alt="Destination wedding background"
            fill
            quality={90}
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-wider intro-animate-slideInUp ${isInView ? 'animate' : ''}`}>
            Destination Wedding Planning
          </h1>
          
          <div className={`flex justify-center mb-6 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-200' : ''}`}>
            <DecorativeLine isInView={isInView} />
          </div>
          
          <p className={`font-montserrat text-secondary-paragraphs text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-400' : ''}`}>
            Create magical memories in breathtaking destinations across India and beyond. Our destination wedding 
            specialists handle every detail from venue selection to guest coordination, ensuring your celebration 
            is as extraordinary as your love story.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center intro-animate-fadeInUp ${isInView ? 'animate animation-delay-600' : ''}`}>
            <WeddingButton asChild>
              <Link href="/contact">
                Plan Your Destination Wedding
              </Link>
            </WeddingButton>
            <WeddingButton variant="wedding-light" asChild>
              <Link href="/gallery">
                View Destination Weddings
              </Link>
            </WeddingButton>
          </div>
        </div>
      </section>

      {/* Destination Showcase */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-4 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-800' : ''}`}>
              Popular Destinations
            </h2>
            <p className={`font-montserrat text-secondary-paragraphs text-lg max-w-3xl mx-auto intro-animate-fadeInUp ${isInView ? 'animate animation-delay-1000' : ''}`}>
              Discover enchanting destinations perfect for your Indian wedding celebration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 intro-animate-fadeInUp ${isInView ? 'animate' : ''}`}
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-marcellus text-secondary-heading text-xl font-bold mb-2">
                    {destination.name}
                  </h3>
                  <p className="font-montserrat text-secondary-accent text-sm mb-3 font-medium">
                    {destination.location}
                  </p>
                  <p className="font-montserrat text-secondary-paragraphs text-sm mb-4">
                    {destination.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {destination.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-secondary-accent rounded-full mr-2"></span>
                        <span className="font-montserrat text-xs text-secondary-paragraphs">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-5 bg-gradient-to-b from-white to-secondary-background/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-4 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-1800' : ''}`}>
              Our Destination Services
            </h2>
            <p className={`font-montserrat text-secondary-paragraphs text-lg max-w-3xl mx-auto intro-animate-fadeInUp ${isInView ? 'animate animation-delay-2000' : ''}`}>
              Comprehensive services to make your destination wedding seamless and memorable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 intro-animate-fadeInUp ${isInView ? 'animate' : ''}`}
                style={{ animationDelay: `${2.2 + index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="font-marcellus text-secondary-heading text-xl font-semibold mb-3 text-center">
                  {service.title}
                </h3>
                <p className="font-montserrat text-secondary-paragraphs mb-4 text-center">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center font-montserrat text-sm text-secondary-paragraphs">
                      <span className="w-2 h-2 bg-secondary-accent rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Process */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-4 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-2800' : ''}`}>
              Planning Process
            </h2>
            <p className={`font-montserrat text-secondary-paragraphs text-lg intro-animate-fadeInUp ${isInView ? 'animate animation-delay-3000' : ''}`}>
              Our systematic approach to creating perfect destination weddings
            </p>
          </div>

          <div className="space-y-8">
            {planning_process.map((step, index) => (
              <div
                key={index}
                className={`flex items-start gap-6 intro-animate-fadeInUp ${isInView ? 'animate' : ''}`}
                style={{ animationDelay: `${3.2 + index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-secondary-accent text-white font-marcellus font-bold text-xl rounded-full flex items-center justify-center">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="font-marcellus text-secondary-heading text-xl font-bold">
                      {step.title}
                    </h3>
                    <span className="font-montserrat text-secondary-accent text-sm font-medium uppercase tracking-wider">
                      {step.timeline}
                    </span>
                  </div>
                  <p className="font-montserrat text-secondary-paragraphs leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 px-5 bg-gradient-to-b from-white to-secondary-background/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-4 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-3800' : ''}`}>
              Destination Packages
            </h2>
            <p className={`font-montserrat text-secondary-paragraphs text-lg max-w-3xl mx-auto intro-animate-fadeInUp ${isInView ? 'animate animation-delay-4000' : ''}`}>
              Choose the perfect destination wedding package for your celebration
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white border-2 ${pkg.popular ? 'border-secondary-accent' : 'border-secondary-border/30'} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 intro-animate-fadeInUp ${isInView ? 'animate' : ''}`}
                style={{ animationDelay: `${4.2 + index * 0.2}s` }}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-secondary-accent text-white font-montserrat font-medium text-sm px-4 py-2 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="font-marcellus text-secondary-heading text-2xl font-bold mb-2">
                    {pkg.name}
                  </h3>
                  <div className="font-marcellus text-3xl text-secondary-accent font-bold mb-2">
                    {pkg.price}
                  </div>
                  <p className="font-montserrat text-secondary-paragraphs text-sm mb-1">
                    {pkg.guests}
                  </p>
                  <p className="font-montserrat text-secondary-paragraphs text-sm">
                    {pkg.duration}
                  </p>
                </div>
                
                <p className="font-montserrat text-secondary-paragraphs text-center mb-6">
                  {pkg.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start font-montserrat text-sm text-secondary-paragraphs">
                      <span className="w-2 h-2 bg-secondary-accent rounded-full mr-3 flex-shrink-0 mt-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="text-center">
                  <WeddingButton className="w-full" variant={pkg.popular ? "wedding" : "wedding-light"} asChild>
                    <Link href="/contact">
                      Choose Package
                    </Link>
                  </WeddingButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-5 bg-secondary-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-6 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-4800' : ''}`}>
            Ready for Your Dream Destination Wedding?
          </h2>
          <p className={`font-montserrat text-secondary-paragraphs text-lg mb-8 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-5000' : ''}`}>
            Let us create an unforgettable destination wedding experience that combines breathtaking locations 
            with authentic Indian traditions. Start planning your dream celebration today.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center intro-animate-fadeInUp ${isInView ? 'animate animation-delay-5200' : ''}`}>
            <WeddingButton asChild>
              <Link href="/contact">
                Start Planning
              </Link>
            </WeddingButton>
            <WeddingButton variant="wedding-light" asChild>
              <Link href="tel:+919876543210">
                Schedule Consultation
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
          .animation-delay-2200 { animation-delay: 2.2s; }
          .animation-delay-2800 { animation-delay: 2.8s; }
          .animation-delay-3000 { animation-delay: 3s; }
          .animation-delay-3200 { animation-delay: 3.2s; }
          .animation-delay-3800 { animation-delay: 3.8s; }
          .animation-delay-4000 { animation-delay: 4s; }
          .animation-delay-4200 { animation-delay: 4.2s; }
          .animation-delay-4800 { animation-delay: 4.8s; }
          .animation-delay-5000 { animation-delay: 5s; }
          .animation-delay-5200 { animation-delay: 5.2s; }
        }
      `}</style>
    </div>
  );
};

export default DestinationWeddingsPage;
