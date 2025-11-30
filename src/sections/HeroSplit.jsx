import React from 'react';
import { motion } from 'framer-motion';

const HeroSplit = () => {
    return (
        <section className="py-8 bg-[#f5f2ed] overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="relative flex flex-col items-center justify-center">

                    {/* Main Split Text */}
                    <div className="flex items-center justify-center w-full relative z-10">
                        <motion.h2
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="text-[8rem] md:text-[12rem] font-serif text-primary leading-none"
                        >
                            JO
                        </motion.h2>

                        {/* Image Container (Placeholder for Cutout) */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative z-20 -mx-4 md:-mx-8 mt-4"
                        >
                            <div className="w-32 h-40 md:w-48 md:h-64 rounded-full overflow-hidden border-4 border-background shadow-xl">
                                <img
                                    src="/josi-souza-profile.png"
                                    alt="Josi Souza"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>

                        <motion.h2
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="text-[8rem] md:text-[12rem] font-serif text-primary leading-none"
                        >
                            SI
                        </motion.h2>
                    </div>

                    {/* Subtext */}
                    <div className="flex justify-between w-full max-w-xs md:max-w-md mt-[-1rem] md:mt-[-2rem] relative z-30 px-4">
                        <motion.span
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="font-sans text-sm md:text-lg tracking-[0.2em] text-text uppercase"
                        >
                            Beauty
                        </motion.span>
                        <motion.span
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="font-serif text-lg md:text-2xl italic text-accent"
                        >
                            Nail Design
                        </motion.span>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSplit;
