"use client";

import React from 'react';
import { useInView } from "framer-motion";
import { useRef } from "react";
import DecorativeLine from '@/components/DecorativeLine';
import Link from 'next/link';
import Image from 'next/image';
import WeddingButton from '@/components/WeddingButton';


export default function VenuesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const venueCategories = [
    {
      id: 1,
      title: "Wedding Venues",
      description: "Discover stunning banquet halls, marriage gardens and luxury venues perfect for your dream wedding ceremony and reception.",
      image: "/hero-01.jpg",
      link: "/venues/weddings",
      count: "50+ Venues"
    },
    {
      id: 2,
      title: "Corporate Events",
      description: "Professional conference halls and business centers equipped with modern facilities for corporate meetings and events.",
      image: "/hero-02.jpg",
      link: "/venues/weddings",
      count: "25+ Venues"
    },
    {
      id: 3,
      title: "Destination Weddings",
      description: "Breathtaking destination venues across exotic locations, beach resorts and heritage properties for unforgettable celebrations.",
      image: "/hero-03.jpg",
      link: "/venues/weddings",
      count: "30+ Venues"
    },
    {
      id: 4,
      title: "Heritage Venues",
      description: "Historic palaces, forts and heritage properties that offer royal grandeur and timeless elegance for your special occasions.",
      image: "/hero-04.jpg",
      link: "/venues/weddings",
      count: "15+ Venues"
    },
    {
      id: 5,
      title: "Resort Weddings",
      description: "Luxury resorts with beautiful landscapes, world-class amenities and comprehensive wedding packages in serene locations.",
      image: "/hero-05.jpg",
      link: "/venues/weddings",
      count: "40+ Venues"
    },
    {
      id: 6,
      title: "Outdoor Venues",
      description: "Garden venues, beach locations and outdoor spaces perfect for nature-loving couples seeking open-air celebrations.",
      image: "/hero-06.jpg",
      link: "/venues/weddings",
      count: "35+ Venues"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-secondary-background to-white">
        <div className="w-full max-w-7xl mx-auto text-center">
          <div className={`intro-animate-slideInUp ${isInView ? 'animate' : ''}`}>
            <h1 
              className="font-marcellus text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ color: 'var(--secondary-heading)' }}
            >
              Venue Categories
            </h1>
            <p 
              className="text-lg md:text-xl max-w-3xl mx-auto mb-8"
              style={{ 
                fontFamily: 'var(--font-montserrat)',
                color: 'var(--secondary-paragraphs)'
              }}
            >
              Discover the perfect venue for your special occasion from our curated collection 
              of premium locations across various categories and styles.
            </p>
            <DecorativeLine isInView={isInView} />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section
        ref={ref}
        className="py-16 md:py-20 px-4"
        style={{ backgroundColor: 'white' }}
      >
        <div className="w-full max-w-7xl mx-auto">
          
          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {venueCategories.map((category, index) => (
              <div 
                key={category.id}
                className={`group intro-animate-fadeInUp ${isInView ? 'animate' : ''}`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <Link href={category.link} className="block">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
                    {/* Category Image */}
                    <div className="relative h-64 md:h-80 overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Venue Count Badge */}
                      <div className="absolute top-4 right-4">
                        <span 
                          className="px-3 py-1 rounded-full text-white text-sm font-semibold backdrop-blur-sm"
                          style={{ backgroundColor: 'var(--secondary-accent)' }}
                        >
                          {category.count}
                        </span>
                      </div>

                      {/* Title Overlay */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 
                          className="text-white font-marcellus text-2xl md:text-3xl font-bold mb-2"
                          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
                        >
                          {category.title}
                        </h3>
                      </div>
                    </div>

                    {/* Category Content */}
                    <div className="p-6 md:p-8">
                      {/* Category Description */}
                      <p 
                        className="text-base leading-relaxed mb-6"
                        style={{ 
                          fontFamily: 'var(--font-montserrat)',
                          color: 'var(--secondary-paragraphs)'
                        }}
                      >
                        {category.description}
                      </p>

                      {/* Explore Button */}
                      <div className="flex items-center justify-between">
                        <span 
                          className="text-sm font-semibold uppercase tracking-wider transition-colors duration-300 group-hover:text-opacity-80"
                          style={{ 
                            color: 'var(--secondary-accent)',
                            fontFamily: 'var(--font-montserrat)'
                          }}
                        >
                          Explore Venues
                        </span>
                        <svg 
                          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                          style={{ color: 'var(--secondary-accent)' }}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className={`mt-16 text-center intro-animate-fadeInUp ${isInView ? 'animate animation-delay-1000' : ''}`}>
            <h2 
              className="font-marcellus text-3xl md:text-4xl font-bold mb-6"
              style={{ color: 'var(--secondary-heading)' }}
            >
              Need Help Choosing?
            </h2>
            <p 
              className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
              style={{ 
                fontFamily: 'var(--font-montserrat)',
                color: 'var(--secondary-paragraphs)'
              }}
            >
              Our venue experts are here to help you find the perfect location for your special day.
            </p>
            <WeddingButton asChild>
              <Link href="/contact">
                Schedule Consultation
              </Link>
            </WeddingButton>
          </div>
        </div>
      </section>
    </div>
  );
};
