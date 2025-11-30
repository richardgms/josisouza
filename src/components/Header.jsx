import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinksLeft = [
        { name: 'Sobre', href: '#sobre' },
        { name: 'Serviços', href: '#servicos' },
    ];

    const navLinksRight = [
        { name: 'Portfólio', href: '#portfolio' },
        { name: 'Contato', href: '#contato' },
    ];

    return (
        <>
            <header
                className={`fixed w-full top-0 z-50 transition-all duration-300 border-b border-secondary/10 ${isScrolled
                    ? 'bg-background/95 backdrop-blur-sm py-3 shadow-sm'
                    : 'bg-background py-5'
                    }`}
            >
                <div className="container mx-auto px-4 flex justify-between items-center relative">

                    {/* Mobile Menu Button (Left) */}
                    <button
                        className="md:hidden text-primary p-2 -ml-2"
                        onClick={() => setIsMobileMenuOpen(true)}
                        aria-label="Abrir menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>

                    {/* Desktop Nav Left */}
                    <nav className="hidden md:flex items-center space-x-12 flex-1 justify-end pr-12">
                        {navLinksLeft.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm uppercase tracking-widest font-medium text-dark/70 hover:text-primary transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Logo (Center) - Monogram Placeholder */}
                    <div className="flex-shrink-0 text-center z-10">
                        <a href="#" className="block group">
                            <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center bg-surface group-hover:border-primary transition-all duration-500">
                                <span className="font-serif text-xl text-primary font-bold tracking-tighter group-hover:scale-110 transition-transform duration-500">JS</span>
                            </div>
                        </a>
                    </div>

                    {/* Desktop Nav Right */}
                    <nav className="hidden md:flex items-center space-x-12 flex-1 justify-start pl-12">
                        {navLinksRight.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm uppercase tracking-widest font-medium text-dark/70 hover:text-primary transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile CTA (Right) */}
                    <a
                        href="https://wa.me/5583996492447"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="md:hidden text-primary p-2 -mr-2"
                        aria-label="Agendar no WhatsApp"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                        </svg>
                    </a>

                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Drawer */}
            <div
                className={`fixed top-0 left-0 bottom-0 w-[85%] max-w-xs bg-background z-[70] shadow-2xl transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="p-8 flex flex-col h-full relative overflow-hidden">
                    {/* Decorative Circle */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="flex justify-between items-center mb-16 relative z-10">
                        <span className="font-serif text-2xl text-primary font-bold tracking-tighter">JS</span>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-dark/40 hover:text-primary transition-colors p-2 -mr-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <nav className="flex flex-col space-y-8 relative z-10">
                        {[...navLinksLeft, ...navLinksRight].map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-xl font-serif text-dark hover:text-primary transition-colors flex items-center gap-4 group"
                            >
                                <span className="w-8 h-[1px] bg-primary/30 group-hover:w-12 group-hover:bg-primary transition-all duration-300"></span>
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className="mt-auto relative z-10">
                        <a
                            href="https://wa.me/5583996492447"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center py-4 border border-primary text-primary hover:bg-primary hover:text-white rounded-none uppercase tracking-widest text-sm font-bold transition-all duration-300"
                        >
                            Agendar Experiência
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
