"use client";

import { BookOpen } from "lucide-react";
import {FaInstagram, FaFacebook, FaXTwitter} from "react-icons/fa6";
import { author, book } from "@/data/content";

export default function Contact() {
    const socialLinks = [
        {icon: FaInstagram, href: author.instagram, label: "Instagram"},
        {icon: FaXTwitter, href: author.X, label: "X"},
        {icon: FaFacebook, href: author.facebook, label: "Facebook"},
    ];

    return (
        <footer className="bg-footerBg text-white py-12 border-t border-footerBorder">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Brand */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <BookOpen size={24} className="text-footerIcon" />
                            <h3 className="text-xl font-serif font-light">{author.firstName} {author.lastName}</h3>
                        </div>
                        <p className="text-sm text-footerText font-light">Author of {book.title}</p>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-4">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="p-3 bg-footerIcon rounded-full transition-all duration-300 hover:scale-110">
                                    <Icon size={24} />
                                </a>
                            );
                        })}
                    </div>

                    {/* Copyright */}
                    <div className="text-center md:text-right">
                        <p className="text-sm text-footerText font-light">© {new Date().getFullYear()} {author.firstName} {author.lastName}</p>
                        <p className="text-xs text-footerTextLight font-light mt-1">All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
