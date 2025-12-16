"use client";

import {ChevronDown} from "lucide-react";
import { author, book } from "@/data/content";

export default function Hero() {
    const scrollToBook = () => {
        const element = document.getElementById("book");
        if (element) {
            element.scrollIntoView({behavior: "smooth", block: "start"});
        }
    };

    return (
        <section id="hero" className="bg-page min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl bg-blob1" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl bg-blob2" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
                    {/* Author Portrait */}
                    <div className="flex justify-center lg:justify-end animate-fade-in">
                        <div className="relative">
                            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blob rounded-full blur-3xl opacity-20" />
                            <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border-4 border-imageBorder/30 shadow-2xl shadow-imageGlow/20 transition-transform duration-500 hover:scale-105">
                                <img src={author.portrait} alt={`${author.firstName} ${author.lastName}`} className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-8 animate-fade-in text-center lg:text-left">
                        <div className="space-y-2">
                            <p className="text-sm tracking-[0.3em] uppercase text-accent font-light">Author</p>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-tight text-title">{author.firstName} {author.lastName}</h1>
                        </div>

                        <div className="space-y-6">
                            <p className="text-xl md:text-2xl font-light leading-relaxed text-text">Weaving stories that touch the soul and illuminate the human experience</p>
                            <div className="h-px w-24 bg-divider lg:mx-0 mx-auto" />
                        </div>

                        <button onClick={scrollToBook} className="inline-flex items-center gap-2 px-10 py-4 bg-button text-white text-sm tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:bg-buttonHover cursor-pointer">
                            Discover the Book
                        </button>
                    </div>
                </div>

                {/* Scroll indicator */}
                <button onClick={scrollToBook} className="absolute bottom-12 left-1/2 -translate-x-1/2 text-icon animate-bounce cursor-pointer">
                    <ChevronDown size={32} />
                </button>
            </div>
        </section>
    );
}
