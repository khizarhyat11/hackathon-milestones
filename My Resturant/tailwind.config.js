/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fffffff: "#fff",
        "black-1": "#1e1e1e",
        "primary-color": "#ff9f0d",
        "black-ododod": "#0d0d0d",
        "gray-5": "#e0e0e0",
        "gray-1": "#333",
        "gray-3": "#828282",
        "gray-2": "#4f4f4f",
        gray: {
          "100": "rgba(13, 13, 13, 0.95)",
          "200": "rgba(13, 13, 13, 0.85)",
        },
        gainsboro: "#e0dfdf",
        snow: "#fff5f5",
      },
      spacing: {},
      fontFamily: {
        "font-awesome-5-brands": "'Font Awesome 5 Brands'",
        inter: "Inter",
        "heading-4-32": "Helvetica",
        themify: "themify",
        "great-vibes-32": "'Great Vibes'",
      },
      borderRadius: {
        "8xl": "27px",
        "11xl": "30px",
        "6xl": "25px",
      },
    },
    fontSize: {
      base: "16px",
      "13xl": "32px",
      sm: "14px",
      xl: "20px",
      lg: "18px",
      "5xl": "24px",
      "29xl": "48px",
      "21xl": "40px",
      "2xs": "11px",
      "41xl": "60px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
