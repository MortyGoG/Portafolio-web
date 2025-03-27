import { useState, useEffect } from 'react'
import { Dumbbell } from "lucide-react";
// import { useTheme } from "./ThemeToggle";

// // Iconos
// import { MdLightMode, MdNightlight } from "react-icons/md";


export default function NavBar() {
    // Scroll del usuario para mostrar fondo en la barra de nevgacion
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`flex px-3 text-sm font-medium rounded-full justify-center items-center transition-all duration-300 
            ${scrolled ? 'bg-[#222356] shadow-lg' : 'bg-transparent'}`}>

            <a href="#exp" className="relative block px-2 py-2 text-gray-200 hover:text-[#A6FF00]">Experiencia</a>
            <a href="#projects" className="relative block px-2 py-2 text-gray-200 hover:text-[#A6FF00]">Proyectos</a>
            <a href="#about" className="relative block px-2 py-2 text-gray-200 hover:text-[#A6FF00]">Sobre mí</a>
            <a href="#contact" className="relative block px-2 py-2 text-gray-200 hover:text-[#A6FF00]">Contacto</a>
            <a href="#extra" className="relative block px-2 py-2 text-gray-200 hover:text-[#A6FF00]">
                <Dumbbell className="w-5 h-5 text-white hover:text-[#A6FF00]" />
            </a>
            {/* <button 
                        onClick={toggleTheme}
                        className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800">
                        {theme === "dark" ? <MdLightMode /> : <MdNightlight />}
                    </button> */}
        </nav>
    );
};