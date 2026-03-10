import { useState } from 'react';
import { ArrowRightIcon, PlayIcon, ZapIcon, CheckIcon } from 'lucide-react';
import { PrimaryButton, GhostButton } from './Buttons';
import { motion } from 'framer-motion';
import Popup from "./Popup";

export default function Hero() {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <section id="home" className="relative z-10">
                <div className="max-w-6xl mx-auto px-4 min-h-screen max-md:w-screen max-md:overflow-hidden pt-32 md:pt-26 flex items-center justify-center">
                    <div className="grid gap-10 items-center justify-items-center">

                        <div className="flex flex-col items-center text-center mx-auto">

                            <motion.h1
                                className="text-4xl md:text-5xl font-bold leading-tight mb-6"
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
                            >
                                We design & build <br />
                                <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-300 to-indigo-400">
                                    Crafting innovative digital experiences
                                </span>
                            </motion.h1>

                            <motion.p
                                className="text-gray-300 max-w-4xl mb-8"
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.2 }}
                            >
                                A creative digital agency helping startups and businesses grow through strategic design, scalable development, and performance-driven digital solutions.
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.3 }}
                            >
                                <a
                                    href="#"
                                    className="w-full sm:w-auto"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setShowPopup(true);
                                    }}
                                >
                                    <PrimaryButton className="max-sm:w-full py-3 px-7">
                                        Start your project
                                        <ArrowRightIcon className="size-4" />
                                    </PrimaryButton>
                                </a>

                                <GhostButton className="max-sm:w-full max-sm:justify-center py-3 px-5">
                                    <PlayIcon className="size-4" />
                                    View our work
                                </GhostButton>
                            </motion.div>

                            <motion.div
                                className="flex sm:inline-flex overflow-hidden items-center justify-center text-sm text-gray-200 bg-white/10 rounded mx-auto"
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
                            >
                                <div className="flex items-center gap-2 p-2 px-3 sm:px-6.5 hover:bg-white/3 transition-colors">
                                    <ZapIcon className="size-4 text-sky-500" />
                                    <div>
                                        <div>Strategy-led execution</div>
                                        <div className="text-xs text-gray-400">
                                            Focused on growth & results
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden sm:block h-6 w-px bg-white/6" />

                                <div className="flex items-center gap-2 p-2 px-3 sm:px-6.5 hover:bg-white/3 transition-colors">
                                    <CheckIcon className="size-4 text-cyan-500" />
                                    <div>
                                        <div>Full-service delivery</div>
                                        <div className="text-xs text-gray-400">
                                            Design, dev & marketing
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                        </div>

                    </div>
                </div>
            </section>

            {/* Popup */}
            <Popup
                isOpen={showPopup}
                onClose={() => setShowPopup(false)}
            />
        </>
    );
}