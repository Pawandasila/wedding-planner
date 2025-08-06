'use client';
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import DecorativeLine from '../../components/DecorativeLine';

const GalleryPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const galleryImages = [
    {
      id: 1,
      src: "/gallery-01.jpg",
      alt: "Joyful bride and groom during ceremony",
      caption: "Pure joy on their special day",
    },
    {
      id: 2,
      src: "/gallery-02.jpg",
      alt: "Happy family celebrating together",
      caption: "Families coming together in celebration",
    },
    {
      id: 3,
      src: "/gallery-03.jpg",
      alt: "Guests dancing and celebrating",
      caption: "Dancing the night away",
    },
    {
      id: 4,
      src: "/gallery-04.jpg",
      alt: "Bride with beautiful smile",
      caption: "Radiant with happiness",
    },
    {
      id: 5,
      src: "/gallery-05.jpg",
      alt: "Elegant wedding decorations",
      caption: "Every detail perfectly arranged",
    },
    {
      id: 6,
      src: "/gallery-06.jpg",
      alt: "Traditional Indian wedding rituals",
      caption: "Sacred traditions honored",
    },
    {
      id: 7,
      src: "/gallery-07.jpg",
      alt: "Beautiful bridal preparations",
      caption: "Getting ready for the big day",
    },
    {
      id: 8,
      src: "/gallery-08.jpg",
      alt: "Stunning venue setup",
      caption: "A magical setting for love",
    },
    {
      id: 9,
      src: "/gallery-09.jpg",
      alt: "Emotional family moments",
      caption: "Moments that last forever",
    },
    {
      id: 10,
      src: "/gallery-10.jpg",
      alt: "Grand wedding reception",
      caption: "Celebrating in style",
    },
    {
      id: 11,
      src: "/gallery-11.jpg",
      alt: "Cultural ceremony highlights",
      caption: "Honoring heritage and tradition",
    },
    {
      id: 12,
      src: "/gallery-12.jpg",
      alt: "Couple's romantic portrait",
      caption: "Love captured forever",
    }
  ];

  const categories = [
    {
      name: "Ceremonies",
      description: "Sacred rituals and traditional moments",
      imageCount: 4,
      images: galleryImages.slice(0, 4)
    },
    {
      name: "Receptions",
      description: "Grand celebrations and joyous festivities",
      imageCount: 4,
      images: galleryImages.slice(4, 8)
    },
    {
      name: "Preparations",
      description: "Behind-the-scenes moments and getting ready",
      imageCount: 4,
      images: galleryImages.slice(8, 12)
    }
  ];

  return (
    <div ref={ref} className="min-h-screen bg-gradient-to-b from-white to-secondary-background/30">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-5 bg-gradient-to-r from-secondary-background to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/hero-03.jpg"
            alt="Wedding gallery background"
            fill
            quality={90}
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-wider intro-animate-slideInUp ${isInView ? 'animate' : ''}`}>
            Wedding Gallery
          </h1>
          
          <div className={`flex justify-center mb-6 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-200' : ''}`}>
            <DecorativeLine isInView={isInView} />
          </div>
          
          <p className={`font-montserrat text-secondary-paragraphs text-lg md:text-xl max-w-4xl mx-auto leading-relaxed intro-animate-fadeInUp ${isInView ? 'animate animation-delay-400' : ''}`}>
            Explore our portfolio of beautiful Indian weddings. From intimate ceremonies to grand celebrations, 
            each moment captured tells a unique love story filled with tradition, joy, and unforgettable memories.
          </p>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-4 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-600' : ''}`}>
              Our Wedding Moments
            </h2>
            <p className={`font-montserrat text-secondary-paragraphs text-lg max-w-3xl mx-auto intro-animate-fadeInUp ${isInView ? 'animate animation-delay-800' : ''}`}>
              Discover the magic of Indian weddings through our carefully curated gallery
            </p>
          </div>

          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 last:mb-0">
              <div className="text-center mb-8">
                <h3 className={`font-marcellus text-secondary-heading text-2xl md:text-3xl font-bold mb-2 intro-animate-fadeInUp ${isInView ? 'animate' : ''}`}
                    style={{ animationDelay: `${1 + categoryIndex * 0.2}s` }}>
                  {category.name}
                </h3>
                <p className={`font-montserrat text-secondary-paragraphs intro-animate-fadeInUp ${isInView ? 'animate' : ''}`}
                   style={{ animationDelay: `${1.2 + categoryIndex * 0.2}s` }}>
                  {category.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.images.map((image, imageIndex) => (
                  <div
                    key={image.id}
                    className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 intro-animate-fadeInUp ${isInView ? 'animate' : ''}`}
                    style={{ animationDelay: `${1.4 + categoryIndex * 0.2 + imageIndex * 0.1}s` }}
                  >
                    <div className="relative h-64 md:h-80 overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="font-montserrat text-sm font-medium">
                          {image.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-16 px-5 bg-gradient-to-r from-secondary-background/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-6 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-1600' : ''}`}>
                Creating Timeless Memories
              </h2>
              <p className={`font-montserrat text-secondary-paragraphs text-lg leading-relaxed mb-6 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-1800' : ''}`}>
                Every wedding tells a unique story, and we ensure each chapter is beautifully crafted. From traditional ceremonies steeped in cultural heritage to contemporary celebrations that reflect modern love stories, our expertise spans across all aspects of Indian wedding planning.
              </p>
              <p className={`font-montserrat text-secondary-paragraphs leading-relaxed mb-8 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-2000' : ''}`}>
                Our dedicated team works tirelessly to bring your vision to life, handling every detail with precision and care. Whether you dream of a royal palace wedding in Rajasthan or an intimate beach ceremony in Goa, we make it happen with seamless execution and unmatched elegance.
              </p>
              
              <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-2200' : ''}`}>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary-accent rounded-full"></div>
                  <span className="font-montserrat text-sm">Traditional Ceremonies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary-accent rounded-full"></div>
                  <span className="font-montserrat text-sm">Luxury Receptions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary-accent rounded-full"></div>
                  <span className="font-montserrat text-sm">Destination Weddings</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary-accent rounded-full"></div>
                  <span className="font-montserrat text-sm">Cultural Celebrations</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4">
                <div className={`space-y-4 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-2400' : ''}`}>
                  <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/service-01.jpg"
                      alt="Wedding ceremony"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-32 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/offerring-01.jpg"
                      alt="Wedding decoration"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={`space-y-4 mt-8 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-2600' : ''}`}>
                  <div className="relative h-32 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/offerring-02.jpg"
                      alt="Wedding planning"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/offerring-03.jpg"
                      alt="Wedding celebration"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-8 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-2800' : ''}`}>
            What Our Couples Say
          </h2>
          
          <div className={`bg-secondary-background/30 p-8 md:p-12 rounded-2xl intro-animate-fadeInUp ${isInView ? 'animate animation-delay-3000' : ''}`}>
            <div className="text-6xl text-secondary-accent mb-4">&ldquo;</div>
            <p className="font-montserrat text-secondary-paragraphs text-lg md:text-xl leading-relaxed mb-6 italic">
              The team made our dream wedding come true! Every detail was perfect, from the traditional ceremonies to the grand reception. They understood our vision and brought it to life beyond our expectations. Our families were amazed by the seamless coordination and authentic cultural elements.
            </p>
            <div className="font-marcellus text-secondary-heading font-semibold text-lg">
              Priya & Arjun
            </div>
            <div className="font-montserrat text-secondary-accent text-sm">
              Royal Palace Wedding, Udaipur
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-5 bg-gradient-to-r from-secondary-accent/5 to-secondary-background/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-6 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-3200' : ''}`}>
            Ready to Create Your Story?
          </h2>
          <p className={`font-montserrat text-secondary-paragraphs text-lg mb-8 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-3400' : ''}`}>
            Let us help you create beautiful memories that will be cherished for generations. 
            Start planning your perfect Indian wedding celebration today.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center intro-animate-fadeInUp ${isInView ? 'animate animation-delay-3600' : ''}`}>
            <Link
              href="/contact"
              className="inline-block bg-secondary-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-secondary-accent/90 transition-colors duration-300"
            >
              Start Planning
            </Link>
            <Link
              href="/events/weddings"
              className="inline-block border-2 border-secondary-accent text-secondary-accent px-8 py-3 rounded-lg font-medium hover:bg-secondary-accent hover:text-white transition-all duration-300"
            >
              View Venues
            </Link>
          </div>
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
        
        @media (max-width: 768px) {
          .animation-delay-200 { animation-delay: 0.2s; }
          .animation-delay-400 { animation-delay: 0.4s; }
          .animation-delay-600 { animation-delay: 0.6s; }
          .animation-delay-800 { animation-delay: 0.8s; }
          .animation-delay-1000 { animation-delay: 1s; }
          .animation-delay-1200 { animation-delay: 1.2s; }
          .animation-delay-1400 { animation-delay: 1.4s; }
          .animation-delay-1600 { animation-delay: 1.6s; }
          .animation-delay-1800 { animation-delay: 1.8s; }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-2200 { animation-delay: 2.2s; }
          .animation-delay-2400 { animation-delay: 2.4s; }
          .animation-delay-2600 { animation-delay: 2.6s; }
          .animation-delay-2800 { animation-delay: 2.8s; }
          .animation-delay-3000 { animation-delay: 3s; }
          .animation-delay-3200 { animation-delay: 3.2s; }
          .animation-delay-3400 { animation-delay: 3.4s; }
          .animation-delay-3600 { animation-delay: 3.6s; }
        }
      `}</style>
    </div>
  );
};

export default GalleryPage;
