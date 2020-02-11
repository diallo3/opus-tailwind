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
            },
            lineHeight: {
                tighter: '1.125',
            },
        }
    },
    variants: {
        textColor: ['responsive', 'hover', 'focus', 'visited'],
    },
    plugins: [
        ({addUtilities}) => {
            const utils = {
                '.translate-x-half': {
                    transform: 'translateX(50%)',
                },
            };
            addUtilities(utils, ['responsive'])
        },
        require('tailwind-bootstrap-grid')()
    ],
    corePlugins: {
        container: false
    }
};
