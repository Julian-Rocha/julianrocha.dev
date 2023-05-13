/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "hero-dark": "url('/src/assets/images/hero-dark.jpg')",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [],
};
