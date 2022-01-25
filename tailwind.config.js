module.exports = {
    purge: ['./index.html', 'src/**/*/.{vue|jsx|tsx|js|ts}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            typography: {
                'main-title': {
                    css: {
                        fontSize: '32px',
                    },
                },
                'button-text': {
                    css: {
                        fontSize: '6vw',
                        fontWeight: '700',
                    },
                },
                'cat-text': {
                    css: {
                        fontSize: '24px',
                    },
                },
                'normal-text': {
                    css: {
                        fontSize: '18px',
                    },
                },
                'small-text': {
                    css: {
                        fontSize: '16px',
                    },
                },
            },
            colors: {
                main: '#4c28b5',
                'main-hover': '#341492',
                bgcolor: '#ebf0f3',
                card: '#ffffff',
                text: '#202020',
                subtle: '#6e6e6e',
                'input-bg': '#361C800D'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
