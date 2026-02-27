/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: {
                    dark: '#0a0a0a',
                    card: '#141414',
                },
                growaz: {
                    orange: '#ff6b2b',
                    yellow: '#f4d06f',
                    muted: '#a3a3a3',
                }
            },
            fontFamily: {
                heading: ['Outfit', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
        },
    },
    plugins: [],
}
