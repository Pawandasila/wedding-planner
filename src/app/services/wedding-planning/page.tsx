'use client';
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import DecorativeLine from '../../../components/DecorativeLine';
import WeddingButton from '../../../components/WeddingButton';

const WeddingPlanningPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const planningServices = [
    {
      icon: "📋",
      title: "Complete Wedding Planning",
      description: "Full-service planning from engagement to reception with timeline management and vendor coordination.",
      features: ["Timeline Creation", "Vendor Selection", "Budget Management", "Day-of Coordination"]
    },
    {
      icon: "🏛️",
      title: "Venue Selection & Booking",
      description: "Expert venue scouting and negotiation for the perfect setting for your celebration.",
      features: ["Location Scouting", "Contract Negotiation", "Site Visits", "Backup Options"]
    },
    {
      icon: "🎨",
      title: "Design & Décor Planning",
      description: "Traditional and contemporary design concepts with authentic Indian wedding aesthetics.",
      features: ["Theme Development", "Color Schemes", "Mandap Design", "Floral Arrangements"]
    },
    {
      icon: "👰",
      title: "Cultural Ceremony Coordination",
      description: "Expert guidance on traditional rituals and customs for authentic Indian weddings.",
      features: ["Ritual Planning", "Pandit Coordination", "Custom Integration", "Family Guidance"]
    },
    {
      icon: "🍽️",
      title: "Catering & Menu Planning",
      description: "Authentic Indian cuisine planning with dietary accommodations and service coordination.",
      features: ["Menu Design", "Tasting Sessions", "Service Style", "Special Diets"]
    },
    {
      icon: "🎵",
      title: "Entertainment Coordination",
      description: "Traditional and modern entertainment planning including music, dance, and performances.",
      features: ["DJ/Band Selection", "Sound Systems", "Performance Acts", "Cultural Programs"]
    }
  ];

  const planningProcess = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We start with an in-depth consultation to understand your vision, preferences, and cultural requirements.",
      duration: "2-3 hours",
      image: "/hero-01.jpg"
    },
    {
      step: "02", 
      title: "Concept Development",
      description: "Creating a comprehensive plan including themes, color schemes, and cultural elements for your celebration.",
      duration: "1-2 weeks",
      image: "/hero-02.jpg"
    },
    {
      step: "03",
      title: "Vendor Selection",
      description: "Curating and coordinating with the best vendors who align with your vision and budget.",
      duration: "2-4 weeks",
      image: "/hero-03.jpg"
    },
    {
      step: "04",
      title: "Timeline Creation",
      description: "Detailed timeline planning for all events including pre-wedding ceremonies and main celebration.",
      duration: "1-2 weeks",
      image: "/hero-04.jpg"
    },
    {
      step: "05",
      title: "Final Coordination",
      description: "Complete day-of coordination ensuring every detail is executed perfectly according to plan.",
      duration: "Event days",
      image: "/hero-05.jpg"
    }
  ];

  const packages = [
    {
      name: "Essential Planning",
      price: "₹2,50,000",
      duration: "6 months planning",
      description: "Perfect for couples who want professional guidance with basic coordination services.",
      features: [
        "Initial consultation & planning session",
        "Vendor referrals and coordination",
        "Timeline development",
        "Monthly planning meetings",
        "Day-of coordination (1 event)",
        "Emergency coordination hotline"
      ],
      popular: false
    },
    {
      name: "Complete Planning",
      price: "₹5,00,000",
      duration: "8-10 months planning", 
      description: "Comprehensive planning for couples who want full-service coordination and design support.",
      features: [
        "All Essential Planning services",
        "Venue scouting and negotiation",
        "Design concept and theme development",
        "Vendor management and contracts",
        "Budget tracking and management",
        "Rehearsal coordination",
        "Day-of coordination (up to 3 events)",
        "Guest coordination assistance",
        "Cultural ceremony guidance"
      ],
      popular: true
    },
    {
      name: "Luxury Planning",
      price: "₹8,50,000",
      duration: "12 months planning",
      description: "Ultimate luxury experience with personalized service and exclusive vendor access.",
      features: [
        "All Complete Planning services",
        "Dedicated planning assistant",
        "Exclusive vendor network access",
        "Custom design and décor planning",
        "Destination wedding coordination",
        "Guest accommodation management",
        "Transportation coordination",
        "Day-of coordination (unlimited events)",
        "Post-wedding cleanup coordination",
        "Honeymoon planning assistance"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Priya & Arjun Sharma",
      location: "Mumbai",
      text: "Pawan and his team made our dream wedding come true. The attention to cultural details and seamless coordination was exceptional.",
      rating: 5,
      image: "/gallery-01.jpg"
    },
    {
      name: "Kavya & Rohit Patel", 
      location: "Delhi",
      text: "From our engagement to reception, every ceremony was planned perfectly. The team understood our vision and made it reality.",
      rating: 5,
      image: "/gallery-02.jpg"
    },
    {
      name: "Anaya & Vikram Singh",
      location: "Jaipur",
      text: "Planning a destination wedding seemed overwhelming until we found Pawan Dasila. Everything was handled beautifully.",
      rating: 5,
      image: "/gallery-03.jpg"
    }
  ];

  return (
    <div ref={ref} className="min-h-screen bg-gradient-to-b from-white to-secondary-background/30">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-5 bg-gradient-to-r from-secondary-background to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/hero-08.jpg"
            alt="Wedding planning background"
            fill
            quality={90}
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-wider intro-animate-slideInUp ${isInView ? 'animate' : ''}`}>
            Wedding Planning Services
          </h1>
          
          <div className={`flex justify-center mb-6 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-200' : ''}`}>
            <DecorativeLine isInView={isInView} />
          </div>
          
          <p className={`font-montserrat text-secondary-paragraphs text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-400' : ''}`}>
            From intimate ceremonies to grand celebrations, we specialize in creating authentic Indian weddings 
            that honor tradition while embracing modern elegance. Let us bring your dream wedding to life with 
            meticulous planning and flawless execution.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center intro-animate-fadeInUp ${isInView ? 'animate animation-delay-600' : ''}`}>
            <WeddingButton asChild>
              <Link href="/contact">
                Start Planning
              </Link>
            </WeddingButton>
            <WeddingButton variant="wedding-light" asChild>
              <Link href="/gallery">
                View Our Work
              </Link>
            </WeddingButton>
          </div>
        </div>
      </section>

      {/* Planning Services Section */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-4 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-800' : ''}`}>
              Our Planning Services
            </h2>
            <p className={`font-montserrat text-secondary-paragraphs text-lg max-w-3xl mx-auto intro-animate-fadeInUp ${isInView ? 'animate animation-delay-1000' : ''}`}>
              Comprehensive planning services tailored to create your perfect Indian wedding celebration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {planningServices.map((service, index) => (
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

      {/* Planning Process Section */}
      <section className="py-16 px-5 bg-gradient-to-b from-white to-secondary-background/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-4 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-1800' : ''}`}>
              Our Planning Process
            </h2>
            <p className={`font-montserrat text-secondary-paragraphs text-lg max-w-3xl mx-auto intro-animate-fadeInUp ${isInView ? 'animate animation-delay-2000' : ''}`}>
              A systematic approach to planning your perfect wedding celebration
            </p>
          </div>

          <div className="space-y-12">
            {planningProcess.map((process, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12 intro-animate-fadeInUp ${isInView ? 'animate' : ''}`}
                style={{ animationDelay: `${2.2 + index * 0.2}s` }}
              >
                <div className="flex-1 lg:max-w-md">
                  <Image
                    src={process.image}
                    alt={process.title}
                    width={500}
                    height={400}
                    className="rounded-2xl shadow-lg object-cover w-full h-64 lg:h-80"
                  />
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-4">
                    <span className="bg-secondary-accent text-white font-marcellus font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      {process.step}
                    </span>
                    <span className="font-montserrat text-secondary-accent text-sm font-medium uppercase tracking-wider">
                      {process.duration}
                    </span>
                  </div>
                  <h3 className="font-marcellus text-secondary-heading text-2xl lg:text-3xl font-bold mb-4">
                    {process.title}
                  </h3>
                  <p className="font-montserrat text-secondary-paragraphs text-lg leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-4 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-3000' : ''}`}>
              Planning Packages
            </h2>
            <p className={`font-montserrat text-secondary-paragraphs text-lg max-w-3xl mx-auto intro-animate-fadeInUp ${isInView ? 'animate animation-delay-3200' : ''}`}>
              Choose the perfect planning package that fits your needs and budget
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
                      Choose Package
                    </Link>
                  </WeddingButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-5 bg-gradient-to-b from-white to-secondary-background/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-4 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-4000' : ''}`}>
              What Our Couples Say
            </h2>
            <p className={`font-montserrat text-secondary-paragraphs text-lg intro-animate-fadeInUp ${isInView ? 'animate animation-delay-4200' : ''}`}>
              Real stories from couples whose dream weddings we brought to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 intro-animate-fadeInUp ${isInView ? 'animate' : ''}`}
                style={{ animationDelay: `${4.4 + index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-marcellus text-secondary-heading font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="font-montserrat text-secondary-paragraphs text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-secondary-accent fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                
                <p className="font-montserrat text-secondary-paragraphs italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-5 bg-secondary-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-6 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-5000' : ''}`}>
            Ready to Start Planning?
          </h2>
          <p className={`font-montserrat text-secondary-paragraphs text-lg mb-8 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-5200' : ''}`}>
            Let&rsquo;s create a wedding celebration that perfectly reflects your love story and cultural heritage. 
            Contact us today for a personalized consultation.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center intro-animate-fadeInUp ${isInView ? 'animate animation-delay-5400' : ''}`}>
            <WeddingButton asChild>
              <Link href="/contact">
                Schedule Consultation
              </Link>
            </WeddingButton>
            <WeddingButton variant="wedding-light" asChild>
              <Link href="tel:+919876543210">
                Call Us Now
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
          .animation-delay-5000 { animation-delay: 5s; }
          .animation-delay-5200 { animation-delay: 5.2s; }
          .animation-delay-5400 { animation-delay: 5.4s; }
        }
      `}</style>
    </div>
  );
};

export default WeddingPlanningPage;
