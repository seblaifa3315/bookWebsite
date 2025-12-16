"use client";

import { author, book } from "@/data/content";

export default function About() {
    return (
        <section id="about" className="py-24 lg:py-32 bg-background2">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-5 gap-16 items-center">
                    {/* Author Photo */}
                    <div className="lg:col-span-2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-aboutGradient rounded-full transform -rotate-6"></div>
                            <div className="relative aspect-square rounded-full overflow-hidden bg-linear-to-br from-gray-200 to-gray-300 shadow-2xl">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center text-gray-400 p-8">
                                        <img src={author.portrait} alt={`${author.firstName} ${author.lastName}`} className="w-full h-full object-cover scale-120 translate-y-16" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* About Content */}
                    <div className="lg:col-span-3 space-y-8">
                        <div className="space-y-4">
                            <div className={`inline-block px-4 py-2 bg-aboutBadgeBg text-aboutBadgeText text-xs tracking-wider uppercase font-light`}>About the Author</div>
                            <h2 className="text-5xl lg:text-6xl font-serif font-light text-title">{author.firstName} {author.lastName}</h2>
                        </div>
                        <div className="space-y-6 text-text leading-relaxed text-lg font-light">
                            <p>
                                Elena Morrison is a debut novelist whose lifelong passion for storytelling finally found its voice in <em>Whispers of the Heart</em>. Born and raised in the Pacific Northwest, she draws inspiration from the misty landscapes and rich histories that surround her.
                            </p>
                            <p>After spending fifteen years as a literature professor, Elena decided to pursue her dream of writing fiction full-time. Her work explores themes of memory, identity, and the invisible threads that connect us across time and distance.</p>
                            <p>When she's not writing, Elena can be found hiking in the mountains, curating her ever-growing collection of vintage books, or enjoying a quiet afternoon with a cup of tea and her two rescue dogs.</p>
                            <p className={`italic pt-4 text-aboutQuoteText`}>"I write the stories I wish I could have read—tales that remind us of our shared humanity and the beauty in our imperfections."</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
