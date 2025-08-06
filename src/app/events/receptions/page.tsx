'use client';
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import DecorativeLine from '../../../components/DecorativeLine';
import WeddingButton from '../../../components/WeddingButton';

const ReceptionHallsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div ref={ref} className="min-h-screen bg-gradient-to-b from-white to-secondary-background/30">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-5 bg-gradient-to-r from-secondary-background to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/hero-02.jpg"
            alt="Reception halls background"
            fill
            quality={90}
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-wider intro-animate-slideInUp ${isInView ? 'animate' : ''}`}>
            Reception Halls
          </h1>
          
          <div className={`flex justify-center mb-6 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-200' : ''}`}>
            <DecorativeLine isInView={isInView} />
          </div>
          
          <p className={`font-montserrat text-secondary-paragraphs text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-400' : ''}`}>
            Discover our collection of elegant reception halls perfect for celebrating your wedding festivities 
            with family and friends in style and comfort.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center intro-animate-fadeInUp ${isInView ? 'animate animation-delay-600' : ''}`}>
            <WeddingButton asChild>
              <Link href="/contact">
                Book Your Reception
              </Link>
            </WeddingButton>
            <WeddingButton variant="wedding-light" asChild>
              <Link href="/events/weddings">
                View Wedding Venues
              </Link>
            </WeddingButton>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`font-marcellus text-secondary-heading text-3xl md:text-4xl font-bold mb-8 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-800' : ''}`}>
            Coming Soon
          </h2>
          <p className={`font-montserrat text-secondary-paragraphs text-lg mb-8 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-1000' : ''}`}>
            We&rsquo;re currently curating our finest reception halls for you. Please contact us for immediate assistance with your reception venue needs.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center intro-animate-fadeInUp ${isInView ? 'animate animation-delay-1200' : ''}`}>
            <WeddingButton asChild>
              <Link href="/contact">
                Contact Us
              </Link>
            </WeddingButton>
            <WeddingButton variant="wedding-light" asChild>
              <Link href="/services">
                View Our Services
              </Link>
            </WeddingButton>
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
        }
      `}</style>
    </div>
  );
};

export default ReceptionHallsPage;
