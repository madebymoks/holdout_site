/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#f2ede3',
        'bg-alt': '#ebe5d7',
        ink: '#111318',
        accent: '#d4845a',
        muted: '#6b6f77',
        hairline: '#d4cebd',
      },
      fontFamily: {
        display: ['Archivo Black', 'sans-serif'],
        sans: ['Archivo', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
}
