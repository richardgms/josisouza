import React from 'react';
import { motion } from 'framer-motion';

const images = [
    // Unhas Naturais
    { src: '/gallery-transparencia.webp', alt: 'Transparência e Leveza', category: 'natural' },
    { src: '/gallery-natural-finish.webp', alt: 'Acabamento Natural', category: 'natural' },
    { src: '/gallery-real-beauty.webp', alt: 'Beleza Real', category: 'natural' },
    { src: '/gallery-professional-care.webp', alt: 'Cuidado Profissional', category: 'natural' },
    // Unhas Decoradas
    { src: '/gallery-sophisticated.webp', alt: 'Design Sofisticado', category: 'decorated' },
    { src: '/gallery-details.webp', alt: 'Detalhes que Encantam', category: 'decorated' },
    { src: '/gallery-classic-elegance.webp', alt: 'Elegância Clássica', category: 'decorated' },
    { src: '/gallery-art-technique.webp', alt: 'Arte e Técnica', category: 'decorated' },
];

const Gallery = () => {
    const naturalImages = images.filter(img => img.category === 'natural');
    const decoratedImages = images.filter(img => img.category === 'decorated');

    const ImageGrid = ({ items }) => (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {items.map((img, index) => (
                <motion.div
                    key={img.src}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative aspect-square overflow-hidden rounded-sm group cursor-pointer"
                >
                    <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        width="800"
                        height="800"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-serif tracking-widest text-sm uppercase">Ver mais</span>
                    </div>
                </motion.div>
            ))}
        </div>
    );

    return (
        <section id="portfolio" className="py-20 bg-secondary/10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Resultados que Inspiram</h2>
                    <p className="text-text/60 max-w-2xl mx-auto">
                        A naturalidade é a nossa assinatura. Confira transformações reais.
                    </p>
                </div>

                {/* Unhas Naturais Section */}
                <div className="mb-16">
                    <h3 className="text-xl md:text-2xl font-serif text-primary/80 text-center mb-8 tracking-wide">
                        Unhas Naturais
                    </h3>
                    <ImageGrid items={naturalImages} />
                </div>

                {/* Unhas Decoradas Section */}
                <div>
                    <h3 className="text-xl md:text-2xl font-serif text-primary/80 text-center mb-8 tracking-wide">
                        Unhas Decoradas
                    </h3>
                    <ImageGrid items={decoratedImages} />
                </div>

                <div className="text-center mt-16">
                    <a
                        href="https://instagram.com/josisouza.beauty"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline"
                    >
                        Ver Transformações Reais
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
