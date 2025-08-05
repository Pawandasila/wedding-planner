import Gallery from "./(landing)/_components/Gallery/Gallery";
import Hero from "./(landing)/_components/Hero/Hero";
import Intro from "./(landing)/_components/IntroSection/Intro";
import Navbar from "./(landing)/_components/Navbar/Navbar";
import Offerings from "./(landing)/_components/Offerings/Offerings";
import Services from "./(landing)/_components/Services/Service";
import Stats from "./(landing)/_components/Stats/Stats";
import TestimonialSection from "./(landing)/_components/TestimonialSection/TestimonialSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation Section */}
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />

        <Stats />

        <Intro />

        <Services />

        <Offerings />

        <Gallery />

        <TestimonialSection />
        
      </main>
    </div>
  );
}
