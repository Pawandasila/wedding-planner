'use client';
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import DecorativeLine from '../../../components/DecorativeLine';
import WeddingButton from '../../../components/WeddingButton';

const EventCoordinationPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const coordinationServices = [
    {
      icon: "⏰",
      title: "Day-of Coordination",
      description: "Complete event day management ensuring flawless execution of your wedding timeline.",
      features: ["Timeline Management", "Vendor Coordination", "Guest Assistance", "Emergency Handling"]
    },
    {
      icon: "📅",
      title: "Month-of Coordination",
      description: "Final month preparation and coordination to ensure everything is perfectly organized.",
      features: ["Final Vendor Confirmations", "Timeline Finalization", "Rehearsal Coordination", "Setup Management"]
    },
    {
      icon: "🎭",
      title: "Multi-Event Coordination",
      description: "Seamless coordination across multiple ceremonies including Haldi, Mehendi, and Sangeet.",
      features: ["Cross-Event Planning", "Venue Transitions", "Guest Flow Management", "Cultural Timing"]
    },
    {
      icon: "🏃‍♀️",
      title: "On-Site Management",
      description: "Professional on-ground coordination team managing all aspects of your celebration.",
      features: ["Setup Supervision", "Guest Relations", "Problem Resolution", "Vendor Management"]
    },
    {
      icon: "🎪",
      title: "Ceremony Coordination",
      description: "Specialized coordination for traditional Indian wedding ceremonies and rituals.",
      features: ["Ritual Timing", "Pandit Coordination", "Family Positioning", "Sacred Elements"]
    },
    {
      icon: "🎉",
      title: "Reception Management",
      description: "Complete reception coordination from guest arrival to grand finale celebrations.",
      features: ["Guest Reception", "Entertainment Timing", "Dinner Service", "Dance Floor Management"]
    }
  ];

  const packages = [
    {
      name: "Day-of Coordination",
      price: "₹75,000",
      duration: "12 hours coverage",
      description: "Essential coordination for couples who have planned everything but need professional execution.",
      features: [
        "Pre-wedding consultation (2 meetings)",
        "Timeline creation and finalization",
        "Vendor coordination on wedding day",
        "Setup supervision and management",
        "Guest assistance and direction",
        "Emergency coordination and problem-solving",
        "Professional coordination team (3 members)",
        "Post-event cleanup coordination"
      ],
      popular: false
    },
    {
      name: "Week-of Coordination",
      price: "₹1,25,000",
      duration: "7 days + event day",
      description: "Comprehensive final week preparation with complete day-of coordination services.",
      features: [
        "All Day-of Coordination services",
        "Final week vendor confirmations",
        "Rehearsal dinner coordination",
        "Guest communication management",
        "Final headcount and seating arrangements",
        "Vendor payment coordination",
        "Multiple venue coordination",
        "Extended team coverage (5 members)",
        "Photography timeline coordination"
      ],
      popular: true
    },
    {
      name: "Month-of Coordination",
      price: "₹2,00,000",
      duration: "30 days + event coverage",
      description: "Complete final month management ensuring every detail is perfectly coordinated.",
      features: [
        "All Week-of Coordination services",
        "30-day vendor management",
        "Budget tracking and payments",
        "Guest RSVP management",
        "Menu finalization and tastings",
        "Decoration setup planning",
        "Transportation coordination",
        "Accommodation arrangements",
        "Multi-event coordination (3-5 events)",
        "Dedicated coordination manager"
      ],
      popular: false
    }
  ];

  const process = [
    {
      step: "01",
      title: "Initial Assessment",
      description: "We review your existing plans, vendor contracts, and timeline to understand your coordination needs.",
      timeline: "2-4 weeks before"
    },
    {
      step: "02",
      title: "Timeline Development",
      description: "Creating detailed day-of timeline with all vendors, family, and ceremony requirements.",
      timeline: "1-2 weeks before"
    },
    {
      step: "03",
      title: "Vendor Coordination",
      description: "Final confirmations, delivery schedules, and setup requirements with all service providers.",
      timeline: "1 week before"
    },
    {
      step: "04",
      title: "Event Execution",
      description: "Professional on-site management ensuring smooth execution of every planned detail.",
      timeline: "Event day"
    }
  ];

  return (
    <div ref={ref} className="min-h-screen bg-gradient-to-b from-white to-secondary-background/30">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-5 bg-gradient-to-r from-secondary-background to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/hero-07.jpg"
            alt="Event coordination background"
            fill
            quality={90}
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-wider intro-animate-slideInUp ${isInView ? 'animate' : ''}`}>
            Event Coordination Services
          </h1>
          
          <div className={`flex justify-center mb-6 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-200' : ''}`}>
            <DecorativeLine isInView={isInView} />
          </div>
          
          <p className={`font-montserrat text-secondary-paragraphs text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-400' : ''}`}>
            Professional event coordination ensuring flawless execution of your Indian wedding celebration. 
            We handle all the logistics so you can focus on enjoying your special moments with family and loved ones.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center intro-animate-fadeInUp ${isInView ? 'animate animation-delay-600' : ''}`}>
            <WeddingButton asChild>
              <Link href="/contact">
                Get Coordination Quote
              </Link>
            </WeddingButton>
            <WeddingButton variant="wedding-light" asChild>
              <Link href="/gallery">
                View Coordinated Events
              </Link>
            </WeddingButton>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-4 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-800' : ''}`}>
              Coordination Services
            </h2>
            <p className={`font-montserrat text-secondary-paragraphs text-lg max-w-3xl mx-auto intro-animate-fadeInUp ${isInView ? 'animate animation-delay-1000' : ''}`}>
              Professional coordination services for every aspect of your Indian wedding celebration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coordinationServices.map((service, index) => (
              <div
                key={index}
                className={`bg-secondary-background/30 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 intro-animate-fadeInUp ${isInView ? 'animate' : ''}`}
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
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

      {/* Process Timeline */}
      <section className="py-16 px-5 bg-gradient-to-b from-white to-secondary-background/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-4 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-1800' : ''}`}>
              Coordination Process
            </h2>
            <p className={`font-montserrat text-secondary-paragraphs text-lg intro-animate-fadeInUp ${isInView ? 'animate animation-delay-2000' : ''}`}>
              Our systematic approach to flawless event coordination
            </p>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <div
                key={index}
                className={`flex items-start gap-6 intro-animate-fadeInUp ${isInView ? 'animate' : ''}`}
                style={{ animationDelay: `${2.2 + index * 0.2}s` }}
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
            <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-4 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-3000' : ''}`}>
              Coordination Packages
            </h2>
            <p className={`font-montserrat text-secondary-paragraphs text-lg max-w-3xl mx-auto intro-animate-fadeInUp ${isInView ? 'animate animation-delay-3200' : ''}`}>
              Choose the coordination level that matches your needs and timeline
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white border-2 ${pkg.popular ? 'border-secondary-accent' : 'border-secondary-border/30'} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 intro-animate-fadeInUp ${isInView ? 'animate' : ''}`}
                style={{ animationDelay: `${3.4 + index * 0.2}s` }}
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
                  <div className="font-marcellus text-3xl text-secondary-accent font-bold mb-1">
                    {pkg.price}
                  </div>
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
          <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-6 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-4000' : ''}`}>
            Ready for Stress-Free Coordination?
          </h2>
          <p className={`font-montserrat text-secondary-paragraphs text-lg mb-8 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-4200' : ''}`}>
            Let our experienced coordination team handle the logistics while you enjoy every precious moment 
            of your wedding celebration with family and friends.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center intro-animate-fadeInUp ${isInView ? 'animate animation-delay-4400' : ''}`}>
            <WeddingButton asChild>
              <Link href="/contact">
                Book Coordination
              </Link>
            </WeddingButton>
            <WeddingButton variant="wedding-light" asChild>
              <Link href="tel:+919876543210">
                Call for Consultation
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
          .animation-delay-3000 { animation-delay: 3s; }
          .animation-delay-3200 { animation-delay: 3.2s; }
          .animation-delay-3400 { animation-delay: 3.4s; }
          .animation-delay-4000 { animation-delay: 4s; }
          .animation-delay-4200 { animation-delay: 4.2s; }
          .animation-delay-4400 { animation-delay: 4.4s; }
        }
      `}</style>
    </div>
  );
};

export default EventCoordinationPage;
