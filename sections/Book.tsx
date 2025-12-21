"use client";

import {ExternalLink, Star} from "lucide-react";
import {StarRating} from "@/components/StarRating";
import {author, book} from "@/data/content";

export default function Book() {
    return (
        <section id="book" className="py-24 lg:py-32 bg-bg1">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Book Cover */}
                    <div className="relative group">
                        {/* Shadow / back layer */}
                        <div className="absolute inset-0 bg-linear-to-br from-(--accent1)/20 to-(--accent2)/20 rounded-lg rotate-3 transition-transform duration-500 group-hover:rotate-6 z-0" />

                        {/* Book image */}
                        <img src={book.coverPicture} alt="Book Cover" className="relative w-full h-full object-cover rounded-lg z-10 shadow-2xl overflow-hidden flex items-center justify-center transform group-hover:scale-105 transition-all duration-500" />
                    </div>

                    {/* Book Details */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="inline-block px-4 py-2 bg-bg4 text-accent1 text-xs tracking-wider uppercase font-light">New Release</div>
                            <h3 className="text-5xl lg:text-6xl font-serif font-light text-primary">{book.title}</h3>
                            <h3 className="text-5xl lg:text-6xl font-serif font-light text-primary">{book.subtitle}</h3>
                            <div className="flex items-center">
                                <StarRating rating={book.rate} />
                                <span className="ml-2 text-secondary text-sm">{book.rate} out of 5 stars</span>
                            </div>
                        </div>
                        <div className="space-y-6 text-secondary leading-relaxed text-md font-light">
                            <p>
                                <em>How we did it retired at 55 And How We Continue To Do It</em>. Land-lording for Dummies teaches you how, with the intention of renovating and renting it out, to find, negotiate and buy real estate. Plus, evaluate, and calculate your repair costs, rent, and return on investment.
                            </p>
                            <p>You will also learn suggestions on how to rehab your units and where to market your condominium, town house, or home to find the ideal tenant, along with simple things to do to ensure your tenants stay long term.</p>
                            <p>
                                And will learn how, by using the passive income generated from your rental properties, combined with the right mindset, you can pay off the mortgage early, while purchasing more properties without refinancing them. This will allow you to repeat this real estate investment strategy again
                                and again.
                            </p>
                            <p>Plus, you will learn how, by being a private landlord, you too can retire in twenty-three years, completely debt free, living solely off of the income from your rental properties.</p>
                        </div>

                        <div className="pt-4">
                            <a href={book.amazonLink} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-3 px-10 py-4 hover:bg-accent3 bg-accent2 text-white text-sm tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group`}>
                                Get Your Copy Here
                                <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-6">
                                {/* Language */}
                                <div className="space-y-1">
                                    <p className="text-xs tracking-wider text-secondary/80 font-light italic">Language</p>
                                    <p className="text-xs font-medium  text-secondary/40">{book.language}</p>
                                </div>

                                {/* Publisher */}
                                <div className="space-y-1">
                                    <p className="text-xs tracking-wider text-secondary/80 font-light italic ">Publisher</p>
                                    <p className="text-xs font-medium  text-secondary/40">{book.Publisher}</p>
                                </div>

                                {/* Release date */}
                                <div className="space-y-1">
                                    <p className="text-xs tracking-wider text-secondary/80 font-light italic">Release date</p>
                                    <p className="text-xs font-medium  text-secondary/40">{book.ReleaseDate}</p>
                                </div>

                                {/* ISBN */}
                                <div className="space-y-1">
                                    <p className="text-xs tracking-wider text-secondary/80 font-light italic">ISBN</p>
                                    <p className="text-xs font-medium  text-secondary/40">{book.ISBN}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
