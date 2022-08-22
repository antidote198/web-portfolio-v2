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
            },
            animation: {
                'fade-in':
                    'fade-in 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
                'shadow-drop-br':
                    'shadow-drop-br 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
                'slide-in-blurred-top':
                    'slide-in-blurred-top 0.6s cubic-bezier(0.23, 1, 0.32, 1) 8s both'
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 }
                },
                'shadow-drop-br': {
                    '0%': { 'box-shadow': '0 0 0 0 rgba(0, 0, 0, 0)' },
                    '100%': {
                        'box-shadow': '12px 12px 20px -12px rgb(96, 231, 207)'
                    }
                },
                'slide-in-blurred-top': {
                    '0%': {
                        transform:
                            'translateY(-1000px) scaleY(2.5) scaleX(0.2)',
                        'transform-origin': '50% 0%',
                        filter: 'blur(40px)',
                        opacity: 0
                    },
                    '100%': {
                        transform: 'translateY(0) scaleY(1) scaleX(1)',
                        'transform-origin': '50% 50%',
                        filter: 'blur(0)',
                        opacity: 1
                    }
                }
            }
        }
    },
    plugins: []
};
