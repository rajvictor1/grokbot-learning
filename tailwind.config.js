/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        slate: { 950: '#0B0F19', 900: '#111827', 850: '#151D2E', 800: '#1f2937', 750: '#243044', 700: '#374151', 600: '#4b5563', 500: '#6b7280', 400: '#9ca3af', 300: '#d1d5db', 200: '#e5e7eb', 100: '#f3f4f6', 50: '#f9fafb' },
        accent: { DEFAULT: '#F97316', hover: '#EA580C', subtle: '#FFF7ED' },
        brand: { DEFAULT: '#0EA5E9', dark: '#0284C7', light: '#E0F2FE' }
      },
      fontFamily: { sans: ['Inter','ui-sans-serif','system-ui','-apple-system','BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','sans-serif'] }
    }
  },
  plugins: []
}
