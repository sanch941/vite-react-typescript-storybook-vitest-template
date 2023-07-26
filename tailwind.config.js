/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './src/app/styles/index.css'
    ],
    theme: {
        extend: {
            screens: {
                sm: '768px'
            }
        }
    },
    plugins: [],
    corePlugins: {
        preflight: false
    }
};
