const colors = require('tailwindcss/colors')

module.exports = {
    mode: "jit",
    purge: ['./src/**/*.jsx', './public/index.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            flex: {
                1: '1',
                2: '2',
                3: '3',
                4: '4',
                5: '5',
                6: '6',
                7: '7',
                8: '8',
                9: '9',
                10: '10',
                11: '11',
                12: '12',
                auto: '1 1 auto',
                inherit: 'inherit',
                none: 'none',
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
