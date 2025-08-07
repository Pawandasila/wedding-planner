'use client';
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import DecorativeLine from '../../../../components/DecorativeLine';
import WeddingButton from '../../../../components/WeddingButton';
import '../IntroSection/style.css';

const VenueCategories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const venueCategories = [
    {
      id: 1,
      title: "Destination Weddings",
      description: "Breathtaking destination venues across exotic locations, beach resorts and heritage properties for unforgettable celebrations.",
      image: "/hero-01.jpg",
      link: "/events/weddings"
    },
    {
      id: 2,
      title: "Haldi and Mehndi Venues",
      description: "Find the perfect venues for your Haldi and Mehndi ceremonies, with vibrant settings and beautiful backdrops.",
      image: "/haldi.jpg",
      link: "/events/haldi-mehndi"
    },
    {
      id: 3,
      title: "Wedding Anniversaries",
      description: "Celebrate your love with exquisite venues that offer a perfect blend of elegance and charm for your anniversary.",
      image: "/hero-03.jpg",
      link: "/events/anniversaries"
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
            Venue Categories
          </h2>
          
          {/* Decorative Line with Center Dot */}
          <DecorativeLine isInView={isInView} />
          
        </div>

        {/* Categories Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {venueCategories.map((category, index) => (
            <div 
              key={category.id}
              className={`w-full flex flex-col items-center intro-animate-fadeInUp ${isInView ? 'animate' : ''}`}
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              {/* Category Image */}
              <Link 
                href={category.link}
                className="w-full h-96 md:h-[28rem] lg:h-[30rem] bg-secondary-preload mb-11 overflow-hidden transition-all duration-700 hover:shadow-xl group block hover:scale-95"
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  width={805}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </Link>

              {/* Category Content */}
              <div className="text-center flex flex-col justify-start items-center px-[5%]">
                {/* Category Title */}
                <Link 
                  href={category.link}
                  className="mb-5 no-underline transition-opacity duration-400 hover:opacity-70"
                >
                  <h4 className="text-secondary-heading font-marcellus text-xl md:text-2xl font-semibold">
                    {category.title}
                  </h4>
                </Link>

                {/* Category Description */}
                <p className="text-secondary-paragraphs font-montserrat text-base leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* Learn More Link */}
                <Link 
                  href={category.link}
                  className="text-secondary-accent hover:text-secondary-heading transition-colors duration-300 uppercase tracking-wider text-sm font-medium underline hover:no-underline"
                >
                  Explore Venues
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Categories Button */}
        <div className={`mt-12 md:mt-16 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-1000' : ''}`}>
          <WeddingButton asChild>
            <Link href="/venues">
              View All Categories
            </Link>
          </WeddingButton>
        </div>
      </div>
    </section>
  );
};

export default VenueCategories;
