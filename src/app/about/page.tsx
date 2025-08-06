'use client';
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div ref={ref} className="min-h-screen bg-gradient-to-b from-white to-secondary-background/30">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-5 bg-gradient-to-r from-secondary-background to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/hero-04.jpg"
            alt="About us background"
            fill
            quality={90}
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-wider intro-animate-slideInUp ${isInView ? 'animate' : ''}`}>
            About Our Story
          </h1>
          <p className={`font-montserrat text-secondary-paragraphs text-lg md:text-xl max-w-3xl mx-auto leading-relaxed intro-animate-fadeInUp ${isInView ? 'animate animation-delay-200' : ''}`}>
            Creating magical Indian weddings with traditional elegance and modern sophistication
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-16 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            {/* Image Section */}
            <div className={`relative w-full h-[600px] overflow-hidden intro-animate-fadeInUp ${isInView ? 'animate animation-delay-400' : ''}`}>
              <div className="postcard-image-container relative w-full h-full">
                <div className="overflow-hidden w-full h-full relative rounded-2xl shadow-xl">
                  <Image
                    src="/gallery-05.jpg"
                    alt="Wedding planner at work"
                    fill
                    quality={90}
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                {/* Decorative Flower */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 animate-float">
                  <Image
                    src="/flower.png"
                    alt="Decorative flower"
                    width={80}
                    height={80}
                    className="opacity-80"
                  />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className={`bg-white p-8 md:p-12 lg:p-16 rounded-2xl shadow-lg border border-secondary-border/30 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-600' : ''}`}>
              <div className="text-center">
                {/* Decorative Element */}
                <div className="mb-8">
                  <Image
                    src="/leaf.png"
                    alt="Decorative element"
                    width={70}
                    height={70}
                    className="mx-auto opacity-80"
                  />
                </div>

                {/* Quote */}
                <h4 className="font-marcellus text-secondary-heading text-xl md:text-2xl font-semibold mb-6 leading-relaxed">
                  &ldquo;Your wedding should celebrate your heritage, honor traditions, and reflect the beautiful journey of two families becoming one.&rdquo;
                </h4>

                {/* Description */}
                <p className="font-montserrat text-secondary-paragraphs leading-relaxed mb-6">
                  With over a decade of experience in orchestrating magnificent Indian weddings, we understand the sacred significance of each ritual and ceremony. From the vibrant Haldi and melodious Sangeet to the sacred Pheras and grand Reception, we ensure every moment is steeped in tradition while embracing contemporary elegance.
                </p>

                <p className="font-montserrat text-secondary-paragraphs leading-relaxed mb-8">
                  Whether it&rsquo;s a royal Rajasthani wedding in a heritage palace, a serene South Indian ceremony by the backwaters, or a lavish Punjabi celebration, we bring expertise in regional customs, authentic decorations, and seamless coordination to create your dream Indian wedding that honors your roots and celebrates your love story.
                </p>

                {/* Signature */}
                <div className="font-homemade-apple text-secondary-accent text-2xl">
                  Pawan Dasila
                </div>
                <p className="font-montserrat text-secondary-paragraphs text-sm mt-2">
                  Founder & Master Wedding Planner
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-5 bg-gradient-to-b from-white to-secondary-background/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-4 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-800' : ''}`}>
              Our Values
            </h2>
            <p className={`font-montserrat text-secondary-paragraphs text-lg max-w-2xl mx-auto intro-animate-fadeInUp ${isInView ? 'animate animation-delay-1000' : ''}`}>
              The sacred principles that guide us in creating extraordinary Indian wedding experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "�️",
                title: "Traditional Reverence",
                description: "We honor ancient customs and sacred rituals, ensuring every ceremony is performed with deep respect and cultural authenticity."
              },
              {
                icon: "�",
                title: "Artistic Grandeur",
                description: "From intricate mandap designs to elaborate floral arrangements, we create visually stunning celebrations that capture the essence of Indian artistry."
              },
              {
                icon: "👨‍👩‍👧‍�",
                title: "Family Unity",
                description: "Understanding that Indian weddings unite families, we ensure every ritual strengthens bonds and creates cherished memories for generations."
              }
            ].map((value, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg border border-secondary-border/30 text-center hover:shadow-xl transition-shadow duration-300 intro-animate-fadeInUp ${isInView ? 'animate' : ''}`}
                style={{ animationDelay: `${1.2 + index * 0.2}s` }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-marcellus text-secondary-heading text-xl font-semibold mb-4">
                  {value.title}
                </h3>
                <p className="font-montserrat text-secondary-paragraphs leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-4 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-1800' : ''}`}>
              Meet Our Team
            </h2>
            <p className={`font-montserrat text-secondary-paragraphs text-lg max-w-2xl mx-auto intro-animate-fadeInUp ${isInView ? 'animate animation-delay-2000' : ''}`}>
              Expert wedding specialists dedicated to bringing your Indian wedding dreams to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Pawan Dasila",
                role: "Founder & Master Planner",
                image: "/gallery-02.jpg",
                description: "With 12+ years of expertise in Indian weddings, Pawan specializes in creating magnificent celebrations that honor tradition while embracing modern elegance."
              },
              {
                name: "Priya Sharma",
                role: "Senior Décor Designer",
                image: "/gallery-03.jpg",
                description: "Priya's artistic vision transforms venues with authentic Indian décor, from marigold arrangements to intricate mandap designs that tell your cultural story."
              },
              {
                name: "Rajesh Kumar",
                role: "Ceremony Coordinator",
                image: "/gallery-04.jpg",
                description: "Rajesh ensures every ritual flows seamlessly, coordinating with pandits and families to maintain the sanctity and timing of traditional ceremonies."
              }
            ].map((member, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg border border-secondary-border/30 overflow-hidden hover:shadow-xl transition-all duration-300 intro-animate-fadeInUp ${isInView ? 'animate' : ''}`}
                style={{ animationDelay: `${2.2 + index * 0.2}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    quality={90}
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-marcellus text-secondary-heading text-xl font-semibold mb-2">
                    {member.name}
                  </h3>
                  <p className="font-montserrat text-secondary-accent font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="font-montserrat text-secondary-paragraphs text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-5 bg-gradient-to-b from-white to-secondary-background/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-4 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-2800' : ''}`}>
              Our Process
            </h2>
            <p className={`font-montserrat text-secondary-paragraphs text-lg max-w-2xl mx-auto intro-animate-fadeInUp ${isInView ? 'animate animation-delay-3000' : ''}`}>
              From traditional rituals to grand celebrations, we guide you through every sacred moment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Cultural Consultation",
                description: "We understand your family traditions, regional customs, and personal preferences to create an authentic celebration plan."
              },
              {
                step: "02",
                title: "Sacred Planning",
                description: "Our team designs every ceremony from Haldi and Mehendi to Pheras and Reception, coordinating with pandits and cultural experts."
              },
              {
                step: "03",
                title: "Ritual Coordination",
                description: "We manage all vendors, coordinate traditional timings, and ensure every sacred ritual is performed with proper reverence."
              },
              {
                step: "04",
                title: "Your Blessed Day",
                description: "From sunrise ceremonies to midnight celebrations, we ensure your Indian wedding flows seamlessly through every precious moment."
              }
            ].map((process, index) => (
              <div
                key={index}
                className={`text-center intro-animate-fadeInUp ${isInView ? 'animate' : ''}`}
                style={{ animationDelay: `${3.2 + index * 0.2}s` }}
              >
                <div className="bg-secondary-accent text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold font-marcellus">
                  {process.step}
                </div>
                <h3 className="font-marcellus text-secondary-heading text-xl font-semibold mb-4">
                  {process.title}
                </h3>
                <p className="font-montserrat text-secondary-paragraphs leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "750+", label: "Indian Weddings Planned" },
              { number: "12+", label: "Years Experience" },
              { number: "80+", label: "Cultural Vendors" },
              { number: "100%", label: "Blessed Unions" }
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center intro-animate-fadeInUp ${isInView ? 'animate' : ''}`}
                style={{ animationDelay: `${4.0 + index * 0.1}s` }}
              >
                <div className="font-marcellus text-secondary-accent text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="font-montserrat text-secondary-paragraphs font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-5 bg-gradient-to-r from-secondary-accent/5 to-secondary-background/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`font-marcellus text-secondary-heading text-2xl md:text-3xl font-bold mb-4 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-4400' : ''}`}>
            Ready to Begin Your Sacred Journey?
          </h2>
          <p className={`font-montserrat text-secondary-paragraphs text-lg mb-8 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-4600' : ''}`}>
            Let&rsquo;s create a magnificent Indian wedding that honors your traditions and celebrates your love story. Schedule your consultation today.
          </p>
          <Link
            href="/contact"
            className={`inline-block bg-secondary-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-secondary-accent/90 transition-colors duration-300 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-4800' : ''}`}
          >
            Get In Touch
          </Link>
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
        
        .postcard-image-container {
          position: relative;
        }
        
        .postcard-image-container:hover .overflow-hidden img {
          transform: scale(1.05);
        }
        
        @media (max-width: 768px) {
          .animation-delay-200 { animation-delay: 0.2s; }
          .animation-delay-400 { animation-delay: 0.4s; }
          .animation-delay-600 { animation-delay: 0.6s; }
          .animation-delay-800 { animation-delay: 0.8s; }
          .animation-delay-1000 { animation-delay: 1s; }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
