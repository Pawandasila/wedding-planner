'use client';
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import DecorativeLine from '../../../components/DecorativeLine';
import WeddingButton from '../../../components/WeddingButton';

const ConsultationPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const consultationTypes = [
    {
      name: "Wedding Planning Consultation",
      duration: "2 hours",
      image: "/gallery-01.jpg",
      description: "Comprehensive consultation covering all aspects of Indian wedding planning from traditions to modern elements.",
      topics: ["Cultural Traditions", "Budget Planning", "Vendor Selection", "Timeline Creation"]
    },
    {
      name: "Venue Selection Guidance",
      duration: "3 hours + site visits",
      image: "/gallery-02.jpg",
      description: "Expert guidance on selecting the perfect venue for your celebration with site visits and negotiations.",
      topics: ["Venue Scouting", "Contract Reviews", "Capacity Planning", "Cost Analysis"]
    },
    {
      name: "Cultural Ceremony Guidance",
      duration: "1.5 hours",
      image: "/gallery-03.jpg",
      description: "Specialized consultation on regional Indian wedding traditions, rituals, and cultural requirements.",
      topics: ["Regional Rituals", "Traditional Elements", "Pandit Selection", "Sacred Timing"]
    },
    {
      name: "Design & Décor Planning",
      duration: "2 hours",
      image: "/gallery-04.jpg",
      description: "Creative consultation on wedding themes, color schemes, and décor concepts for Indian celebrations.",
      topics: ["Theme Development", "Color Palettes", "Décor Concepts", "Floral Design"]
    },
    {
      name: "Budget & Cost Planning",
      duration: "1 hour",
      image: "/gallery-05.jpg",
      description: "Detailed consultation on wedding budget planning, cost allocation, and financial management strategies.",
      topics: ["Budget Breakdown", "Cost Priorities", "Savings Tips", "Payment Planning"]
    },
    {
      name: "Day-of Coordination Brief",
      duration: "1 hour",
      image: "/gallery-06.jpg",
      description: "Pre-wedding consultation to finalize day-of coordination details and address any last-minute concerns.",
      topics: ["Final Timeline", "Contact Lists", "Emergency Plans", "Coordination Details"]
    }
  ];

  const benefits = [
    {
      icon: "🎯",
      title: "Expert Guidance",
      description: "Professional advice from experienced Indian wedding planning specialists.",
      details: ["10+ years experience", "Cultural expertise", "Industry insights", "Best practices"]
    },
    {
      icon: "💰",
      title: "Cost Savings",
      description: "Smart planning strategies that help you save money while achieving your dream wedding.",
      details: ["Budget optimization", "Vendor negotiations", "Priority planning", "Cost-effective solutions"]
    },
    {
      icon: "⏰",
      title: "Time Efficiency",
      description: "Streamlined planning process that saves you time and reduces wedding planning stress.",
      details: ["Efficient planning", "Quick decisions", "Organized approach", "Time-saving tips"]
    },
    {
      icon: "🎨",
      title: "Creative Vision",
      description: "Innovative ideas and creative solutions that make your wedding unique and memorable.",
      details: ["Design concepts", "Theme development", "Creative solutions", "Personalization"]
    },
    {
      icon: "📋",
      title: "Comprehensive Planning",
      description: "Detailed planning covering all aspects of Indian weddings from traditions to logistics.",
      details: ["Complete checklists", "Detailed timelines", "Vendor recommendations", "Cultural guidance"]
    },
    {
      icon: "🤝",
      title: "Ongoing Support",
      description: "Continued support and guidance throughout your wedding planning journey.",
      details: ["Email support", "Phone consultations", "Planning updates", "Problem solving"]
    }
  ];

  const packages = [
    {
      name: "Single Consultation",
      price: "₹15,000",
      duration: "2 hours session",
      description: "One-time consultation session focusing on your specific wedding planning needs and questions.",
      features: [
        "2-hour consultation session",
        "Personalized planning guidance",
        "Cultural tradition insights",
        "Budget planning assistance",
        "Vendor recommendation list",
        "Basic timeline template",
        "Follow-up email summary",
        "Planning checklist"
      ],
      popular: false
    },
    {
      name: "Planning Package",
      price: "₹45,000",
      duration: "3 sessions + support",
      description: "Comprehensive consultation package with multiple sessions covering all wedding planning aspects.",
      features: [
        "3 consultation sessions (6 hours total)",
        "Detailed wedding planning roadmap",
        "Comprehensive budget breakdown",
        "Vendor vetting and recommendations",
        "Cultural ceremony planning",
        "Design and décor guidance",
        "Timeline development",
        "30-day email support",
        "Phone consultation access",
        "Planning document templates"
      ],
      popular: true
    },
    {
      name: "VIP Consultation",
      price: "₹85,000",
      duration: "Unlimited consultations",
      description: "Premium consultation service with unlimited access to planning experts and personalized support.",
      features: [
        "Unlimited consultation sessions",
        "Priority scheduling and support",
        "Venue selection assistance with site visits",
        "Vendor meeting accompaniment",
        "Negotiation support and guidance",
        "Custom planning documentation",
        "Cultural expert consultations",
        "Design concept development",
        "90-day comprehensive support",
        "Emergency consultation hotline",
        "Personalized planning coordinator"
      ],
      popular: false
    }
  ];

  const consultation_process = [
    {
      step: "01",
      title: "Initial Assessment",
      description: "Understanding your vision, requirements, cultural background, and specific consultation needs.",
      timeline: "Before consultation"
    },
    {
      step: "02",
      title: "Consultation Booking",
      description: "Scheduling your consultation session at a convenient time with preparation materials provided.",
      timeline: "Session scheduling"
    },
    {
      step: "03",
      title: "Expert Consultation",
      description: "Detailed consultation session with our experts covering all your wedding planning questions.",
      timeline: "Consultation session"
    },
    {
      step: "04",
      title: "Action Plan Development",
      description: "Creating a personalized action plan with recommendations, timelines, and next steps.",
      timeline: "During consultation"
    },
    {
      step: "05",
      title: "Follow-up Support",
      description: "Providing follow-up materials, documentation, and continued support as per your package.",
      timeline: "Post-consultation"
    }
  ];

  const faqs = [
    {
      question: "What should I prepare for my consultation?",
      answer: "Bring your initial ideas, budget range, preferred dates, guest count estimates, and any cultural requirements. We'll provide a preparation checklist upon booking."
    },
    {
      question: "Can consultations be conducted online?",
      answer: "Yes, we offer both in-person and virtual consultations to accommodate your preferences and location convenience."
    },
    {
      question: "Do you provide vendor contacts during consultation?",
      answer: "Absolutely! We provide vetted vendor recommendations based on your requirements, budget, and style preferences."
    },
    {
      question: "How far in advance should I book a consultation?",
      answer: "We recommend booking consultations 12-18 months before your wedding date, but we can provide valuable guidance at any planning stage."
    },
    {
      question: "What if I need additional consultations later?",
      answer: "You can always book additional sessions or upgrade to a comprehensive package. We're here to support you throughout your planning journey."
    }
  ];

  return (
    <div ref={ref} className="min-h-screen bg-gradient-to-b from-white to-secondary-background/30">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-5 bg-gradient-to-r from-secondary-background to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/hero-04.jpg"
            alt="Wedding consultation background"
            fill
            quality={90}
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-wider intro-animate-slideInUp ${isInView ? 'animate' : ''}`}>
            Wedding Planning Consultation
          </h1>
          
          <div className={`flex justify-center mb-6 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-200' : ''}`}>
            <DecorativeLine isInView={isInView} />
          </div>
          
          <p className={`font-montserrat text-secondary-paragraphs text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-400' : ''}`}>
            Get expert guidance for your Indian wedding planning journey. Our experienced consultants provide 
            personalized advice on traditions, budgets, vendors, and logistics to help you create the perfect 
            celebration that honors your heritage and exceeds your dreams.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center intro-animate-fadeInUp ${isInView ? 'animate animation-delay-600' : ''}`}>
            <WeddingButton asChild>
              <Link href="/contact">
                Book Consultation
              </Link>
            </WeddingButton>
            <WeddingButton variant="wedding-light" asChild>
              <Link href="tel:+919876543210">
                Speak to Expert
              </Link>
            </WeddingButton>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-4 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-800' : ''}`}>
              Consultation Services
            </h2>
            <p className={`font-montserrat text-secondary-paragraphs text-lg max-w-3xl mx-auto intro-animate-fadeInUp ${isInView ? 'animate animation-delay-1000' : ''}`}>
              Specialized consultation services for every aspect of your Indian wedding planning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultationTypes.map((consultation, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 intro-animate-fadeInUp ${isInView ? 'animate' : ''}`}
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={consultation.image}
                    alt={consultation.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-marcellus text-secondary-heading text-lg font-bold">
                      {consultation.name}
                    </h3>
                    <span className="font-montserrat text-secondary-accent text-xs font-medium bg-secondary-accent/10 px-2 py-1 rounded">
                      {consultation.duration}
                    </span>
                  </div>
                  <p className="font-montserrat text-secondary-paragraphs text-sm mb-4">
                    {consultation.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {consultation.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-secondary-accent rounded-full mr-2"></span>
                        <span className="font-montserrat text-xs text-secondary-paragraphs">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-5 bg-gradient-to-b from-white to-secondary-background/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-4 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-1800' : ''}`}>
              Consultation Benefits
            </h2>
            <p className={`font-montserrat text-secondary-paragraphs text-lg max-w-3xl mx-auto intro-animate-fadeInUp ${isInView ? 'animate animation-delay-2000' : ''}`}>
              Why choose professional wedding planning consultation for your Indian celebration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 intro-animate-fadeInUp ${isInView ? 'animate' : ''}`}
                style={{ animationDelay: `${2.2 + index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 text-center">{benefit.icon}</div>
                <h3 className="font-marcellus text-secondary-heading text-xl font-semibold mb-3 text-center">
                  {benefit.title}
                </h3>
                <p className="font-montserrat text-secondary-paragraphs mb-4 text-center">
                  {benefit.description}
                </p>
                <ul className="space-y-2">
                  {benefit.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center font-montserrat text-sm text-secondary-paragraphs">
                      <span className="w-2 h-2 bg-secondary-accent rounded-full mr-3 flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-4 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-2800' : ''}`}>
              Consultation Packages
            </h2>
            <p className={`font-montserrat text-secondary-paragraphs text-lg max-w-3xl mx-auto intro-animate-fadeInUp ${isInView ? 'animate animation-delay-3000' : ''}`}>
              Choose the consultation package that best fits your planning needs and timeline
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white border-2 ${pkg.popular ? 'border-secondary-accent' : 'border-secondary-border/30'} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 intro-animate-fadeInUp ${isInView ? 'animate' : ''}`}
                style={{ animationDelay: `${3.2 + index * 0.2}s` }}
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
                      Book Now
                    </Link>
                  </WeddingButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-5 bg-gradient-to-b from-white to-secondary-background/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-4 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-3800' : ''}`}>
              Consultation Process
            </h2>
            <p className={`font-montserrat text-secondary-paragraphs text-lg intro-animate-fadeInUp ${isInView ? 'animate animation-delay-4000' : ''}`}>
              Our systematic approach to providing valuable wedding planning guidance
            </p>
          </div>

          <div className="space-y-8">
            {consultation_process.map((step, index) => (
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

      {/* FAQs */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-4 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-4700' : ''}`}>
              Frequently Asked Questions
            </h2>
            <p className={`font-montserrat text-secondary-paragraphs text-lg intro-animate-fadeInUp ${isInView ? 'animate animation-delay-4900' : ''}`}>
              Common questions about our wedding planning consultation services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-secondary-background/20 p-6 rounded-xl intro-animate-fadeInUp ${isInView ? 'animate' : ''}`}
                style={{ animationDelay: `${5.1 + index * 0.1}s` }}
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

      {/* CTA Section */}
      <section className="py-16 px-5 bg-secondary-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-6 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-5600' : ''}`}>
            Ready to Get Expert Guidance?
          </h2>
          <p className={`font-montserrat text-secondary-paragraphs text-lg mb-8 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-5800' : ''}`}>
            Start your wedding planning journey with professional consultation. Get personalized advice, 
            expert recommendations, and the confidence to create your perfect Indian wedding celebration.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center intro-animate-fadeInUp ${isInView ? 'animate animation-delay-6000' : ''}`}>
            <WeddingButton asChild>
              <Link href="/contact">
                Schedule Consultation
              </Link>
            </WeddingButton>
            <WeddingButton variant="wedding-light" asChild>
              <Link href="tel:+919876543210">
                Call for Quick Advice
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
          .animation-delay-4700 { animation-delay: 4.7s; }
          .animation-delay-4900 { animation-delay: 4.9s; }
          .animation-delay-5100 { animation-delay: 5.1s; }
          .animation-delay-5600 { animation-delay: 5.6s; }
          .animation-delay-5800 { animation-delay: 5.8s; }
          .animation-delay-6000 { animation-delay: 6s; }
        }
      `}</style>
    </div>
  );
};

export default ConsultationPage;
