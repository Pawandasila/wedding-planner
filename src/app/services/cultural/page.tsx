'use client';
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import DecorativeLine from '../../../components/DecorativeLine';
import WeddingButton from '../../../components/WeddingButton';

const CulturalCeremoniesPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const ceremonies = [
    {
      name: "Punjabi Wedding Traditions",
      region: "Punjab, North India",
      image: "/gallery-01.jpg",
      description: "Vibrant Punjabi ceremonies with Bhangra, colorful turbans, and traditional rituals.",
      rituals: ["Chunni Chadana", "Jaggo Ceremony", "Giddha & Bhangra", "Milni Ritual"]
    },
    {
      name: "South Indian Ceremonies",
      region: "Tamil Nadu, Karnataka, Andhra",
      image: "/gallery-02.jpg",
      description: "Sacred South Indian wedding rituals with temple traditions and classical elements.",
      rituals: ["Kashi Yatra", "Jai Mala", "Saptapadi", "Kanyadaan"]
    },
    {
      name: "Bengali Wedding Rituals",
      region: "West Bengal, Bangladesh",
      image: "/gallery-03.jpg",
      description: "Elegant Bengali ceremonies with fish, rice, and traditional red & white themes.",
      rituals: ["Ashirbaad", "Gaye Holud", "Saat Paak", "Sindoor Daan"]
    },
    {
      name: "Gujarati Celebrations",
      region: "Gujarat, Mumbai",
      image: "/gallery-04.jpg",
      description: "Joyous Gujarati weddings with Garba, colorful attire, and sweet traditions.",
      rituals: ["Pithi Ceremony", "Garba Night", "Varmala", "Saath Phera"]
    },
    {
      name: "Rajasthani Royal Weddings",
      region: "Rajasthan",
      image: "/gallery-05.jpg",
      description: "Majestic Rajasthani ceremonies with royal traditions and desert celebrations.",
      rituals: ["Tilak Ceremony", "Baraat Procession", "Royal Varmala", "Heritage Rituals"]
    },
    {
      name: "Marathi Traditions",
      region: "Maharashtra",
      image: "/gallery-06.jpg",
      description: "Traditional Marathi weddings with classical music and authentic rituals.",
      rituals: ["Kelvan Ceremony", "Antarpat", "Sakharpuda", "Mangalashtak"]
    }
  ];

  const services = [
    {
      icon: "🕉️",
      title: "Ritual Coordination",
      description: "Expert guidance on traditional rituals and ceremonies specific to your cultural background.",
      features: ["Ritual Planning", "Sacred Timing", "Traditional Elements", "Family Guidance"]
    },
    {
      icon: "👨‍💼",
      title: "Pandit & Priest Services",
      description: "Verified and experienced pandits who specialize in your regional wedding traditions.",
      features: ["Qualified Pandits", "Language Preferences", "Regional Expertise", "Ritual Authenticity"]
    },
    {
      icon: "🎨",
      title: "Traditional Décor",
      description: "Authentic décor elements reflecting your cultural heritage and family traditions.",
      features: ["Cultural Themes", "Traditional Colors", "Sacred Symbols", "Heritage Elements"]
    },
    {
      icon: "👗",
      title: "Attire Consultation",
      description: "Guidance on traditional wedding attire and accessories for bride, groom, and families.",
      features: ["Traditional Outfits", "Regional Styles", "Jewelry Coordination", "Family Attire"]
    },
    {
      icon: "🎵",
      title: "Cultural Entertainment",
      description: "Traditional music, dance, and entertainment that celebrates your cultural heritage.",
      features: ["Folk Performances", "Classical Music", "Traditional Dance", "Cultural Programs"]
    },
    {
      icon: "🍽️",
      title: "Regional Cuisine",
      description: "Authentic regional cuisine and traditional sweets that honor your cultural background.",
      features: ["Regional Specialties", "Traditional Recipes", "Sacred Foods", "Cultural Presentation"]
    }
  ];

  const packages = [
    {
      name: "Cultural Guidance",
      price: "₹1,50,000",
      duration: "Ceremony consultation",
      description: "Basic cultural guidance and ritual coordination for authentic wedding ceremonies.",
      features: [
        "Cultural consultation sessions",
        "Ritual planning and guidance",
        "Pandit recommendations",
        "Traditional décor suggestions",
        "Ceremony timeline creation",
        "Family ritual guidance",
        "Basic cultural elements",
        "Regional tradition insights"
      ],
      popular: false
    },
    {
      name: "Complete Cultural Package",
      price: "₹3,50,000",
      duration: "Full ceremony coordination",
      description: "Comprehensive cultural ceremony planning with authentic traditions and expert coordination.",
      features: [
        "All Cultural Guidance services",
        "Experienced pandit coordination",
        "Traditional décor planning",
        "Cultural attire consultation",
        "Regional entertainment coordination",
        "Authentic cuisine planning",
        "Sacred element procurement",
        "Multi-ceremony coordination",
        "Cultural photography guidance",
        "Traditional music arrangement"
      ],
      popular: true
    },
    {
      name: "Heritage Celebration",
      price: "₹6,00,000",
      duration: "Multi-day cultural events",
      description: "Luxury cultural celebration with premium traditional elements and heritage experiences.",
      features: [
        "All Complete Cultural services",
        "Heritage venue coordination",
        "Premium pandit services",
        "Luxury traditional décor",
        "Designer cultural attire",
        "Celebrity cultural performers",
        "Royal cuisine presentation",
        "Cultural documentation",
        "Heritage photography/videography",
        "Cultural experience curation",
        "Traditional craft demonstrations"
      ],
      popular: false
    }
  ];

  const cultural_process = [
    {
      step: "01",
      title: "Cultural Assessment",
      description: "Understanding your family&rsquo;s regional background, traditions, and specific cultural requirements.",
      timeline: "Initial consultation"
    },
    {
      step: "02",
      title: "Tradition Research",
      description: "Researching authentic rituals, customs, and traditions specific to your cultural heritage.",
      timeline: "2-3 weeks planning"
    },
    {
      step: "03",
      title: "Ritual Planning",
      description: "Creating detailed ceremony plans with proper ritual sequences and cultural elements.",
      timeline: "1 month before"
    },
    {
      step: "04",
      title: "Cultural Coordination",
      description: "Coordinating with pandits, cultural performers, and traditional element providers.",
      timeline: "2 weeks before"
    },
    {
      step: "05",
      title: "Ceremony Execution",
      description: "Professional coordination ensuring authentic execution of all cultural ceremonies.",
      timeline: "Wedding days"
    }
  ];

  return (
    <div ref={ref} className="min-h-screen bg-gradient-to-b from-white to-secondary-background/30">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-5 bg-gradient-to-r from-secondary-background to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/hero-03.jpg"
            alt="Cultural ceremonies background"
            fill
            quality={90}
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-wider intro-animate-slideInUp ${isInView ? 'animate' : ''}`}>
            Cultural Ceremony Services
          </h1>
          
          <div className={`flex justify-center mb-6 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-200' : ''}`}>
            <DecorativeLine isInView={isInView} />
          </div>
          
          <p className={`font-montserrat text-secondary-paragraphs text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-400' : ''}`}>
            Honor your heritage with authentic Indian cultural ceremonies. We specialize in traditional rituals 
            from across India, ensuring your wedding celebration reflects your family&rsquo;s cultural richness and 
            maintains the sanctity of ancient traditions.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center intro-animate-fadeInUp ${isInView ? 'animate animation-delay-600' : ''}`}>
            <WeddingButton asChild>
              <Link href="/contact">
                Plan Cultural Ceremony
              </Link>
            </WeddingButton>
            <WeddingButton variant="wedding-light" asChild>
              <Link href="/gallery">
                View Cultural Weddings
              </Link>
            </WeddingButton>
          </div>
        </div>
      </section>

      {/* Cultural Traditions Showcase */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-4 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-800' : ''}`}>
              Regional Wedding Traditions
            </h2>
            <p className={`font-montserrat text-secondary-paragraphs text-lg max-w-3xl mx-auto intro-animate-fadeInUp ${isInView ? 'animate animation-delay-1000' : ''}`}>
              Celebrating the rich diversity of Indian wedding traditions across different regions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ceremonies.map((ceremony, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 intro-animate-fadeInUp ${isInView ? 'animate' : ''}`}
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={ceremony.image}
                    alt={ceremony.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-marcellus text-secondary-heading text-xl font-bold mb-2">
                    {ceremony.name}
                  </h3>
                  <p className="font-montserrat text-secondary-accent text-sm mb-3 font-medium">
                    {ceremony.region}
                  </p>
                  <p className="font-montserrat text-secondary-paragraphs text-sm mb-4">
                    {ceremony.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-montserrat text-secondary-heading text-sm font-semibold mb-2">Key Rituals:</h4>
                    {ceremony.rituals.map((ritual, idx) => (
                      <div key={idx} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-secondary-accent rounded-full mr-2"></span>
                        <span className="font-montserrat text-xs text-secondary-paragraphs">{ritual}</span>
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
              Cultural Ceremony Services
            </h2>
            <p className={`font-montserrat text-secondary-paragraphs text-lg max-w-3xl mx-auto intro-animate-fadeInUp ${isInView ? 'animate animation-delay-2000' : ''}`}>
              Comprehensive services to ensure authentic and meaningful cultural celebrations
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

      {/* Cultural Process */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-4 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-2800' : ''}`}>
              Cultural Planning Process
            </h2>
            <p className={`font-montserrat text-secondary-paragraphs text-lg intro-animate-fadeInUp ${isInView ? 'animate animation-delay-3000' : ''}`}>
              Our systematic approach to honoring your cultural heritage
            </p>
          </div>

          <div className="space-y-8">
            {cultural_process.map((step, index) => (
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
            <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-4 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-3700' : ''}`}>
              Cultural Ceremony Packages
            </h2>
            <p className={`font-montserrat text-secondary-paragraphs text-lg max-w-3xl mx-auto intro-animate-fadeInUp ${isInView ? 'animate animation-delay-3900' : ''}`}>
              Choose the perfect package to honor your cultural traditions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white border-2 ${pkg.popular ? 'border-secondary-accent' : 'border-secondary-border/30'} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 intro-animate-fadeInUp ${isInView ? 'animate' : ''}`}
                style={{ animationDelay: `${4.1 + index * 0.2}s` }}
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
          <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-6 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-4700' : ''}`}>
            Honor Your Heritage
          </h2>
          <p className={`font-montserrat text-secondary-paragraphs text-lg mb-8 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-4900' : ''}`}>
            Let us help you create an authentic cultural celebration that honors your traditions and creates 
            meaningful memories for generations to come. Connect with your heritage through sacred ceremonies.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center intro-animate-fadeInUp ${isInView ? 'animate animation-delay-5100' : ''}`}>
            <WeddingButton asChild>
              <Link href="/contact">
                Plan Cultural Wedding
              </Link>
            </WeddingButton>
            <WeddingButton variant="wedding-light" asChild>
              <Link href="tel:+919876543210">
                Cultural Consultation
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
          .animation-delay-3700 { animation-delay: 3.7s; }
          .animation-delay-3900 { animation-delay: 3.9s; }
          .animation-delay-4100 { animation-delay: 4.1s; }
          .animation-delay-4700 { animation-delay: 4.7s; }
          .animation-delay-4900 { animation-delay: 4.9s; }
          .animation-delay-5100 { animation-delay: 5.1s; }
        }
      `}</style>
    </div>
  );
};

export default CulturalCeremoniesPage;
