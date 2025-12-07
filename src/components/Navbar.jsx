import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
    const [open, setOpen] = useState(false);

    const menuItems = ["Home", "Products", "About", "Contact"];

    return (
        <nav
            className="
                fixed top-0 left-0 w-full z-50
                px-6 py-4
                flex items-center justify-between
               
               
            "
        >
            
            <h1 className="text-2xl font-bold text-white tracking-wide">
                SPACE FIGHTER
            </h1>

            
            <ul className="hidden md:flex space-x-8 text-white font-medium">
                {menuItems.map((item) => (
                    <li
                        key={item}
                        className="cursor-pointer transition duration-300 hover:text-fuchsia-400"
                    >
                        {item}
                    </li>
                ))}
            </ul>

            
            <button
                className="md:hidden text-white"
                onClick={() => setOpen(!open)}
            >
                {open ? <X size={28} /> : <Menu size={28} />}
            </button>

            
            <div
                className={`
                    md:hidden fixed top-16 left-0 w-full 
                    bg-black/80 backdrop-blur-md 
                    border-t border-white/10
                    transition-all duration-300
                    ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                `}
            >
                <ul className="flex flex-col items-center py-6 space-y-6 text-white text-lg font-medium">
                    {menuItems.map((item) => (
                        <li
                            key={item}
                            className="cursor-pointer hover:text-fuchsia-400 transition"
                            onClick={() => setOpen(false)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
