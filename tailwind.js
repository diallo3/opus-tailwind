const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
        screeens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px'
        },
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },

    },
    variants: {
        textColor: ['responsive', 'hover', 'focus', 'visited'],
        display: ['responsive']
    },
    plugins: [
        require('tailwind-bootstrap-grid'),
        require('@tailwindcss/ui')
    ],
    corePlugins: {
        container: false
    }
};