'use client';
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import DecorativeLine from '../../../../components/DecorativeLine';
import '../IntroSection/style.css';

const Offerings = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const offerings = [
    {
      id: 1,
      title: "VENUE",
      description: "Exquisite venues for your perfect celebration",
      image: "/offerring-01.jpg",
      shape: "arch"
    },
    {
      id: 2,
      title: "CATERING",
      description: "Authentic Indian cuisine and gourmet delicacies",
      image: "/offerring-02.jpg",
      shape: "arch"
    },
    {
      id: 3,
      title: "MEDIA",
      description: "Capture every moment with our photography & videography",
      image: "/offerring-05.jpg",
      shape: "circle",
      isSpecial: true
    },
    {
      id: 4,
      title: "DECOR",
      description: "Stunning decorations that create magical moments",
      image: "/offerring-03.jpg",
      shape: "arch"
    },
    {
      id: 5,
      title: "ATTIRE",
      description: "Traditional and contemporary wedding attire",
      image: "/offerring-04.jpg",
      shape: "arch"
    },
    {
      id: 6,
      title: "MUSIC",
      description: "Live entertainment and DJ services",
      image: "/offerring-06.jpg",
      shape: "arch"
    }
  ];

  return (
    <section 
      ref={ref}
      className="flex flex-col items-center justify-center py-16 md:py-20 px-5 bg-secondary-background"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-16">
          <h2 className={`font-marcellus tracking-wider font-bold text-secondary-heading text-2xl md:text-3xl lg:text-4xl mb-6 text-center intro-animate-slideInUp ${isInView ? 'animate' : ''}`}>
            Complete Wedding Solutions
          </h2>
          
          {/* Decorative Line */}
          <DecorativeLine isInView={isInView} />
          
          {/* Subtitle */}
          <p className={`font-montserrat text-secondary-paragraphs text-base md:text-lg text-center mt-6 max-w-3xl intro-animate-fadeInUp ${isInView ? 'animate animation-delay-400' : ''}`}>
            From photography to catering, from mehendi to mandap - we provide everything you need 
            to make your Indian wedding celebration absolutely perfect and unforgettable.
          </p>
        </div>

        {/* Offerings Grid - Clean Modern Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {offerings.map((offering, index) => (
            <div 
              key={offering.id}
              className={`w-full flex flex-col items-center intro-animate-fadeInUp ${isInView ? 'animate' : ''}`}
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              {/* Offering Image */}
              <div className="w-full h-80 md:h-[22rem] lg:h-[30rem] rounded-2xl bg-secondary-preload mb-8 overflow-hidden transition-all duration-700 hover:shadow-xl group cursor-pointer hover:scale-95">
                <Image
                  src={offering.image}
                  alt={offering.title}
                  width={805}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Offering Content */}
              <div className="text-center flex flex-col justify-start items-center px-[5%]">
                {/* Offering Title */}
                <div className="mb-4 cursor-pointer transition-opacity duration-400 hover:opacity-70">
                  <h4 className="text-secondary-heading font-marcellus text-xl md:text-2xl font-semibold tracking-wider">
                    {offering.title}
                  </h4>
                </div>

                {/* Offering Description */}
                <p className="text-secondary-paragraphs font-montserrat text-base leading-relaxed mb-6">
                  {offering.description}
                </p>

                {/* Learn More Link */}
                <div className="text-secondary-accent hover:text-secondary-heading transition-colors duration-300 uppercase tracking-wider text-sm font-medium underline hover:no-underline cursor-pointer">
                  Learn More
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Offerings Button */}
        {/* <div className={`mt-12 md:mt-16 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-1200' : ''}`}>
          <WeddingButton asChild>
            <Link href="/offerings">
              View All Offerings
            </Link>
          </WeddingButton>
        </div> */}
      </div>
    </section>
  );
};

export default Offerings;
