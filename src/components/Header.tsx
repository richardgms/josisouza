'use client';

import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinksLeft = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
  ];

  const navLinksRight = [
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 border-b border-secondary/10 ${
          isScrolled ? 'bg-background/95 py-3 shadow-sm' : 'bg-background py-5'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center relative">
          {/* Mobile Menu Button (Left) */}
          <button
            className="md:hidden text-primary p-2 -ml-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          {/* Desktop Nav Left */}
          <nav className="hidden md:flex items-center space-x-12 flex-1 justify-end pr-12">
            {navLinksLeft.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-text/80 hover:text-primary transition-colors text-xs uppercase tracking-[0.2em] font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Centered Brand / Monogram */}
          <a href="#" className="flex flex-col items-center group relative z-10">
            <span className="font-serif text-2xl md:text-3xl text-primary font-normal tracking-wide group-hover:opacity-90 transition-opacity">
              Josi Souza
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-text/60 mt-0.5">
              Nail Design
            </span>
          </a>

          {/* Desktop Nav Right */}
          <nav className="hidden md:flex items-center space-x-12 flex-1 justify-start pl-12">
            {navLinksRight.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-text/80 hover:text-primary transition-colors text-xs uppercase tracking-[0.2em] font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* WhatsApp CTA (Right for desktop, icon for mobile) */}
          <div className="flex items-center">
            <a
              href="https://wa.me/5583986209170"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-block px-5 py-2 text-xs uppercase tracking-wider border border-primary/30 text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            >
              Agendar
            </a>
            <a
              href="https://wa.me/5583986209170"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:hidden text-primary p-2 -mr-2"
              aria-label="Agendar via WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex flex-col justify-between p-6 md:hidden animate-in fade-in duration-200">
          <div className="flex justify-between items-center">
            <span className="font-serif text-xl text-primary">Josi Souza</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-primary p-2"
              aria-label="Fechar menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col items-center space-y-6 text-center">
            {[...navLinksLeft, ...navLinksRight].map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-text hover:text-primary transition-colors text-lg font-serif"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="text-center">
            <a
              href="https://wa.me/5583986209170"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary w-full inline-block"
            >
              Agendar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
