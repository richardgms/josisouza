'use client';

import React from 'react';
import Image from 'next/image';
import { m } from 'framer-motion';

export default function Experience() {
  return (
    <section className="py-12 md:py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <m.div
            className="w-full lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 leading-tight">
              Um Refúgio de <br />
              <span className="italic text-text/80">Bem-Estar</span>
            </h2>

            <div className="w-20 h-[1px] bg-primary/30 mb-8" />

            <div className="text-text/80 leading-relaxed space-y-6 text-lg font-light">
              <p>
                <span className="float-left text-5xl font-serif text-primary mr-3 mt-[-6px] leading-none">
                  M
                </span>
                ais que um atendimento, um momento de pausa. Nosso espaço foi pensado para acolher, com{' '}
                <strong className="font-normal text-dark">aromas suaves</strong>,{' '}
                <strong className="font-normal text-dark">música ambiente</strong> e uma{' '}
                <strong className="font-normal text-dark">estética que acalma</strong>.
              </p>

              <p className="italic text-primary border-l-2 border-primary/20 pl-4 my-6">
                &ldquo;Cada detalhe importa. Aqui, sua singularidade é nossa prioridade.&rdquo;
              </p>

              <p>
                Um espaço acolhedor e elegante, que se dedica em realçar a beleza natural através de{' '}
                <strong className="font-normal text-dark">técnicas personalizadas</strong> e{' '}
                <strong className="font-normal text-dark">produtos de alta qualidade</strong>.
              </p>
            </div>
          </m.div>

          {/* Image Grid */}
          <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4">
            <m.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-[3/4] overflow-hidden rounded-sm relative">
                <Image
                  src="/experience-josi-leque.webp"
                  alt="Josi Souza com cartela de cores de esmalte"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="md:hidden object-cover hover:scale-105 transition-transform duration-700"
                />
                <Image
                  src="/experience-josi-trabalhando.webp"
                  alt="Josi Souza esmaltando as unhas de uma cliente"
                  fill
                  sizes="33vw"
                  className="hidden md:block object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-sm relative">
                <Image
                  src="/experience-space-detail.webp"
                  alt="Detalhes do Espaço"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </m.div>

            <m.div
              className="space-y-4 pt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="aspect-square overflow-hidden rounded-sm relative">
                <Image
                  src="/experience-tools.webp"
                  alt="Josi Souza com esmaltes"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden rounded-sm relative">
                <video
                  src="/experience-josi-marrom.mp4"
                  poster="/experience-josi-marrom-poster.webp"
                  aria-label="Josi Souza aplicando esmalte marrom na unha de uma cliente"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 motion-reduce:hidden"
                />
                <Image
                  src="/experience-josi-marrom.webp"
                  alt="Josi Souza aplicando esmalte marrom na unha de uma cliente"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="hidden motion-reduce:block object-cover"
                />
              </div>
            </m.div>

            <m.div
              className="space-y-4 hidden md:block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="aspect-[3/4] overflow-hidden rounded-sm relative">
                <Image
                  src="/experience-josi-leque.webp"
                  alt="Josi Souza com cartela de cores de esmalte"
                  fill
                  sizes="33vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-sm relative">
                <Image
                  src="/experience-special-care.webp"
                  alt="Cuidados Especiais"
                  fill
                  sizes="33vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
}
