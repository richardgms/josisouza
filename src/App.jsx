import React from 'react';
import Hero from './sections/Hero';
import HeroSplit from './sections/HeroSplit';
import Header from './components/Header';
import About from './sections/About';
import Services from './sections/Services';
import Experience from './sections/Experience';
import Gallery from './sections/Gallery';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-text font-sans selection:bg-primary selection:text-white scroll-smooth overflow-x-hidden">
      <Header />

      <main>
        <Hero />
        <HeroSplit />
        <About />
        <Services />
        <Experience />
        <Gallery />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

export default App;
