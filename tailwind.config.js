/** @type {import('tailwindcss').Config} */

import { BiFontFamily } from 'react-icons/bi';

export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    //darkMode: 'class', // Usa 'class' para alternar manualmente, o 'media' para seguir la configuración del sistema
    theme: {
      extend: {
        fontFamily: {
          sans: ['Roboto', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  