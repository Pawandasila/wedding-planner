import Contact from "./(landing)/_components/Contact/Contact";
import Gallery from "./(landing)/_components/Gallery/Gallery";
import Hero from "./(landing)/_components/Hero/Hero";
import Intro from "./(landing)/_components/IntroSection/Intro";
import Offerings from "./(landing)/_components/Offerings/Offerings";
import Services from "./(landing)/_components/Services/Service";
import Stats from "./(landing)/_components/Stats/Stats";
import TestimonialSection from "./(landing)/_components/TestimonialSection/TestimonialSection";
import VenueCategories from "./(landing)/_components/VenueCategories/VenueCategories";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />

      <Stats />

      <Intro />

      <Services />

      <VenueCategories />

      <Offerings />

      <Gallery />

      <Contact />

      <TestimonialSection />
    </div>
  );
}
