/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "light-mode": "#f7f7f7",
        "dark-mode": "#161616",
        "custom": "#690b22"
      },
      animation:{
        'spin-slow': 'spin 7s linear infinite',
      }
    },
  },
  plugins: [],
};
