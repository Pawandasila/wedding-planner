'use client';
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import DecorativeLine from '../../components/DecorativeLine';
import WeddingButton from '../../components/WeddingButton';

const About = () => {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true, amount: 0.2 });
  const isStoryInView = useInView(storyRef, { once: true, amount: 0.2 });
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.2 });
  const isTeamInView = useInView(teamRef, { once: true, amount: 0.2 });

  const values = [
    {
      icon: "💐",
      title: "Cultural Authenticity",
      description: "We honor traditional Indian wedding customs while embracing modern elegance in every celebration we craft."
    },
    {
      icon: "✨",
      title: "Attention to Detail",
      description: "Every element, from the smallest decoration to the grandest ceremony, receives our meticulous attention."
    },
    {
      icon: "🤝",
      title: "Personal Touch",
      description: "We believe every love story is unique and deserves a celebration that reflects your individual journey."
    },
    {
      icon: "💎",
      title: "Excellence",
      description: "We strive for perfection in every aspect, ensuring your wedding day exceeds all expectations."
    }
  ];

  const teamMembers = [
    {
      name: "Priya Sharma",
      role: "Founder & Lead Planner",
      image: "/gallery-01.jpg",
      description: "With 12+ years in luxury Indian weddings, Priya brings creativity and cultural expertise to every celebration."
    },
    {
      name: "Rajesh Kumar",
      role: "Design Director",
      image: "/gallery-02.jpg", 
      description: "Award-winning designer specializing in traditional mandap designs and contemporary floral arrangements."
    },
    {
      name: "Anitha Reddy",
      role: "Cultural Coordinator",
      image: "/gallery-03.jpg",
      description: "Expert in regional Indian traditions, ensuring authentic ceremonies across different cultural backgrounds."
    }
  ];

  return (
    <div className="min-h-screen bg-secondary-background">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative flex flex-col items-center justify-center pt-20 pb-16 px-4 overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute left-2 top-16 w-16 h-16 md:w-24 md:h-24 opacity-70 -rotate-12">
          <Image
            src="/bg-flower.png"
            alt="Decorative flower"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute right-3 top-20 w-8 h-8 md:w-12 md:h-12 opacity-70 rotate-45">
          <Image
            src="/sideleaf.png"
            alt="Decorative leaf"
            fill
            className="object-contain"
          />
        </div>

        <div 
          className={`w-full max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isHeroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Main Image */}
          <div className="mb-8 relative">
            <div className="w-full max-w-md mx-auto h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/hero-01.jpg"
                alt="About Us - Wedding Planning Excellence"
                width={400}
                height={320}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Floating decorative element */}
            <div className="absolute -bottom-4 -right-2 w-20 h-20 md:w-28 md:h-28 opacity-90 rotate-12">
              <Image
                src="/flower.png"
                alt="Decorative flower"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Hero Text */}
          <div className="mb-6">
            <Image
              src="/leaf.png"
              alt="Decorative element"
              width={40}
              height={12}
              className="mx-auto mb-4"
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-marcellus text-secondary-heading mb-4 leading-tight">
              About Our Story
            </h1>
            <p className="text-base md:text-lg text-secondary-paragraphs font-montserrat leading-relaxed max-w-2xl mx-auto">
              Crafting dream Indian weddings with passion, tradition, and modern elegance for over a decade
            </p>
          </div>

          <div className="flex justify-center">
            <DecorativeLine isInView={isHeroInView} />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section 
        ref={storyRef}
        className="py-16 px-4 bg-white relative overflow-hidden"
      >
        {/* Background Decorations */}
        <div className="absolute left-4 top-12 w-20 h-20 md:w-32 md:h-32 opacity-40 -rotate-12">
          <Image
            src="/bg-flower.png"
            alt="Background decoration"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute right-6 bottom-16 w-24 h-24 md:w-36 md:h-36 opacity-40 rotate-12 scale-x-[-1]">
          <Image
            src="/bg-flower.png"
            alt="Background decoration"
            fill
            className="object-contain"
          />
        </div>

        <div 
          className={`w-full max-w-6xl mx-auto transition-all duration-1000 delay-200 ${
            isStoryInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-marcellus text-secondary-heading mb-4">
              Our Journey
            </h2>
            <div className="w-16 h-0.5 bg-secondary-accent mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Story Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/gallery-05.jpg"
                  alt="Our journey in wedding planning"
                  width={500}
                  height={375}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative corner element */}
              <div className="absolute -top-2 -left-2 w-12 h-12 opacity-80 -rotate-12">
                <Image
                  src="/leaf.png"
                  alt="Decorative element"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Story Content */}
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-marcellus text-secondary-heading mb-4">
                Where Tradition Meets Dreams
              </h3>
              <p className="text-secondary-paragraphs font-montserrat leading-relaxed">
                Founded in 2012 with a passion for celebrating love through the rich tapestry of Indian traditions, 
                we began our journey as a small team of dreamers who believed every wedding should be a masterpiece.
              </p>
              <p className="text-secondary-paragraphs font-montserrat leading-relaxed">
                Over the years, we&apos;ve had the honor of planning over 500 weddings across India, each one unique, 
                each one special, and each one a testament to our commitment to excellence and cultural authenticity.
              </p>
              <p className="text-secondary-paragraphs font-montserrat leading-relaxed">
                Today, we stand as one of India&apos;s premier wedding planning companies, trusted by families 
                to turn their most precious moments into unforgettable celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        ref={valuesRef}
        className="py-16 px-4 bg-secondary-background relative"
      >
        <div 
          className={`w-full max-w-6xl mx-auto transition-all duration-1000 delay-300 ${
            isValuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-marcellus text-secondary-heading mb-4">
              Our Values
            </h2>
            <div className="w-16 h-0.5 bg-secondary-accent mx-auto mb-6"></div>
            <p className="text-secondary-paragraphs font-montserrat max-w-2xl mx-auto">
              The principles that guide us in creating extraordinary wedding experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-3xl mb-4 text-center">{value.icon}</div>
                <h3 className="text-lg font-marcellus text-secondary-heading mb-3 text-center">
                  {value.title}
                </h3>
                <p className="text-secondary-paragraphs font-montserrat text-sm leading-relaxed text-center">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        ref={teamRef}
        className="py-16 px-4 bg-white relative overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute right-4 top-8 w-16 h-16 md:w-24 md:h-24 opacity-40 rotate-45">
          <Image
            src="/sideleaf.png"
            alt="Decorative leaf"
            fill
            className="object-contain"
          />
        </div>

        <div 
          className={`w-full max-w-6xl mx-auto transition-all duration-1000 delay-400 ${
            isTeamInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-marcellus text-secondary-heading mb-4">
              Meet Our Team
            </h2>
            <div className="w-16 h-0.5 bg-secondary-accent mx-auto mb-6"></div>
            <p className="text-secondary-paragraphs font-montserrat max-w-2xl mx-auto">
              The passionate professionals behind your perfect wedding day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <h3 className="text-xl font-marcellus text-secondary-heading mb-2">
                  {member.name}
                </h3>
                <p className="text-secondary-accent font-montserrat text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-secondary-paragraphs font-montserrat text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-secondary-background text-center">
        <div className="w-full max-w-4xl mx-auto">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute left-4 -top-4 w-12 h-12 opacity-60 -rotate-12">
              <Image
                src="/leaf.png"
                alt="Decorative element"
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute right-4 -bottom-4 w-12 h-12 opacity-60 rotate-12">
              <Image
                src="/leaf.png"
                alt="Decorative element"
                fill
                className="object-contain"
              />
            </div>

            <h2 className="text-2xl md:text-3xl font-marcellus text-secondary-heading mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-secondary-paragraphs font-montserrat mb-8 max-w-2xl mx-auto">
              Let us help you create the wedding of your dreams. Contact us today to start planning your perfect celebration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <WeddingButton variant="wedding" className="px-8">
                Contact Us
              </WeddingButton>
              <WeddingButton variant="wedding-light" className="px-8">
                View Portfolio
              </WeddingButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;