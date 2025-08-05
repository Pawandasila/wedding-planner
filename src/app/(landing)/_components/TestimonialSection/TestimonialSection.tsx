'use client';
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import DecorativeLine from '../../../../components/DecorativeLine';
import '../IntroSection/style.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const TestimonialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const testimonials = [
    {
      id: 1,
      name: "Vishal & Shreya Joshi",
      location: "Mumbai",
      image: "/gallery-01.jpg",
      rating: 5,
      testimonial: "Pawan and his team made our dream wedding come true! Every detail was perfect, from the stunning mandap decorations to the seamless coordination of all ceremonies. Our families were amazed by the beautiful blend of traditional rituals and modern elegance.",
      event: "Traditional Indian Wedding"
    },
    {
      id: 2,
      name: "Kavya & Priyanshu Singh",
      location: "Delhi",
      image: "/gallery-12.jpg",
      rating: 5,
      testimonial: "We couldn't have asked for a better wedding planner! The attention to detail was incredible - from the mehendi ceremony to the grand reception. Every moment was captured beautifully and executed flawlessly. Highly recommended!",
      event: "Destination Wedding"
    },
    {
      id: 3,
      name: "Ananya & Vikram Singh",
      location: "Jaipur",
      image: "/gallery-03.jpg",
      rating: 5,
      testimonial: "Our wedding was absolutely magical! Pawan understood our vision perfectly and brought it to life with such creativity and professionalism. The decor was breathtaking and all our guests are still talking about how beautiful everything was.",
      event: "Royal Rajasthani Wedding"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section 
      ref={ref}
      className="relative py-16 md:py-20 px-5 overflow-hidden"
    >
      <div className={`absolute left-0 top-1/4 w-32 h-32 md:w-48 md:h-48 opacity-90 -translate-x-1/4 transition-all duration-1000 ${isInView ? 'animate-float' : 'translate-y-8 opacity-0'}`}>
        <Image
          src="/bg-flower.png"
          alt="Decorative background"
          fill
          className="object-contain"
        />
      </div>
      
      <div className={`absolute right-0 bottom-1/4 w-32 h-32 md:w-48 md:h-48 opacity-90 translate-x-1/4 scale-x-[-1] transition-all duration-1000 delay-300 hidden md:block ${isInView ? 'animate-float' : 'translate-y-8 opacity-0'}`} style={{ animationDelay: '2s' }}>
        <Image
          src="/bg-flower.png"
          alt="Decorative background"
          fill
          className="object-contain"
        />
      </div>

      <div className={`absolute left-1/4 top-16 w-16 h-16 md:w-24 md:h-24 opacity-90 transition-all duration-1000 delay-500 hidden md:block ${isInView ? 'animate-float' : 'translate-y-8 opacity-0'}`} style={{ animationDelay: '3s' }}>
        <Image
          src="/flower.png"
          alt="Decorative flower"
          fill
          className="object-contain"
        />
      </div>


      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center mb-16">
          <h2 className={`font-marcellus tracking-wider font-bold text-secondary-heading text-2xl md:text-3xl lg:text-4xl mb-6 text-center intro-animate-slideInUp ${isInView ? 'animate' : ''}`}>
            Love Stories & Happy Couples
          </h2>
          
          <DecorativeLine isInView={isInView} />
          
          <p className={`font-montserrat text-secondary-paragraphs text-base md:text-lg text-center mt-6 max-w-2xl intro-animate-fadeInUp ${isInView ? 'animate animation-delay-400' : ''}`}>
            Hear from the couples whose dream weddings became beautiful realities with our dedicated planning and heartfelt service.
          </p>
        </div>

        <div className={`relative w-full max-w-4xl intro-animate-fadeInUp ${isInView ? 'animate animation-delay-600' : ''}`}>
          <div className="testimonial-swiper-button-prev absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg hover:shadow-xl border border-secondary-accent/10 hover:border-secondary-accent/20 flex items-center justify-center transition-all duration-300 group cursor-pointer">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-secondary-accent group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </div>
          
          <div className="testimonial-swiper-button-next absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg hover:shadow-xl border border-secondary-accent/10 hover:border-secondary-accent/20 flex items-center justify-center transition-all duration-300 group cursor-pointer">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-secondary-accent group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
            </svg>
          </div>

          <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.testimonial-swiper-button-next',
              prevEl: '.testimonial-swiper-button-prev',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
            loop={true}
            allowTouchMove={true}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-secondary-accent/10 relative overflow-hidden">
                  <div className="absolute top-6 left-6 text-6xl text-secondary-accent font-serif leading-none">
                    &ldquo;
                  </div>
                  
                  <div className="relative z-10">
                    
                    <div className="text-center mb-8">
                      <div className="flex justify-center mb-4">
                        {renderStars(testimonial.rating)}
                      </div>
                      
                      <blockquote className="text-secondary-paragraphs font-montserrat text-lg md:text-xl leading-relaxed mb-6 italic">
                        {testimonial.testimonial}
                      </blockquote>
                      
                      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-secondary-accent/20">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="text-center md:text-left">
                          <h4 className="font-marcellus text-secondary-heading text-xl font-semibold">
                            {testimonial.name}
                          </h4>
                          <p className="text-secondary-paragraphs font-montserrat text-sm">
                            {testimonial.event} • {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={`mt-12 text-center intro-animate-fadeInUp ${isInView ? 'animate animation-delay-1000' : ''}`}>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-0.5 bg-secondary-accent/40"></div>
            <div className="text-secondary-accent text-xl">💕</div>
            <div className="w-12 h-0.5 bg-secondary-accent/40"></div>
          </div>
          <p className="font-montserrat text-secondary-paragraphs italic text-sm md:text-base max-w-md mx-auto">
            &ldquo;Every love story is beautiful, but yours deserves to be unforgettable&rdquo;
          </p>
        </div>
      </div>

      <style jsx global>{`
        .testimonial-swiper {
          width: 100%;
          height: auto;
        }
        
        .testimonial-swiper .swiper-slide {
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        
        .testimonial-swiper .swiper-slide-active {
          opacity: 1;
        }
        
        /* Hide default Swiper navigation buttons */
        .testimonial-swiper .swiper-button-next,
        .testimonial-swiper .swiper-button-prev {
          display: none;
        }
        
        /* Custom navigation button styles */
        .testimonial-swiper-button-prev:hover,
        .testimonial-swiper-button-next:hover {
          background: rgba(var(--secondary-accent-rgb), 0.05);
          transform: translateY(-50%) scale(1.05);
        }
        
        @media (max-width: 768px) {
          .testimonial-swiper-button-prev,
          .testimonial-swiper-button-next {
            opacity: 0.8;
          }
          
          .testimonial-swiper-button-prev:active,
          .testimonial-swiper-button-next:active {
            opacity: 1;
            transform: translateY(-50%) scale(0.95);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(2deg); }
          50% { transform: translateY(-5px) rotate(-1deg); }
          75% { transform: translateY(-15px) rotate(1deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;