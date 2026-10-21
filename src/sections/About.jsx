import React from 'react';
import { m } from 'framer-motion';
import { ScanFace, ShieldCheck } from 'lucide-react';

const About = () => {
    return (
        <section id="sobre" className="py-12 md:py-32 bg-background scroll-mt-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">

                    {/* Image Side */}
                    <m.div
                        className="w-full md:w-5/12"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative aspect-[4/5] md:aspect-square bg-secondary/30 rounded-sm overflow-hidden max-w-md mx-auto md:max-w-none">
                            <img
                                src="/josi-souza-about.webp"
                                alt="Josi Souza"
                                loading="lazy"
                                width="800"
                                height="1000"
                                className="w-full h-full object-cover object-[50%_62%] md:object-[50%_0%] hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </m.div>

                    {/* Content Side */}
                    <m.div
                        className="w-full md:w-7/12"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary mb-6 md:mb-8 leading-tight text-center md:text-left">
                            Muito mais que estética:<br />
                            <span className="text-text">um encontro com sua autoestima.</span>
                        </h2>

                        <div className="text-text/80 leading-relaxed font-light text-lg mb-8 md:mb-12 text-left">
                            <p className="mb-6">
                                Minha trajetória é marcada pela <strong className="font-normal text-dark">busca incessante pela excelência</strong>. Acredito que a beleza deve ser <strong className="font-normal text-dark">leve, real e, acima de tudo, intencional</strong>. Não se trata apenas de um procedimento, mas de <strong className="font-normal text-dark">um método pensado para você</strong>.
                            </p>
                        </div>

                        {/* The Method Grid */}
                        <div className="grid grid-cols-1 gap-6 md:gap-8 mb-8 md:mb-12">
                            {/* Step 1 */}
                            <div className="flex flex-row gap-4 sm:gap-6 group items-start text-left">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <ScanFace className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif text-primary mb-2">Análise Personalizada</h3>
                                    <p className="text-text/70 text-sm leading-relaxed">
                                        <strong className="font-normal text-dark">Escuta ativa</strong> e entendimento profundo do seu estilo, rotina e desejos. <strong className="font-normal text-dark">Nada é padrão</strong>, tudo é sobre você.
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex flex-row gap-4 sm:gap-6 group items-start text-left">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif text-primary mb-2">Conforto & Qualidade</h3>
                                    <p className="text-text/70 text-sm leading-relaxed">
                                        Um <strong className="font-normal text-dark">ambiente acolhedor e elegante</strong>, com produtos de <strong className="font-normal text-dark">alta performance</strong> para garantir uma experiência única e memorável.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
                            <a
                                href="#portfolio"
                                className="btn-outline inline-block w-full sm:w-auto text-center"
                            >
                                Conheça meu Propósito
                            </a>
                            <div className="hidden sm:block font-serif text-2xl tracking-[0.1em] text-primary/60 uppercase">
                                Josi Souza
                            </div>
                        </div>

                    </m.div>

                </div>
            </div>
        </section>
    );
};

export default About;
