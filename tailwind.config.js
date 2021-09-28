const colors = require('tailwindcss/colors')

module.exports = {
    mode: "jit",
    purge: ['./src/**/*.jsx', './public/index.html'],
    darkMode: 'class', // or 'media' or 'class'
    important: true,
    theme: {
        fontSize: {
            'xs': '.75rem',
            'sm': '.875rem',
            'base': '1rem',
            'xl': '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
            '8xl': '6rem',
            '9xl': '7rem',
        },
        extend: {
            boxShadow: {
                around: '0 0 15px 0 rgba(0, 0, 0, .3), 0 0 15px 0 rgba(0, 0, 0, .3)'
            },
            flex: {
                '1-3':'1 1 33%',
                '2-3':'1 1 67%',
                '1-5':'1 1 20%',
                '4-5':'1 1 80%',
                1: '1 1 auto',
                2: '2 2 auto',
                3: '3 3 auto',
                4: '4',
                5: '5',
                6: '6',
                7: '7',
                8: '8',
                9: '9',
                10: '10',
                auto: '1 1 auto',
                inherit: 'inherit',
                none: 'none',
            },
            flexGrow: {
                1: '1',
                2: '2',
                3: '3',
                4: '4',
                5: '5',
                6: '6',
                7: '7',
                8: '8',
                9: '9'
            },
            height: {
                'sidebar': "calc(100vh - theme('height.12'))",
            },
            colors: {
                red: {
                    pure: '#ff0000'
                },
                green: {
                    pure: '#00ff00'
                },
                blue: {
                    pure: '#0000ff'
                }
            },
            zIndex: {
                top: '999',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
