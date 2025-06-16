"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full bg-white shadow-md sticky top-0 z-10">
            <div className="flex justify-between items-center px-4 md:px-8 py-4">
                <div className="text-2xl font-bold text-blue-800">FPJoint&Painture</div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-6">
                    <a href="#despre" className="text-blue-800 hover:underline">Despre</a>
                    <a href="#servicii" className="text-blue-800 hover:underline">Servicii</a>
                    <a href="#galerie" className="text-blue-800 hover:underline">Galerie</a>
                    <a href="#contact" className="text-blue-800 hover:underline">Contact</a>
                </nav>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-blue-800"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {open && (
                <nav className="md:hidden flex flex-col bg-white shadow-md border-t">
                    <a
                        href="#despre"
                        className="py-3 px-4 border-b text-blue-800 hover:underline"
                        onClick={() => setOpen(false)}
                    >
                        Despre
                    </a>
                    <a
                        href="#servicii"
                        className="py-3 px-4 border-b text-blue-800 hover:underline"
                        onClick={() => setOpen(false)}
                    >
                        Servicii
                    </a>
                    <a
                        href="#galerie"
                        className="py-3 px-4 border-b text-blue-800 hover:underline"
                        onClick={() => setOpen(false)}
                    >
                        Galerie
                    </a>
                    <a
                        href="#contact"
                        className="py-3 px-4 text-blue-800 hover:underline"
                        onClick={() => setOpen(false)}
                    >
                        Contact
                    </a>
                </nav>
            )}
        </header>
    );
}
