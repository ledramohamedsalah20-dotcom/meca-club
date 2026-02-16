/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'meca-red': {
          400: '#EF4444',
          500: '#DC2626',
          600: '#B91C1C',
        },
        'meca-blue': {
          400: '#3B5A89',
          500: '#2C4367',
          600: '#1E2F4D',
        },
        'meca-gray': {
          400: '#6B7C8D',
          500: '#546576',
          600: '#3D4E5F',
        },
      },
    },
  },
  plugins: [],
}
