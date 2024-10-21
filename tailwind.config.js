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
    themes: [
      "night",
      "light",
      "dark",
      "corporate",
      "synthwave",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "fantasy",
      "dracula",
      "autumn",
      "business",
      "coffee"
    ],
  }
}

