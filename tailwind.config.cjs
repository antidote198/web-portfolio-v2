/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#09192F',
                secondary: '#60E7CF',
                tertiary: '#ccd6f6'
            },
            fontFamily: {
                exo: ['Exo', 'sans-serif'],
                'maven-pro': ['Maven Pro', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
                pacifico: ['Pacifico', 'cursive'],
                'permanent-marker': ['Permanent Marker', 'cursive'],
                'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
                'poller-one': ['Poller One', 'cursive'],
                'source-code-pro': ['Source Code Pro', 'monospace'],
                'pt-mono': ['PT Mono', 'monospace']
            }
        }
    },
    plugins: []
};
