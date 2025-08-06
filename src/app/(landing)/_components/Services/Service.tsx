'use client';
import React, { useRef } from 'react'
import { useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import DecorativeLine from '../../../../components/DecorativeLine'
import WeddingButton from '../../../../components/WeddingButton'
import '../IntroSection/style.css'

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const services = [
    {
      id: 1,
      title: "Indian Weddings",
      description: "Traditional and grand Indian wedding ceremonies with authentic rituals, vibrant decorations, and cultural elegance that honors your heritage.",
      image: "/hero-08.jpg",
      link: "/services/weddings"
    },
    {
      id: 2, 
      title: "Event Design",
      description: "Bespoke event design services creating memorable experiences with stunning décor, lighting, and ambiance for all your special occasions.",
      image: "/service-01.jpg",
      link: "/services/event-design"
    },
    {
      id: 3,
      title: "Venue Coordination", 
      description: "Complete venue management and coordination services ensuring flawless execution of your celebration from setup to cleanup.",
      image: "/hero-07.jpg",
      link: "/services/venue-coordination"
    },
  ];

  return (
    <section 
      ref={ref}
      className="flex flex-col items-center justify-center py-16 md:py-20 px-5 bg-secondary-background"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-16">
          <h2 className={`font-marcellus tracking-wider font-bold text-secondary-heading text-2xl md:text-3xl lg:text-4xl mb-6 text-center intro-animate-slideInUp ${isInView ? 'animate' : ''}`}>
            Our Services
          </h2>
          
          {/* Decorative Line with Center Dot */}
          <DecorativeLine isInView={isInView} />
          
        </div>

        {/* Services Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`w-full flex flex-col items-center intro-animate-fadeInUp ${isInView ? 'animate' : ''}`}
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              {/* Service Image */}
              <Link 
                href={service.link}
                className="w-full h-96 md:h-[28rem] lg:h-[30rem] bg-secondary-preload mb-11 overflow-hidden transition-all duration-700 hover:shadow-xl group block hover:scale-95"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={805}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </Link>

              {/* Service Content */}
              <div className="text-center flex flex-col justify-start items-center px-[5%]">
                {/* Service Title */}
                <Link 
                  href={service.link}
                  className="mb-5 no-underline transition-opacity duration-400 hover:opacity-70"
                >
                  <h4 className="text-secondary-heading font-marcellus text-xl md:text-2xl font-semibold">
                    {service.title}
                  </h4>
                </Link>

                {/* Service Description */}
                <p className="text-secondary-paragraphs font-montserrat text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <Link 
                  href={'/services'}
                  className="text-secondary-accent hover:text-secondary-heading transition-colors duration-300 uppercase tracking-wider text-sm font-medium underline hover:no-underline"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className={`mt-12 md:mt-16 intro-animate-fadeInUp ${isInView ? 'animate animation-delay-1000' : ''}`}>
          <WeddingButton asChild>
            <Link href="/services">
              View All Services
            </Link>
          </WeddingButton>
        </div>
      </div>
    </section>
  )
}

export default Services