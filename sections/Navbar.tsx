"use client";

import {useState, useEffect} from "react";
import ThemeToggleButton from "../components/ThemeToggleButton";
import MobileBurgerX from "@/components/MobileBurgerX";
import { author, book } from "@/data/content";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: "smooth", block: "start"});
            setIsMobileMenuOpen(false);
        }
    };

    const navLinks = [
        {name: "Home", id: "hero"},
        {name: "The Book", id: "book"},
        {name: "About", id: "about"},
        {name: "Contact", id: "contact"},
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? `bg-navbarBg backdrop-blur-md shadow-sm py-4` : "bg-transparent py-6"}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between">
                    <button onClick={() => scrollToSection("hero")} className={`text-2xl  font-serif font-light tracking-wide text-navbarText hover:text-navbarTextHover transition-colors cursor-pointer `}>
                        {author.firstName} {author.lastName}
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button key={link.id} onClick={() => scrollToSection(link.id)} className={`text-sm tracking-wider uppercase text-navbarSecondary hover:text-navbarTextHover transition-colors font-light cursor-pointer hover:scale-105`}>
                                {link.name}
                            </button>
                        ))}
                        <ThemeToggleButton />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <ThemeToggleButton />
                        <MobileBurgerX isOpen={isMobileMenuOpen} toggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className={`md:hidden mt-6 pb-6 border-t border-navbarBorder pt-6 bg-navbarBg backdrop-blur-md`}>
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <button key={link.id} onClick={() => scrollToSection(link.id)} className={`text-sm tracking-wider uppercase text-navbarSecondary hover:text-navbarTextHover transition-colors font-light text-left cursor-pointer`}>
                                    {link.name}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
