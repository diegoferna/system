

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        primary: '#3366CC',       // Azul primário
        secondary: '#FF9900',     // Laranja
        background: '#F5F5F5',    // Cinza claro
        text: '#333333',          // Preto
        success: '#00CC66',       // Verde
        error: '#FF3333',         // Vermelho
        warning: '#FFCC00',       // Amarelo
      },
    },
  },
  plugins: [],
}