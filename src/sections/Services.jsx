import React, { useState } from 'react';
import { m } from 'framer-motion';
import Rich from '../components/Rich';
import { SpaIcon, NailIcon } from '../components/CustomIcons';

const services = [
    {
        category: "Nail Design",
        icon: NailIcon,
        items: [
            {
                title: "Alongamento em Gel",
                description: "Unhas **longas**, **resistentes** e com acabamento impecável.",
                price: "R$ 150,00"
            },
            {
                title: "Manutenção Natural",
                description: "Manutenção do alongamento com **acabamento natural**.",
                price: "R$ 100,00"
            },
            {
                title: "Manutenção Esmaltada",
                description: "Manutenção do alongamento com **esmaltação inclusa**.",
                price: "R$ 120,00"
            },
            {
                title: "Banho em Gel",
                description: "**Camada protetora** para **fortalecer** unhas naturais.",
                price: "R$ 100,00"
            },
            {
                title: "Blindagem",
                description: "**Proteção** para unhas naturais com acabamento delicado.",
                price: "R$ 50,00"
            }
        ]
    },
    {
        category: "Spa & Cuidados",
        icon: SpaIcon,
        items: [
            {
                title: "Spa dos Pés",
                description: "**Hidratação profunda**, remoção de células mortas e massagem. **Inclui cutilagem**.",
                price: "R$ 100,00"
            },
            {
                title: "Pé Tradicional",
                description: "**Cutilagem delicada** e **esmaltação perfeita** para os pés.",
                price: "R$ 40,00"
            },
            {
                title: "Mão Tradicional",
                description: "**Cutilagem delicada** e **esmaltação perfeita** para as mãos.",
                price: "R$ 40,00"
            },
            {
                title: "Combo Mão e Pé",
                description: "**Cuidado completo** para mãos e pés de uma só vez.",
                price: "R$ 60,00"
            },
            {
                title: "Esmaltação em Gel",
                description: "Esmaltação **duradoura** com **brilho intenso** e acabamento impecável.",
                price: "R$ 60,00"
            }
        ]
    }
];

const Services = () => {
    const [active, setActive] = useState(0);

    return (
        <section id="servicos" className="py-12 md:py-20 bg-secondary/10 scroll-mt-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Menu de Experiências</h2>
                    <p className="text-text/60 max-w-2xl mx-auto">Rituais desenhados para elevar sua autoestima e bem-estar.</p>
                </div>

                {/* Abas (só no mobile) */}
                <div role="tablist" className="md:hidden relative flex p-1 mb-6 rounded-full bg-secondary/20 max-w-sm mx-auto">
                    {/* Marcador marrom que desliza entre as abas */}
                    <span
                        aria-hidden="true"
                        className="absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-primary shadow transition-transform duration-300 ease-out"
                        style={{ transform: `translateX(${active * 100}%)` }}
                    />
                    {services.map((cat, i) => (
                        <button
                            key={cat.category}
                            type="button"
                            role="tab"
                            aria-selected={active === i}
                            onClick={() => setActive(i)}
                            className={`relative z-10 flex-1 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 ${active === i ? 'text-white' : 'text-dark'}`}
                        >
                            {cat.category} ({cat.items.length})
                        </button>
                    ))}
                </div>

                {/* Dica de que existe outra aba (só no mobile) */}
                <button
                    type="button"
                    onClick={() => setActive(active === 0 ? 1 : 0)}
                    className="md:hidden flex items-center justify-center gap-1.5 mx-auto -mt-2 mb-6 text-xs text-text/60"
                >
                    {active === 0 ? (
                        <>
                            Toque em <strong className="font-bold text-dark">{services[1].category}</strong> para ver os outros serviços
                            <span aria-hidden="true" className="text-primary text-sm nudge-right">→</span>
                        </>
                    ) : (
                        <>
                            <span aria-hidden="true" className="text-primary text-sm nudge-left">←</span>
                            Veja também <strong className="font-bold text-dark">{services[0].category}</strong>
                        </>
                    )}
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                    {services.map((category, idx) => (
                        <m.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            className={`${idx === active ? 'block' : 'hidden'} md:block bg-background p-6 md:p-10 rounded-2xl shadow-lg border border-white/50 hover:-translate-y-2 transition-transform duration-500`}
                        >
                            <div className="flex flex-col items-center mb-6 md:mb-8">
                                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-primary mb-4">
                                    <category.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-serif text-primary text-center">
                                    {category.category}
                                </h3>
                            </div>

                            <div className="space-y-6">
                                {category.items.map((item, index) => (
                                    <div key={index} className="flex flex-col justify-between items-start group border-b border-secondary/40 pb-4 last:border-0 last:pb-0">
                                        <div className="w-full flex justify-between items-baseline mb-1">
                                            <h4 className="text-lg font-medium text-text group-hover:text-primary transition-colors">{item.title}</h4>
                                            <div className="text-primary font-serif whitespace-nowrap text-lg font-medium ml-4">
                                                {item.price}
                                            </div>
                                        </div>
                                        <p className="text-sm text-text/60 leading-relaxed w-full"><Rich text={item.description} /></p>
                                        {item.subPrice && (
                                            <div className="text-text/50 text-xs mt-1 w-full text-right">
                                                {item.subPrice}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </m.div>
                    ))}
                </div>

                <div className="text-center mt-8 md:mt-16">
                    <a href="https://wa.me/5583986209170" target="_blank" rel="noopener noreferrer" className="btn-primary shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        Reservar meu Momento
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;
