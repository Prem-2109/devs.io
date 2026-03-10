import { MenuIcon, XIcon } from 'lucide-react';
import { PrimaryButton } from './Buttons';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Popup from "./Popup";

export default function Navbar() {

    const [showPopup, setShowPopup] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/#' },
        { name: 'About', href: '/#about' },
        { name: 'Service', href: '/#features' },
        { name: 'FAQ', href: '/#faq' },
    ];

    return (
        <>
            <motion.nav
                className='fixed top-5 left-0 right-0 z-50 px-4'
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                <div className='max-w-6xl mx-auto flex items-center justify-between bg-black/50 backdrop-blur-md border border-white/4 rounded-2xl p-3'>
                    
                    <span style={{ fontWeight: 700, fontSize: "20px" }}>
                        <span style={{ color: "#615FFF" }}>Devs</span>.io
                    </span>

                    {/* Desktop Menu */}
                    <div className='hidden md:flex items-center gap-8 text-sm font-medium text-gray-300'>
                        {navLinks.map((link) => (
                            <a
                                href={link.href}
                                key={link.name}
                                className="hover:text-white transition"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop Button */}
                    <div className='hidden md:flex items-center gap-3'>
                        <PrimaryButton
                            className='max-sm:text-xs hidden sm:inline-block'
                            onClick={() => setShowPopup(true)}
                        >
                            Get Started
                        </PrimaryButton>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className='md:hidden'
                    >
                        <MenuIcon className='size-6' />
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`flex flex-col items-center justify-center gap-6 text-lg font-medium fixed inset-0 bg-black/40 backdrop-blur-md z-50 transition-all duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Mobile Get Started */}
                    <PrimaryButton
                        onClick={() => {
                            setIsOpen(false);
                            setShowPopup(true);
                        }}
                    >
                        Get Started
                    </PrimaryButton>

                    {/* Close Mobile Menu */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="rounded-md bg-white p-2 text-gray-800 ring-white active:ring-2"
                    >
                        <XIcon />
                    </button>
                </div>
            </motion.nav>

            {/* Popup Component */}
            <Popup
                isOpen={showPopup}
                onClose={() => setShowPopup(false)}
            />
        </>
    );
}