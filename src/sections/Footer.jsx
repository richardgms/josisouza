import React from 'react';
import { Instagram, MessageCircle, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contato" className="bg-[#f5f2ed] pt-12 pb-8 md:pt-20 md:pb-10 border-t border-primary/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-16 text-center">

                    {/* Brand */}
                    <div>
                        <img src="/monogram.svg" alt="Josi Souza" width="64" height="64" loading="lazy" className="h-12 md:h-16 w-auto mb-4 md:mb-6 mx-auto" />
                        <p className="text-text/70 text-sm leading-relaxed max-w-xs mx-auto">
                            Beleza leve, real e com propósito. Um espaço pensado para o seu equilíbrio e bem-estar.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-text mb-6">Contato</h3>
                        <ul className="space-y-4 text-text/70 text-sm">
                            <li className="flex items-center justify-center gap-3">
                                <MessageCircle className="w-4 h-4 text-primary" />
                                <a href="https://wa.me/5583986209170" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">+55 83 98620-9170</a>
                            </li>
                            <li className="flex items-center justify-center gap-3">
                                <Instagram className="w-4 h-4 text-primary" />
                                <a href="https://instagram.com/josisouza.beauty" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">@josisouza.beauty</a>
                            </li>
                            <li className="flex items-center justify-center gap-3">
                                <MapPin className="w-4 h-4 text-primary" />
                                <span>João Pessoa / Santa Rita - PB</span>
                            </li>
                        </ul>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-text mb-6">Menu</h3>
                        <ul className="space-y-3 text-text/70 text-sm">
                            <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre</a></li>
                            <li><a href="#servicos" className="hover:text-primary transition-colors">Serviços</a></li>
                            <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfólio</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-primary/10 pt-8 text-center text-xs text-text/70 uppercase tracking-wider">
                    <p>&copy; {new Date().getFullYear()} Josi Souza. Mais que estética, uma experiência de cuidado.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
