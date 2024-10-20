/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,tsx,ts,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],

  daisyui: {
    themes: true,
    darkTheme: "night",
  }
}

