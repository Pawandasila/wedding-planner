"use client";

import React, { useState } from 'react';
import { useInView } from "framer-motion";
import { useRef } from "react";
import WeddingButton from '@/components/WeddingButton';
import Link from 'next/link';
import Image from 'next/image';

const weddingVenueData = [
  {
    id: 1,
    category: 'Hotels',
    name: 'The Grand Shiva Resort & Spa',
    location: 'Rishikesh, Uttarakhand',
    rating: 4.8,
    reviews: 156,
    vegPrice: 2500,
    nonVegPrice: 3000,
    capacity: '100-800 pax',
    rooms: '45 Rooms',
    features: ['4 Star & Above Wedding Hotels', 'Banquet Halls', 'Lawn/Garden Wedding'],
    image: '/hero-01.jpg',
    images: ['/hero-01.jpg', '/hero-02.jpg', '/hero-03.jpg'],
    isHandpicked: true,
    description: 'Nestled in the serene foothills of Himalayas, offering breathtaking views and luxury amenities for unforgettable wedding celebrations.',
    amenities: ['Pool', 'Spa', 'AC Banquet', 'Lawn', 'Rooms'],
    weddingSpecific: {
      mandapSetup: true,
      decorInclusions: 'Floral & Lighting',
      weddingCoordinator: true,
      multiEventSpaces: 3
    }
  },
  {
    id: 2,
    category: 'Resorts',
    name: 'Ananda Himalayan Resort',
    location: 'Narendra Nagar, Uttarakhand',
    rating: 4.9,
    reviews: 89,
    vegPrice: 4000,
    nonVegPrice: 4500,
    capacity: '50-300 pax',
    rooms: '78 Rooms',
    features: ['5 Star Wedding Hotels', 'Destination Weddings', 'Heritage Venue'],
    image: '/hero-02.jpg',
    images: ['/hero-02.jpg', '/hero-03.jpg', '/hero-04.jpg'],
    isHandpicked: true,
    description: 'Luxury palace resort with world-class spa facilities and panoramic valley views, perfect for destination weddings.',
    amenities: ['Spa', 'Palace', 'Mountain View', 'Luxury', 'Heritage'],
    weddingSpecific: {
      mandapSetup: true,
      decorInclusions: 'Complete Theme Setup',
      weddingCoordinator: true,
      multiEventSpaces: 5
    }
  },
  {
    id: 3,
    category: 'Banquet Halls',
    name: 'Hotel Garhwal Terrace',
    location: 'Mussoorie, Uttarakhand',
    rating: 4.5,
    reviews: 234,
    vegPrice: 1800,
    nonVegPrice: 2200,
    capacity: '150-500 pax',
    rooms: '32 Rooms',
    features: ['3 Star Hotels', 'Banquet Halls', 'Hill Station Wedding'],
    image: '/hero-03.jpg',
    images: ['/hero-03.jpg', '/hero-04.jpg', '/hero-05.jpg'],
    isHandpicked: false,
    description: 'Elegant banquet facilities with stunning Doon Valley views in the Queen of Hills, ideal for intimate weddings.',
    amenities: ['Valley View', 'AC Hall', 'Terrace', 'Parking', 'Catering'],
    weddingSpecific: {
      mandapSetup: true,
      decorInclusions: 'Basic Decoration',
      weddingCoordinator: false,
      multiEventSpaces: 2
    }
  },
  {
    id: 4,
    category: 'Heritage Venues',
    name: 'Neemrana Fort-Palace',
    location: 'Tijara, Uttarakhand',
    rating: 4.7,
    reviews: 167,
    vegPrice: 3500,
    nonVegPrice: 4000,
    capacity: '80-400 pax',
    rooms: '42 Rooms',
    features: ['Heritage Hotels', 'Fort Weddings', 'Royal Venue'],
    image: '/hero-04.jpg',
    images: ['/hero-04.jpg', '/hero-05.jpg', '/hero-06.jpg'],
    isHandpicked: true,
    description: '15th century fort-palace offering royal wedding experience with historical grandeur and authentic architecture.',
    amenities: ['Fort', 'Royal', 'Heritage', 'Courtyards', 'History'],
    weddingSpecific: {
      mandapSetup: true,
      decorInclusions: 'Royal Theme Setup',
      weddingCoordinator: true,
      multiEventSpaces: 4
    }
  },
  {
    id: 5,
    category: 'Outdoor Venues',
    name: 'The Machan Resort',
    location: 'Jim Corbett, Uttarakhand',
    rating: 4.6,
    reviews: 198,
    vegPrice: 2200,
    nonVegPrice: 2800,
    capacity: '100-600 pax',
    rooms: '28 Rooms',
    features: ['Resort Weddings', 'Wildlife Sanctuary', 'Nature Wedding'],
    image: '/hero-05.jpg',
    images: ['/hero-05.jpg', '/hero-06.jpg', '/hero-07.jpg'],
    isHandpicked: false,
    description: 'Unique tree-house resort experience surrounded by pristine wilderness, perfect for nature-themed weddings.',
    amenities: ['Wildlife', 'Tree House', 'Nature', 'Adventure', 'Unique'],
    weddingSpecific: {
      mandapSetup: true,
      decorInclusions: 'Nature Theme Setup',
      weddingCoordinator: true,
      multiEventSpaces: 2
    }
  },
  {
    id: 6,
    category: 'Destination Venues',
    name: 'Taj Rishikesh Resort & Spa',
    location: 'Rishikesh, Uttarakhand',
    rating: 4.9,
    reviews: 145,
    vegPrice: 5000,
    nonVegPrice: 6000,
    capacity: '50-400 pax',
    rooms: '79 Rooms',
    features: ['5 Star Luxury', 'Riverside Wedding', 'Spa Resort'],
    image: '/hero-06.jpg',
    images: ['/hero-06.jpg', '/hero-07.jpg', '/hero-08.jpg'],
    isHandpicked: true,
    description: 'Luxurious riverside resort offering world-class amenities with sacred Ganges views for blessed weddings.',
    amenities: ['Riverside', '5 Star', 'Spa', 'Luxury', 'Ganges View'],
    weddingSpecific: {
      mandapSetup: true,
      decorInclusions: 'Luxury Complete Setup',
      weddingCoordinator: true,
      multiEventSpaces: 6
    }
  },
  {
    id: 7,
    category: 'Farmhouse',
    name: 'Riverview Farmhouse',
    location: 'Dehradun, Uttarakhand',
    rating: 4.4,
    reviews: 178,
    vegPrice: 1600,
    nonVegPrice: 2000,
    capacity: '200-1000 pax',
    rooms: '12 Rooms',
    features: ['Farmhouse Wedding', 'Large Capacity', 'Outdoor Celebration'],
    image: '/hero-07.jpg',
    images: ['/hero-07.jpg', '/hero-08.jpg', '/hero-10.jpg'],
    isHandpicked: false,
    description: 'Spacious farmhouse with extensive grounds, perfect for large wedding celebrations and outdoor ceremonies.',
    amenities: ['Large Grounds', 'Outdoor', 'Parking', 'Kitchen', 'Garden'],
    weddingSpecific: {
      mandapSetup: true,
      decorInclusions: 'Outdoor Theme Setup',
      weddingCoordinator: false,
      multiEventSpaces: 3
    }
  },
  {
    id: 8,
    category: 'Poolside Venues',
    name: 'Regenta Resort Bhimtal',
    location: 'Bhimtal, Uttarakhand',
    rating: 4.6,
    reviews: 142,
    vegPrice: 2800,
    nonVegPrice: 3200,
    capacity: '80-350 pax',
    rooms: '56 Rooms',
    features: ['Poolside Wedding', 'Lake View', 'Resort Wedding'],
    image: '/hero-08.jpg',
    images: ['/hero-08.jpg', '/hero-10.jpg', '/hero-11.jpg'],
    isHandpicked: true,
    description: 'Beautiful lakeside resort with stunning poolside venues, offering serene water views for romantic weddings.',
    amenities: ['Pool', 'Lake View', 'Resort', 'Romantic', 'Scenic'],
    weddingSpecific: {
      mandapSetup: true,
      decorInclusions: 'Poolside Theme Setup',
      weddingCoordinator: true,
      multiEventSpaces: 3
    }
  }
];

