import React from 'react';
import { motion } from 'framer-motion';
import { ScanFace, Sparkles, ShieldCheck } from 'lucide-react';

const About = () => {
    return (
        <section id="sobre" className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-start gap-16">

                    {/* Image Side */}
                    <motion.div
                        className="w-full md:w-5/12"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative aspect-square bg-secondary/30 rounded-sm overflow-hidden">
                            <img
                                src="/josi-souza-profile.png"
                                alt="Josi Souza"
                                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        className="w-full md:w-7/12"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary mb-8 leading-tight">
                            Muito mais que estética:<br />
                            <span className="text-text">um encontro com sua autoestima.</span>
                        </h2>

                        <div className="text-text/80 leading-relaxed font-light text-lg mb-12">
                            <p className="mb-6">
                                Minha trajetória é marcada pela busca incessante pela excelência. Acredito que a beleza deve ser leve, real e, acima de tudo, intencional. Não se trata apenas de um procedimento, mas de um método pensado para você.
                            </p>
                        </div>

                        {/* The Method Grid */}
                        <div className="grid grid-cols-1 gap-8 mb-12">
                            {/* Step 1 */}
                            <div className="flex gap-6 group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <ScanFace className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif text-primary mb-2">Análise Personalizada</h3>
                                    <p className="text-text/70 text-sm leading-relaxed">
                                        Escuta ativa e entendimento profundo do seu estilo, rotina e desejos. Nada é padrão, tudo é sobre você.
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex gap-6 group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <Sparkles className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif text-primary mb-2">Visagismo Estratégico</h3>
                                    <p className="text-text/70 text-sm leading-relaxed">
                                        Mapeamento facial técnico para harmonizar traços naturais, realçando o que você tem de melhor sem perder a essência.
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex gap-6 group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif text-primary mb-2">Execução & Cuidado</h3>
                                    <p className="text-text/70 text-sm leading-relaxed">
                                        Técnica precisa, produtos de alta performance e biossegurança rigorosa. Um ambiente seguro para você relaxar.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <a
                                href="#portfolio"
                                className="btn-outline inline-block"
                            >
                                Conheça meu Propósito
                            </a>
                            <div className="font-serif text-2xl tracking-[0.1em] text-primary/60 uppercase">
                                Josi Souza
                            </div>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
