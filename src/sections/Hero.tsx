'use client';

import React from 'react';
import Image from 'next/image';
import { m } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative flex-1 flex flex-col items-center pt-[5.5rem] overflow-hidden bg-background">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 bg-[#F5F2ED]">
        <Image
          src="/hero-bg-detail.webp"
          alt="Josi Souza Beauty - Detalhes"
          width={600}
          height={1067}
          priority
          className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-multiply pointer-events-none"
        />
        <Image
          src="/monogram.svg"
          alt=""
          width={1024}
          height={1024}
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140%] md:w-[55%] opacity-[0.03] md:opacity-7 pointer-events-none z-40"
        />
      </div>

      <div className="flex-1 w-full" />

      <div className="container mx-auto px-4 relative z-20 text-center flex flex-col items-center justify-center">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          <h2 className="text-xs md:text-base uppercase tracking-[0.3em] text-text/60 mb-6 md:mb-6">
            Estética & Bem-estar
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary mb-8 md:mb-10 leading-[1.1]">
            Sua beleza natural,<br />
            elevada à sua <span className="italic text-text">melhor versão</span>.
          </h1>

          <a
            href="https://wa.me/5583986209170"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Viver a Experiência
          </a>
        </m.div>
      </div>

      <div className="flex-1 w-full" />

      {/* Floating Indicators / Details */}
      <div className="w-full relative z-20 pb-4 md:pb-6">
        <div className="container mx-auto px-4 flex justify-between items-end text-xs tracking-widest text-text/40 uppercase">
          <div className="hidden md:block">
            <span>João Pessoa & Santa Rita</span>
          </div>
          <div className="w-full md:w-auto text-center flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-[0.2em]">Conheça os Detalhes</span>
            <div className="w-[1px] h-6 bg-primary/20 animate-bounce" />
          </div>
          <div className="hidden md:block text-right">
            <span>Atendimento Exclusivo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
