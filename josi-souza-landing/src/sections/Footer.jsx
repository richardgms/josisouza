import React from 'react';
import { Instagram, MessageCircle, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contato" className="bg-[#f5f2ed] pt-20 pb-10 border-t border-primary/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">

                    {/* Brand */}
                    <div>
                        <img src="/monogram.svg" alt="Josi Souza" className="h-16 w-auto mb-6" />
                        <p className="text-text/60 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                            Beleza leve, real e com propósito. Um espaço pensado para o seu equilíbrio e bem-estar.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-text mb-6">Contato</h4>
                        <ul className="space-y-4 text-text/70 text-sm">
                            <li className="flex items-center justify-center md:justify-start gap-3">
                                <MessageCircle className="w-4 h-4 text-primary" />
                                <a href="https://wa.me/5583996492447" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">(83) 99649-2447</a>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-3">
                                <Instagram className="w-4 h-4 text-primary" />
                                <a href="https://instagram.com/josisouza.beauty" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">@josisouza.beauty</a>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-3">
                                <MapPin className="w-4 h-4 text-primary" />
                                <span>Rua Severino Antônio da Silva, 492<br />Colinas do Sul 2, João Pessoa - PB</span>
                            </li>
                        </ul>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-text mb-6">Menu</h4>
                        <ul className="space-y-3 text-text/70 text-sm">
                            <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre</a></li>
                            <li><a href="#servicos" className="hover:text-primary transition-colors">Serviços</a></li>
                            <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfólio</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-primary/10 pt-8 text-center text-xs text-text/40 uppercase tracking-wider">
                    <p>&copy; {new Date().getFullYear()} Josi Souza. Mais que estética, uma experiência de cuidado.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
