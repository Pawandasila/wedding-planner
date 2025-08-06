'use client';
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import BookingForm from './_components/BookingForm';
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
  images: string[];
  description: string;
  highlights: string[];
  amenities: string[];
  packages: Package[];
  addOnServices: AddOnService[];
  gallery: {
    title: string;
    images: { url: string; caption: string; }[];
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
  
  const [selectedPackage, setSelectedPackage] = useState('premium');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Handle client-side hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  const venueData: Record<string, Venue> = {
    "1": {
      id: 1,
      name: "Royal Palace Gardens",
      location: "Udaipur, Rajasthan",
      rating: 4.9,
      totalEvents: 250,
      capacity: "500-800 guests",
      basePrice: 1500000,
      images: [
        "/gallery-01.jpg", "/gallery-02.jpg", "/gallery-03.jpg", 
        "/gallery-04.jpg", "/gallery-05.jpg", "/gallery-06.jpg",
        "/gallery-07.jpg", "/gallery-08.jpg"
      ],
      description: "Experience the grandeur of royalty at Royal Palace Gardens, where your wedding dreams come to life amidst stunning Rajasthani architecture and breathtaking lake views. This heritage venue offers an authentic royal experience with modern amenities.",
      highlights: [
        "Heritage Palace Setting with 500+ years of history",
        "Stunning Lake Pichola views from ceremony area",
        "Authentic Rajasthani architecture and royal décor",
        "Multiple event spaces for different ceremonies",
        "In-house heritage accommodation for guests",
        "Traditional Rajasthani cuisine and royal hospitality"
      ],
      amenities: [
        "Valet Parking for 200+ cars",
        "Air-conditioned banquet halls",
        "Bridal suites with royal amenities",
        "Professional event coordination",
        "Sound system and lighting",
        "Security and surveillance",
        "Generator backup",
        "Wheelchair accessibility"
      ],
      packages: [
        {
          id: 'basic',
          name: 'Heritage Basic',
          price: 1200000,
          description: 'Essential wedding package with venue and basic services',
          includes: [
            'Venue rental for 1 day',
            'Basic hall decoration',
            'Tables and chairs setup',
            'Sound system',
            'Basic lighting',
            'Parking facility',
            'Security service',
            'Bridal room access'
          ]
        },
        {
          id: 'premium',
          name: 'Royal Premium',
          price: 1500000,
          description: 'Complete wedding experience with enhanced services',
          includes: [
            'Venue rental for 2 days',
            'Premium floral decoration',
            'Mandap setup with traditional elements',
            'Professional sound and lighting',
            'Welcome drink service',
            'Parking and valet service',
            'Dedicated event coordinator',
            'Bridal and groom suites',
            'Basic photography session'
          ]
        },
        {
          id: 'luxury',
          name: 'Maharaja Luxury',
          price: 2000000,
          description: 'Ultimate royal wedding experience with all premium services',
          includes: [
            'Venue rental for 3 days',
            'Royal themed complete decoration',
            'Traditional Rajasthani mandap',
            'Premium sound and lighting system',
            'Welcome and networking areas',
            'Luxury transportation coordination',
            'Personal wedding planners',
            'Royal suites for couple',
            'Professional photography & videography',
            'Traditional Rajasthani folk performances'
          ]
        }
      ],
      addOnServices: [
        {
          id: 'catering',
          name: 'Premium Catering',
          description: 'Multi-cuisine catering with live counters',
          price: 850,
          unit: 'per person',
          category: 'food',
          icon: '🍽️'
        },
        {
          id: 'photography',
          name: 'Professional Photography',
          description: 'Complete wedding photography and videography',
          price: 150000,
          unit: 'package',
          category: 'media',
          icon: '📸'
        },
        {
          id: 'mehendi',
          name: 'Mehendi Artist',
          description: 'Professional bridal and guest mehendi service',
          price: 25000,
          unit: 'service',
          category: 'beauty',
          icon: '🎨'
        },
        {
          id: 'dj',
          name: 'DJ & Entertainment',
          description: 'Professional DJ with music and dance floor',
          price: 80000,
          unit: 'service',
          category: 'entertainment',
          icon: '🎵'
        },
        {
          id: 'flowers',
          name: 'Premium Floral Decoration',
          description: 'Fresh flower arrangements and garlands',
          price: 120000,
          unit: 'package',
          category: 'decoration',
          icon: '🌺'
        },
        {
          id: 'cake',
          name: 'Wedding Cake',
          description: 'Multi-tier custom wedding cake',
          price: 15000,
          unit: 'cake',
          category: 'food',
          icon: '🎂'
        },
        {
          id: 'transport',
          name: 'Guest Transportation',
          description: 'Luxury bus service for guest pickup/drop',
          price: 50000,
          unit: 'service',
          category: 'transport',
          icon: '🚌'
        },
        {
          id: 'accommodation',
          name: 'Guest Accommodation',
          description: 'Heritage rooms for outstation guests',
          price: 8000,
          unit: 'per room/night',
          category: 'stay',
          icon: '🏰'
        }
      ],
      gallery: {
        title: "Real Weddings at Royal Palace Gardens",
        images: [
          { url: "/gallery-01.jpg", caption: "Royal Mandap Ceremony with traditional Rajasthani décor" },
          { url: "/gallery-02.jpg", caption: "Stunning lake view during sunset cocktail hour" },
          { url: "/gallery-03.jpg", caption: "Heritage palace courtyard decorated for wedding reception" },
          { url: "/gallery-04.jpg", caption: "Bridal entry with royal elephant procession" },
          { url: "/gallery-05.jpg", caption: "Traditional Rajasthani folk dance performance" },
          { url: "/gallery-06.jpg", caption: "Royal dining setup with authentic cuisine" },
          { url: "/gallery-07.jpg", caption: "Fireworks display over Lake Pichola" },
          { url: "/gallery-08.jpg", caption: "Couple portraits in palace gardens" }
        ]
      },
      testimonials: [
        {
          id: "t1",
          name: "Priya & Arjun Sharma",
          event: "Wedding Ceremony",
          rating: 5,
          review: "Royal Palace Gardens made our wedding absolutely magical! The heritage setting, professional staff, and attention to detail exceeded all our expectations. Our guests are still talking about the beautiful venue and authentic Rajasthani hospitality.",
          date: "December 2024",
          image: "/testimonial-1.jpg"
        },
        {
          id: "t2",
          name: "Sneha & Vikram Patel",
          event: "Wedding Reception",
          rating: 5,
          review: "The lake view ceremony was breathtaking! The venue's royal ambiance and the team's seamless coordination made our special day perfect. Highly recommend for couples seeking a truly regal wedding experience.",
          date: "November 2024"
        },
        {
          id: "t3",
          name: "Ananya & Rohit Gupta",
          event: "Destination Wedding",
          rating: 4,
          review: "Beautiful venue with stunning architecture. The heritage rooms were comfortable for our guests, and the catering was excellent. The only minor issue was parking during peak season, but overall an amazing experience.",
          date: "October 2024",
          image: "/testimonial-2.jpg"
        },
        {
          id: "t4",
          name: "Kavya & Aditya Singh",
          event: "Three-Day Wedding Celebration",
          rating: 5,
          review: "We had our mehendi, sangam, and wedding ceremony here. Each event was perfectly organized. The staff went above and beyond to ensure every detail was perfect. The traditional Rajasthani performances were the highlight!",
          date: "September 2024"
        }
      ]
    },
    "2": {
      id: 2,
      name: "Serenity Beach Resort",
      location: "Goa",
      rating: 4.8,
      totalEvents: 180,
      capacity: "200-400 guests",
      basePrice: 1200000,
      images: [
        "/gallery-02.jpg", "/gallery-04.jpg", "/gallery-05.jpg", 
        "/gallery-01.jpg", "/gallery-03.jpg", "/gallery-06.jpg",
        "/gallery-07.jpg", "/gallery-08.jpg"
      ],
      description: "Say 'I do' with your toes in the sand and the ocean as your backdrop at Serenity Beach Resort. This beachfront paradise offers a perfect blend of natural beauty and luxury amenities for an unforgettable wedding experience.",
      highlights: [
        "Private beachfront ceremony space",
        "Stunning sunset wedding photography opportunities",
        "Ocean-facing mandap with tidal sound backdrop",
        "Beach activities and water sports for guests",
        "Luxury spa services for pre-wedding relaxation",
        "Fresh seafood and international cuisine"
      ],
      amenities: [
        "Direct beach access",
        "Resort accommodation for guests",
        "Water sports facilities",
        "Spa and wellness center",
        "Multi-cuisine restaurants",
        "Swimming pool complex",
        "Conference and banquet halls",
        "24/7 concierge service"
      ],
      packages: [
        {
          id: 'basic',
          name: 'Beach Basic',
          price: 900000,
          description: 'Simple beachfront wedding with essential services',
          includes: [
            'Beachfront ceremony space',
            'Basic bamboo mandap setup',
            'Beach chairs and umbrellas',
            'Basic sound system',
            'Parking facility',
            'Security service',
            'Bridal preparation room'
          ]
        },
        {
          id: 'premium',
          name: 'Coastal Premium',
          price: 1200000,
          description: 'Enhanced beach wedding with luxury touches',
          includes: [
            'Private beach section for 2 days',
            'Elegant floral beach decoration',
            'Premium beach mandap with draping',
            'Professional sound and lighting',
            'Welcome cocktail service',
            'Resort shuttle service',
            'Dedicated event coordinator',
            'Beachside bridal suite',
            'Basic photography session'
          ]
        },
        {
          id: 'luxury',
          name: 'Paradise Luxury',
          price: 1600000,
          description: 'Ultimate beach wedding with all premium services',
          includes: [
            'Exclusive beach access for 3 days',
            'Luxury beach themed decoration',
            'Designer beach mandap with florals',
            'Premium sound and lighting system',
            'Sunset cocktail cruise',
            'Luxury transportation coordination',
            'Personal wedding planners',
            'Ocean-view luxury suites',
            'Professional photography & videography',
            'Live music and entertainment'
          ]
        }
      ],
      addOnServices: [
        {
          id: 'catering',
          name: 'Beachside Catering',
          description: 'Fresh seafood and international cuisine',
          price: 750,
          unit: 'per person',
          category: 'food',
          icon: '🍽️'
        },
        {
          id: 'photography',
          name: 'Beach Photography',
          description: 'Sunset and beachfront wedding photography',
          price: 120000,
          unit: 'package',
          category: 'media',
          icon: '📸'
        },
        {
          id: 'cruise',
          name: 'Sunset Cruise',
          description: 'Private yacht for pre-wedding celebrations',
          price: 80000,
          unit: 'service',
          category: 'entertainment',
          icon: '⛵'
        },
        {
          id: 'spa',
          name: 'Bridal Spa Package',
          description: 'Complete spa and beauty treatments',
          price: 35000,
          unit: 'package',
          category: 'beauty',
          icon: '💆'
        },
        {
          id: 'watersports',
          name: 'Water Sports Activities',
          description: 'Jet skiing, parasailing for guests',
          price: 25000,
          unit: 'package',
          category: 'entertainment',
          icon: '🏄'
        },
        {
          id: 'bonfire',
          name: 'Beach Bonfire',
          description: 'Evening bonfire with music and snacks',
          price: 15000,
          unit: 'service',
          category: 'entertainment',
          icon: '🔥'
        }
      ],
      gallery: {
        title: "Beach Weddings at Serenity Resort",
        images: [
          { url: "/gallery-02.jpg", caption: "Sunset beachfront mandap ceremony" },
          { url: "/gallery-04.jpg", caption: "Beach reception with ocean views" },
          { url: "/gallery-05.jpg", caption: "Romantic beachside couple portraits" },
          { url: "/gallery-01.jpg", caption: "Pre-wedding beach photoshoot" },
          { url: "/gallery-03.jpg", caption: "Beach bonfire celebration" },
          { url: "/gallery-06.jpg", caption: "Ocean view bridal preparation" },
          { url: "/gallery-07.jpg", caption: "Sunset cruise celebration" },
          { url: "/gallery-08.jpg", caption: "Beach wedding reception setup" }
        ]
      },
      testimonials: [
        {
          id: "b1",
          name: "Meera & Karan Joshi",
          event: "Beach Wedding",
          rating: 5,
          review: "Our beach wedding at Serenity Resort was a dream come true! The sunset ceremony was absolutely stunning, and the resort staff made everything perfect. The ocean breeze and waves created the most romantic atmosphere.",
          date: "January 2025"
        },
        {
          id: "b2",
          name: "Riya & Sameer Shah",
          event: "Destination Wedding",
          rating: 5,
          review: "Perfect beach wedding venue! The sunset cocktail cruise was magical, and our guests loved the beachside activities. The spa services were amazing for pre-wedding relaxation. Highly recommended!",
          date: "December 2024",
          image: "/testimonial-3.jpg"
        },
        {
          id: "b3",
          name: "Tanvi & Arpit Mehta",
          event: "Beach Reception",
          rating: 4,
          review: "Beautiful beachfront location with great amenities. The seafood was fresh and delicious. The only downside was the weather was a bit windy, but the staff handled everything professionally.",
          date: "November 2024"
        }
      ]
    }
    // Add more venues as needed...
  };

  const venue = venueData[venueId];

  // Consistent number formatting function to avoid hydration mismatch
  const formatPrice = (price: number) => {
    if (!isClient) return price.toString(); // Return plain number during SSR
    return new Intl.NumberFormat('en-IN').format(price);
  };

  useEffect(() => {
    if (venue && selectedPackage) {
      const packagePrice = venue.packages.find((p: Package) => p.id === selectedPackage)?.price || 0;
      const addOnPrice = selectedAddOns.reduce((total, addOnId) => {
        const addOn = venue.addOnServices.find((service: AddOnService) => service.id === addOnId);
        return total + (addOn?.price || 0);
      }, 0);
      setTotalPrice(packagePrice + addOnPrice);
    }
  }, [selectedPackage, selectedAddOns, venue]);

  if (!venue) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-secondary-heading mb-4">Venue Not Found</h1>
          <Link href="/events/weddings" className="text-secondary-accent hover:underline">
            Back to Venues
          </Link>
        </div>
      </div>
    );
  }

  const handleAddOnToggle = (addOnId: string) => {
    setSelectedAddOns(prev => 
      prev.includes(addOnId) 
        ? prev.filter(id => id !== addOnId)
        : [...prev, addOnId]
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div ref={ref} className="min-h-screen bg-gradient-to-b from-white to-secondary-background/30">
      {/* Breadcrumb Navigation */}
      <nav className="py-3 sm:py-4 px-4 sm:px-5 bg-white border-b border-secondary-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 text-xs sm:text-sm font-montserrat">
            <Link href="/" className="text-secondary-paragraphs hover:text-secondary-accent">Home</Link>
            <span className="text-secondary-paragraphs">›</span>
            <Link href="/events/weddings" className="text-secondary-paragraphs hover:text-secondary-accent truncate">Wedding Venues</Link>
            <span className="text-secondary-paragraphs">›</span>
            <span className="text-secondary-heading font-medium truncate">{venue.name}</span>
          </div>
        </div>
      </nav>

      {/* Professional Image Gallery Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 py-6 sm:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Main Image Display */}
            <div className="space-y-4">
              {/* Large Main Image */}
              <div className="relative aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={venue.images[activeImageIndex]}
                  alt={venue.name}
                  fill
                  className="object-contain transition-all duration-500"
                  priority
                />
                
                {/* Image Navigation Arrows */}
                <button
                  onClick={() => setActiveImageIndex((prev) => (prev - 1 + venue.images.length) % venue.images.length)}
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setActiveImageIndex((prev) => (prev + 1) % venue.images.length)}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Image Counter Badge */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/70 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  {activeImageIndex + 1} / {venue.images.length}
                </div>
              </div>

              {/* Thumbnail Strip - Scrollable */}
              <div className="relative">
                <div className="flex space-x-2 overflow-x-auto scrollbar-hide pb-2">
                  {venue.images.map((image: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`relative aspect-square w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-lg overflow-hidden transition-all duration-300 ${
                        activeImageIndex === index 
                          ? 'ring-2 ring-secondary-accent ring-offset-2 scale-105' 
                          : 'hover:scale-105 hover:shadow-md'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${venue.name} view ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
                {/* Scroll indicator */}
                {venue.images.length > 6 && (
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none flex items-center justify-end pr-2">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            </div>

            {/* Venue Information */}
            <div className="space-y-4 sm:space-y-6">
              {/* Eye-Catching Price Banner */}
              <div className="bg-gradient-to-r from-secondary-accent via-secondary-accent to-secondary-accent/80 rounded-2xl p-4 sm:p-6 text-white shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="mb-3 sm:mb-0">
                      <div className="text-white/90 text-xs sm:text-sm font-medium uppercase tracking-wide">Starting from</div>
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-marcellus">
                        ₹{(venue.basePrice / 100000).toFixed(1)}L+
                      </div>
                      <div className="text-white/80 text-xs sm:text-sm mt-1">*Customizable packages available</div>
                    </div>
                    <div className="flex flex-col space-y-2 sm:items-end">
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl px-3 py-2 text-center">
                        <div className="text-lg sm:text-xl font-bold">{venue.capacity}</div>
                        <div className="text-xs text-white/90">Guest Capacity</div>
                      </div>
                      <div className="flex items-center space-x-1 text-white/90">
                        {renderStars(venue.rating)}
                        <span className="text-xs ml-1">{venue.rating} • {venue.totalEvents}+ events</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
              </div>

              {/* Header */}
              <div>
                <h1 className="font-marcellus text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary-heading mb-2">
                  {venue.name}
                </h1>
                <div className="flex items-center text-secondary-paragraphs mb-4">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span className="text-sm sm:text-lg">{venue.location}</span>
                </div>
              </div>

              {/* Description */}
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                <h3 className="font-marcellus text-base sm:text-lg font-semibold text-secondary-heading mb-3">
                  About This Venue
                </h3>
                <p className="text-secondary-paragraphs leading-relaxed text-sm sm:text-base">
                  {venue.description}
                </p>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setShowBookingForm(true)}
                  className="flex-1 bg-secondary-accent text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold text-base sm:text-lg hover:bg-secondary-accent/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Book This Venue
                </button>
                <button className="flex-1 border-2 border-secondary-accent text-secondary-accent py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold text-base sm:text-lg hover:bg-secondary-accent hover:text-white transition-all duration-300">
                  Request Quote
                </button>
              </div>

              {/* Contact Info */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-medium text-blue-900">Quick Response</div>
                    <div className="text-xs sm:text-sm text-blue-700">We respond within 2 hours</div>
                  </div>
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
              <Tabs defaultValue="packages" className="w-full ">
                <TabsList className="grid w-full grid-cols-5 mb-6 bg-white rounded-lg border border-gray-200 p-1 shadow-sm overflow-hidden">
                  <TabsTrigger 
                    value="packages" 
                    className="flex items-center justify-center gap-1 px-2 py-2 text-xs sm:text-sm font-medium text-gray-600 hover:text-secondary-accent data-[state=active]:bg-secondary-accent data-[state=active]:text-white rounded-md transition-all duration-200"
                  >
                    <span className="text-xs">💎</span>
                    <span className="hidden sm:inline">Packages</span>
                    <span className="sm:hidden">Pack</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="services" 
                    className="flex items-center justify-center gap-1 px-2 py-2 text-xs sm:text-sm font-medium text-gray-600 hover:text-secondary-accent data-[state=active]:bg-secondary-accent data-[state=active]:text-white rounded-md transition-all duration-200"
                  >
                    <span className="text-xs">✨</span>
                    <span className="hidden sm:inline">Add-ons</span>
                    <span className="sm:hidden">Add</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="gallery" 
                    className="flex items-center justify-center gap-1 px-2 py-2 text-xs sm:text-sm font-medium text-gray-600 hover:text-secondary-accent data-[state=active]:bg-secondary-accent data-[state=active]:text-white rounded-md transition-all duration-200"
                  >
                    <span className="text-xs">🖼️</span>
                    <span className="hidden sm:inline">Gallery</span>
                    <span className="sm:hidden">Pics</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="reviews" 
                    className="flex items-center justify-center gap-1 px-2 py-2 text-xs sm:text-sm font-medium text-gray-600 hover:text-secondary-accent data-[state=active]:bg-secondary-accent data-[state=active]:text-white rounded-md transition-all duration-200"
                  >
                    <span className="text-xs">⭐</span>
                    <span className="hidden sm:inline">Reviews</span>
                    <span className="sm:hidden">Rev</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="facilities" 
                    className="flex items-center justify-center gap-1 px-2 py-2 text-xs sm:text-sm font-medium text-gray-600 hover:text-secondary-accent data-[state=active]:bg-secondary-accent data-[state=active]:text-white rounded-md transition-all duration-200"
                  >
                    <span className="text-xs">🏛️</span>
                    <span className="hidden sm:inline">Facilities</span>
                    <span className="sm:hidden">Fac</span>
                  </TabsTrigger>
                </TabsList>

                {/* Packages Tab */}
                <TabsContent value="packages" className="space-y-4 animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-5">
                    <h2 className="font-marcellus text-xl sm:text-2xl font-bold text-secondary-heading mb-6 flex items-center">
                      <span className="bg-gradient-to-br from-secondary-accent/20 to-secondary-accent/10 p-3 rounded-xl mr-4 text-xl">�</span>
                      Choose Your Perfect Package
                    </h2>
                    
                    <div className="space-y-4">
                      {venue.packages.map((pkg: Package) => (
                        <div
                          key={pkg.id}
                          className={`border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                            selectedPackage === pkg.id
                              ? 'border-secondary-accent bg-secondary-accent/5 shadow-lg'
                              : 'border-gray-200 hover:border-secondary-accent/50'
                          }`}
                          onClick={() => setSelectedPackage(pkg.id)}
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 space-y-2 sm:space-y-0">
                            <div className="flex items-center space-x-4">
                              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                                selectedPackage === pkg.id
                                  ? 'border-secondary-accent bg-secondary-accent'
                                  : 'border-gray-300'
                              }`}>
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
                              <div className="text-sm text-secondary-paragraphs">Starting from</div>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                            {pkg.includes.map((item: string, idx: number) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
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
                <TabsContent value="services" className="space-y-4 animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-5">
                    <h2 className="font-marcellus text-lg sm:text-xl font-bold text-secondary-heading mb-4 flex items-center">
                      <span className="bg-secondary-accent/10 p-2 rounded-lg mr-3 text-base">✨</span>
                      Enhance Your Experience
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {venue.addOnServices.map((service: AddOnService) => (
                        <div
                          key={service.id}
                          className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-md ${
                            selectedAddOns.includes(service.id)
                              ? 'border-secondary-accent bg-secondary-accent/5'
                              : 'border-gray-200 hover:border-secondary-accent/50'
                          }`}
                          onClick={() => handleAddOnToggle(service.id)}
                        >
                          <div className="flex items-start space-x-3">
                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center mt-1 transition-all duration-300 ${
                              selectedAddOns.includes(service.id)
                                ? 'border-secondary-accent bg-secondary-accent'
                                : 'border-gray-300'
                            }`}>
                              {selectedAddOns.includes(service.id) && (
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                </svg>
                              )}
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <span className="text-lg">{service.icon}</span>
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
                  </div>
                </TabsContent>

                {/* Gallery Tab */}
                <TabsContent value="gallery" className="space-y-6 animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                    <h2 className="font-marcellus text-xl sm:text-2xl font-bold text-secondary-heading mb-6 flex items-center">
                      <span className="bg-gradient-to-br from-secondary-accent/20 to-secondary-accent/10 p-3 rounded-xl mr-4 text-xl">�️</span>
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
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </TabsContent>

                {/* Reviews Tab */}
                <TabsContent value="reviews" className="space-y-4 animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-5">
                    <h2 className="font-marcellus text-lg sm:text-xl font-bold text-secondary-heading mb-4 flex items-center">
                      <span className="bg-secondary-accent/10 p-2 rounded-lg mr-3 text-base">⭐</span>
                      What Couples Say
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {venue.testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-gray-50 rounded-lg p-4 hover:bg-secondary-accent/5 transition-colors duration-300">
                          <div className="flex items-center space-x-1 mb-2">
                            {Array.from({ length: 5 }, (_, index) => (
                              <span
                                key={index}
                                className={`text-sm ${index < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
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
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </TabsContent>

                {/* Facilities Tab */}
                <TabsContent value="facilities" className="space-y-4 animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-5">
                    <h2 className="font-marcellus text-lg sm:text-xl font-bold text-secondary-heading mb-5 flex items-center">
                      <span className="bg-secondary-accent/10 p-2 rounded-lg mr-3 text-base">🏛️</span>
                      What Makes This Special
                    </h2>
                    
                    {/* Special Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {venue.highlights.map((highlight: string, index: number) => {
                        const getFeatureStyle = (text: string) => {
                          if (text.toLowerCase().includes('heritage') || text.toLowerCase().includes('palace') || text.toLowerCase().includes('royal')) 
                            return { icon: '🏰', bg: 'bg-gradient-to-br from-purple-50 to-purple-100', border: 'border-purple-200', text: 'text-purple-900' };
                          if (text.toLowerCase().includes('lake') || text.toLowerCase().includes('view') || text.toLowerCase().includes('water')) 
                            return { icon: '🌊', bg: 'bg-gradient-to-br from-blue-50 to-blue-100', border: 'border-blue-200', text: 'text-blue-900' };
                          if (text.toLowerCase().includes('architecture') || text.toLowerCase().includes('building')) 
                            return { icon: '🏛️', bg: 'bg-gradient-to-br from-gray-50 to-gray-100', border: 'border-gray-200', text: 'text-gray-900' };
                          if (text.toLowerCase().includes('space') || text.toLowerCase().includes('ceremony') || text.toLowerCase().includes('event')) 
                            return { icon: '🎪', bg: 'bg-gradient-to-br from-pink-50 to-pink-100', border: 'border-pink-200', text: 'text-pink-900' };
                          if (text.toLowerCase().includes('accommodation') || text.toLowerCase().includes('room') || text.toLowerCase().includes('stay')) 
                            return { icon: '🏨', bg: 'bg-gradient-to-br from-green-50 to-green-100', border: 'border-green-200', text: 'text-green-900' };
                          if (text.toLowerCase().includes('cuisine') || text.toLowerCase().includes('food') || text.toLowerCase().includes('hospitality')) 
                            return { icon: '🍽️', bg: 'bg-gradient-to-br from-orange-50 to-orange-100', border: 'border-orange-200', text: 'text-orange-900' };
                          return { icon: '✨', bg: 'bg-gradient-to-br from-yellow-50 to-yellow-100', border: 'border-yellow-200', text: 'text-yellow-900' };
                        };
                        
                        const style = getFeatureStyle(highlight);
                        
                        return (
                          <div key={index} className={`${style.bg} ${style.border} border-2 rounded-xl p-4 hover:shadow-md transition-all duration-300 group`}>
                            <div className="flex items-start space-x-4">
                              <div className="bg-white rounded-lg p-2 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                <span className="text-2xl">{style.icon}</span>
                              </div>
                              <div className="flex-1">
                                <p className={`${style.text} font-montserrat text-sm font-medium leading-relaxed`}>
                                  {highlight}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Amenities Section with Visual Cards */}
                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="font-marcellus text-base font-bold text-secondary-heading mb-5 flex items-center">
                        <span className="bg-green-100 p-2 rounded-lg mr-3 text-sm">🔧</span>
                        Amenities & Facilities
                      </h3>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {venue.amenities.map((amenity: string, index: number) => {
                          const getAmenityData = (text: string) => {
                            if (text.toLowerCase().includes('parking') || text.toLowerCase().includes('valet')) 
                              return { icon: '🚗', color: 'blue', bgImg: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)' };
                            if (text.toLowerCase().includes('air-conditioned') || text.toLowerCase().includes('ac')) 
                              return { icon: '❄️', color: 'cyan', bgImg: 'linear-gradient(135deg, #cffafe 0%, #a7f3d0 100%)' };
                            if (text.toLowerCase().includes('bridal') || text.toLowerCase().includes('suite')) 
                              return { icon: '👰', color: 'pink', bgImg: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)' };
                            if (text.toLowerCase().includes('event') || text.toLowerCase().includes('coordination')) 
                              return { icon: '👨‍💼', color: 'indigo', bgImg: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)' };
                            if (text.toLowerCase().includes('sound') || text.toLowerCase().includes('music')) 
                              return { icon: '🔊', color: 'purple', bgImg: 'linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)' };
                            if (text.toLowerCase().includes('security') || text.toLowerCase().includes('surveillance')) 
                              return { icon: '🛡️', color: 'red', bgImg: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)' };
                            if (text.toLowerCase().includes('generator') || text.toLowerCase().includes('backup')) 
                              return { icon: '⚡', color: 'yellow', bgImg: 'linear-gradient(135deg, #fefce8 0%, #fef3c7 100%)' };
                            if (text.toLowerCase().includes('wheelchair') || text.toLowerCase().includes('accessibility')) 
                              return { icon: '♿', color: 'teal', bgImg: 'linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)' };
                            if (text.toLowerCase().includes('lighting')) 
                              return { icon: '💡', color: 'orange', bgImg: 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)' };
                            return { icon: '✅', color: 'green', bgImg: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)' };
                          };
                          
                          const data = getAmenityData(amenity);
                          
                          return (
                            <div 
                              key={index} 
                              className="group relative overflow-hidden rounded-lg border border-gray-200 hover:border-secondary-accent/50 hover:shadow-lg transition-all duration-300"
                              style={{ background: data.bgImg }}
                            >
                              <div className="p-3 relative">
                                <div className="flex items-center space-x-3">
                                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-lg">{data.icon}</span>
                                  </div>
                                  <span className="font-montserrat text-gray-800 text-xs font-medium leading-tight flex-1">
                                    {amenity}
                                  </span>
                                </div>
                                
                                {/* Subtle background pattern */}
                                <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
                                  <div className="w-full h-full bg-white rounded-full -mr-8 -mt-8"></div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
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
                  
                  {/* Header */}
                  <div className="bg-gradient-to-r from-secondary-accent to-secondary-accent/90 text-white p-4 sm:p-6">
                    <h3 className="font-marcellus text-lg sm:text-xl font-bold mb-2">
                      Your Wedding Package
                    </h3>
                    <p className="text-white/90 text-xs sm:text-sm">
                      Customize your perfect wedding experience
                    </p>
                  </div>

                  <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                    {/* Selected Package */}
                    <div>
                      <h4 className="font-montserrat text-secondary-heading text-xs sm:text-sm font-semibold mb-3 flex items-center">
                        <span className="bg-secondary-accent/10 p-1 rounded mr-2">📦</span>
                        Selected Package
                      </h4>
                      {venue.packages.find((p: Package) => p.id === selectedPackage) && (
                        <div className="bg-gradient-to-r from-secondary-background/50 to-secondary-background/30 rounded-xl p-3 sm:p-4 border border-secondary-accent/20">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <div className="font-montserrat text-secondary-heading font-semibold text-sm sm:text-base">
                                {venue.packages.find((p: Package) => p.id === selectedPackage)?.name}
                              </div>
                              <div className="text-xs text-secondary-paragraphs mt-1">
                                {venue.packages.find((p: Package) => p.id === selectedPackage)?.description}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-montserrat text-secondary-accent font-bold text-base sm:text-lg">
                                ₹{((venue.packages.find((p: Package) => p.id === selectedPackage)?.price || 0) / 100000).toFixed(1)}L
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
                          <span className="bg-secondary-accent/10 p-1 rounded mr-2">🛍️</span>
                          Additional Services ({selectedAddOns.length})
                        </h4>
                        <div className="space-y-2">
                          {selectedAddOns.map((addOnId) => {
                            const service = venue.addOnServices.find((s: AddOnService) => s.id === addOnId);
                            return service ? (
                              <div key={addOnId} className="flex justify-between items-center p-2 sm:p-3 bg-gray-50 rounded-lg">
                                <div className="flex items-center space-x-2">
                                  <span className="text-xs sm:text-sm">{service.icon}</span>
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
                          <span className="text-secondary-paragraphs">Package Price:</span>
                          <span className="font-semibold">₹{((venue.packages.find((p: Package) => p.id === selectedPackage)?.price || 0) / 100000).toFixed(1)}L</span>
                        </div>
                        {selectedAddOns.length > 0 && (
                          <div className="flex justify-between text-xs sm:text-sm">
                            <span className="text-secondary-paragraphs">Add-ons:</span>
                            <span className="font-semibold">₹{(selectedAddOns.reduce((total, addOnId) => {
                              const service = venue.addOnServices.find((s: AddOnService) => s.id === addOnId);
                              return total + (service?.price || 0);
                            }, 0) / 100000).toFixed(1)}L</span>
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
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>Book This Venue</span>
                      </button>
                      
                      <button className="w-full border-2 border-secondary-accent text-secondary-accent py-3 px-4 sm:px-6 rounded-xl font-semibold hover:bg-secondary-accent hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>Request Quote</span>
                      </button>
                      
                      <Link
                        href="/contact"
                        className="w-full text-center text-secondary-paragraphs py-3 px-4 sm:px-6 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2"
                      >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span>Contact for Details</span>
                      </Link>
                    </div>

                    {/* Trust Indicators */}
                    <div className="border-t border-gray-200 pt-4">
                      <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
                        <div className="bg-green-50 rounded-lg p-2 sm:p-3">
                          <div className="text-green-600 font-semibold text-xs sm:text-sm">Response Time</div>
                          <div className="text-green-800 font-bold text-xs">Within 2 hours</div>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-2 sm:p-3">
                          <div className="text-blue-600 font-semibold text-xs sm:text-sm">Booking Advance</div>
                          <div className="text-blue-800 font-bold text-xs">25% required</div>
                        </div>
                      </div>
                      
                      {/* Security Badge */}
                      <div className="mt-4 flex items-center justify-center space-x-2 text-xs text-gray-500">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
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
          -ms-overflow-style: none;  /* Internet Explorer 10+ */
          scrollbar-width: none;  /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar { 
          display: none;  /* Safari and Chrome */
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
        
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
      `}</style>
    </div>
  );
};

export default VenueDetailsPage;
