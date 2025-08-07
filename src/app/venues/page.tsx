"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function VenuesPage() {
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
      {/* Header Section - Mobile First */}
      <section className="px-4 py-12 sm:py-16 md:py-20 bg-gradient-to-b from-secondary-background/50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-marcellus text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-heading mb-4 sm:mb-6">
            Venue Categories
          </h1>
          <p className="font-montserrat text-base sm:text-lg md:text-xl text-secondary-paragraphs max-w-3xl mx-auto leading-relaxed">
            Discover the perfect venue for your special occasion from our curated collection 
            of premium locations across various categories and styles.
          </p>
        </div>
      </section>

      {/* Categories Grid - Mobile First */}
      <section className="px-4 py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {venueCategories.map((category) => (
              <div key={category.id} className="group">
                <Link href={category.link} className="block">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    {/* Category Image */}
                    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      
                      {/* Venue Count Badge */}
                      <div className="absolute top-3 right-3">
                        <span className="bg-secondary-accent text-white px-2 py-1 rounded-full text-xs font-semibold">
                          {category.count}
                        </span>
                      </div>

                      {/* Title Overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-marcellus text-xl sm:text-2xl font-bold">
                          {category.title}
                        </h3>
                      </div>
                    </div>

                    {/* Category Content */}
                    <div className="p-4 sm:p-6">
                      <p className="font-montserrat text-sm sm:text-base text-secondary-paragraphs leading-relaxed mb-4">
                        {category.description}
                      </p>

                      {/* Explore Button */}
                      <div className="flex items-center justify-between">
                        <span className="font-montserrat text-secondary-accent text-sm font-semibold uppercase tracking-wide">
                          Explore Venues
                        </span>
                        <svg 
                          className="w-4 h-4 text-secondary-accent" 
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
        </div>
      </section>

      {/* Call to Action Section - Mobile First */}
      <section className="px-4 py-8 sm:py-12 md:py-16 bg-secondary-background/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-marcellus text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-heading mb-4 sm:mb-6">
            Need Help Choosing?
          </h2>
          <p className="font-montserrat text-base sm:text-lg md:text-xl text-secondary-paragraphs max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Our venue experts are here to help you find the perfect location for your special day.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-secondary-accent text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-montserrat"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