export default function WeddingVenuesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [selectedCapacity, setSelectedCapacity] = useState('All');
  const [selectedVenue, setSelectedVenue] = useState('All');
  const [sortBy, setSortBy] = useState('popularity');
  const [venueSearchQuery, setVenueSearchQuery] = useState('');
  
  const categoriesRef = useRef(null);
  const venuesRef = useRef(null);
  
  const categoriesInView = useInView(categoriesRef, { once: true, margin: "-100px" });
  const venuesInView = useInView(venuesRef, { once: true, margin: "-100px" });

  // Define proper wedding venue categories with counts
  const categories = [
    { name: 'All', count: weddingVenueData.length },
    { name: 'Hotels', count: weddingVenueData.filter(v => v.category === 'Hotels').length },
    { name: 'Resorts', count: weddingVenueData.filter(v => v.category === 'Resorts').length },
    { name: 'Banquet Halls', count: weddingVenueData.filter(v => v.category === 'Banquet Halls').length },
    { name: 'Heritage Venues', count: weddingVenueData.filter(v => v.category === 'Heritage Venues').length },
    { name: 'Outdoor Venues', count: weddingVenueData.filter(v => v.category === 'Outdoor Venues').length },
    { name: 'Destination Venues', count: weddingVenueData.filter(v => v.category === 'Destination Venues').length },
    { name: 'Farmhouse', count: weddingVenueData.filter(v => v.category === 'Farmhouse').length },
    { name: 'Poolside Venues', count: weddingVenueData.filter(v => v.category === 'Poolside Venues').length }
  ].filter(cat => cat.count > 0 || cat.name === 'All');

  // Price range filters
  const priceRanges = [
    { name: 'All', label: 'All Budgets' },
    { name: '1000-2500', label: '₹1,000 - ₹2,500' },
    { name: '2500-4000', label: '₹2,500 - ₹4,000' },
    { name: '4000-6000', label: '₹4,000 - ₹6,000' },
    { name: '6000+', label: '₹6,000+' }
  ];

  // Capacity filters
  const capacityRanges = [
    { name: 'All', label: 'All Capacities' },
    { name: '50-200', label: '50-200 Guests' },
    { name: '200-500', label: '200-500 Guests' },
    { name: '500-800', label: '500-800 Guests' },
    { name: '800+', label: '800+ Guests' }
  ];

  // Sort options
  const sortOptions = [
    { value: 'popularity', label: 'Popularity' },
    { value: 'rating', label: 'Rating (High to Low)' },
    { value: 'price-low', label: 'Price (Low to High)' },
    { value: 'price-high', label: 'Price (High to Low)' },
    { value: 'capacity', label: 'Capacity (High to Low)' }
  ];

  // Venue options for dropdown - organized by category
  const venueOptions = [
    { name: 'All', label: 'All Venues', category: '' },
    ...weddingVenueData
      .filter(venue => 
        venueSearchQuery === '' || 
        venue.name.toLowerCase().includes(venueSearchQuery.toLowerCase()) ||
        venue.location.toLowerCase().includes(venueSearchQuery.toLowerCase())
      )
      .sort((a, b) => a.category.localeCompare(b.category))
      .map(venue => ({
        name: venue.name,
        label: `${venue.name} - ${venue.location}`,
        category: venue.category
      }))
  ];

  // Filter venues based on selected filters
  let filteredVenues = weddingVenueData;

  // Filter by category
  if (selectedCategory !== 'All') {
    filteredVenues = filteredVenues.filter(venue => venue.category === selectedCategory);
  }

  // Filter by price range
  if (selectedPriceRange !== 'All') {
    filteredVenues = filteredVenues.filter(venue => {
      const price = venue.vegPrice;
      switch (selectedPriceRange) {
        case '1000-2500':
          return price >= 1000 && price <= 2500;
        case '2500-4000':
          return price >= 2500 && price <= 4000;
        case '4000-6000':
          return price >= 4000 && price <= 6000;
        case '6000+':
          return price >= 6000;
        default:
          return true;
      }
    });
  }

  // Filter by capacity
  if (selectedCapacity !== 'All') {
    filteredVenues = filteredVenues.filter(venue => {
      const capacityStr = venue.capacity.toLowerCase();
      const capacityNumbers = capacityStr.match(/\d+/g);
      if (capacityNumbers && capacityNumbers.length > 0) {
        const maxCapacity = Math.max(...capacityNumbers.map(Number));
        switch (selectedCapacity) {
          case '50-200':
            return maxCapacity >= 50 && maxCapacity <= 200;
          case '200-500':
            return maxCapacity >= 200 && maxCapacity <= 500;
          case '500-800':
            return maxCapacity >= 500 && maxCapacity <= 800;
          case '800+':
            return maxCapacity >= 800;
          default:
            return true;
        }
      }
      return true;
    });
  }

  // Filter by specific venue
  if (selectedVenue !== 'All') {
    filteredVenues = filteredVenues.filter(venue => venue.name === selectedVenue);
  }

  // Sort venues based on selected sort option
  const sortedVenues = [...filteredVenues].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price-low':
        return a.vegPrice - b.vegPrice;
      case 'price-high':
        return b.vegPrice - a.vegPrice;
      case 'capacity':
        const aCapacity = Math.max(...(a.capacity.match(/\d+/g)?.map(Number) || [0]));
        const bCapacity = Math.max(...(b.capacity.match(/\d+/g)?.map(Number) || [0]));
        return bCapacity - aCapacity;
      case 'popularity':
      default:
        return b.reviews - a.reviews;
    }
  });

  // Use sortedVenues as the final filtered venues
  const finalVenues = sortedVenues;

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section with Search */}
      <section className="py-8 px-4 border-b border-gray-200">
        <div className="w-full max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-gray-700">Home</Link> 
            <span className="mx-2">{'>'}</span> 
            <Link href="/venues" className="hover:text-gray-700">Venues</Link>
            <span className="mx-2">{'>'}</span> 
            <span>Wedding Venues</span>
          </div>
          
          {/* Title and Search */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <div className="mb-4 lg:mb-0">
              <h1 
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ 
                  fontFamily: 'var(--font-marcellus)',
                  color: 'var(--secondary-heading)'
                }}
              >
                Wedding Venues in Uttarakhand
              </h1>
              <p className="text-gray-600">
                Showing {finalVenues.length} wedding venues as per your search criteria
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Wedding Venues..."
                  className="w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-400"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                />
                <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              
              {/* View Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-all duration-300 ${
                    viewMode === 'grid' ? 'bg-pink-100 text-pink-600' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded transition-all duration-300 ${
                    viewMode === 'list' ? 'bg-pink-100 text-pink-600' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Filters Section */}
      <section 
        ref={categoriesRef}
        className="py-8 px-4 border-b border-gray-200"
        style={{ backgroundColor: '#fafafa' }}
      >
        <div className="w-full max-w-7xl mx-auto">
          <div 
            className={`transition-all duration-1000 delay-200 ${
              categoriesInView 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 
              className="text-xl font-bold mb-6 text-center"
              style={{ 
                fontFamily: 'var(--font-marcellus)',
                color: 'var(--secondary-heading)'
              }}
            >
              Popular Wedding Destinations in Uttarakhand
            </h3>
            {/* Popular Cities */}
            <div className="flex flex-wrap justify-center items-center gap-6">
              {[
                { name: 'Dehradun', image: '/hero-01.jpg', venues: '45+' },
                { name: 'Rishikesh', image: '/hero-02.jpg', venues: '38+' },
                { name: 'Mussoorie', image: '/hero-03.jpg', venues: '32+' },
                { name: 'Haridwar', image: '/hero-04.jpg', venues: '28+' },
                { name: 'Nainital', image: '/hero-05.jpg', venues: '25+' },
                { name: 'Corbett', image: '/hero-06.jpg', venues: '18+' },
                { name: 'Almora', image: '/hero-07.jpg', venues: '15+' },
                { name: 'Kedarnath', image: '/hero-08.jpg', venues: '12+' },
                { name: 'Badrinath', image: '/hero-10.jpg', venues: '10+' },
                { name: 'Auli', image: '/hero-11.jpg', venues: '8+' }
              ].map((city) => (
                <div key={city.name} className="flex flex-col items-center cursor-pointer group">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden mb-2 group-hover:shadow-lg transition-shadow duration-300 border-4 border-pink-100 group-hover:border-pink-200">
                    <Image
                      src={city.image}
                      alt={city.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span 
                    className="text-sm font-bold text-gray-700 group-hover:text-gray-900 transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    {city.name}
                  </span>
                  <span 
                    className="text-xs text-gray-500 group-hover:text-pink-600 transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    {city.venues} venues
                  </span>
                </div>
              ))}
              <div className="flex flex-col items-center cursor-pointer group">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center mb-2 group-hover:shadow-lg transition-shadow duration-300">
                  <span className="text-white font-bold text-lg">+25</span>
                </div>
                <span 
                  className="text-sm font-bold text-gray-700 group-hover:text-gray-900 transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  More Cities
                </span>
                <span 
                  className="text-xs text-gray-500 group-hover:text-pink-600 transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  Explore all
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Controls Section */}
      <section className="py-6 px-4 bg-white border-b border-gray-200">
        <div className="w-full max-w-7xl mx-auto">
          {/* Filter Controls */}
          <div className="mb-6 space-y-4">
            {/* Additional Filters Row */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex flex-wrap gap-4 items-center">
                {/* Price Range Filter */}
                <div className="flex items-center gap-2">
                  <label 
                    className="text-sm font-medium text-gray-700"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    Budget:
                  </label>
                  <select
                    value={selectedPriceRange}
                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                    className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-400 bg-white"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    {priceRanges.map((range) => (
                      <option key={range.name} value={range.name}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Capacity Filter */}
                <div className="flex items-center gap-2">
                  <label 
                    className="text-sm font-medium text-gray-700"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    Capacity:
                  </label>
                  <select
                    value={selectedCapacity}
                    onChange={(e) => setSelectedCapacity(e.target.value)}
                    className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-400 bg-white"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    {capacityRanges.map((range) => (
                      <option key={range.name} value={range.name}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Venue Filter */}
                <div className="flex items-center gap-2">
                  <label 
                    className="text-sm font-medium text-gray-700"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    Venue:
                  </label>
                  <div className="relative">
                    <select
                      value={selectedVenue}
                      onChange={(e) => setSelectedVenue(e.target.value)}
                      className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-400 min-w-[250px] appearance-none bg-white"
                      style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                      {venueOptions.map((venue) => (
                        <option key={venue.name} value={venue.name}>
                          {venue.label}
                        </option>
                      ))}
                    </select>
                    <svg className="absolute right-3 top-2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Venue Search (when dropdown is open) */}
                {selectedVenue === 'All' && venueOptions.length > 10 && (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Search venues..."
                      value={venueSearchQuery}
                      onChange={(e) => setVenueSearchQuery(e.target.value)}
                      className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-400 min-w-[200px] bg-white"
                      style={{ fontFamily: 'var(--font-montserrat)' }}
                    />
                    {venueSearchQuery && (
                      <button
                        onClick={() => setVenueSearchQuery('')}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                  </div>
                )}

                {/* Sort Filter */}
                <div className="flex items-center gap-2">
                  <label 
                    className="text-sm font-medium text-gray-700"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    Sort by:
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-400 bg-white"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Clear Filters Button */}
                {(selectedCategory !== 'All' || selectedPriceRange !== 'All' || selectedCapacity !== 'All' || selectedVenue !== 'All') && (
                  <button
                    onClick={() => {
                      setSelectedCategory('All');
                      setSelectedPriceRange('All');
                      setSelectedCapacity('All');
                      setSelectedVenue('All');
                      setVenueSearchQuery('');
                      setSortBy('popularity');
                    }}
                    className="px-4 py-2 text-sm text-pink-600 hover:text-pink-700 hover:bg-pink-50 rounded-lg transition-all duration-300 border border-pink-200 hover:border-pink-300 bg-white font-medium"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    Clear All Filters
                  </button>
                )}

                {/* Results Count */}
                <div className="ml-auto">
                  <div className="text-right">
                    <span 
                      className="text-sm font-medium text-gray-700"
                      style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                      Showing {finalVenues.length} of {weddingVenueData.length} venues
                    </span>
                    {(selectedCategory !== 'All' || selectedPriceRange !== 'All' || selectedCapacity !== 'All' || selectedVenue !== 'All') && (
                      <div className="text-xs text-pink-600 mt-1 font-medium">
                        Filtered results
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 font-medium border flex items-center gap-2 ${
                    selectedCategory === category.name
                      ? 'bg-pink-500 text-white border-pink-500'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-pink-300 hover:bg-pink-50'
                  }`}
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  <span>{category.name}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    selectedCategory === category.name
                      ? 'bg-white bg-opacity-20 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Active Filters Display */}
            {(selectedPriceRange !== 'All' || selectedCapacity !== 'All' || selectedVenue !== 'All') && (
              <div className="flex flex-wrap gap-2 items-center">
                <span 
                  className="text-sm text-gray-600"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  Active filters:
                </span>
                {selectedPriceRange !== 'All' && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-pink-100 text-pink-700 rounded-full text-xs">
                    Budget: {priceRanges.find(r => r.name === selectedPriceRange)?.label}
                    <button 
                      onClick={() => setSelectedPriceRange('All')}
                      className="hover:text-pink-900"
                    >
                      ×
                    </button>
                  </span>
                )}
                {selectedCapacity !== 'All' && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-pink-100 text-pink-700 rounded-full text-xs">
                    Capacity: {capacityRanges.find(r => r.name === selectedCapacity)?.label}
                    <button 
                      onClick={() => setSelectedCapacity('All')}
                      className="hover:text-pink-900"
                    >
                      ×
                    </button>
                  </span>
                )}
                {selectedVenue !== 'All' && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                    Venue: {selectedVenue}
                    <button 
                      onClick={() => setSelectedVenue('All')}
                      className="hover:text-blue-900"
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="flex max-w-7xl mx-auto px-4 py-8 gap-8">
        
        {/* Main Content */}
        <div className="flex-1">
          {/* Venues Grid/List */}
          <div 
            ref={venuesRef}
            className={`transition-all duration-1000 delay-400 ${
              venuesInView 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            {viewMode === 'grid' ? (
              /* Grid View - Image Cards */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {finalVenues.map((venue, index) => (
                  <div
                    key={venue.id}
                    className={`transition-all duration-700 ${
                      venuesInView 
                        ? 'opacity-100 translate-y-0 scale-100' 
                        : 'opacity-0 translate-y-8 scale-95'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-2">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={venue.image}
                          alt={venue.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="eager"
                        />
                        {venue.isHandpicked && (
                          <div className="absolute top-3 left-3">
                            <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs px-2 py-1 rounded-full flex items-center font-medium">
                              <span className="mr-1">💎</span>
                              Premium
                            </div>
                          </div>
                        )}
                        <div className="absolute top-3 right-3">
                          <button className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          </button>
                        </div>
                        {/* Rating Badge */}
                        <div className="absolute bottom-3 left-3">
                          <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
                            <span className="text-yellow-500 text-sm">★</span>
                            <span className="font-semibold text-sm ml-1" style={{ color: '#4a4a4a' }}>
                              {venue.rating}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        <h3 
                          className="font-bold text-lg mb-2 line-clamp-1"
                          style={{ 
                            fontFamily: 'var(--font-marcellus)',
                            color: '#4a4a4a'
                          }}
                          title={venue.name}
                        >
                          {venue.name}
                        </h3>

                        <div className="flex items-center text-gray-600 text-sm mb-2">
                          <svg className="w-3 h-3 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="truncate">{venue.location}</span>
                        </div>

                        <div className="flex items-center text-gray-600 text-sm mb-3">
                          <svg className="w-3 h-3 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          <span className="truncate text-xs">{venue.capacity}</span>
                        </div>

                        {/* Wedding-Specific Features */}
                        <div className="flex items-center text-pink-600 text-xs mb-3">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Mandap Setup • {venue.weddingSpecific.multiEventSpaces} Event Spaces</span>
                        </div>

                        {/* Pricing */}
                        <div className="flex justify-between items-center mb-3">
                          <div className="text-center">
                            <div className="font-bold text-lg" style={{ color: '#4a4a4a' }}>
                              ₹{venue.vegPrice.toLocaleString()}
                            </div>
                            <div className="text-xs text-gray-500">veg per plate</div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-lg" style={{ color: '#4a4a4a' }}>
                              ₹{venue.nonVegPrice.toLocaleString()}
                            </div>
                            <div className="text-xs text-gray-500">non-veg per plate</div>
                          </div>
                        </div>

                        {/* Category Badge */}
                        <div className="mb-3">
                          <span 
                            className="inline-block px-2 py-1 rounded-full text-xs font-medium"
                            style={{ 
                              backgroundColor: 'var(--secondary-background)',
                              color: 'var(--secondary-accent)'
                            }}
                          >
                            {venue.category}
                          </span>
                        </div>

                        {/* Action Button */}
                        <button 
                          className="w-full py-2 text-white font-medium rounded-lg transition-all duration-300 hover:opacity-90 text-sm"
                          style={{ 
                            backgroundColor: 'var(--secondary-accent)',
                            fontFamily: 'var(--font-montserrat)'
                          }}
                        >
                          <Link href={'/venues/' + venue.id} className="flex items-center justify-center gap-2">
                          View Wedding Details
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* List View - Detailed Cards */
              <div className="space-y-6">
                {finalVenues.map((venue, index) => (
                  <div
                    key={venue.id}
                    className={`transition-all duration-700 ${
                      venuesInView 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div 
                      className="bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 overflow-hidden mx-auto"
                      style={{ 
                        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 15px 0px',
                        maxWidth: '1200px',
                        width: '100%'
                      }}
                    >
                      <div className="flex flex-col md:flex-row items-start p-5" style={{ minHeight: '250px' }}>
                        {/* Image Section */}
                        <div className="w-full md:w-64 mr-0 md:mr-6 mb-4 md:mb-0 flex-shrink-0">
                          <div className="relative">
                            {/* Main Image */}
                            <div className="relative w-full h-48 md:h-42 overflow-hidden rounded-lg">
                              <Image
                                src={venue.image}
                                alt={venue.name}
                                fill
                                className="object-cover"
                                loading="eager"
                              />
                              {venue.isHandpicked && (
                                <div className="absolute top-2 left-2">
                                  <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs px-2 py-1 rounded flex items-center font-medium">
                                    <span className="mr-1">💎</span>
                                    Premium
                                  </div>
                                </div>
                              )}
                            </div>
                            
                            {/* Small thumbnails */}
                            <div className="flex mt-3 gap-2">
                              {venue.images.slice(0, 2).map((img, idx) => (
                                <div key={idx} className="relative w-10 h-10 rounded overflow-hidden border border-gray-200">
                                  <Image
                                    src={img}
                                    alt={`${venue.name} ${idx + 1}`}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="flex-1 min-w-0 relative">
                          {/* Title and Rating */}
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                            <div className="flex-1 min-w-0 mb-2 md:mb-0">
                              <h3 
                                className="font-bold text-xl md:text-2xl truncate"
                                style={{ 
                                  fontFamily: 'var(--font-marcellus)',
                                  color: '#4a4a4a',
                                  maxWidth: '400px'
                                }}
                                title={venue.name}
                              >
                                {venue.name}
                              </h3>
                            </div>
                            <div className="flex items-center whitespace-nowrap">
                              <span className="text-pink-600 mr-1 text-lg">★</span>
                              <span className="font-semibold text-lg" style={{ color: '#4a4a4a' }}>
                                {venue.rating}
                              </span>
                              <span className="text-gray-500 ml-2 text-sm">
                                ({venue.reviews} review{venue.reviews !== 1 ? 's' : ''})
                              </span>
                            </div>
                          </div>

                          {/* Location, Venue Type, and Capacity */}
                          <div className="space-y-2 mb-4">
                            {/* Location */}
                            <div className="flex items-center text-gray-600 text-sm">
                              <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span>{venue.location}</span>
                            </div>

                            {/* Venue Type */}
                            <div className="flex items-center text-gray-600 text-sm">
                              <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                              <span className="truncate" title={venue.features.join(', ')}>
                                {venue.features.join(', ')}
                              </span>
                            </div>

                            {/* Capacity & Wedding Specific */}
                            <div className="flex items-center text-gray-600 text-sm">
                              <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                              <span>{venue.capacity} • {venue.weddingSpecific.multiEventSpaces} Event Spaces</span>
                            </div>

                            {/* Wedding Features */}
                            <div className="flex items-center text-pink-600 text-sm">
                              <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span>
                                Mandap Setup • {venue.weddingSpecific.decorInclusions}
                                {venue.weddingSpecific.weddingCoordinator && ' • Coordinator'}
                              </span>
                            </div>
                          </div>

                          {/* Pricing */}
                          <div className="flex items-start gap-8 mb-4">
                            <div>
                              <p className="text-xs text-gray-500 mb-1" style={{ lineHeight: '16px' }}>Veg Wedding Menu</p>
                              <div className="flex items-baseline">
                                <span className="text-xl font-semibold mr-2" style={{ color: '#4a4a4a' }}>
                                  ₹{venue.vegPrice.toLocaleString()}
                                </span>
                                <span className="text-xs text-gray-600">per plate</span>
                              </div>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 mb-1" style={{ lineHeight: '16px' }}>Non-veg Wedding Menu</p>
                              <div className="flex items-baseline">
                                <span className="text-xl font-semibold mr-2" style={{ color: '#4a4a4a' }}>
                                  ₹{venue.nonVegPrice.toLocaleString()}
                                </span>
                                <span className="text-xs text-gray-600">per plate</span>
                              </div>
                            </div>
                          </div>

                          {/* Feature Tags */}
                          <div className="flex flex-wrap items-center gap-2 mb-4">
                            <span className="bg-pink-50 text-pink-700 px-3 py-1 rounded text-xs border border-pink-200">
                              {venue.rooms}
                            </span>
                            {venue.amenities.slice(0, 2).map((amenity, idx) => (
                              <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs">
                                {amenity}
                              </span>
                            ))}
                            {venue.amenities.length > 2 && (
                              <span className="text-xs text-gray-500 underline font-medium">
                                +{venue.amenities.length - 2} more
                              </span>
                            )}
                          </div>

                          {/* Description */}
                          <div className="mb-4">
                            <p 
                              className="text-sm text-gray-500 line-clamp-2"
                              style={{ lineHeight: '1.4' }}
                              title={venue.description}
                            >
                              {venue.description}
                            </p>
                          </div>

                          {/* Send Message Button */}
                          <div className="flex justify-end">
                            <button 
                              className="px-6 py-2 text-white font-medium rounded-lg transition-all duration-300 hover:opacity-90 text-sm"
                              style={{ 
                                backgroundColor: 'var(--secondary-accent)',
                                fontFamily: 'var(--font-montserrat)'
                              }}
                            >
                              Get Wedding Quote
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 flex-shrink-0 hidden lg:block">
          <div className="sticky top-4 space-y-6">
            
            {/* Wedding Venue Types */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h3 
                className="font-bold text-lg mb-4"
                style={{ 
                  fontFamily: 'var(--font-marcellus)',
                  color: 'var(--secondary-heading)'
                }}
              >
                Wedding Venue Types
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Banquet Halls', image: '/offerring-01.jpg' },
                  { name: 'Resorts', image: '/offerring-02.jpg' },
                  { name: 'Heritage Venues', image: '/offerring-03.jpg' },
                  { name: 'Outdoor Venues', image: '/offerring-04.jpg' }
                ].map((type) => (
                  <div key={type.name} className="text-center cursor-pointer group">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mx-auto mb-2 group-hover:shadow-md transition-shadow duration-300">
                      <Image
                        src={type.image}
                        alt={type.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span 
                      className="text-xs text-gray-600 group-hover:text-gray-800 transition-colors duration-300"
                      style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                      {type.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Wedding Budget Range */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h3 
                className="font-bold text-lg mb-4"
                style={{ 
                  fontFamily: 'var(--font-marcellus)',
                  color: 'var(--secondary-heading)'
                }}
              >
                Wedding Budget (Per Plate)
              </h3>
              <div className="space-y-3">
                {[
                  '₹1,000 - ₹2,000 (Budget)',
                  '₹2,000 - ₹3,500 (Mid-range)',
                  '₹3,500 - ₹5,000 (Premium)',
                  '₹5,000+ (Luxury)'
                ].map((budget) => (
                  <label key={budget} className="flex items-center cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="mr-3 accent-pink-500" 
                    />
                    <span 
                      className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300"
                      style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                      {budget}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Wedding Services */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h3 
                className="font-bold text-lg mb-4"
                style={{ 
                  fontFamily: 'var(--font-marcellus)',
                  color: 'var(--secondary-heading)'
                }}
              >
                Wedding Services
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Mandap Setup', image: '/gallery-01.jpg' },
                  { name: 'Decoration', image: '/gallery-02.jpg' },
                  { name: 'Coordination', image: '/gallery-03.jpg' },
                  { name: 'Catering', image: '/gallery-04.jpg' }
                ].map((service) => (
                  <div key={service.name} className="text-center cursor-pointer group">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mx-auto mb-2 group-hover:shadow-md transition-shadow duration-300">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span 
                      className="text-xs text-gray-600 group-hover:text-gray-800 transition-colors duration-300"
                      style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                      {service.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Guest Capacity */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h3 
                className="font-bold text-lg mb-4"
                style={{ 
                  fontFamily: 'var(--font-marcellus)',
                  color: 'var(--secondary-heading)'
                }}
              >
                Guest Capacity
              </h3>
              <div className="space-y-3">
                {[
                  '50-100 guests (Intimate)',
                  '100-300 guests (Medium)',
                  '300-600 guests (Large)',
                  '600+ guests (Grand)'
                ].map((capacity) => (
                  <label key={capacity} className="flex items-center cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="mr-3 accent-pink-500" 
                    />
                    <span 
                      className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300"
                      style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                      {capacity}
                    </span>
                  </label>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section 
        className="py-16 px-4"
        style={{ backgroundColor: 'var(--secondary-background)' }}
      >
        <div className="container mx-auto text-center">
          <h2 
            className="text-3xl md:text-4xl mb-6"
            style={{ 
              fontFamily: 'var(--font-marcellus)',
              color: 'var(--secondary-heading)'
            }}
          >
            Plan Your Dream Wedding
          </h2>
          <p 
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
            style={{ 
              fontFamily: 'var(--font-montserrat)',
              color: 'var(--secondary-heading)'
            }}
          >
            Let our wedding specialists help you find the perfect venue and plan 
            every detail of your special day. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <WeddingButton size="lg">
                Book Venue Consultation
              </WeddingButton>
            </Link>
            <Link href="/services/wedding-planning">
              <WeddingButton size="lg">
                View Wedding Packages
              </WeddingButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
