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
                    primary: '#f8fafc',
                    secondary: '#f1f5f9',
                },
                text: {
                    primary: '#0f172a',
                    secondary: '#334155',
                },
                accent: {
                    DEFAULT: '#2563eb',
                    hover: '#1d4ed8',
                    glow: 'rgba(37, 99, 235, 0.2)',
                },
                charcoal: '#0f172a',
                slate: '#64748b',
            },
            fontFamily: {
                heading: ['Poppins', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
