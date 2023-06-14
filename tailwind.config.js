/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './src/app/styles/index.css'
    ],
    theme: {
        extend: {}
    },
    plugins: [],
    corePlugins: {
        preflight: false
    }
};
