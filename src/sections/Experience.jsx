import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section className="py-20 bg-background overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <motion.div
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

                        <div className="w-20 h-[1px] bg-primary/30 mb-8"></div>

                        <div className="text-text/80 leading-relaxed space-y-6 text-lg font-light">
                            <p>
                                <span className="float-left text-5xl font-serif text-primary mr-3 mt-[-6px] leading-none">M</span>
                                ais que um atendimento, um momento de pausa. Nosso espaço foi pensado para acolher, com aromas suaves, música ambiente e uma estética que acalma.
                            </p>

                            <p className="italic text-primary/80 border-l-2 border-primary/20 pl-4 my-6">
                                "Cada detalhe importa. Aqui, sua singularidade é nossa prioridade."
                            </p>

                            <p>
                                Um espaço acolhedor e elegante, que se dedica em realçar a beleza natural através de técnicas personalizadas e produtos de alta qualidade.
                            </p>
                        </div>
                    </motion.div>

                    {/* Image Grid */}
                    <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4">
                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="aspect-[3/4] overflow-hidden rounded-sm">
                                <img src="/experience-treatment.jpg" alt="Atendimento Josi Souza" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="aspect-square overflow-hidden rounded-sm">
                                <img src="/experience-space-detail.jpg" alt="Detalhes do Espaço" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                        </motion.div>

                        <motion.div
                            className="space-y-4 pt-8"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="aspect-square overflow-hidden rounded-sm">
                                <img src="/experience-tools.jpg" alt="Ferramentas Organizadas" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="aspect-[3/4] overflow-hidden rounded-sm">
                                <img src="/experience-products.jpg" alt="Produtos de Qualidade" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                        </motion.div>

                        <motion.div
                            className="space-y-4 hidden md:block"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <div className="aspect-[3/4] overflow-hidden rounded-sm">
                                <img src="/experience-clean-environment.jpg" alt="Ambiente Clean" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="aspect-square overflow-hidden rounded-sm">
                                <img src="/experience-special-care.jpg" alt="Cuidados Especiais" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
