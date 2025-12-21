"use client";

import {author, book} from "@/data/content";

export default function About() {
    return (
        <section id="about" className="py-24 lg:py-32 bg-bg2">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-5 gap-16 items-center">
                    {/* Author Photo */}
                    <div className="lg:col-span-2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-aboutGradient rounded-full transform -rotate-6"></div>
                            <div className="relative aspect-square rounded-full overflow-hidden bg-linear-to-br from-gray-200 to-gray-300 shadow-2xl">
                                <img src={author.portrait} alt={`${author.firstName} ${author.lastName}`} className="absolute inset-0 w-full h-full object-cover object-[10%_0%]" />
                            </div>
                        </div>
                    </div>

                    {/* About Content */}
                    <div className="lg:col-span-3 space-y-8">
                        <div className="space-y-4">
                            <div className={`inline-block px-4 py-2 bg-bg4 text-accent1 text-xs tracking-wider uppercase font-light`}>About the Author</div>
                            <h2 className="text-5xl lg:text-6xl font-serif font-light text-primary">
                                {author.firstName} {author.lastName}
                            </h2>
                        </div>
                        <div className="space-y-6 text-secondary leading-relaxed text-lg font-light">
                            <p>
                                The author is just someone who used to love adventure stories and films when he was a child himself. This gave him an idea of an adventure story which he is glad is getting published and hopes that whoever reads it will enjoy it and inspire someone to do the same.
                            </p>
                            <p className={`italic pt-4 text-accent1`}>"Landlording For Dummies is a great resource for anyone that is interested in buying and holding real estate."</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
