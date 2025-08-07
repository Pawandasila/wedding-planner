"use client";

import React, { useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import WeddingButton from "@/components/WeddingButton";
import Link from "next/link";
import Image from "next/image";

// Sample venue data
const weddingVenueData = [
  {
    id: 1,
    category: "Hotels",
    name: "The Grand Shiva Resort & Spa",
    location: "Rishikesh, Uttarakhand",
    rating: 4.8,
    reviews: 156,
    vegPrice: 2500,
    nonVegPrice: 3000,
    capacity: "100-800 pax",
    rooms: "45 Rooms",
    features: [
      "4 Star & Above Wedding Hotels",
      "Banquet Halls",
      "Lawn/Garden Wedding",
    ],
    image: "/hero-01.jpg",
    images: ["/hero-01.jpg", "/hero-02.jpg", "/hero-03.jpg"],
    isHandpicked: true,
    description:
      "Nestled in the serene foothills of Himalayas, offering breathtaking views and luxury amenities for unforgettable wedding celebrations.",
    amenities: ["Pool", "Spa", "AC Banquet", "Lawn", "Rooms"],
    weddingSpecific: {
      mandapSetup: true,
      decorInclusions: "Floral & Lighting",
      weddingCoordinator: true,
      multiEventSpaces: 3,
    },
  },
  // Add 2-3 more venues for demo
  {
    id: 2,
    category: "Resorts",
    name: "Ananda Himalayan Resort",
    location: "Narendra Nagar, Uttarakhand",
    rating: 4.9,
    reviews: 89,
    vegPrice: 4000,
    nonVegPrice: 4500,
    capacity: "50-300 pax",
    rooms: "78 Rooms",
    features: [
      "5 Star Wedding Hotels",
      "Destination Weddings",
      "Heritage Venue",
    ],
    image: "/hero-02.jpg",
    images: ["/hero-02.jpg", "/hero-03.jpg", "/hero-04.jpg"],
    isHandpicked: true,
    description:
      "Luxury palace resort with world-class spa facilities and panoramic valley views, perfect for destination weddings.",
    amenities: ["Luxury", "Spa", "Heritage", "Views", "Palace"],
    weddingSpecific: {
      mandapSetup: true,
      decorInclusions: "Royal Theme Setup",
      weddingCoordinator: true,
      multiEventSpaces: 5,
    },
  },
  {
    id: 3,
    category: "Banquet Halls",
    name: "Royal Banquet Palace",
    location: "Dehradun, Uttarakhand",
    rating: 4.5,
    reviews: 234,
    vegPrice: 1800,
    nonVegPrice: 2200,
    capacity: "200-1200 pax",
    rooms: "20 Rooms",
    features: ["Large Banquet Halls", "AC Halls", "Wedding Venue"],
    image: "/hero-03.jpg",
    images: ["/hero-03.jpg", "/hero-04.jpg", "/hero-05.jpg"],
    isHandpicked: false,
    description:
      "Grand banquet halls with elegant interiors and modern amenities for large wedding celebrations.",
    amenities: [
      "AC Halls",
      "Large Capacity",
      "Parking",
      "Catering",
      "Audio/Visual",
    ],
    weddingSpecific: {
      mandapSetup: true,
      decorInclusions: "Traditional Setup",
      weddingCoordinator: false,
      multiEventSpaces: 2,
    },
  },
];

export default function WeddingVenuesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");
  const [selectedCapacity, setSelectedCapacity] = useState("All");
  const [sortBy, setSortBy] = useState("popularity");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Categories
  const categories = [
    { name: "All", count: weddingVenueData.length },
    {
      name: "Hotels",
      count: weddingVenueData.filter((v) => v.category === "Hotels").length,
    },
    {
      name: "Resorts",
      count: weddingVenueData.filter((v) => v.category === "Resorts").length,
    },
    {
      name: "Banquet Halls",
      count: weddingVenueData.filter((v) => v.category === "Banquet Halls")
        .length,
    },
  ].filter((cat) => cat.count > 0 || cat.name === "All");

  // Price ranges
  const priceRanges = [
    { name: "All", label: "All Budgets" },
    { name: "1000-2500", label: "₹1,000 - ₹2,500" },
    { name: "2500-4000", label: "₹2,500 - ₹4,000" },
    { name: "4000+", label: "₹4,000+" },
  ];

  // Capacity ranges
  const capacityRanges = [
    { name: "All", label: "All Capacities" },
    { name: "50-200", label: "50-200 Guests" },
    { name: "200-500", label: "200-500 Guests" },
    { name: "500+", label: "500+ Guests" },
  ];

  // Sort options
  const sortOptions = [
    { value: "popularity", label: "Popularity" },
    { value: "rating", label: "Rating" },
    { value: "price-low", label: "Price (Low to High)" },
    { value: "price-high", label: "Price (High to Low)" },
  ];

  // Filter and sort venues
  let filteredVenues = weddingVenueData;

  if (selectedCategory !== "All") {
    filteredVenues = filteredVenues.filter(
      (venue) => venue.category === selectedCategory
    );
  }

  if (selectedPriceRange !== "All") {
    filteredVenues = filteredVenues.filter((venue) => {
      const price = venue.vegPrice;
      switch (selectedPriceRange) {
        case "1000-2500":
          return price >= 1000 && price <= 2500;
        case "2500-4000":
          return price >= 2500 && price <= 4000;
        case "4000+":
          return price >= 4000;
        default:
          return true;
      }
    });
  }

  if (selectedCapacity !== "All") {
    filteredVenues = filteredVenues.filter((venue) => {
      const capacityStr = venue.capacity.toLowerCase();
      const capacityNumbers = capacityStr.match(/\\d+/g);
      if (capacityNumbers && capacityNumbers.length > 0) {
        const maxCapacity = Math.max(...capacityNumbers.map(Number));
        switch (selectedCapacity) {
          case "50-200":
            return maxCapacity >= 50 && maxCapacity <= 200;
          case "200-500":
            return maxCapacity >= 200 && maxCapacity <= 500;
          case "500+":
            return maxCapacity >= 500;
          default:
            return true;
        }
      }
      return true;
    });
  }

  // Sort venues
  const sortedVenues = [...filteredVenues].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "price-low":
        return a.vegPrice - b.vegPrice;
      case "price-high":
        return b.vegPrice - a.vegPrice;
      case "popularity":
      default:
        return b.reviews - a.reviews;
    }
  });

  return (
    <div className="min-h-screen">
      {/* Mobile-First Header */}
      <section className="py-8 px-4 border-b border-secondary-border/30 bg-secondary-white">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="text-sm text-secondary-paragraphs mb-6 overflow-x-auto font-montserrat">
            <div className="flex whitespace-nowrap">
              <Link
                href="/"
                className="hover:text-secondary-accent transition-colors duration-300"
              >
                Home
              </Link>
              <span className="mx-2 text-secondary-border">{">"}</span>
              <Link
                href="/venues"
                className="hover:text-secondary-accent transition-colors duration-300"
              >
                Venues
              </Link>
              <span className="mx-2 text-secondary-border">{">"}</span>
              <span className="text-secondary-accent">Weddings</span>
            </div>
          </div>

          {/* Title and Search */}
          <div className="space-y-6">
            {/* Title and Search Combined Layout */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              {/* Title Section */}
              <div className="text-center lg:text-left lg:flex-1">
                <h1 className="font-marcellus text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-secondary-heading">
                  Wedding Venues
                </h1>
                <p className="text-secondary-paragraphs font-montserrat text-lg">
                  Discover{" "}
                  <span className="font-semibold text-secondary-accent">
                    {sortedVenues.length}
                  </span>{" "}
                  exquisite venues for your perfect day
                </p>
              </div>
              
              {/* Enhanced Search Bar - Right Side */}
              <div className="flex flex-col items-center lg:items-end lg:flex-1">
                <div className="relative w-full max-w-lg">
                  <input
                    type="text"
                    placeholder="Search venues by name, location, or features..."
                    className="w-full pl-12 pr-12 py-4 border border-secondary-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary-accent/20 focus:border-secondary-accent bg-secondary-white font-montserrat text-secondary-heading placeholder-secondary-paragraphs shadow-sm hover:shadow-md transition-all duration-300"
                  />
                  <svg
                    className="absolute left-4 top-4 w-5 h-5 text-secondary-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <button className="p-2 text-secondary-paragraphs hover:text-secondary-accent transition-colors duration-300" title="Advanced Search">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Quick Stats - Below Search */}
                <div className="flex items-center justify-center gap-4 sm:gap-6 lg:justify-end mt-4 text-sm font-montserrat flex-wrap">
                  <div className="flex items-center text-secondary-paragraphs">
                    <svg className="w-4 h-4 mr-1.5 text-secondary-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <span>10+ Cities</span>
                  </div>
                  <div className="flex items-center text-secondary-paragraphs">
                    <svg className="w-4 h-4 mr-1.5 text-secondary-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Verified Venues</span>
                  </div>
                  <div className="flex items-center text-secondary-paragraphs">
                    <svg className="w-4 h-4 mr-1.5 text-secondary-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>Best Prices</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-Optimized Cities Section */}
      <section className="py-8 px-4 border-b border-secondary-border/30 bg-secondary-background">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-xl font-bold mb-6 text-center text-secondary-heading font-marcellus">
            Popular Destinations
          </h3>

          {/* Horizontal Scrolling Cities */}
          <div className="overflow-x-auto pb-4">
            <div
              className="flex space-x-4 px-2"
              style={{ minWidth: "max-content" }}
            >
              {[
                { name: "Dehradun", image: "/hero-01.jpg", venues: "45+" },
                { name: "Rishikesh", image: "/hero-02.jpg", venues: "38+" },
                { name: "Mussoorie", image: "/hero-03.jpg", venues: "32+" },
                { name: "Haridwar", image: "/hero-04.jpg", venues: "28+" },
                { name: "Nainital", image: "/hero-05.jpg", venues: "25+" },
                { name: "Corbett", image: "/hero-06.jpg", venues: "18+" },
                { name: "Almora", image: "/hero-07.jpg", venues: "15+" },
                { name: "Kedarnath", image: "/hero-08.jpg", venues: "12+" },
                { name: "Badrinath", image: "/hero-10.jpg", venues: "10+" },
                { name: "Auli", image: "/hero-11.jpg", venues: "8+" },
                { name: "More", image: "", venues: "+15" },
              ].map((city) => (
                <div
                  key={city.name}
                  className="flex flex-col items-center cursor-pointer flex-shrink-0 group"
                >
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden mb-3 border-3 border-secondary-border/30 group-hover:border-secondary-accent transition-all duration-300 shadow-md group-hover:shadow-lg">
                    {city.image ? (
                      <Image
                        src={city.image}
                        alt={city.name}
                        width={72}
                        height={72}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-secondary-accent to-secondary-accent/80 flex items-center justify-center">
                        <span className="text-secondary-white font-bold text-sm font-montserrat">
                          {city.venues}
                        </span>
                      </div>
                    )}
                  </div>
                  <span className="text-sm font-medium text-secondary-heading text-center font-montserrat group-hover:text-secondary-accent transition-colors duration-300">
                    {city.name}
                  </span>
                  {city.image && (
                    <span className="text-xs text-secondary-paragraphs font-montserrat">
                      {city.venues} venues
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-First Filters */}
      <section className="py-6 px-4 bg-secondary-white border-b border-secondary-border/30">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Filter Toggle */}
          <div className="sm:hidden mb-4">
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="w-full flex items-center justify-between px-4 py-3 bg-secondary-background rounded-lg border border-secondary-border/30 hover:bg-secondary-accent-background/30 transition-colors duration-300"
            >
              <span className="font-medium text-secondary-heading font-montserrat">
                Filters & Sort
              </span>
              <svg
                className={`w-5 h-5 text-secondary-accent transform transition-transform duration-300 ${
                  showMobileFilters ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {/* Filter Controls */}
          <div
            className={`space-y-4 ${
              showMobileFilters ? "block" : "hidden sm:block"
            }`}
          >
            {/* Filter Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {/* Budget */}
              <div>
                <label className="block text-sm font-medium text-secondary-heading mb-2 font-montserrat">
                  Budget Range
                </label>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full px-3 py-2.5 border border-secondary-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary-accent/20 focus:border-secondary-accent bg-secondary-white font-montserrat"
                >
                  {priceRanges.map((range) => (
                    <option key={range.name} value={range.name}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Capacity */}
              <div>
                <label className="block text-sm font-medium text-secondary-heading mb-2 font-montserrat">
                  Guest Capacity
                </label>
                <select
                  value={selectedCapacity}
                  onChange={(e) => setSelectedCapacity(e.target.value)}
                  className="w-full px-3 py-2.5 border border-secondary-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary-accent/20 focus:border-secondary-accent bg-secondary-white font-montserrat"
                >
                  {capacityRanges.map((range) => (
                    <option key={range.name} value={range.name}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div>
                <label className="block text-sm font-medium text-secondary-heading mb-2 font-montserrat">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2.5 border border-secondary-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary-accent/20 focus:border-secondary-accent bg-secondary-white font-montserrat"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Clear Filters */}
              <div className="flex items-end">
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSelectedPriceRange("All");
                    setSelectedCapacity("All");
                    setSortBy("popularity");
                  }}
                  className="w-full px-4 py-2.5 text-sm text-secondary-accent hover:text-secondary-white hover:bg-secondary-accent rounded-lg border border-secondary-accent transition-colors duration-300 font-montserrat font-medium"
                >
                  Clear All
                </button>
              </div>
            </div>

            {/* Category Pills - Mobile Scrollable */}
            <div className="overflow-x-auto pb-2">
              <div
                className="flex space-x-3"
                style={{ minWidth: "max-content" }}
              >
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2.5 rounded-full text-sm font-medium border flex items-center space-x-2 flex-shrink-0 transition-all duration-300 font-montserrat ${
                      selectedCategory === category.name
                        ? "bg-secondary-accent text-secondary-white border-secondary-accent shadow-lg"
                        : "bg-secondary-white text-secondary-paragraphs border-secondary-border/50 hover:border-secondary-accent hover:text-secondary-accent"
                    }`}
                  >
                    <span>{category.name}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full transition-colors duration-300 ${
                        selectedCategory === category.name
                          ? "bg-secondary-white/20 text-secondary-white"
                          : "bg-secondary-background text-secondary-paragraphs"
                      }`}
                    >
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-First Venues Grid */}
      <section className="py-6 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Results Count */}
          <div className="mb-6 flex justify-between items-center">
            <span className="text-secondary-paragraphs font-montserrat">
              <span className="font-semibold text-secondary-heading">
                {sortedVenues.length}
              </span>{" "}
              venues found
            </span>

            {/* View Toggle - Desktop Only */}
            <div className="hidden sm:flex items-center space-x-1 bg-secondary-background rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-3 rounded-md transition-all duration-300 ${
                  viewMode === "grid"
                    ? "bg-secondary-accent text-secondary-white shadow-md"
                    : "text-secondary-paragraphs hover:text-secondary-accent hover:bg-secondary-white"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-3 rounded-md transition-all duration-300 ${
                  viewMode === "list"
                    ? "bg-secondary-accent text-secondary-white shadow-md"
                    : "text-secondary-paragraphs hover:text-secondary-accent hover:bg-secondary-white"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Venues Grid/List */}
          {viewMode === "grid" ? (
            // Mobile: 1 column, SM: 2 columns, LG: 3 columns
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedVenues.map((venue) => (
                <div
                  key={venue.id}
                  className="bg-secondary-white rounded-xl shadow-lg overflow-hidden border border-secondary-border/20 hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={venue.image}
                      alt={venue.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {venue.isHandpicked && (
                      <div className="absolute top-4 left-4">
                        <div className="bg-secondary-accent text-secondary-white text-xs px-3 py-1.5 rounded-full font-medium shadow-lg backdrop-blur-sm">
                          ⭐ Premium
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-secondary-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md">
                        <span className="text-yellow-500 text-sm">★</span>
                        <span className="font-bold text-secondary-heading ml-1">
                          {venue.rating}
                        </span>
                        <span className="text-secondary-paragraphs text-xs ml-1">
                          ({venue.reviews})
                        </span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-marcellus text-xl mb-2 text-secondary-heading line-clamp-1 group-hover:text-secondary-accent transition-colors duration-300">
                      {venue.name}
                    </h3>

                    <p className="text-sm text-secondary-paragraphs mb-3 flex items-center font-montserrat">
                      <svg
                        className="w-4 h-4 mr-2 text-secondary-accent flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                      </svg>
                      <span className="line-clamp-1">{venue.location}</span>
                    </p>

                    <p className="text-sm text-secondary-paragraphs mb-4 flex items-center font-montserrat">
                      <svg
                        className="w-4 h-4 mr-2 text-secondary-accent flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      {venue.capacity}
                    </p>

                    <div className="flex justify-between items-center mb-4 p-3 bg-secondary-background/50 rounded-lg">
                      <div className="text-center">
                        <div className="font-bold text-lg text-secondary-heading font-montserrat">
                          ₹{venue.vegPrice.toLocaleString()}
                        </div>
                        <div className="text-xs text-secondary-paragraphs font-montserrat">
                          veg per plate
                        </div>
                      </div>
                      <div className="w-px h-8 bg-secondary-border"></div>
                      <div className="text-center">
                        <div className="font-bold text-lg text-secondary-heading font-montserrat">
                          ₹{venue.nonVegPrice.toLocaleString()}
                        </div>
                        <div className="text-xs text-secondary-paragraphs font-montserrat">
                          non-veg per plate
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="inline-block px-3 py-1.5 bg-secondary-accent-background text-secondary rounded-full text-xs font-montserrat font-bold">
                        {venue.category}
                      </span>
                    </div>

                    <Link href={`/venues/${venue.id}`} className="block">
                      <WeddingButton
                        variant="wedding-light"
                        className="w-full text-sm"
                        expandOnHover={false}
                      >
                        View Details
                      </WeddingButton>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // List View - Mobile Optimized
            <div className="space-y-6">
              {sortedVenues.map((venue) => (
                <div
                  key={venue.id}
                  className="bg-secondary-white rounded-xl shadow-lg overflow-hidden border border-secondary-border/20 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Image */}
                    <div className="relative h-64 sm:h-auto sm:w-80 flex-shrink-0 overflow-hidden">
                      <Image
                        src={venue.image}
                        alt={venue.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {venue.isHandpicked && (
                        <div className="absolute top-4 left-4">
                          <div className="bg-secondary-accent text-secondary-white text-xs px-3 py-1.5 rounded-full font-medium shadow-lg backdrop-blur-sm">
                            ⭐ Premium
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex flex-col lg:flex-row lg:justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-marcellus text-2xl text-secondary-heading mb-2 group-hover:text-secondary-accent transition-colors duration-300">
                            {venue.name}
                          </h3>
                          <div className="flex items-center mb-2">
                            <div className="bg-secondary-accent-background rounded-lg px-3 py-2 mr-4">
                              <span className="text-yellow-500 text-lg">★</span>
                              <span className="font-bold text-secondary-heading ml-1">
                                {venue.rating}
                              </span>
                              <span className="text-secondary-paragraphs ml-2 text-sm font-montserrat">
                                ({venue.reviews} reviews)
                              </span>
                            </div>
                            <span className="inline-block px-3 py-1.5 bg-secondary-accent-background text-secondary-accent rounded-full text-sm font-montserrat font-medium">
                              {venue.category}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <p className="text-secondary-paragraphs flex items-center font-montserrat">
                          <svg
                            className="w-5 h-5 mr-3 text-secondary-accent flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                          </svg>
                          <span className="font-medium">{venue.location}</span>
                        </p>

                        <p className="text-secondary-paragraphs flex items-center font-montserrat">
                          <svg
                            className="w-5 h-5 mr-3 text-secondary-accent flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                          <span className="font-medium">{venue.capacity}</span>
                        </p>

                        <p className="text-secondary-paragraphs flex items-center font-montserrat">
                          <svg
                            className="w-5 h-5 mr-3 text-secondary-accent flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                            />
                          </svg>
                          <span className="font-medium">{venue.rooms}</span>
                        </p>
                      </div>

                      <p className="text-secondary-paragraphs font-montserrat mb-4 text-sm leading-relaxed line-clamp-2">
                        {venue.description}
                      </p>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="font-montserrat font-semibold text-secondary-heading mb-2 text-sm">
                          Key Features
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {venue.features.slice(0, 3).map((feature, index) => (
                            <span
                              key={index}
                              className="inline-block px-2 py-1 bg-secondary-background text-secondary-paragraphs rounded text-xs font-montserrat border border-secondary-border/30"
                            >
                              {feature}
                            </span>
                          ))}
                          {venue.features.length > 3 && (
                            <span className="inline-block px-2 py-1 bg-secondary-accent-background text-secondary-accent rounded text-xs font-montserrat font-medium">
                              +{venue.features.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="mt-auto">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div className="flex gap-6 p-4 bg-secondary-background/50 rounded-lg">
                            <div className="text-center">
                              <div className="font-bold text-xl text-secondary-heading font-montserrat">
                                ₹{venue.vegPrice.toLocaleString()}
                              </div>
                              <div className="text-xs text-secondary-paragraphs font-montserrat">
                                veg per plate
                              </div>
                            </div>
                            <div className="w-px bg-secondary-border"></div>
                            <div className="text-center">
                              <div className="font-bold text-xl text-secondary-heading font-montserrat">
                                ₹{venue.nonVegPrice.toLocaleString()}
                              </div>
                              <div className="text-xs text-secondary-paragraphs font-montserrat">
                                non-veg per plate
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-3">
                            <button className="px-4 py-2 border border-secondary-accent text-secondary-accent font-montserrat text-sm rounded-lg hover:bg-secondary-accent hover:text-secondary-white transition-colors duration-300">
                              Quick Quote
                            </button>
                            <Link href={`/venues/${venue.id}`}>
                              <WeddingButton
                                variant="wedding"
                                className="px-6"
                                expandOnHover={false}
                              >
                                View Details
                              </WeddingButton>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 px-4 bg-secondary-background">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="font-marcellus text-3xl sm:text-4xl font-bold text-secondary-heading mb-4">
              Plan Your Dream Wedding
            </h2>
            <p className="text-secondary-paragraphs font-montserrat text-lg leading-relaxed max-w-2xl mx-auto">
              Let our expert wedding planners help you find the perfect venue
              and create unforgettable memories for your special day.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/contact">
              <WeddingButton size="xl" variant="wedding">
                Book Free Consultation
              </WeddingButton>
            </Link>
            <Link href="/services">
              <WeddingButton size="xl" variant="wedding-light">
                Explore Packages
              </WeddingButton>
            </Link>
          </div>

          {/* Additional Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-secondary-white rounded-xl border border-secondary-border/20">
              <div className="w-12 h-12 bg-secondary-accent-background rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-secondary-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="font-montserrat font-semibold text-secondary-heading mb-2">
                Expert Guidance
              </h3>
              <p className="text-secondary-paragraphs text-sm">
                Personalized assistance from wedding planning experts
              </p>
            </div>

            <div className="text-center p-6 bg-secondary-white rounded-xl border border-secondary-border/20">
              <div className="w-12 h-12 bg-secondary-accent-background rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-secondary-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-montserrat font-semibold text-secondary-heading mb-2">
                Verified Venues
              </h3>
              <p className="text-secondary-paragraphs text-sm">
                All venues are personally inspected and verified
              </p>
            </div>

            <div className="text-center p-6 bg-secondary-white rounded-xl border border-secondary-border/20">
              <div className="w-12 h-12 bg-secondary-accent-background rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-secondary-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="font-montserrat font-semibold text-secondary-heading mb-2">
                Best Prices
              </h3>
              <p className="text-secondary-paragraphs text-sm">
                Competitive pricing with no hidden charges
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
