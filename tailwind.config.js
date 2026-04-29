/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
       
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        "brand-main":"var(--brand-main)",
        "brand-secondary":"var(--brand-secondary)",
        "brand-third":"var(--brand-third)",
        "brand-fourth":"var(--brand-fourth)",
        "brand-five":"var(--brand-five)",
        "brand-six" :"var(--brand-six)",
        accent: "var(--accent)",
        border: "var(--border)",
        destructive: "var(--destructive)",
        ring: "var(--ring)",
        "accent-opacity":"var(--accent-opacity)",
        "banner":"var(--banner)",
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"3rem"
        }
      },
    },
  },
  plugins: [],
}