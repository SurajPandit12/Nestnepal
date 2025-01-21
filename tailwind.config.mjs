/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      container: {
        center: true,
        padding: "2rem",
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1240px",
          "2xl": "1375px",
        },
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        dmsans: ["DM Sans", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        montserratAlt: ['"Montserrat Alternates"', "sans-serif"],
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
