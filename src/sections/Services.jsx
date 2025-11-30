import React from 'react';
import { motion } from 'framer-motion';
import { EyebrowIcon, SpaIcon, NailIcon } from '../components/CustomIcons';

const services = [
    {
        category: "Sobrancelhas",
        icon: EyebrowIcon,
        items: [
            {
                title: "Design Reconstrutivo",
                description: "Valorização de cada fio existente, respeitando o formato natural. Técnica egípcia (linha) ou pinça.",
                price: "R$ 25,00"
            },
            {
                title: "Design com Tintura",
                description: "Pigmentação dos fios ou da pele para realçar o olhar. Duração de 20 a 30 dias.",
                price: "R$ 40,00"
            }
        ]
    },
    {
        category: "Spa & Cuidados",
        icon: SpaIcon,
        items: [
            {
                title: "Spa dos Pés",
                description: "Hidratação profunda, remoção de células mortas e massagem. Inclui cutilagem.",
                price: "R$ 80,00"
            },
            {
                title: "Pé e Mão Tradicional",
                description: "Cutilagem delicada e esmaltação perfeita.",
                price: "R$ 30,00 cada"
            },
            {
                title: "Combo Mão e Pé",
                description: "Cuidado completo para mãos e pés de uma só vez.",
                price: "R$ 50,00"
            }
        ]
    },
    {
        category: "Nail Design",
        icon: NailIcon,
        items: [
            {
                title: "Alongamento em Gel",
                description: "Unhas longas, resistentes e com acabamento impecável.",
                price: "R$ 130,00",
                subPrice: "Manutenção: R$ 90,00"
            },
            {
                title: "Banho em Gel",
                description: "Camada protetora para fortalecer unhas naturais.",
                price: "R$ 90,00",
                subPrice: "Esmaltação: R$ 50,00"
            }
        ]
    }
];

const Services = () => {
    return (
        <section id="servicos" className="py-16 md:py-20 bg-secondary/10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Menu de Experiências</h2>
                    <p className="text-text/60 max-w-2xl mx-auto">Rituais desenhados para elevar sua autoestima e bem-estar.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                    {services.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            className="bg-background p-6 md:p-10 rounded-2xl shadow-lg border border-white/50 hover:-translate-y-2 transition-transform duration-500"
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
                                    <div key={index} className="flex flex-col justify-between items-start group border-b border-secondary/10 pb-4 last:border-0 last:pb-0">
                                        <div className="w-full flex justify-between items-baseline mb-1">
                                            <h4 className="text-lg font-medium text-text group-hover:text-primary transition-colors">{item.title}</h4>
                                            <div className="text-primary font-serif whitespace-nowrap text-lg font-medium ml-4">
                                                {item.price}
                                            </div>
                                        </div>
                                        <p className="text-sm text-text/60 leading-relaxed w-full">{item.description}</p>
                                        {item.subPrice && (
                                            <div className="text-text/50 text-xs mt-1 w-full text-right">
                                                {item.subPrice}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12 md:mt-16">
                    <a href="https://wa.me/5583996492447" target="_blank" rel="noopener noreferrer" className="btn-primary shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        Reservar meu Momento
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;
