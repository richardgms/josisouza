/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette extracted from user images
        primary: '#A5907B',    // Elegant Beige/Taupe (Main Brand Color)
        secondary: '#D4CABE',  // Light Beige (Backgrounds/Accents)
        accent: '#806248',     // Medium Brown (Buttons/Highlights)
        dark: '#50311D',       // Deep Brown (Text/Strong Elements)
        black: '#0B090C',      // Soft Black (Headings)

        // Semantic aliases
        background: '#F9F8F6', // Very light off-white for main background (derived to be lighter than D4CABE)
        surface: '#E4DFD7',    // Slightly darker background (from Palette 1)
        text: '#181716',       // Main text color (from Palette 1)
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
    },
  },
  plugins: [],
}
