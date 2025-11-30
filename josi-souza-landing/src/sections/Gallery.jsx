import React from 'react';
import { motion } from 'framer-motion';

const images = [
    { src: '/Screenshot_20251130_045329_Instagram.jpg', alt: 'Transparência e Leveza' },
    { src: '/IMG-20251130-WA0082.jpg', alt: 'Acabamento Natural' },
    { src: '/IMG-20251130-WA0050.jpg', alt: 'Design Sofisticado' },
    { src: '/IMG-20251130-WA0051.jpg', alt: 'Detalhes que Encantam' },
    { src: '/IMG-20251130-WA0055.jpg', alt: 'Elegância Clássica' },
    { src: '/Screenshot_20251130_045424_Instagram.jpg', alt: 'Cuidado Profissional' },
    { src: '/Screenshot_20251130_045429_Instagram.jpg', alt: 'Arte e Técnica' },
    { src: '/Screenshot_20251130_045434_Instagram.jpg', alt: 'Beleza Real' },
];

const Gallery = () => {
    return (
        <section id="portfolio" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Resultados que Inspiram</h2>
                    <p className="text-text/60 max-w-2xl mx-auto">
                        A naturalidade é a nossa assinatura. Confira transformações reais.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative aspect-square overflow-hidden rounded-sm group cursor-pointer"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-serif tracking-widest text-sm uppercase">Ver mais</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
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
