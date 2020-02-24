module.exports = {
    theme: {
        screeens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px'
        },
        extend: {
            colors: {
                link: {
                    'default': '#3182ce',
                    'hover': '#63b3ed',
                }
            },
            fontSize: {
                xxs: '0.675rem',
                '7xl': '5rem',
                '8xl': '6rem',
                '9xl': '7rem',
            },
            lineHeight: {
                tighter: '1.125',
            },
        },
        minHeight: {
            '1/4': '25vh',
            '1/2': '50vh',
            '3/4': '75vh'
        },
    },
    variants: {
        textColor: ['responsive', 'hover', 'focus', 'visited'],
        display: ['responsive']
    },
    plugins: [
        ({ addUtilities }) => {
            const utils = {
                '.translate-x-half': {
                    transform: 'translateX(50%)',
                },
            };
            addUtilities(utils, ['responsive'])
        },
        require('tailwind-bootstrap-grid')(),
        require('@tailwindcss/custom-forms')
    ],
    corePlugins: {
        container: false
    }
};