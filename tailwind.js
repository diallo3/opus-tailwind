const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
<<<<<<< HEAD
=======
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
>>>>>>> a7d82a523e589144748a069c44e4d11d94ba622c
};