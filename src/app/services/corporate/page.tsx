'use client';
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import DecorativeLine from '../../../components/DecorativeLine';
import WeddingButton from '../../../components/WeddingButton';

const CorporateEventsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const eventTypes = [
    {
      name: "Corporate Award Ceremonies",
      description: "Elegant award ceremonies celebrating achievements with Indian corporate culture elements.",
      image: "/gallery-01.jpg",
      features: ["Award Presentations", "Cultural Performances", "Executive Recognition", "Networking Sessions"]
    },
    {
      name: "Product Launch Events",
      description: "Grand product launches with traditional Indian inauguration ceremonies and modern presentations.",
      image: "/gallery-02.jpg",
      features: ["Traditional Inauguration", "Media Coverage", "Guest Experiences", "Brand Integration"]
    },
    {
      name: "Conference & Seminars",
      description: "Professional conferences with Indian hospitality traditions and modern business requirements.",
      image: "/gallery-03.jpg",
      features: ["Venue Management", "Technical Setup", "Catering Services", "Guest Coordination"]
    },
    {
      name: "Team Building Retreats",
      description: "Corporate retreats combining team building activities with Indian cultural experiences.",
      image: "/gallery-04.jpg",
      features: ["Activity Planning", "Cultural Programs", "Group Accommodations", "Wellness Sessions"]
    },
    {
      name: "Annual Celebrations",
      description: "Company annual celebrations with Diwali parties, milestone celebrations, and cultural themes.",
      image: "/gallery-05.jpg",
      features: ["Festival Celebrations", "Cultural Themes", "Employee Recognition", "Entertainment"]
    },
    {
      name: "Client Entertainment",
      description: "Exclusive client entertainment events showcasing Indian hospitality and business networking.",
      image: "/gallery-06.jpg",
      features: ["VIP Treatment", "Cultural Showcases", "Fine Dining", "Business Networking"]
    }
  ];

  const services = [
    {
      icon: "🏢",
      title: "Venue Selection",
      description: "Premium venues suitable for corporate events with all modern amenities and professional setup.",
      features: ["Corporate Venues", "Technical Facilities", "Catering Options", "Parking Arrangements"]
    },
    {
      icon: "🎯",
      title: "Event Management",
      description: "Complete event management from planning to execution with professional coordination.",
      features: ["Project Management", "Timeline Planning", "Vendor Coordination", "Quality Control"]
    },
    {
      icon: "🎤",
      title: "Audio Visual Setup",
      description: "Professional AV equipment, lighting, and technical support for presentations and entertainment.",
      features: ["Sound Systems", "Projection Setup", "Lighting Design", "Technical Support"]
    },
    {
      icon: "🍽️",
      title: "Corporate Catering",
      description: "Professional catering services with Indian and international cuisine options for corporate tastes.",
      features: ["Business Lunches", "Cocktail Receptions", "Cultural Cuisine", "Dietary Accommodations"]
    },
    {
      icon: "🎭",
      title: "Entertainment & Culture",
      description: "Cultural performances and entertainment options that reflect Indian heritage and corporate values.",
      features: ["Cultural Shows", "Live Music", "Traditional Dance", "Interactive Programs"]
    },
    {
      icon: "📸",
      title: "Documentation Services",
      description: "Professional photography and videography for corporate documentation and marketing purposes.",
      features: ["Event Photography", "Corporate Videos", "Live Streaming", "Social Media Content"]
    }
  ];

  const packages = [
    {
      name: "Corporate Essential",
      price: "₹3,00,000",
      attendees: "Up to 100 attendees",
      duration: "Half-day event",
      description: "Essential corporate event package for meetings, conferences, and small celebrations.",
      features: [
        "Venue coordination and booking",
        "Basic AV equipment setup",
        "Professional catering service",
        "Event coordination team",
        "Registration and guest management",
        "Basic decoration and branding",
        "Photography coverage",
        "Technical support during event"
      ],
      popular: false
    },
    {
      name: "Corporate Premium",
      price: "₹7,50,000",
      attendees: "Up to 300 attendees",
      duration: "Full-day event",
      description: "Comprehensive corporate event management with premium services and cultural elements.",
      features: [
        "All Corporate Essential services",
        "Premium venue selection",
        "Advanced AV and lighting setup",
        "Multi-cuisine catering options",
        "Cultural entertainment programs",
        "Professional event management",
        "Branding and marketing support",
        "VIP guest management",
        "Live streaming capabilities",
        "Post-event documentation"
      ],
      popular: true
    },
    {
      name: "Corporate Luxury",
      price: "₹15,00,000",
      attendees: "300+ attendees",
      duration: "Multi-day event",
      description: "Luxury corporate event experience with premium venues and exclusive services.",
      features: [
        "All Corporate Premium services",
        "Luxury venue exclusive booking",
        "Celebrity entertainment options",
        "Gourmet catering with chef service",
        "Premium accommodation arrangements",
        "Executive transportation service",
        "Personalized guest experiences",
        "International standard setup",
        "24/7 concierge services",
        "Multi-day event coordination",
        "Corporate retreat planning"
      ],
      popular: false
    }
  ];

  const planning_process = [
    {
      step: "01",
      title: "Requirement Analysis",
      description: "Understanding your corporate objectives, budget, and specific event requirements.",
      timeline: "Initial consultation"
    },
    {
      step: "02",
      title: "Proposal Development",
      description: "Creating detailed event proposals with venue options, services, and cost breakdown.",
      timeline: "1 week after briefing"
    },
    {
      step: "03",
      title: "Planning & Coordination",
      description: "Detailed planning with timeline creation, vendor selection, and logistics coordination.",
      timeline: "4-6 weeks before event"
    },
    {
      step: "04",
      title: "Pre-Event Setup",
      description: "Final preparations, venue setup, technical testing, and team briefings.",
      timeline: "1-2 days before event"
    },
    {
      step: "05",
      title: "Event Execution",
      description: "Professional on-site management ensuring flawless execution of your corporate event.",
      timeline: "Event day"
    },
    {
      step: "06",
      title: "Post-Event Support",
      description: "Post-event documentation, feedback collection, and follow-up services as required.",
      timeline: "After event completion"
    }
  ];

  const industries = [
    { name: "Technology", icon: "💻", description: "Tech launches, conferences, team builds" },
    { name: "Healthcare", icon: "🏥", description: "Medical conferences, award ceremonies" },
    { name: "Finance", icon: "💰", description: "Banking events, investment seminars" },
    { name: "Manufacturing", icon: "🏭", description: "Industrial celebrations, safety awards" },
    { name: "Education", icon: "🎓", description: "Academic conferences, graduations" },
    { name: "Hospitality", icon: "🏨", description: "Hotel openings, tourism events" }
  ];

  return (
    <div ref={ref} className="min-h-screen bg-gradient-to-b from-white to-secondary-background/30">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-5 bg-gradient-to-r from-secondary-background to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/hero-06.jpg"
            alt="Corporate events background"
            fill
            quality={90}
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-wider intro-animate-slideInUp ${isInView ? 'animate' : ''}`}>
            Corporate Event Planning
          </h1>
          
          <div className={`flex justify-center mb-6 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-200' : ''}`}>
            <DecorativeLine isInView={isInView} />
          </div>
          
          <p className={`font-montserrat text-secondary-paragraphs text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-400' : ''}`}>
            Elevate your corporate events with professional planning that combines business excellence with 
            Indian hospitality traditions. From conferences to celebrations, we create memorable corporate 
            experiences that strengthen business relationships and achieve your objectives.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center intro-animate-fadeInUp ${isInView ? 'animate animation-delay-600' : ''}`}>
            <WeddingButton asChild>
              <Link href="/contact">
                Plan Corporate Event
              </Link>
            </WeddingButton>
            <WeddingButton variant="wedding-light" asChild>
              <Link href="/gallery">
                View Corporate Events
              </Link>
            </WeddingButton>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-4 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-800' : ''}`}>
              Corporate Event Types
            </h2>
            <p className={`font-montserrat text-secondary-paragraphs text-lg max-w-3xl mx-auto intro-animate-fadeInUp ${isInView ? 'animate animation-delay-1000' : ''}`}>
              Professional event planning services for diverse corporate requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventTypes.map((event, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 intro-animate-fadeInUp ${isInView ? 'animate' : ''}`}
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-marcellus text-secondary-heading text-xl font-bold mb-3">
                    {event.name}
                  </h3>
                  <p className="font-montserrat text-secondary-paragraphs text-sm mb-4">
                    {event.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {event.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-secondary-accent rounded-full mr-2"></span>
                        <span className="font-montserrat text-xs text-secondary-paragraphs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 px-5 bg-gradient-to-b from-white to-secondary-background/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-4 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-1800' : ''}`}>
              Industries We Serve
            </h2>
            <p className={`font-montserrat text-secondary-paragraphs text-lg intro-animate-fadeInUp ${isInView ? 'animate animation-delay-2000' : ''}`}>
              Specialized corporate event planning across diverse industry sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 intro-animate-fadeInUp ${isInView ? 'animate' : ''}`}
                style={{ animationDelay: `${2.2 + index * 0.1}s` }}
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="font-marcellus text-secondary-heading text-lg font-bold mb-2">
                  {industry.name}
                </h3>
                <p className="font-montserrat text-secondary-paragraphs text-sm">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-4 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-2800' : ''}`}>
              Corporate Event Services
            </h2>
            <p className={`font-montserrat text-secondary-paragraphs text-lg max-w-3xl mx-auto intro-animate-fadeInUp ${isInView ? 'animate animation-delay-3000' : ''}`}>
              Comprehensive services to ensure professional and successful corporate events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-secondary-background/30 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 intro-animate-fadeInUp ${isInView ? 'animate' : ''}`}
                style={{ animationDelay: `${3.2 + index * 0.1}s` }}
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
      <section className="py-16 px-5 bg-gradient-to-b from-white to-secondary-background/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-4 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-3800' : ''}`}>
              Event Planning Process
            </h2>
            <p className={`font-montserrat text-secondary-paragraphs text-lg intro-animate-fadeInUp ${isInView ? 'animate animation-delay-4000' : ''}`}>
              Our systematic approach to creating successful corporate events
            </p>
          </div>

          <div className="space-y-8">
            {planning_process.map((step, index) => (
              <div
                key={index}
                className={`flex items-start gap-6 intro-animate-fadeInUp ${isInView ? 'animate' : ''}`}
                style={{ animationDelay: `${4.2 + index * 0.1}s` }}
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
      <section className="py-16 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-4 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-4800' : ''}`}>
              Corporate Event Packages
            </h2>
            <p className={`font-montserrat text-secondary-paragraphs text-lg max-w-3xl mx-auto intro-animate-fadeInUp ${isInView ? 'animate animation-delay-5000' : ''}`}>
              Professional event packages designed for different corporate requirements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white border-2 ${pkg.popular ? 'border-secondary-accent' : 'border-secondary-border/30'} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 intro-animate-fadeInUp ${isInView ? 'animate' : ''}`}
                style={{ animationDelay: `${5.2 + index * 0.2}s` }}
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
                    {pkg.attendees}
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
                      Select Package
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
          <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-6 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-5800' : ''}`}>
            Ready to Elevate Your Corporate Events?
          </h2>
          <p className={`font-montserrat text-secondary-paragraphs text-lg mb-8 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-6000' : ''}`}>
            Create professional corporate events that strengthen business relationships and achieve your 
            objectives. Let us bring Indian hospitality excellence to your corporate celebrations.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center intro-animate-fadeInUp ${isInView ? 'animate animation-delay-6200' : ''}`}>
            <WeddingButton asChild>
              <Link href="/contact">
                Plan Your Event
              </Link>
            </WeddingButton>
            <WeddingButton variant="wedding-light" asChild>
              <Link href="tel:+919876543210">
                Corporate Consultation
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
          .animation-delay-5800 { animation-delay: 5.8s; }
          .animation-delay-6000 { animation-delay: 6s; }
          .animation-delay-6200 { animation-delay: 6.2s; }
        }
      `}</style>
    </div>
  );
};

export default CorporateEventsPage;
