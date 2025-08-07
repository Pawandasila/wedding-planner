'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
  images: string[];
  venueName: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, venueName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const openFullScreen = () => {
    setIsFullScreen(true);
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isFullScreen) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          prevImage();
          break;
        case 'ArrowRight':
          e.preventDefault();
          nextImage();
          break;
        case 'Escape':
          e.preventDefault();
          closeFullScreen();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isFullScreen, nextImage, prevImage]);

  return (
    <>
      {/* Main Gallery */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 h-96 lg:h-[500px]">
        {/* Main Image */}
        <div className="lg:col-span-3 relative group cursor-pointer" onClick={openFullScreen}>
          <Image
            src={images[currentIndex]}
            alt={`${venueName} main view`}
            fill
            className="object-cover rounded-l-lg transition-transform duration-300 group-hover:scale-105"
            priority
          />
          
          {/* Navigation Arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* View All Photos Button */}
          <button
            onClick={openFullScreen}
            className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80"
          >
            View All Photos ({images.length})
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
        
        {/* Thumbnail Grid */}
        <div className="hidden lg:block space-y-2">
          {images.slice(1, 5).map((image, index) => (
            <div
              key={index}
              className="relative h-[120px] cursor-pointer group overflow-hidden rounded-r-lg"
              onClick={() => setCurrentIndex(index + 1)}
            >
              <Image
                src={image}
                alt={`${venueName} view ${index + 2}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
          
          {/* More Photos Indicator */}
          {images.length > 5 && (
            <div
              className="relative h-[120px] cursor-pointer group overflow-hidden rounded-r-lg bg-black/80 flex items-center justify-center"
              onClick={openFullScreen}
            >
              <div className="text-white text-center">
                <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm font-medium">+{images.length - 4} more</p>
              </div>
            </div>
          )}
        </div>

        {/* Mobile: Image Navigation Dots */}
        <div className="lg:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.slice(0, 6).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
          {images.length > 6 && (
            <button
              onClick={openFullScreen}
              className="text-white text-xs px-2 py-1 bg-black/50 rounded-full"
            >
              +{images.length - 6}
            </button>
          )}
        </div>
      </div>

      {/* Full Screen Gallery Modal */}
      {isFullScreen && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeFullScreen}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full transition-colors duration-300 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-4 text-white text-sm bg-black/50 px-3 py-1 rounded-lg z-10">
            {currentIndex + 1} of {images.length}
          </div>

          {/* Main Image */}
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <div className="relative max-w-5xl max-h-full">
              <Image
                src={images[currentIndex]}
                alt={`${venueName} gallery image ${currentIndex + 1}`}
                width={1200}
                height={800}
                className="object-contain max-w-full max-h-full"
                priority
              />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-3 hover:bg-white/20 rounded-full transition-colors duration-300"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-3 hover:bg-white/20 rounded-full transition-colors duration-300"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-full overflow-x-auto px-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                  currentIndex === index 
                    ? 'ring-2 ring-white scale-110' 
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {/* Keyboard Navigation Hint */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white/70 text-xs text-center">
            Use arrow keys or click to navigate • ESC to close
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
