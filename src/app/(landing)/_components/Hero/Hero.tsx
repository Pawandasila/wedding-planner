import React from "react";
import Image from "next/image";
import WeddingButton from "../../../../components/WeddingButton";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center pb-20 px-5 animate-fadeIn">
      <div className="w-full max-w-[1800px]">
        <div className="w-full max-w-7xl flex flex-col items-center mx-auto">
          <div className="w-full text-center flex flex-col items-center mb-10 relative">
            {/* Hero Images Grid */}
            <div className="w-full grid grid-cols-3 gap-2 md:gap-5 mb-0">
              <div className="w-full overflow-hidden bg-gray-100 animate-slideInLeft rounded-md">
                <Image
                  src="/hero-01.jpg"
                  alt="Indian Wedding Celebration"
                  width={803}
                  height={600}
                  className="w-full h-[35vh] md:h-[80vh] min-h-[250px] md:min-h-[600px] object-cover transform scale-105 hover:scale-110 transition-all duration-700 hover:brightness-110"
                  priority
                />
              </div>
              <div className="w-full overflow-hidden bg-gray-100 animate-slideInUp animation-delay-200 rounded-md">
                <Image
                  src="/hero-11.jpg"
                  alt="Traditional Indian Wedding Setup"
                  width={803}
                  height={600}
                  className="w-full h-[35vh] md:h-[80vh] min-h-[250px] md:min-h-[600px] object-cover transform scale-105 hover:scale-110 transition-all duration-700 hover:brightness-110"
                />
              </div>
              <div className="w-full overflow-hidden bg-gray-100 animate-slideInRight animation-delay-400 rounded-md">
                <Image
                  src="/hero-10.jpg"
                  alt="Premium Indian Event Planning"
                  width={803}
                  height={600}
                  className="w-full h-[35vh] md:h-[80vh] min-h-[250px] md:min-h-[600px] object-cover transform scale-105 hover:scale-110 transition-all duration-700 hover:brightness-110"
                />
              </div>
            </div>

            {/* Hero Content Block */}
            <div className="relative md:absolute bottom-18 md:bottom-[-40px] z-20 w-full md:w-[90%] max-w-[780px] mt-6 md:mt-0 animate-slideInUp animation-delay-600">
              <div className="bg-white text-center flex flex-col justify-center items-center py-6 md:py-6 px-[5%] md:px-[10%] relative shadow-lg hover:shadow-xl transition-shadow duration-500">
                <Image
                  src="/leaf.png"
                  alt="Decorative element"
                  width={62}
                  height={20}
                  className="mb-4 object-contain opacity-100 animate-float animation-delay-1400 "
                />

                {/* Subtitle */}
                <div
                  className="text-secondary-paragraphs tracking-widest text-lg md:text-lg mb-4 md:mb-4 animate-fadeInUp animation-delay-800 font-montserrat"
                >
                  Unforgettable celebrations
                </div>

                {/* Main Heading */}
                <h1
                  className="text-secondary-heading text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-4 leading-tight animate-fadeInUp animation-delay-1000 font-marcellus"
                >
                  The Grand Indian  <br />
                  Weddings &amp; <br />
                  Celebration Parties
                </h1>

                {/* CTA Button */}
                <WeddingButton
                  variant="wedding-light"
                  asChild
                  className="animate-fadeInUp animation-delay-1200"
                >
                  <a href="/contact">
                    Book Consultation
                  </a>
                </WeddingButton>
              </div>

              {/* Decorative Flower */}
              <Image
                src="/flower.png"
                alt="Decorative flower"
                width={300}
                height={300}
                className="absolute bottom-[-89px] left-[-18%] z-10 w-[300px] object-contain transform rotate-[4.7deg] opacity-100 hidden md:block animate-float animation-delay-1400 hover:rotate-12 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
