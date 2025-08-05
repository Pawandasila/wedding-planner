'use client';
import Image from 'next/image'
import React from 'react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './style.css';

const Intro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section 
      ref={ref}
      className="relative flex flex-col items-center justify-center py-16 md:py-20 px-5 bg-secondary-background overflow-hidden"
    >
      {/* Top Left Decorative Flower */}
      <div className="absolute left-4 top-8 md:left-8 md:top-12 w-24 h-24 md:w-36 md:h-36 lg:w-40 lg:h-40 opacity-90 -rotate-12">
        <Image
          src="/bg-flower.png"
          alt="Decorative flower top left"
          fill
          className="object-contain"
        />
      </div>

      {/* Top Right Decorative Leaf */}
      <div className="absolute right-4 top-12 md:right-8 md:top-16 w-12 h-12 md:w-20 md:h-20 opacity-90 rotate-45">
        <Image
          src="/sideleaf.png"
          alt="Decorative leaf top right"
          fill
          className="object-contain"
        />
      </div>

      {/* Bottom Left Decorative Leaf */}
      <div className="absolute left-8 bottom-16 md:left-12 md:bottom-20 w-14 h-14 md:w-18 md:h-18 opacity-90 -rotate-45">
        <Image
          src="/leaf.png"
          alt="Decorative leaf bottom left"
          fill
          className="object-contain"
        />
      </div>

      {/* Bottom Right Decorative Flowers */}
      <div className="absolute right-6 bottom-8 md:right-10 md:bottom-12 w-28 h-28 md:w-40 md:h-40 lg:w-44 lg:h-44 opacity-90 rotate-12 scale-x-[-1]">
        <Image
          src="/bg-flower.png"
          alt="Decorative flowers bottom right"
          fill
          className="object-contain"
        />
      </div>

      <div className="w-full max-w-4xl mx-auto text-center flex items-center flex-col">
        {/* Decorative Leaf */}
        <div className={`text-center mb-6 transform hover:scale-110 transition-transform duration-300 intro-animate-fadeInUp ${isInView ? 'animate' : ''}`}>
          <Image 
            src={'/leaf-02.png'} 
            alt="Decorative Leaf" 
            width={80} 
            height={80} 
            className="object-contain opacity-90 " 
            loading="lazy"
          />
        </div>

        {/* Main Quote */}
        <h2 className={`text-secondary-heading text-xl md:text-2xl lg:text-3xl font-marcellus max-w-3xl mb-6 leading-relaxed intro-animate-slideInUp ${isInView ? 'animate animation-delay-200' : ''}`}>
          Your Indian wedding should be a magnificent celebration of love, traditions, and the sacred bond that unites two families into <span className="text-secondary-accent font-semibold italic animate-bounce-subtle">one</span>.
        </h2>

        {/* Supporting Text */}
        <p className={`text-secondary-paragraphs text-base md:text-lg lg:text-xl max-w-2xl mb-8 font-montserrat leading-relaxed intro-animate-fadeInUp ${isInView ? 'animate animation-delay-400' : ''}`}>
          From vibrant Sangam ceremonies to the sacred Saat Phere, every ritual tells the story of eternal love. Let us orchestrate your dream wedding with the grandeur of Indian traditions and the elegance of modern celebrations.
        </p>

        {/* Signature */}
        <div className={`font-homemade-apple text-secondary-accent text-2xl md:text-3xl transform hover:scale-105 transition-all duration-300 cursor-default intro-animate-slideInLeft ${isInView ? 'animate animation-delay-600' : ''}`}>
          Pawan Dasila
        </div>

        {/* Decorative Line */}
        <div className={`h-0.5 bg-secondary-accent/30 mt-4 intro-animate-expandWidth ${isInView ? 'animate animation-delay-800' : ''}`}></div>
      </div>
    </section>
  )
}


export default Intro