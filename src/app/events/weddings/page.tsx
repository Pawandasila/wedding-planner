'use client';
import React, { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';

const WeddingsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [guestCapacity, setGuestCapacity] = useState('all');
  const [selectedRating, setSelectedRating] = useState('all');
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  // Clear all filters function
  const clearAllFilters = () => {
    setSelectedCategory('all');
    setPriceRange('all');
    setSelectedLocation('all');
    setGuestCapacity('all');
    setSelectedRating('all');
    setSelectedAmenities([]);
    setSelectedFeatures([]);
    setSearchQuery('');
  };

  const venues = [
    {
      id: 1,
      name: "Royal Palace Gardens",
      location: "Udaipur, Rajasthan",
      thumbnail: "/wedding-01.jpg",
      price: "₹15,00,000",
      priceRange: "luxury",
      category: "palace",
      rating: 4.9,
      totalEvents: 250,
      capacity: "500-800 guests",
      specialFeatures: [
        "Heritage Palace Setting",
        "Lake View Ceremony",
        "Royal Architecture",
        "In-house Catering",
        "Luxury Accommodation"
      ],
      highlights: "Experience royalty with stunning lake views and authentic Rajasthani architecture",
      amenities: ["Parking", "AC Halls", "Decoration", "Photography", "Catering"],
      images: ["/gallery-01.jpg", "/gallery-02.jpg", "/gallery-03.jpg"]
    },
    {
      id: 2,
      name: "Serenity Beach Resort",
      location: "Goa",
      thumbnail: "/wedding-02.jpg",
      price: "₹12,00,000",
      priceRange: "luxury",
      category: "beach",
      rating: 4.8,
      totalEvents: 180,
      capacity: "200-400 guests",
      specialFeatures: [
        "Beachfront Ceremony",
        "Sunset Wedding Views",
        "Ocean-facing Mandap",
        "Beach Activities",
        "Spa Services"
      ],
      highlights: "Say 'I do' with your toes in the sand and the ocean as your backdrop",
      amenities: ["Beach Access", "Resort Stay", "Water Sports", "Spa", "Multi-cuisine"],
      images: ["/gallery-02.jpg", "/gallery-04.jpg", "/gallery-05.jpg"]
    },
    {
      id: 3,
      name: "Heritage Haveli",
      location: "Jaipur, Rajasthan",
      thumbnail: "/wedding-03.jpg",
      price: "₹8,50,000",
      priceRange: "premium",
      category: "heritage",
      rating: 4.7,
      totalEvents: 320,
      capacity: "300-600 guests",
      specialFeatures: [
        "Authentic Rajasthani Decor",
        "Heritage Rooms"
      ],
      highlights: "Immerse in royal Rajasthani culture with traditional architecture and customs",
      amenities: ["Heritage Tour", "Cultural Shows", "Traditional Catering"],
      images: ["/gallery-03.jpg", "/gallery-06.jpg", "/gallery-07.jpg"]
    },
    {
      id: 4,
      name: "Mountain View Resort",
      location: "Shimla, Himachal Pradesh",
      thumbnail: "/wedding-04.jpg",
      price: "₹6,00,000",
      priceRange: "premium",
      category: "mountain",
      rating: 4.6,
      totalEvents: 145,
      capacity: "150-300 guests",
      specialFeatures: [
        "Himalayan Backdrop",
        "Pine Forest Setting",
        "Adventure Activities",
        "Bonfire Arrangements",
        "Mountain Cuisine"
      ],
      highlights: "Celebrate love amidst snow-capped mountains and pristine natural beauty",
      amenities: ["Mountain Activities", "Bonfire", "Trekking", "Nature Walks", "Organic Food"],
      images: ["/gallery-04.jpg", "/gallery-08.jpg", "/gallery-09.jpg"]
    },
    {
      id: 5,
      name: "Grand Ballroom Hotel",
      location: "Mumbai, Maharashtra",
      thumbnail: "/wedding-05.jpg",
      price: "₹10,00,000",
      priceRange: "luxury",
      category: "hotel",
      rating: 4.8,
      totalEvents: 420,
      capacity: "400-1000 guests",
      specialFeatures: [
        "Luxury Ballroom",
        "City Skyline Views",
        "5-Star Hospitality",
        "Multiple Venues",
        "Valet Parking"
      ],
      highlights: "Sophisticated urban wedding with world-class amenities and city views",
      amenities: ["Valet Parking", "Multiple Halls", "5-Star Service", "City Views", "Luxury Suites"],
      images: ["/gallery-05.jpg", "/gallery-10.jpg", "/gallery-11.jpg"]
    },
    {
      id: 6,
      name: "Garden Paradise",
      location: "Bangalore, Karnataka",
      thumbnail: "/wedding-06.jpg",
      price: "₹4,50,000",
      priceRange: "affordable",
      category: "garden",
      rating: 4.5,
      totalEvents: 280,
      capacity: "200-500 guests",
      specialFeatures: [
        "Lush Garden Setting",
        "Flower Decorations",
        "Open-air Ceremony",
        "Natural Photography",
        "Eco-friendly Venue"
      ],
      highlights: "Natural beauty meets celebration in this enchanting garden paradise",
      amenities: ["Garden Setting", "Natural Decor", "Eco-friendly", "Photo Sessions", "Fresh Air"],
      images: ["/gallery-06.jpg", "/gallery-12.jpg", "/gallery-01.jpg"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Venues', icon: '🏛️' },
    { id: 'palace', name: 'Palaces', icon: '👑' },
    { id: 'beach', name: 'Beach', icon: '🏖️' },
    { id: 'heritage', name: 'Heritage', icon: '🏰' },
    { id: 'mountain', name: 'Mountain', icon: '⛰️' },
    { id: 'hotel', name: 'Hotels', icon: '🏨' },
    { id: 'garden', name: 'Gardens', icon: '🌺' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', icon: '💰' },
    { id: 'affordable', name: 'Under ₹5L', icon: '💵' },
    { id: 'premium', name: '₹5L - ₹10L', icon: '💸' },
    { id: 'luxury', name: 'Above ₹10L', icon: '💎' }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', icon: '🌍' },
    { id: 'rajasthan', name: 'Rajasthan', icon: '🏰' },
    { id: 'goa', name: 'Goa', icon: '🏖️' },
    { id: 'mumbai', name: 'Mumbai', icon: '🏙️' },
    { id: 'himachal', name: 'Himachal Pradesh', icon: '⛰️' },
    { id: 'karnataka', name: 'Karnataka', icon: '🌺' }
  ];

  const guestCapacities = [
    { id: 'all', name: 'Any Capacity', icon: '👥' },
    { id: 'small', name: 'Up to 200 guests', icon: '👨‍👩‍👧‍👦' },
    { id: 'medium', name: '200-500 guests', icon: '👥' },
    { id: 'large', name: '500+ guests', icon: '🏟️' }
  ];

  const ratingFilters = [
    { id: 'all', name: 'All Ratings', icon: '⭐' },
    { id: '4.5+', name: '4.5+ Stars', icon: '🌟' },
    { id: '4+', name: '4.0+ Stars', icon: '⭐' },
    { id: '3.5+', name: '3.5+ Stars', icon: '✨' }
  ];

  // Available amenities for filtering
  const availableAmenities = [
    { id: 'parking', name: 'Parking', icon: '🅿️' },
    { id: 'ac-halls', name: 'AC Halls', icon: '❄️' },
    { id: 'decoration', name: 'Decoration', icon: '🎨' },
    { id: 'photography', name: 'Photography', icon: '📸' },
    { id: 'catering', name: 'Catering', icon: '🍽️' },
    { id: 'garden-setting', name: 'Garden Setting', icon: '🌿' },
    { id: 'natural-decor', name: 'Natural Decor', icon: '🌸' },
    { id: 'eco-friendly', name: 'Eco-friendly', icon: '♻️' },
    { id: 'luxury-accommodation', name: 'Luxury Accommodation', icon: '🏨' }
  ];

  // Available special features for filtering
  const availableFeatures = [
    { id: 'heritage-palace', name: 'Heritage Palace Setting', icon: '🏰' },
    { id: 'lake-view', name: 'Lake View Ceremony', icon: '🏞️' },
    { id: 'royal-architecture', name: 'Royal Architecture', icon: '🏛️' },
    { id: 'beachfront-location', name: 'Beachfront Location', icon: '🏖️' },
    { id: 'sunset-views', name: 'Sunset Views', icon: '🌅' },
    { id: 'private-beach', name: 'Private Beach Access', icon: '🏝️' },
    { id: 'mountain-views', name: 'Mountain Views', icon: '⛰️' },
    { id: 'outdoor-ceremonies', name: 'Outdoor Ceremonies', icon: '🌲' },
    { id: 'natural-photography', name: 'Natural Photography', icon: '📷' },
    { id: 'in-house-catering', name: 'In-house Catering', icon: '👨‍🍳' }
  ];

  // Toggle functions for multi-select filters
  const toggleAmenity = (amenityId : string) => {
    setSelectedAmenities(prev => 
      prev.includes(amenityId) 
        ? prev.filter(id => id !== amenityId)
        : [...prev, amenityId]
    );
  };

  const toggleFeature = (featureId : string) => {
    setSelectedFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const filteredVenues = venues.filter(venue => {
    const categoryMatch = selectedCategory === 'all' || venue.category === selectedCategory;
    const priceMatch = priceRange === 'all' || venue.priceRange === priceRange;
    const searchMatch = searchQuery === '' || 
      venue.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      venue.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      venue.highlights.toLowerCase().includes(searchQuery.toLowerCase()) ||
      venue.amenities.some(amenity => amenity.toLowerCase().includes(searchQuery.toLowerCase())) ||
      venue.specialFeatures.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase()));
    
    // Location filter
    const locationMatch = selectedLocation === 'all' || 
      venue.location.toLowerCase().includes(selectedLocation.toLowerCase());
    
    // Guest capacity filter
    const guestMatch = guestCapacity === 'all' || (() => {
      const maxGuests = parseInt(venue.capacity.split('-')[1] || venue.capacity.replace(/\D/g, ''));
      switch(guestCapacity) {
        case 'small': return maxGuests <= 200;
        case 'medium': return maxGuests > 200 && maxGuests <= 500;
        case 'large': return maxGuests > 500;
        default: return true;
      }
    })();
    
    // Rating filter
    const ratingMatch = selectedRating === 'all' || (() => {
      switch(selectedRating) {
        case '4.5+': return venue.rating >= 4.5;
        case '4+': return venue.rating >= 4.0;
        case '3.5+': return venue.rating >= 3.5;
        default: return true;
      }
    })();

    // Amenities filter - venue must have ALL selected amenities
    const amenitiesMatch = selectedAmenities.length === 0 || 
      selectedAmenities.every(amenityId => {
        const amenityName = availableAmenities.find(a => a.id === amenityId)?.name;
        return amenityName && venue.amenities.some(vAmenity => 
          vAmenity.toLowerCase().includes(amenityName.toLowerCase().replace(/\s+/g, ' '))
        );
      });

    // Features filter - venue must have ALL selected features
    const featuresMatch = selectedFeatures.length === 0 || 
      selectedFeatures.every(featureId => {
        const featureName = availableFeatures.find(f => f.id === featureId)?.name;
        return featureName && venue.specialFeatures.some(vFeature => 
          vFeature.toLowerCase().includes(featureName.toLowerCase().replace(/\s+/g, ' '))
        );
      });
    
    return categoryMatch && priceMatch && searchMatch && locationMatch && guestMatch && ratingMatch && amenitiesMatch && featuresMatch;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-sm ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div ref={ref} className="min-h-screen bg-gradient-to-b from-white to-secondary-background/30">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-5 bg-gradient-to-r from-secondary-background to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/gallery-01.jpg"
            alt="Wedding venues background"
            fill
            quality={90}
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-wider intro-animate-slideInUp ${isInView ? 'animate' : ''}`}>
            Dream Wedding Venues
          </h1>
          <p className={`font-montserrat text-secondary-paragraphs text-lg md:text-xl max-w-3xl mx-auto leading-relaxed intro-animate-fadeInUp ${isInView ? 'animate animation-delay-200' : ''}`}>
            Discover the perfect venue for your special day. From royal palaces to beachfront resorts, 
            we have curated the finest wedding destinations across India.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-5 bg-gradient-to-b from-white to-secondary-background/20 border-b border-secondary-border/30">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-secondary-paragraphs" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search by venue name, location, hall name, amenities, features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-secondary-heading placeholder-secondary-paragraphs/60 bg-white border border-secondary-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary-accent/20 focus:border-secondary-accent transition-all duration-300 shadow-sm hover:shadow-md font-montserrat"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-secondary-paragraphs hover:text-secondary-accent transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Filter Buttons Row */}
          <div className="flex flex-wrap gap-4 justify-center items-center">
            {/* Venue Type Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-center gap-3 px-4 py-3 bg-white border border-secondary-border rounded-xl hover:border-secondary-accent/30 focus:outline-none focus:ring-2 focus:ring-secondary-accent/20 focus:border-secondary-accent transition-all duration-300 shadow-sm hover:shadow-md font-medium text-secondary-heading min-w-[140px]">
                <span className="text-lg">🏛️</span>
                <span>Venue Type</span>
                {selectedCategory !== 'all' && (
                  <Badge variant="secondary" className="bg-secondary-accent text-white text-xs px-2 py-1 rounded-full ml-1">
                    1
                  </Badge>
                )}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuLabel className="font-marcellus">Select Venue Type</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {categories.map((category) => (
                  <DropdownMenuItem
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`cursor-pointer ${
                      selectedCategory === category.id
                        ? 'bg-secondary-accent/10 text-secondary-accent font-medium'
                        : ''
                    }`}
                  >
                    <span className="mr-3">{category.icon}</span>
                    <span className="flex-1">{category.name}</span>
                    {selectedCategory === category.id && (
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Price Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-center gap-3 px-4 py-3 bg-white border border-secondary-border rounded-xl hover:border-secondary-accent/30 focus:outline-none focus:ring-2 focus:ring-secondary-accent/20 focus:border-secondary-accent transition-all duration-300 shadow-sm hover:shadow-md font-medium text-secondary-heading min-w-[140px]">
                <span className="text-lg">💰</span>
                <span>Price</span>
                {priceRange !== 'all' && (
                  <Badge variant="secondary" className="bg-secondary-accent text-white text-xs px-2 py-1 rounded-full ml-1">
                    1
                  </Badge>
                )}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuLabel className="font-marcellus">Select Price Range</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {priceRanges.map((range) => (
                  <DropdownMenuItem
                    key={range.id}
                    onClick={() => setPriceRange(range.id)}
                    className={`cursor-pointer ${
                      priceRange === range.id
                        ? 'bg-secondary-accent/10 text-secondary-accent font-medium'
                        : ''
                    }`}
                  >
                    <span className="mr-3">{range.icon}</span>
                    <span className="flex-1">{range.name}</span>
                    {priceRange === range.id && (
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Location Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-center gap-3 px-4 py-3 bg-white border border-secondary-border rounded-xl hover:border-secondary-accent/30 focus:outline-none focus:ring-2 focus:ring-secondary-accent/20 focus:border-secondary-accent transition-all duration-300 shadow-sm hover:shadow-md font-medium text-secondary-heading min-w-[140px]">
                <span className="text-lg">📍</span>
                <span>Location</span>
                {selectedLocation !== 'all' && (
                  <Badge variant="secondary" className="bg-secondary-accent text-white text-xs px-2 py-1 rounded-full ml-1">
                    1
                  </Badge>
                )}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuLabel className="font-marcellus">Select Location</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {locations.map((location) => (
                  <DropdownMenuItem
                    key={location.id}
                    onClick={() => setSelectedLocation(location.id)}
                    className={`cursor-pointer ${
                      selectedLocation === location.id
                        ? 'bg-secondary-accent/10 text-secondary-accent font-medium'
                        : ''
                    }`}
                  >
                    <span className="mr-3">{location.icon}</span>
                    <span className="flex-1">{location.name}</span>
                    {selectedLocation === location.id && (
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Guest Capacity Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-center gap-3 px-4 py-3 bg-white border border-secondary-border rounded-xl hover:border-secondary-accent/30 focus:outline-none focus:ring-2 focus:ring-secondary-accent/20 focus:border-secondary-accent transition-all duration-300 shadow-sm hover:shadow-md font-medium text-secondary-heading min-w-[140px]">
                <span className="text-lg">👥</span>
                <span>Guests</span>
                {guestCapacity !== 'all' && (
                  <Badge variant="secondary" className="bg-secondary-accent text-white text-xs px-2 py-1 rounded-full ml-1">
                    1
                  </Badge>
                )}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuLabel className="font-marcellus">Select Guest Capacity</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {guestCapacities.map((capacity) => (
                  <DropdownMenuItem
                    key={capacity.id}
                    onClick={() => setGuestCapacity(capacity.id)}
                    className={`cursor-pointer ${
                      guestCapacity === capacity.id
                        ? 'bg-secondary-accent/10 text-secondary-accent font-medium'
                        : ''
                    }`}
                  >
                    <span className="mr-3">{capacity.icon}</span>
                    <span className="flex-1">{capacity.name}</span>
                    {guestCapacity === capacity.id && (
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Rating Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-center gap-3 px-4 py-3 bg-white border border-secondary-border rounded-xl hover:border-secondary-accent/30 focus:outline-none focus:ring-2 focus:ring-secondary-accent/20 focus:border-secondary-accent transition-all duration-300 shadow-sm hover:shadow-md font-medium text-secondary-heading min-w-[140px]">
                <span className="text-lg">⭐</span>
                <span>Rating</span>
                {selectedRating !== 'all' && (
                  <Badge variant="secondary" className="bg-secondary-accent text-white text-xs px-2 py-1 rounded-full ml-1">
                    1
                  </Badge>
                )}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuLabel className="font-marcellus">Select Minimum Rating</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {ratingFilters.map((rating) => (
                  <DropdownMenuItem
                    key={rating.id}
                    onClick={() => setSelectedRating(rating.id)}
                    className={`cursor-pointer ${
                      selectedRating === rating.id
                        ? 'bg-secondary-accent/10 text-secondary-accent font-medium'
                        : ''
                    }`}
                  >
                    <span className="mr-3">{rating.icon}</span>
                    <span className="flex-1">{rating.name}</span>
                    {selectedRating === rating.id && (
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Amenities Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-center gap-3 px-4 py-3 bg-white border border-secondary-border rounded-xl hover:border-secondary-accent/30 focus:outline-none focus:ring-2 focus:ring-secondary-accent/20 focus:border-secondary-accent transition-all duration-300 shadow-sm hover:shadow-md font-medium text-secondary-heading min-w-[140px]">
                <span className="text-lg">🏨</span>
                <span>Amenities</span>
                {selectedAmenities.length > 0 && (
                  <Badge variant="secondary" className="bg-secondary-accent text-white text-xs px-2 py-1 rounded-full ml-1">
                    {selectedAmenities.length}
                  </Badge>
                )}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64" align="start">
                <DropdownMenuLabel className="font-marcellus">Select Amenities</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div 
                  className="max-h-64 overflow-y-auto dropdown-scrollable"
                  onWheel={(e) => e.stopPropagation()}
                  onScroll={(e) => e.stopPropagation()}
                >
                  {availableAmenities.map((amenity) => (
                    <DropdownMenuItem
                      key={amenity.id}
                      onClick={() => toggleAmenity(amenity.id)}
                      className={`cursor-pointer ${
                        selectedAmenities.includes(amenity.id)
                          ? 'bg-secondary-accent/10 text-secondary-accent font-medium'
                          : ''
                      }`}
                    >
                      <span className="mr-3">{amenity.icon}</span>
                      <span className="flex-1">{amenity.name}</span>
                      {selectedAmenities.includes(amenity.id) && (
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Special Features Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-center gap-3 px-4 py-3 bg-white border border-secondary-border rounded-xl hover:border-secondary-accent/30 focus:outline-none focus:ring-2 focus:ring-secondary-accent/20 focus:border-secondary-accent transition-all duration-300 shadow-sm hover:shadow-md font-medium text-secondary-heading min-w-[140px]">
                <span className="text-lg">✨</span>
                <span>Features</span>
                {selectedFeatures.length > 0 && (
                  <Badge variant="secondary" className="bg-secondary-accent text-white text-xs px-2 py-1 rounded-full ml-1">
                    {selectedFeatures.length}
                  </Badge>
                )}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64" align="start">
                <DropdownMenuLabel className="font-marcellus">Select Special Features</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div 
                  className="max-h-64 overflow-y-auto dropdown-scrollable"
                  onWheel={(e) => e.stopPropagation()}
                  onScroll={(e) => e.stopPropagation()}
                >
                  {availableFeatures.map((feature) => (
                    <DropdownMenuItem
                      key={feature.id}
                      onClick={() => toggleFeature(feature.id)}
                      className={`cursor-pointer ${
                        selectedFeatures.includes(feature.id)
                          ? 'bg-secondary-accent/10 text-secondary-accent font-medium'
                          : ''
                      }`}
                    >
                      <span className="mr-3">{feature.icon}</span>
                      <span className="flex-1">{feature.name}</span>
                      {selectedFeatures.includes(feature.id) && (
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Clear All Filters Button */}
            {(selectedCategory !== 'all' || priceRange !== 'all' || selectedLocation !== 'all' || guestCapacity !== 'all' || selectedRating !== 'all' || selectedAmenities.length > 0 || selectedFeatures.length > 0 || searchQuery) && (
              <button
                onClick={clearAllFilters}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-secondary-background/50 text-secondary-paragraphs border border-secondary-border/50 rounded-xl hover:bg-secondary-accent/5 hover:text-secondary-accent hover:border-secondary-accent/30 transition-all duration-300 shadow-sm hover:shadow-md font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>Clear All</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Venues Grid */}
      <section className="py-16 px-5">
        <div className="max-w-7xl mx-auto">
          {/* Results Counter */}
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <h2 className="font-marcellus text-secondary-heading text-2xl font-bold">
                Wedding Venues
              </h2>
              <Badge variant="secondary" className="bg-secondary-accent/10 text-secondary-accent px-3 py-1 rounded-full text-sm font-medium border-0">
                {filteredVenues.length} {filteredVenues.length === 1 ? 'venue' : 'venues'} found
              </Badge>
            </div>
            {(selectedCategory !== 'all' || priceRange !== 'all' || selectedLocation !== 'all' || guestCapacity !== 'all' || selectedRating !== 'all' || selectedAmenities.length > 0 || selectedFeatures.length > 0 || searchQuery) && (
              <div className="flex items-center space-x-2 text-secondary-paragraphs text-sm">
                <span>Filters applied</span>
                <button
                  onClick={clearAllFilters}
                  className="text-secondary-accent hover:text-secondary-accent/80 transition-colors font-medium underline"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVenues.map((venue, index) => (
              <div
                key={venue.id}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-secondary-border/50 intro-animate-fadeInUp flex flex-col h-full ${isInView ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Venue Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={venue.thumbnail}
                    alt={venue.name}
                    fill
                    quality={90}
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Rating Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1 shadow-lg">
                    {renderStars(venue.rating)}
                    <span className="text-sm font-medium text-secondary-heading ml-1">
                      {venue.rating}
                    </span>

                  </div>
                </div>

                {/* Venue Details */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="font-marcellus text-secondary-heading text-xl font-semibold mb-2 group-hover:text-secondary-accent transition-colors duration-300">
                      {venue.name}
                    </h3>
                    <p className="font-montserrat text-secondary-paragraphs text-sm flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      {venue.location}
                    </p>
                  </div>

                  {/* Price Highlight & Stats */}
                  <div className="mb-4">
                    {/* Main Price Display */}
                    <div className="bg-gradient-to-r from-secondary-accent/10 to-secondary-accent/5 border border-secondary-accent/20 rounded-lg p-3 mb-4 text-center">
                      <p className="font-montserrat text-secondary-paragraphs text-xs mb-1">
                        Package starts from
                      </p>
                      <p className="font-marcellus text-secondary-accent text-2xl font-bold">
                        {venue.price}
                      </p>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div className="bg-secondary-background/30 rounded-lg p-2">
                        <p className="font-montserrat text-secondary-accent text-sm font-bold">
                          {venue.totalEvents}+
                        </p>
                        <p className="font-montserrat text-secondary-paragraphs text-xs">
                          Events
                        </p>
                      </div>
                      <div className="bg-secondary-background/30 rounded-lg p-2">
                        <p className="font-montserrat text-secondary-accent text-sm font-bold">
                          {venue.capacity.split('-')[1] || venue.capacity}
                        </p>
                        <p className="font-montserrat text-secondary-paragraphs text-xs">
                          Max Guests
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content Area - Flexible */}
                  <div className="flex-1">
                    {/* Highlights */}
                    <p className="font-montserrat text-secondary-paragraphs text-xs leading-relaxed mb-3 line-clamp-2">
                      {venue.highlights}
                    </p>

                    {/* Special Features */}
                    <div className="mb-3">
                      <h4 className="font-montserrat text-secondary-heading text-xs font-semibold mb-2">
                        Special Features:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {venue.specialFeatures.slice(0, 2).map((feature, idx) => (
                          <span
                            key={idx}
                            className="bg-secondary-accent/10 text-secondary-accent px-2 py-1 rounded-md text-xs font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                        {venue.specialFeatures.length > 2 && (
                          <span className="bg-secondary-accent/10 text-secondary-accent px-2 py-1 rounded-md text-xs font-medium">
                            +{venue.specialFeatures.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Amenities */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {venue.amenities.slice(0, 3).map((amenity, idx) => (
                          <span
                            key={idx}
                            className="flex items-center text-secondary-paragraphs text-xs"
                          >
                            <svg className="w-3 h-3 text-green-500 mr-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                            </svg>
                            {amenity}
                          </span>
                        ))}
                        {venue.amenities.length > 3 && (
                          <span className="text-secondary-paragraphs text-xs">
                            +{venue.amenities.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons - Fixed at Bottom */}
                  <div className="flex space-x-3 mt-auto">
                    <Link
                      href={`/events/weddings/${venue.id}`}
                      className="flex-1 bg-secondary-accent text-white py-2 px-4 rounded-lg text-sm font-medium text-center hover:bg-secondary-accent/90 transition-colors duration-300"
                    >
                      View Details
                    </Link>
                    <Link
                      href={`/events/weddings/${venue.id}`}
                      className="px-4 py-2 border border-secondary-accent text-secondary-accent rounded-lg text-sm font-medium hover:bg-secondary-accent hover:text-white transition-all duration-300"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredVenues.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🏛️</div>
              <h3 className="font-marcellus text-secondary-heading text-2xl font-semibold mb-2">
                No venues found
              </h3>
              <p className="font-montserrat text-secondary-paragraphs">
                Try adjusting your filters to see more options.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-5 bg-gradient-to-r from-secondary-accent/5 to-secondary-background/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-marcellus text-secondary-heading text-2xl md:text-3xl font-bold mb-4">
            Can&apos;t Find Your Perfect Venue?
          </h2>
          <p className="font-montserrat text-secondary-paragraphs text-lg mb-8">
            Let our expert team help you discover hidden gems and exclusive venues tailored to your vision.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-secondary-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-secondary-accent/90 transition-colors duration-300"
          >
            Get Personal Assistance
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
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @media (max-width: 768px) {
          .animation-delay-200 { animation-delay: 0.2s; }
        }
      `}</style>
    </div>
  );
};

export default WeddingsPage;