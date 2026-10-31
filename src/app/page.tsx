import Hero from '@/sections/Hero';
import HeroSplit from '@/sections/HeroSplit';
import About from '@/sections/About';
import Services from '@/sections/Services';
import Experience from '@/sections/Experience';
import Gallery from '@/sections/Gallery';
import FAQ from '@/sections/FAQ';

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col min-h-[max(100dvh,640px)] max-[340px]:min-h-[max(100dvh,720px)] md:min-h-[max(100dvh,820px)]">
        <Hero />
        <HeroSplit />
      </div>
      <About />
      <Services />
      <Experience />
      <Gallery />
      <FAQ />
    </>
  );
}
