"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import DecorativeLine from "../../../../components/DecorativeLine";
import WeddingButton from "../../../../components/WeddingButton";
import "../IntroSection/style.css";

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
      alt: "Wedding party laughing together",
      caption: "Laughter and love shared",
    },
    {
      id: 6,
      src: "/gallery-06.jpg",
      alt: "Couple's first dance",
      caption: "Lost in the moment",
    },
    {
      id: 7,
      src: "/gallery-07.jpg",
      alt: "Indian wedding ceremony joy",
      caption: "Traditional celebrations filled with joy",
    },
    {
      id: 8,
      src: "/gallery-08.jpg",
      alt: "Guests celebrating with sparklers",
      caption: "Sparkling moments of celebration",
    },
    {
      id: 9,
      src: "/gallery-09.jpg",
      alt: "Emotional moment with family",
      caption: "Tears of joy and happiness",
    },
    {
      id: 10,
      src: "/gallery-10.jpg",
      alt: "Emotional moment with family",
      caption: "Tears of joy and happiness",
    },
    {
      id: 11,
      src: "/gallery-11.jpg",
      alt: "Emotional moment with family",
      caption: "Tears of joy and happiness",
    },
    {
      id: 12,
      src: "/gallery-12.jpg",
      alt: "Emotional moment with family",
      caption: "Tears of joy and happiness",
    },
  ];

  return (
    <section
      ref={ref}
      className="flex flex-col items-center justify-center py-16 md:py-20 px-5 "
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-16">
          <h2
            className={`font-marcellus tracking-wider font-bold text-secondary-heading text-2xl md:text-3xl lg:text-4xl mb-6 text-center intro-animate-slideInUp ${
              isInView ? "animate" : ""
            }`}
          >
            Moments of Pure Joy
          </h2>

          {/* Decorative Line */}
          <DecorativeLine isInView={isInView} />

          {/* Subtitle */}
          <p
            className={`font-montserrat text-secondary-paragraphs text-base md:text-lg text-center mt-6 max-w-2xl intro-animate-fadeInUp ${
              isInView ? "animate animation-delay-400" : ""
            }`}
          >
            Every celebration tells a story of love, laughter, and unforgettable
            memories. See the happiness we&apos;ve helped create for countless
            families.
          </p>
        </div>

        {/* Mobile View - Clean 2x3 Grid */}
        <div className="w-full md:hidden">
          <div className="grid grid-cols-2 gap-4">
            {galleryImages.slice(0, 6).map((image, index) => (
              <div
                key={image.id}
                className={`group cursor-pointer intro-animate-fadeInUp ${
                  isInView ? "animate" : ""
                }`}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 aspect-[3/4]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    quality={85}
                  />

                  {/* Overlay with Caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <p className="text-white font-montserrat text-xs font-medium">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop View - Pinterest-style Masonry */}
        <div className="w-full hidden md:block">
          <div className="columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`break-inside-avoid mb-6 group cursor-pointer intro-animate-fadeInUp ${
                  isInView ? "animate" : ""
                }`}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
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
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/gA=="
                  />

                  {/* Overlay with Caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-montserrat text-sm font-medium">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div
          className={`mt-12 md:mt-16 intro-animate-fadeInUp ${
            isInView ? "animate animation-delay-1600" : ""
          }`}
        >
          <WeddingButton>View Full Gallery</WeddingButton>
        </div>


      </div>
    </section>
  );
};

export default Gallery;
