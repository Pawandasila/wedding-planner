'use client';
import React, { useRef, useState, useEffect, useMemo } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import DecorativeLine from '../../../../components/DecorativeLine';
import '../IntroSection/style.css';

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [counters, setCounters] = useState([0, 0, 0, 0]);

  const statsData = useMemo(() => [
    {
      id: 1,
      number: 850,
      label: "Happy Couples",
      icon: "/ring.png",
      bgStyle: "bg-gradient-to-br from-pink-50 to-rose-100",
      iconBg: "bg-rose-100",
      delay: 0.2
    },
    {
      id: 2,
      number: 320,
      label: "Dream Venues",
      icon: "/gate-light.png",
      bgStyle: "bg-gradient-to-br from-secondary-accent/5 to-secondary-accent/10",
      iconBg: "bg-secondary-accent/10",
      delay: 0.4
    },
    {
      id: 3,
      number: 1500,
      label: "Magical Moments",
      icon: "/wedding-flowers.png",
      bgStyle: "bg-gradient-to-br from-amber-50 to-orange-100",
      iconBg: "bg-amber-100",
      delay: 0.6
    },
    {
      id: 4,
      number: 950,
      label: "Celebrations Created",
      icon: "/flower-light.png",
      bgStyle: "bg-gradient-to-br from-emerald-50 to-green-100",
      iconBg: "bg-emerald-100",
      delay: 0.8
    }
  ], []);

  // Counter animation effect
  useEffect(() => {
    if (isInView) {
      statsData.forEach((stat, index) => {
        let startTime: number;
        const duration = 2000; // 2 seconds
        const startValue = 0;
        const endValue = stat.number;

        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          
          // Easing function for smooth animation
          const easeOutCubic = 1 - Math.pow(1 - progress, 3);
          const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutCubic);
          
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = currentValue;
            return newCounters;
          });

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        setTimeout(() => {
          requestAnimationFrame(animate);
        }, stat.delay * 1000);
      });
    }
  }, [isInView, statsData]);

  const formatNumber = (num: number, originalNum: number) => {
    if (originalNum >= 1000) {
      return `${(num / 1000).toFixed(1)}k+`.replace('.0', '');
    }
    return `${num}+`;
  };

  return (
    <section 
      ref={ref}
      className="relative py-20 md:py-24 px-5 overflow-hidden"
    >
      {/* Left Side Decorative Flower */}
      <div className="absolute left-0 top-16 md:top-20 w-24 h-24 md:w-40 md:h-40 lg:w-48 lg:h-48 opacity-90 -translate-x-1/4">
        <Image
          src="/bg-flower.png"
          alt="Decorative flower left"
          fill
          className="object-contain"
        />
      </div>
      
      {/* Right Side Decorative Flower (Mirrored) */}
      <div className="absolute right-0 top-16 md:top-20 w-24 h-24 md:w-40 md:h-40 lg:w-48 lg:h-48 opacity-90 translate-x-1/4 scale-x-[-1]">
        <Image
          src="/bg-flower.png"
          alt="Decorative flower right"
          fill
          className="object-contain"
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <h2 className={`font-marcellus tracking-wider font-bold text-secondary-heading text-2xl md:text-3xl lg:text-4xl mb-6 text-center intro-animate-slideInUp ${isInView ? 'animate' : ''}`}>
            Our Journey in Numbers
          </h2>
          
          <DecorativeLine isInView={isInView} />
          
          <p className={`font-montserrat text-secondary-paragraphs text-base md:text-lg text-center mt-6 max-w-2xl intro-animate-fadeInUp ${isInView ? 'animate animation-delay-400' : ''}`}>
            Every number tells a story of love, joy, and unforgettable celebrations we&apos;ve been honored to create.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {statsData.map((stat, index) => (
            <div
              key={stat.id}
              className={`group intro-animate-fadeInUp ${isInView ? 'animate' : ''}`}
              style={{ animationDelay: `${0.6 + stat.delay}s` }}
            >
              {/* Stats Card */}
              <div className={`relative ${stat.bgStyle} rounded-2xl p-6 md:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 border border-white/50 backdrop-blur-sm group-hover:scale-105`}>
                {/* Icon */}
                <div className={`${stat.iconBg} w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="relative w-8 h-8 md:w-10 md:h-10">
                    <Image
                      src={stat.icon}
                      alt={stat.label}
                      fill
                      className="object-contain brightness-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
                      style={{
                        filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)'
                      }}
                    />
                  </div>
                </div>
                
                {/* Animated Number */}
                <div className="mb-2 md:mb-3">
                  <span className="font-marcellus text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-heading block leading-none">
                    {isInView ? formatNumber(counters[index], stat.number) : '0+'}
                  </span>
                </div>
                
                {/* Label */}
                <p className="font-montserrat text-secondary-paragraphs text-xs sm:text-sm md:text-base font-medium tracking-wide px-2">
                  {stat.label}
                </p>

                {/* Decorative Element */}
                <div className="absolute top-3 md:top-4 right-3 md:right-4 w-1.5 h-1.5 md:w-2 md:h-2 bg-secondary-accent/30 rounded-full group-hover:bg-secondary-accent/50 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className={`mt-16 text-center intro-animate-fadeInUp ${isInView ? 'animate animation-delay-1200' : ''}`}>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-0.5 bg-secondary-accent/40"></div>
            <div className="text-secondary-accent text-xl">✨</div>
            <div className="w-12 h-0.5 bg-secondary-accent/40"></div>
          </div>
          <p className="font-montserrat text-secondary-paragraphs italic text-sm md:text-base max-w-md mx-auto">
            &ldquo;Behind every number is a family&apos;s dream brought to life&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;