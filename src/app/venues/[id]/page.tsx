"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import BookingForm from "./_components/BookingForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Type definitions
interface Package {
  id: string;
  name: string;
  price: number;
  description: string;
  includes: string[];
}

interface AddOnService {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  category: string;
  icon: string;
}

interface Venue {
  id: number;
  name: string;
  location: string;
  rating: number;
  totalEvents: number;
  capacity: string;
  basePrice: number;
  vegPrice: number;
  nonVegPrice: number;
  images: string[];
  description: string;
  highlights: string[];
  amenities: string[];
  packages: Package[];
  addOnServices: AddOnService[];
  gallery: {
    title: string;
    images: { url: string; caption: string }[];
  };
  testimonials: {
    id: string;
    name: string;
    event: string;
    rating: number;
    review: string;
    date: string;
    image?: string;
  }[];
}

const VenueDetailsPage = () => {
  const ref = useRef(null);
  const params = useParams();
  const venueId = params.id as string;

  const [selectedPackage, setSelectedPackage] = useState("premium");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Handle client-side hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Scroll to top with multiple fallbacks
    const scrollToTop = () => {
      // Method 1: Smooth scroll
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

      // Method 2: Fallback instant scroll
      setTimeout(() => {
        if (window.pageYOffset > 0) {
          window.scrollTo(0, 0);
        }
      }, 50);

      // Method 3: Force scroll using document
      setTimeout(() => {
        if (window.pageYOffset > 0) {
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        }
      }, 100);
    };

    scrollToTop();
  }, [venueId]); // Depend on venueId so it triggers on route change

  const venueData: Record<string, Venue> = {
    "1": {
      id: 1,
      name: "Royal Palace Gardens",
      location: "Udaipur, Rajasthan",
      rating: 4.9,
      totalEvents: 250,
      capacity: "500-800 guests",
      basePrice: 1500000,
      vegPrice: 4500,
      nonVegPrice: 5200,
      images: [
        "/gallery-01.jpg",
        "/gallery-02.jpg",
        "/gallery-03.jpg",
        "/gallery-04.jpg",
        "/gallery-05.jpg",
        "/gallery-06.jpg",
        "/gallery-07.jpg",
        "/gallery-08.jpg",
      ],
      description:
        "Experience the grandeur of royalty at Royal Palace Gardens, where your wedding dreams come to life amidst stunning Rajasthani architecture and breathtaking lake views. This heritage venue offers an authentic royal experience with modern amenities.",
      highlights: [
        "Heritage Palace Setting with 500+ years of history",
        "Stunning Lake Pichola views from ceremony area",
        "Authentic Rajasthani architecture and royal décor",
        "Multiple event spaces for different ceremonies",
        "In-house heritage accommodation for guests",
        "Traditional Rajasthani cuisine and royal hospitality",
      ],
      amenities: [
        "Valet Parking for 200+ cars",
        "Air-conditioned banquet halls",
        "Bridal suites with royal amenities",
        "Professional event coordination",
        "Sound system and lighting",
        "Security and surveillance",
        "Generator backup",
        "Wheelchair accessibility",
      ],
      packages: [
        {
          id: "basic",
          name: "Heritage Basic",
          price: 1200000,
          description:
            "Essential wedding package with venue and basic services",
          includes: [
            "Venue rental for 1 day",
            "Basic hall decoration",
            "Tables and chairs setup",
            "Sound system",
            "Basic lighting",
            "Parking facility",
            "Security service",
            "Bridal room access",
          ],
        },
        {
          id: "premium",
          name: "Royal Premium",
          price: 1500000,
          description: "Complete wedding experience with enhanced services",
          includes: [
            "Venue rental for 2 days",
            "Premium floral decoration",
            "Mandap setup with traditional elements",
            "Professional sound and lighting",
            "Welcome drink service",
            "Parking and valet service",
            "Dedicated event coordinator",
            "Bridal and groom suites",
            "Basic photography session",
          ],
        },
        {
          id: "luxury",
          name: "Maharaja Luxury",
          price: 2000000,
          description:
            "Ultimate royal wedding experience with all premium services",
          includes: [
            "Venue rental for 3 days",
            "Royal themed complete decoration",
            "Traditional Rajasthani mandap",
            "Premium sound and lighting system",
            "Welcome and networking areas",
            "Luxury transportation coordination",
            "Personal wedding planners",
            "Royal suites for couple",
            "Professional photography & videography",
            "Traditional Rajasthani folk performances",
          ],
        },
      ],
      addOnServices: [
        {
          id: "catering",
          name: "Premium Catering",
          description: "Multi-cuisine catering with live counters",
          price: 850,
          unit: "per person",
          category: "food",
          icon: "🍽️",
        },
        {
          id: "photography",
          name: "Professional Photography",
          description: "Complete wedding photography and videography",
          price: 150000,
          unit: "package",
          category: "media",
          icon: "📸",
        },
        {
          id: "mehendi",
          name: "Mehendi Artist",
          description: "Professional bridal and guest mehendi service",
          price: 25000,
          unit: "service",
          category: "beauty",
          icon: "🎨",
        },
        {
          id: "dj",
          name: "DJ & Entertainment",
          description: "Professional DJ with music and dance floor",
          price: 80000,
          unit: "service",
          category: "entertainment",
          icon: "🎵",
        },
        {
          id: "flowers",
          name: "Premium Floral Decoration",
          description: "Fresh flower arrangements and garlands",
          price: 120000,
          unit: "package",
          category: "decoration",
          icon: "🌺",
        },
        {
          id: "cake",
          name: "Wedding Cake",
          description: "Multi-tier custom wedding cake",
          price: 15000,
          unit: "cake",
          category: "food",
          icon: "🎂",
        },
        {
          id: "transport",
          name: "Guest Transportation",
          description: "Luxury bus service for guest pickup/drop",
          price: 50000,
          unit: "service",
          category: "transport",
          icon: "🚌",
        },
        {
          id: "accommodation",
          name: "Guest Accommodation",
          description: "Heritage rooms for outstation guests",
          price: 8000,
          unit: "per room/night",
          category: "stay",
          icon: "🏰",
        },
      ],
      gallery: {
        title: "Real Weddings at Royal Palace Gardens",
        images: [
          {
            url: "/gallery-01.jpg",
            caption: "Royal Mandap Ceremony with traditional Rajasthani décor",
          },
          {
            url: "/gallery-02.jpg",
            caption: "Stunning lake view during sunset cocktail hour",
          },
          {
            url: "/gallery-03.jpg",
            caption:
              "Heritage palace courtyard decorated for wedding reception",
          },
          {
            url: "/gallery-04.jpg",
            caption: "Bridal entry with royal elephant procession",
          },
          {
            url: "/gallery-05.jpg",
            caption: "Traditional Rajasthani folk dance performance",
          },
          {
            url: "/gallery-06.jpg",
            caption: "Royal dining setup with authentic cuisine",
          },
          {
            url: "/gallery-07.jpg",
            caption: "Fireworks display over Lake Pichola",
          },
          {
            url: "/gallery-08.jpg",
            caption: "Couple portraits in palace gardens",
          },
        ],
      },
      testimonials: [
        {
          id: "t1",
          name: "Priya & Arjun Sharma",
          event: "Wedding Ceremony",
          rating: 5,
          review:
            "Royal Palace Gardens made our wedding absolutely magical! The heritage setting, professional staff, and attention to detail exceeded all our expectations. Our guests are still talking about the beautiful venue and authentic Rajasthani hospitality.",
          date: "December 2024",
          image: "/testimonial-1.jpg",
        },
        {
          id: "t2",
          name: "Sneha & Vikram Patel",
          event: "Wedding Reception",
          rating: 5,
          review:
            "The lake view ceremony was breathtaking! The venue's royal ambiance and the team's seamless coordination made our special day perfect. Highly recommend for couples seeking a truly regal wedding experience.",
          date: "November 2024",
        },
        {
          id: "t3",
          name: "Ananya & Rohit Gupta",
          event: "Destination Wedding",
          rating: 4,
          review:
            "Beautiful venue with stunning architecture. The heritage rooms were comfortable for our guests, and the catering was excellent. The only minor issue was parking during peak season, but overall an amazing experience.",
          date: "October 2024",
          image: "/testimonial-2.jpg",
        },
        {
          id: "t4",
          name: "Kavya & Aditya Singh",
          event: "Three-Day Wedding Celebration",
          rating: 5,
          review:
            "We had our mehendi, sangam, and wedding ceremony here. Each event was perfectly organized. The staff went above and beyond to ensure every detail was perfect. The traditional Rajasthani performances were the highlight!",
          date: "September 2024",
        },
      ],
    }
  };

  const venue = venueData[venueId];

  // Consistent number formatting function to avoid hydration mismatch
  const formatPrice = (price: number) => {
    if (!isClient) return price.toString(); // Return plain number during SSR
    return new Intl.NumberFormat("en-IN").format(price);
  };

  useEffect(() => {
    if (venue && selectedPackage) {
      const packagePrice =
        venue.packages.find((p: Package) => p.id === selectedPackage)?.price ||
        0;
      const addOnPrice = selectedAddOns.reduce((total, addOnId) => {
        const addOn = venue.addOnServices.find(
          (service: AddOnService) => service.id === addOnId
        );
        return total + (addOn?.price || 0);
      }, 0);
      setTotalPrice(packagePrice + addOnPrice);
    }
  }, [selectedPackage, selectedAddOns, venue]);

  if (!venue) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-secondary-heading mb-4">
            Venue Not Found
          </h1>
          <Link
            href="/events/weddings"
            className="text-secondary-accent hover:underline"
          >
            Back to Venues
          </Link>
        </div>
      </div>
    );
  }

  const handleAddOnToggle = (addOnId: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(addOnId)
        ? prev.filter((id) => id !== addOnId)
        : [...prev, addOnId]
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-white to-secondary-background/30"
      style={{ scrollBehavior: "smooth" }}
    >
      {/* Breadcrumb Navigation */}
      <nav className="py-3 sm:py-4 px-4 sm:px-5 bg-white border-b border-secondary-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 text-xs sm:text-sm font-montserrat">
            <Link
              href="/"
              className="text-secondary-paragraphs hover:text-secondary-accent"
            >
              Home
            </Link>
            <span className="text-secondary-paragraphs">›</span>
            <Link
              href="/events/weddings"
              className="text-secondary-paragraphs hover:text-secondary-accent truncate"
            >
              Wedding Venues
            </Link>
            <span className="text-secondary-paragraphs">›</span>
            <span className="text-secondary-heading font-medium truncate">
              {venue.name}
            </span>
          </div>
        </div>
      </nav>

      {/* Professional Image Gallery Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 py-6 sm:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Main Image Display */}
            <div className="space-y-6">
              {/* Large Main Image - Increased height */}
              <div className="relative aspect-[4/3] lg:aspect-[6/5] bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={venue.images[activeImageIndex]}
                  alt={venue.name}
                  fill
                  className="object-contain transition-all duration-500"
                  priority
                />

                {/* Image Navigation Arrows */}
                <button
                  onClick={() =>
                    setActiveImageIndex(
                      (prev) =>
                        (prev - 1 + venue.images.length) % venue.images.length
                    )
                  }
                  className="absolute left-3 sm:left-5 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-gray-800 p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={() =>
                    setActiveImageIndex(
                      (prev) => (prev + 1) % venue.images.length
                    )
                  }
                  className="absolute right-3 sm:right-5 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-gray-800 p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Image Counter Badge */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-black/80 text-white px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base font-semibold backdrop-blur-sm">
                  {activeImageIndex + 1} / {venue.images.length}
                </div>
              </div>

              {/* Enhanced Thumbnail Strip - Larger thumbnails */}
              <div className="relative">
                <div className="flex space-x-3 overflow-x-auto scrollbar-hide pb-3">
                  {venue.images.map((image: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`relative aspect-square w-20 h-20 sm:w-24 sm:h-24 lg:w-22 lg:h-22 flex-shrink-0 rounded-xl overflow-hidden transition-all duration-300 ${
                        activeImageIndex === index
                          ? "ring-3 ring-secondary-accent ring-offset-3 scale-105 shadow-lg"
                          : "hover:scale-105 hover:shadow-lg ring-2 ring-transparent hover:ring-gray-300"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${venue.name} view ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                      {/* Overlay for inactive thumbnails */}
                      {activeImageIndex !== index && (
                        <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 hover:bg-black/10"></div>
                      )}
                    </button>
                  ))}
                </div>
                {/* Enhanced scroll indicator */}
                {venue.images.length > 4 && (
                  <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none flex items-center justify-end pr-3">
                    <div className="bg-white/90 rounded-full p-2 shadow-md">
                      <svg
                        className="w-4 h-4 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Venue Information */}
            <div className="space-y-4 sm:space-y-6">
              {/* Header */}
              <div>
                <h1 className="font-marcellus text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary-heading mb-2">
                  {venue.name}
                </h1>
                <div className="flex items-center text-secondary-paragraphs mb-4">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span className="text-sm sm:text-lg">{venue.location}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center bg-white rounded-lg p-2 shadow-md border border-green-200">
                  <div className="text-3xl mb-2">🥗</div>
                  <div className="text-sm text-gray-600 mb-2">
                    Vegetarian Menu
                  </div>
                  <div className="text-2xl font-bold text-green-600">
                    ₹{venue.vegPrice.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">per person</div>
                </div>
                <div className="text-center bg-white rounded-lg p-2 shadow-md border border-red-200">
                  <div className="text-3xl mb-2">🍖</div>
                  <div className="text-sm text-gray-600 mb-2">
                    Non-Vegetarian Menu
                  </div>
                  <div className="text-2xl font-bold text-red-600">
                    ₹{venue.nonVegPrice.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">per person</div>
                </div>
              </div>

              {/* Simple Venue Stats */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                  <div>
                    <div className="font-bold text-secondary-heading">
                      {venue.capacity}
                    </div>
                    <div className="text-gray-600">Capacity</div>
                  </div>
                  <div>
                    <div className="font-bold text-secondary-heading flex items-center justify-center">
                      {renderStars(venue.rating)} {venue.rating}
                    </div>
                    <div className="text-gray-600">Rating</div>
                  </div>
                  <div>
                    <div className="font-bold text-secondary-heading">
                      {venue.totalEvents}+
                    </div>
                    <div className="text-gray-600">Events</div>
                  </div>
                  <div>
                    <div className="font-bold text-secondary-heading">25+</div>
                    <div className="text-gray-600">Years Exp</div>
                  </div>
                </div>
              </div>

              {/* Simple Description */}
              <div>
                <h3 className="font-marcellus text-lg font-semibold text-secondary-heading mb-3">
                  About This Venue
                </h3>
                <p className="text-secondary-paragraphs leading-relaxed text-sm mb-4">
                  {venue.description}
                </p>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>🏰 Heritage venue with 500+ years of history</div>
                  <div>🌅 Beautiful lake view with sunrise backdrop</div>
                  <div>👑 Authentic royal palace setting</div>
                </div>
              </div>

              {/* Simple Action Buttons */}
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => setShowBookingForm(true)}
                    className="bg-secondary-accent text-white py-2 px-6 rounded-lg font-semibold hover:bg-secondary-accent/90 transition-colors duration-300"
                  >
                    📅 Book This Venue
                  </button>

                  <button className="border-2 border-secondary-accent text-secondary-accent py-2 px-6 rounded-lg font-semibold hover:bg-secondary-accent hover:text-white transition-colors duration-300">
                    📧 Request Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Content Layout */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 py-6 sm:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Tabbed Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="packages" className="w-full">
                <TabsList className="grid w-full grid-cols-5 mb-6 bg-white rounded-lg border border-gray-200 shadow-sm h-12">
                  <TabsTrigger
                    value="packages"
                    className="data-[state=active]:bg-secondary-accent data-[state=active]:text-white rounded-md transition-all duration-200 text-xs sm:text-sm font-medium"
                  >
                    💎 Packages
                  </TabsTrigger>
                  <TabsTrigger
                    value="services"
                    className="data-[state=active]:bg-secondary-accent data-[state=active]:text-white rounded-md transition-all duration-200 text-xs sm:text-sm font-medium"
                  >
                    ✨ Add-ons
                  </TabsTrigger>
                  <TabsTrigger
                    value="gallery"
                    className="data-[state=active]:bg-secondary-accent data-[state=active]:text-white rounded-md transition-all duration-200 text-xs sm:text-sm font-medium"
                  >
                    🖼️ Gallery
                  </TabsTrigger>
                  <TabsTrigger
                    value="reviews"
                    className="data-[state=active]:bg-secondary-accent data-[state=active]:text-white rounded-md transition-all duration-200 text-xs sm:text-sm font-medium"
                  >
                    ⭐ Reviews
                  </TabsTrigger>
                  <TabsTrigger
                    value="facilities"
                    className="data-[state=active]:bg-secondary-accent data-[state=active]:text-white rounded-md transition-all duration-200 text-xs sm:text-sm font-medium"
                  >
                    🏛️ Facilities
                  </TabsTrigger>
                </TabsList>

                {/* Packages Tab */}
                <TabsContent
                  value="packages"
                  className="space-y-4 animate-in fade-in-0 slide-in-from-bottom-4 duration-500"
                >
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-5">
                    <h2 className="font-marcellus text-xl sm:text-2xl font-bold text-secondary-heading mb-6 flex items-center">
                      <span className="bg-gradient-to-br from-secondary-accent/20 to-secondary-accent/10 p-3 rounded-xl mr-4 text-xl">
                        �
                      </span>
                      Choose Your Perfect Package
                    </h2>

                    <div className="space-y-4">
                      {venue.packages.map((pkg: Package) => (
                        <div
                          key={pkg.id}
                          className={`border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                            selectedPackage === pkg.id
                              ? "border-secondary-accent bg-secondary-accent/5 shadow-lg"
                              : "border-gray-200 hover:border-secondary-accent/50"
                          }`}
                          onClick={() => setSelectedPackage(pkg.id)}
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 space-y-2 sm:space-y-0">
                            <div className="flex items-center space-x-4">
                              <div
                                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                                  selectedPackage === pkg.id
                                    ? "border-secondary-accent bg-secondary-accent"
                                    : "border-gray-300"
                                }`}
                              >
                                {selectedPackage === pkg.id && (
                                  <div className="w-3 h-3 bg-white rounded-full"></div>
                                )}
                              </div>
                              <div>
                                <h4 className="font-marcellus text-lg sm:text-xl font-bold text-secondary-heading">
                                  {pkg.name}
                                </h4>
                                <p className="text-secondary-paragraphs text-sm">
                                  {pkg.description}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-xl sm:text-2xl font-bold text-secondary-accent">
                                ₹{(pkg.price / 100000).toFixed(1)}L
                              </div>
                              <div className="text-sm text-secondary-paragraphs">
                                Starting from
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                            {pkg.includes.map((item: string, idx: number) => (
                              <div
                                key={idx}
                                className="flex items-center space-x-2"
                              >
                                <svg
                                  className="w-4 h-4 text-green-500 flex-shrink-0"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                </svg>
                                <span className="font-montserrat text-secondary-paragraphs text-sm">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Add-on Services Tab */}
                <TabsContent
                  value="services"
                  className="space-y-4 animate-in fade-in-0 slide-in-from-bottom-4 duration-500"
                >
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-5">
                    <h2 className="font-marcellus text-lg sm:text-xl font-bold text-secondary-heading mb-4 flex items-center">
                      <span className="bg-secondary-accent/10 p-2 rounded-lg mr-3 text-base">
                        ✨
                      </span>
                      Enhance Your Experience
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {venue.addOnServices
                        .slice(0, 3)
                        .map((service: AddOnService) => (
                          <div
                            key={service.id}
                            className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-md ${
                              selectedAddOns.includes(service.id)
                                ? "border-secondary-accent bg-secondary-accent/5"
                                : "border-gray-200 hover:border-secondary-accent/50"
                            }`}
                            onClick={() => handleAddOnToggle(service.id)}
                          >
                            <div className="flex items-start space-x-3">
                              <div
                                className={`w-5 h-5 rounded border-2 flex items-center justify-center mt-1 transition-all duration-300 ${
                                  selectedAddOns.includes(service.id)
                                    ? "border-secondary-accent bg-secondary-accent"
                                    : "border-gray-300"
                                }`}
                              >
                                {selectedAddOns.includes(service.id) && (
                                  <svg
                                    className="w-3 h-3 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                  </svg>
                                )}
                              </div>

                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                                  <span className="text-lg">
                                    {service.icon}
                                  </span>
                                  <h4 className="font-montserrat text-secondary-heading font-semibold text-sm">
                                    {service.name}
                                  </h4>
                                </div>
                                <p className="font-montserrat text-secondary-paragraphs text-sm mb-2 leading-relaxed">
                                  {service.description}
                                </p>
                                <div className="flex items-center justify-between">
                                  <span className="font-montserrat text-secondary-accent text-base font-bold">
                                    ₹{formatPrice(service.price)}
                                  </span>
                                  <span className="text-sm text-secondary-paragraphs bg-gray-100 px-2 py-1 rounded-lg">
                                    {service.unit}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>

                    {venue.addOnServices.length > 3 && (
                      <div className="text-center mt-4">
                        <button className="inline-flex items-center space-x-2 text-secondary-accent hover:text-secondary-accent/80 font-semibold text-sm transition-colors duration-300">
                          <span>
                            View All {venue.addOnServices.length} Services
                          </span>
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                </TabsContent>

                {/* Gallery Tab */}
                <TabsContent
                  value="gallery"
                  className="space-y-6 animate-in fade-in-0 slide-in-from-bottom-4 duration-500"
                >
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                    <h2 className="font-marcellus text-xl sm:text-2xl font-bold text-secondary-heading mb-6 flex items-center">
                      <span className="bg-gradient-to-br from-secondary-accent/20 to-secondary-accent/10 p-3 rounded-xl mr-4 text-xl">
                        �️
                      </span>
                      {venue.gallery.title}
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {venue.gallery.images.map((item, index) => (
                        <div key={index} className="group cursor-pointer">
                          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                            <Image
                              src={item.url}
                              alt={item.caption}
                              fill
                              className="object-cover transition-all duration-500 group-hover:brightness-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                              <p className="text-white text-sm font-medium leading-tight">
                                {item.caption}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="text-center mt-6">
                      <button className="inline-flex items-center space-x-2 text-secondary-accent hover:text-secondary-accent/80 font-semibold text-sm transition-colors duration-300">
                        <span>View Complete Gallery</span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </TabsContent>

                {/* Reviews Tab */}
                <TabsContent
                  value="reviews"
                  className="space-y-4 animate-in fade-in-0 slide-in-from-bottom-4 duration-500"
                >
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-5">
                    <h2 className="font-marcellus text-lg sm:text-xl font-bold text-secondary-heading mb-4 flex items-center">
                      <span className="bg-secondary-accent/10 p-2 rounded-lg mr-3 text-base">
                        ⭐
                      </span>
                      What Couples Say
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {venue.testimonials.map((testimonial) => (
                        <div
                          key={testimonial.id}
                          className="bg-gray-50 rounded-lg p-4 hover:bg-secondary-accent/5 transition-colors duration-300"
                        >
                          <div className="flex items-center space-x-1 mb-2">
                            {Array.from({ length: 5 }, (_, index) => (
                              <span
                                key={index}
                                className={`text-sm ${
                                  index < testimonial.rating
                                    ? "text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              >
                                ★
                              </span>
                            ))}
                            <span className="text-sm text-secondary-paragraphs ml-2">
                              ({testimonial.rating}/5)
                            </span>
                          </div>

                          <p className="text-secondary-paragraphs text-sm leading-relaxed mb-3 italic">
                            &ldquo;{testimonial.review}&rdquo;
                          </p>

                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-secondary-heading text-sm">
                                {testimonial.name}
                              </div>
                              <div className="text-sm text-secondary-paragraphs">
                                {testimonial.event} • {testimonial.date}
                              </div>
                            </div>
                            {testimonial.image && (
                              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-secondary-accent/20">
                                <Image
                                  src={testimonial.image}
                                  alt={testimonial.name}
                                  width={40}
                                  height={40}
                                  className="object-cover"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="text-center mt-6">
                      <button className="inline-flex items-center space-x-2 text-secondary-accent hover:text-secondary-accent/80 font-semibold text-sm transition-colors duration-300">
                        <span>Read More Reviews</span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </TabsContent>

                {/* Facilities Tab */}
                <TabsContent
                  value="facilities"
                  className="space-y-4 animate-in fade-in-0 slide-in-from-bottom-4 duration-500"
                >
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-5">
                    <h2 className="font-marcellus text-lg font-bold text-secondary-heading mb-4">
                      🏛️ What Makes This Special
                    </h2>

                    {/* Special Features - Simple List */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-secondary-heading mb-3 text-sm">
                        Highlights:
                      </h3>
                      <div className="space-y-2">
                        {venue.highlights.map(
                          (highlight: string, index: number) => (
                            <div
                              key={index}
                              className="text-sm text-secondary-paragraphs"
                            >
                              • {highlight}
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Amenities - Simple List */}
                    <div className="border-t border-gray-200 pt-4">
                      <h3 className="font-semibold text-secondary-heading mb-3 text-sm">
                        Amenities & Facilities:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm text-secondary-paragraphs">
                        {venue.amenities.map(
                          (amenity: string, index: number) => (
                            <div key={index}>• {amenity}</div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Professional Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-4 sm:top-8">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                  {/* Header - Compact */}
                  <div className="bg-gradient-to-r from-secondary-accent to-secondary-accent/90 text-white p-4">
                    <h3 className="font-marcellus text-lg font-bold mb-1">
                      Your Wedding Package
                    </h3>
                    <p className="text-white/90 text-xs">
                      Customize your perfect experience
                    </p>
                  </div>

                  <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                    {/* Selected Package */}
                    <div>
                      <h4 className="font-montserrat text-secondary-heading text-xs sm:text-sm font-semibold mb-3 flex items-center">
                        <span className="bg-secondary-accent/10 p-1 rounded mr-2">
                          📦
                        </span>
                        Selected Package
                      </h4>
                      {venue.packages.find(
                        (p: Package) => p.id === selectedPackage
                      ) && (
                        <div className="bg-gradient-to-r from-secondary-background/50 to-secondary-background/30 rounded-xl p-3 sm:p-4 border border-secondary-accent/20">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <div className="font-montserrat text-secondary-heading font-semibold text-sm sm:text-base">
                                {
                                  venue.packages.find(
                                    (p: Package) => p.id === selectedPackage
                                  )?.name
                                }
                              </div>
                              <div className="text-xs text-secondary-paragraphs mt-1">
                                {
                                  venue.packages.find(
                                    (p: Package) => p.id === selectedPackage
                                  )?.description
                                }
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-montserrat text-secondary-accent font-bold text-base sm:text-lg">
                                ₹
                                {(
                                  (venue.packages.find(
                                    (p: Package) => p.id === selectedPackage
                                  )?.price || 0) / 100000
                                ).toFixed(1)}
                                L
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Selected Add-ons */}
                    {selectedAddOns.length > 0 && (
                      <div>
                        <h4 className="font-montserrat text-secondary-heading text-xs sm:text-sm font-semibold mb-3 flex items-center">
                          <span className="bg-secondary-accent/10 p-1 rounded mr-2">
                            🛍️
                          </span>
                          Additional Services ({selectedAddOns.length})
                        </h4>
                        <div className="space-y-2">
                          {selectedAddOns.map((addOnId) => {
                            const service = venue.addOnServices.find(
                              (s: AddOnService) => s.id === addOnId
                            );
                            return service ? (
                              <div
                                key={addOnId}
                                className="flex justify-between items-center p-2 sm:p-3 bg-gray-50 rounded-lg"
                              >
                                <div className="flex items-center space-x-2">
                                  <span className="text-xs sm:text-sm">
                                    {service.icon}
                                  </span>
                                  <span className="font-montserrat text-secondary-paragraphs text-xs sm:text-sm">
                                    {service.name}
                                  </span>
                                </div>
                                <span className="font-montserrat text-secondary-accent font-semibold text-xs sm:text-sm">
                                  ₹{formatPrice(service.price)}
                                </span>
                              </div>
                            ) : null;
                          })}
                        </div>
                      </div>
                    )}

                    {/* Price Breakdown */}
                    <div className="border-t border-gray-200 pt-4">
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-xs sm:text-sm">
                          <span className="text-secondary-paragraphs">
                            Package Price:
                          </span>
                          <span className="font-semibold">
                            ₹
                            {(
                              (venue.packages.find(
                                (p: Package) => p.id === selectedPackage
                              )?.price || 0) / 100000
                            ).toFixed(1)}
                            L
                          </span>
                        </div>
                        {selectedAddOns.length > 0 && (
                          <div className="flex justify-between text-xs sm:text-sm">
                            <span className="text-secondary-paragraphs">
                              Add-ons:
                            </span>
                            <span className="font-semibold">
                              ₹
                              {(
                                selectedAddOns.reduce((total, addOnId) => {
                                  const service = venue.addOnServices.find(
                                    (s: AddOnService) => s.id === addOnId
                                  );
                                  return total + (service?.price || 0);
                                }, 0) / 100000
                              ).toFixed(1)}
                              L
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="bg-gradient-to-r from-secondary-accent/10 to-secondary-accent/5 rounded-xl p-3 sm:p-4 mb-4">
                        <div className="flex justify-between items-center">
                          <span className="font-marcellus text-secondary-heading text-base sm:text-lg font-bold">
                            Total Price:
                          </span>
                          <span className="font-marcellus text-secondary-accent text-xl sm:text-2xl font-bold">
                            ₹{(totalPrice / 100000).toFixed(1)}L
                          </span>
                        </div>
                        <p className="font-montserrat text-secondary-paragraphs text-xs mt-2">
                          *Final price may vary based on actual requirements
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <button
                        onClick={() => setShowBookingForm(true)}
                        className="w-full bg-gradient-to-r from-secondary-accent to-secondary-accent/90 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold text-base sm:text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>Book This Venue</span>
                      </button>

                      <button className="w-full border-2 border-secondary-accent text-secondary-accent py-3 px-4 sm:px-6 rounded-xl font-semibold hover:bg-secondary-accent hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        <span>Request Quote</span>
                      </button>

                      {/* <Link
                        href="/contact"
                        className="w-full text-center text-secondary-paragraphs py-3 px-4 sm:px-6 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2"
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                        <span>Contact for Details</span>
                      </Link> */}
                    </div>

                    {/* Trust Indicators */}
                    <div className="border-t border-gray-200 pt-4">
                      <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
                        <div className="bg-green-50 rounded-lg p-2 sm:p-3">
                          <div className="text-green-600 font-semibold text-xs sm:text-sm">
                            Response Time
                          </div>
                          <div className="text-green-800 font-bold text-xs">
                            Within 2 hours
                          </div>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-2 sm:p-3">
                          <div className="text-blue-600 font-semibold text-xs sm:text-sm">
                            Booking Advance
                          </div>
                          <div className="text-blue-800 font-bold text-xs">
                            25% required
                          </div>
                        </div>
                      </div>

                      {/* Security Badge */}
                      <div className="mt-4 flex items-center justify-center space-x-2 text-xs text-gray-500">
                        <svg
                          className="w-3 h-3 sm:w-4 sm:h-4 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                        </svg>
                        <span>Secure booking • Trusted by 1000+ couples</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form Modal */}
      <BookingForm
        isOpen={showBookingForm}
        onClose={() => setShowBookingForm(false)}
        venueName={venue.name}
        totalPrice={totalPrice}
        selectedPackage={selectedPackage}
        selectedAddOns={selectedAddOns}
      />

      {/* Animation Styles */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none; /* Internet Explorer 10+ */
          scrollbar-width: none; /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
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

        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
      `}</style>
    </div>
  );
};

export default VenueDetailsPage;
