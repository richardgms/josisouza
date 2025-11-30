import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0 bg-[#F5F2ED]">
                <img
                    src="/hero-bg-detail.jpg"
                    alt="Josi Souza Beauty - Detalhes"
                    className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-multiply"
                />
                <img src="/monogram.svg" alt="" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%] md:w-[55%] opacity-7 pointer-events-none z-40" />
            </div>

            <div className="container mx-auto px-4 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h2 className="text-sm md:text-base uppercase tracking-[0.3em] text-text/60 mb-4">
                        Especialista em Design de Sobrancelhas & Estética Natural
                    </h2>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary mb-8 leading-tight">
                        Sua beleza natural,<br />
                        elevada à sua <span className="italic text-text">melhor versão</span>.
                    </h1>

                    <a
                        href="https://wa.me/5583996492447"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-block"
                    >
                        Viver a Experiência
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
