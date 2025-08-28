"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [open, setOpen] = useState(false);

    const handleLinkClick = () => {
        setOpen(false);
    };

    return (
        <header className="w-full bg-white shadow-md sticky top-0 z-10">
            <div className="flex justify-between items-center px-4 md:px-8 py-4">
                <div className="text-2xl font-bold text-blue-800">FPJoint et Painture</div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-6" role="navigation" aria-label="Navigation principale">
                    <a href="#apropos" className="text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                        À propos
                    </a>
                    <a href="#services" className="text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                        Services
                    </a>
                    <a href="#galerie" className="text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                        Galerie
                    </a>
                    <a href="#contact" className="text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                        Contact
                    </a>
                </nav>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1"
                    onClick={() => setOpen(!open)}
                    aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
                    aria-expanded={open}
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {open && (
                <nav
                    className="md:hidden flex flex-col bg-white shadow-md border-t"
                    role="navigation"
                    aria-label="Navigation mobile"
                >
                    <a
                        href="#apropos"
                        className="py-3 px-4 border-b text-blue-800 hover:underline hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                        onClick={handleLinkClick}
                    >
                        À propos
                    </a>
                    <a
                        href="#services"
                        className="py-3 px-4 border-b text-blue-800 hover:underline hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                        onClick={handleLinkClick}
                    >
                        Services
                    </a>
                    <a
                        href="#galerie"
                        className="py-3 px-4 border-b text-blue-800 hover:underline hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                        onClick={handleLinkClick}
                    >
                        Galerie
                    </a>
                    <a
                        href="#contact"
                        className="py-3 px-4 text-blue-800 hover:underline hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                        onClick={handleLinkClick}
                    >
                        Contact
                    </a>
                </nav>
            )}
        </header>
    );
}