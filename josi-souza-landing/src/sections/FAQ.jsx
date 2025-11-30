import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "Como funciona o agendamento?",
        answer: "Para garantir um atendimento exclusivo e personalizado, nossos agendamentos são realizados unicamente via WhatsApp. Assim, conseguimos entender suas necessidades e encontrar o melhor horário para você."
    },
    {
        question: "Quais formas de pagamento aceitas?",
        answer: "Trabalhamos com Pix e cartões de crédito/débito. Para nossos cursos e mentorias, oferecemos condições especiais de parcelamento."
    },
    {
        question: "Onde fica localizado o espaço?",
        answer: "Estamos situados no coração de João Pessoa. O endereço detalhado, bem como orientações de chegada, são enviados após a confirmação do seu agendamento."
    },
    {
        question: "Qual a durabilidade do alongamento em gel?",
        answer: "A durabilidade está diretamente ligada ao cuidado e à manutenção, recomendada a cada 20-25 dias. Seguindo o protocolo, suas unhas permanecem impecáveis e saudáveis continuamente."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Dúvidas Frequentes</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-secondary/30">
                            <button
                                className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            >
                                <span className="text-lg text-text font-medium group-hover:text-primary transition-colors">{faq.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-primary transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-6 text-text/70 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
