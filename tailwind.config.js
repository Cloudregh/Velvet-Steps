/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: '#5D4037', // Assuming a brown color was used based on index.css @apply text-brown
      },
      fontFamily: {
        aboreto: ['Aboreto', 'system-ui'],
        merriweather: ['Merriweather', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        'playfair-sc': ['Playfair Display SC', 'serif'],
        // Alias for user convenience if they really want 'Ab' but 'aboreto' is standard
        Ab: ['Aboreto', 'system-ui'], 
      },
    },
  },
  plugins: [],
}
