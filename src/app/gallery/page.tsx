'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import DecorativeLine from '../../components/DecorativeLine';
import WeddingButton from '../../components/WeddingButton';

const GalleryPage = () => {
  const heroRef = useRef(null);
  const galleryRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.2 });
  const isGalleryInView = useInView(galleryRef, { once: true, amount: 0.1 });

  // Gallery categories for filtering
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Modal state for viewing images
  type ImageType = {
    id: number;
    src: string;
    alt: string;
    caption: string;
    category: string;
    featured: boolean;
  };
  
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'weddings', label: 'Weddings' },
    { id: 'ceremonies', label: 'Ceremonies' },
    { id: 'receptions', label: 'Receptions' },
    { id: 'decorations', label: 'Decorations' },
    { id: 'mehendi', label: 'Mehendi' }
  ];

  const galleryImages = [
    {
      id: 1,
      src: "/gallery-01.jpg",
      alt: "Joyful bride and groom during ceremony",
      caption: "Pure joy on their special day",
      category: "weddings",
      featured: true
    },
    {
      id: 2,
      src: "/gallery-02.jpg",
      alt: "Happy family celebrating together",
      caption: "Families coming together in celebration",
      category: "ceremonies",
      featured: false
    },
    {
      id: 3,
      src: "/gallery-03.jpg",
      alt: "Guests dancing and celebrating",
      caption: "Dancing the night away",
      category: "receptions",
      featured: true
    },
    {
      id: 4,
      src: "/gallery-04.jpg",
      alt: "Bride with beautiful smile",
      caption: "Radiant with happiness",
      category: "weddings",
      featured: false
    },
    {
      id: 5,
      src: "/gallery-05.jpg",
      alt: "Wedding party laughing together",
      caption: "Laughter and love shared",
      category: "weddings",
      featured: true
    },
    {
      id: 6,
      src: "/gallery-06.jpg",
      alt: "Couple's first dance",
      caption: "Lost in the moment",
      category: "receptions",
      featured: false
    },
    {
      id: 7,
      src: "/gallery-07.jpg",
      alt: "Indian wedding ceremony joy",
      caption: "Traditional celebrations filled with joy",
      category: "ceremonies",
      featured: true
    },
    {
      id: 8,
      src: "/gallery-08.jpg",
      alt: "Guests celebrating with sparklers",
      caption: "Sparkling moments of celebration",
      category: "receptions",
      featured: false
    },
    {
      id: 9,
      src: "/gallery-09.jpg",
      alt: "Emotional family moments",
      caption: "Blessed family moments",
      category: "ceremonies",
      featured: false
    },
    {
      id: 10,
      src: "/gallery-10.jpg",
      alt: "Beautiful mandap decoration",
      caption: "Sacred mandap setup",
      category: "decorations",
      featured: true
    },
    {
      id: 11,
      src: "/gallery-11.jpg",
      alt: "Haldi ceremony celebration",
      caption: "Golden Haldi ceremony",
      category: "ceremonies",
      featured: false
    },
    {
      id: 12,
      src: "/gallery-12.jpg",
      alt: "Mehendi ceremony artistry",
      caption: "Intricate mehendi designs",
      category: "mehendi",
      featured: true
    },
    {
      id: 13,
      src: "/hero-02.jpg",
      alt: "Traditional wedding setup",
      caption: "Elegant traditional arrangements",
      category: "decorations",
      featured: false
    },
    {
      id: 14,
      src: "/hero-03.jpg",
      alt: "Bride in traditional attire",
      caption: "Timeless bridal elegance",
      category: "weddings",
      featured: true
    },
    {
      id: 15,
      src: "/hero-04.jpg",
      alt: "Wedding ceremony moments",
      caption: "Sacred vows and promises",
      category: "ceremonies",
      featured: false
    },
    {
      id: 16,
      src: "/hero-05.jpg",
      alt: "Festive celebration",
      caption: "Colors of celebration",
      category: "receptions",
      featured: false
    },
    {
      id: 17,
      src: "/hero-06.jpg",
      alt: "Floral decorations",
      caption: "Stunning floral arrangements",
      category: "decorations",
      featured: true
    },
    {
      id: 18,
      src: "/hero-07.jpg",
      alt: "Traditional rituals",
      caption: "Honoring sacred traditions",
      category: "ceremonies",
      featured: false
    }
  ];

  // Filter images based on active category
  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  // Modal functions
  const openModal = (image: ImageType, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const goToNext = useCallback(() => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  }, [currentImageIndex, filteredImages]);

  const goToPrevious = useCallback(() => {
    const prevIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  }, [currentImageIndex, filteredImages]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrevious();
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, goToNext, goToPrevious]);

  return (
    <div className="min-h-screen bg-secondary-background">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative flex flex-col items-center justify-center pt-20 pb-16 px-4 overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute left-2 top-16 w-20 h-20 md:w-32 md:h-32 opacity-60 -rotate-12">
          <Image
            src="/bg-flower.png"
            alt="Decorative flower"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute right-3 top-20 w-12 h-12 md:w-20 md:h-20 opacity-60 rotate-45">
          <Image
            src="/sideleaf.png"
            alt="Decorative leaf"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute left-8 bottom-8 w-16 h-16 md:w-24 md:h-24 opacity-50 rotate-12">
          <Image
            src="/flower-light.png"
            alt="Light decorative flower"
            fill
            className="object-contain"
          />
        </div>

        <div 
          className={`w-full max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isHeroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Hero Text */}
          <div className="mb-8">
            <Image
              src="/leaf.png"
              alt="Decorative element"
              width={40}
              height={12}
              className="mx-auto mb-4"
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-marcellus text-secondary-heading mb-4 leading-tight">
              Our Gallery
            </h1>
            <p className="text-base md:text-lg text-secondary-paragraphs font-montserrat leading-relaxed max-w-2xl mx-auto mb-6">
              Discover the magic we create through our lens - a collection of beautiful moments, 
              cherished memories, and celebrations that tell unique love stories
            </p>
          </div>

          <div className="flex justify-center">
            <DecorativeLine isInView={isHeroInView} />
          </div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="py-8 px-4 bg-white sticky top-0 z-40 shadow-sm">
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 py-2 md:px-4 md:py-2 text-xs md:text-sm font-montserrat font-medium rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-secondary-accent text-white shadow-md'
                    : 'bg-gray-100 text-secondary-paragraphs hover:bg-secondary-accent hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section 
        ref={galleryRef}
        className="py-16 px-4 bg-secondary-background"
      >
        <div 
          className={`w-full max-w-7xl mx-auto transition-all duration-1000 ${
            isGalleryInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Mobile Gallery Grid - 2 columns */}
          <div className="block md:hidden">
            <div className="grid grid-cols-2 gap-3">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`group cursor-pointer transition-all duration-700 ${
                    isGalleryInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => openModal(image, index)}
                >
                  <div className={`relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 ${
                    image.featured ? 'aspect-[3/4]' : 'aspect-square'
                  }`}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      quality={85}
                    />
                    
                    {/* Overlay with Caption */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <p className="text-white font-montserrat text-xs font-medium mb-1">
                          {image.caption}
                        </p>
                        <span className="text-secondary-accent text-xs font-medium capitalize">
                          {image.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Tap indicator for mobile */}
                    <div className="absolute top-2 right-2 bg-black/20 backdrop-blur-sm rounded-full p-2 opacity-60">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tablet Gallery Grid - 3 columns */}
          <div className="hidden md:block lg:hidden">
            <div className="grid grid-cols-3 gap-4">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`group cursor-pointer transition-all duration-700 ${
                    isGalleryInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                  onClick={() => openModal(image, index)}
                >
                  <div className={`relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 ${
                    image.featured ? 'aspect-[4/5]' : 'aspect-[4/3]'
                  }`}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      quality={90}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white font-montserrat text-sm font-medium mb-1">
                          {image.caption}
                        </p>
                        <span className="text-secondary-accent text-xs font-medium capitalize">
                          {image.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Gallery Grid - Masonry Style */}
          <div className="hidden lg:block">
            <div className="columns-3 xl:columns-4 gap-6 space-y-6">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`break-inside-avoid mb-6 group cursor-pointer transition-all duration-700 ${
                    isGalleryInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 60}ms` }}
                  onClick={() => openModal(image, index)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={600}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      quality={90}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white font-montserrat text-sm font-medium mb-2">
                          {image.caption}
                        </p>
                        <span className="text-secondary-accent text-xs font-medium capitalize">
                          {image.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="w-full max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-marcellus text-secondary-heading">500+</div>
              <div className="text-sm md:text-base text-secondary-paragraphs font-montserrat">Weddings Planned</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-marcellus text-secondary-heading">50+</div>
              <div className="text-sm md:text-base text-secondary-paragraphs font-montserrat">Cities Covered</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-marcellus text-secondary-heading">10+</div>
              <div className="text-sm md:text-base text-secondary-paragraphs font-montserrat">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-marcellus text-secondary-heading">100%</div>
              <div className="text-sm md:text-base text-secondary-paragraphs font-montserrat">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-secondary-background text-center">
        <div className="w-full max-w-4xl mx-auto">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute left-4 -top-4 w-16 h-16 opacity-50 -rotate-12">
              <Image
                src="/bg-flower.png"
                alt="Decorative element"
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute right-4 -bottom-4 w-16 h-16 opacity-50 rotate-12 scale-x-[-1]">
              <Image
                src="/bg-flower.png"
                alt="Decorative element"
                fill
                className="object-contain"
              />
            </div>

            <h2 className="text-2xl md:text-3xl font-marcellus text-secondary-heading mb-4">
              Ready to Create Your Story?
            </h2>
            <p className="text-secondary-paragraphs font-montserrat mb-8 max-w-2xl mx-auto">
              Let us capture your special moments and create memories that will last a lifetime. 
              Contact us to discuss your dream wedding.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <WeddingButton variant="wedding" className="px-8">
                Book Consultation
              </WeddingButton>
              <WeddingButton variant="wedding-light" className="px-8">
                View Services
              </WeddingButton>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Modal Content */}
          <div 
            className="relative w-full h-full max-w-4xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-60 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors duration-200 flex items-center justify-center"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Buttons - Desktop */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-60 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors duration-200 hidden md:flex items-center justify-center"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-60 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors duration-200 hidden md:flex items-center justify-center"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Main Image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain"
                quality={95}
                priority
              />
            </div>

            {/* Image Info - Mobile */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:hidden">
              <h3 className="text-white font-montserrat text-sm font-medium mb-1">
                {selectedImage.caption}
              </h3>
              <p className="text-secondary-accent text-xs font-medium capitalize mb-3">
                {selectedImage.category}
              </p>
              
              {/* Mobile Navigation */}
              {filteredImages.length > 1 && (
                <div className="flex justify-between items-center">
                  <button
                    onClick={goToPrevious}
                    className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous
                  </button>
                  
                  <div className="text-white/70 text-sm">
                    {currentImageIndex + 1} of {filteredImages.length}
                  </div>
                  
                  <button
                    onClick={goToNext}
                    className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium"
                  >
                    Next
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
            </div>

            {/* Image Info - Desktop */}
            <div className="absolute bottom-4 left-4 right-4 hidden md:block">
              <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 text-center">
                <h3 className="text-white font-montserrat text-lg font-medium mb-1">
                  {selectedImage.caption}
                </h3>
                <p className="text-secondary-accent text-sm font-medium capitalize mb-2">
                  {selectedImage.category}
                </p>
                {filteredImages.length > 1 && (
                  <p className="text-white/70 text-sm">
                    {currentImageIndex + 1} of {filteredImages.length} • Use arrow keys to navigate
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;