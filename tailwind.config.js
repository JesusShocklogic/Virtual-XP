module.exports = {
    content: [
        './index.html', 
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            typography: {
                'main-title': {
                    css: {
                        fontSize: 'var(--main-title-font-size)',
                    },
                },
                'button-text': {
                    css: {
                        fontSize: 'var(--button-text-font-size)',
                        fontWeight: 'var(--button-text-font-weight)',
                    },
                },
                'cat-text': {
                    css: {
                        fontSize: 'var(--cat-text-font-size)',
                    },
                },
                'normal-text': {
                    css: {
                        fontSize: 'var(--normal-text-font-size)',
                    },
                },
                'small-text': {
                    css: {
                        fontSize: 'var(--small-text-font-size)',
                    },
                },
            },
            colors: {
                main: 'var(--main-color)',
                'main-hover': 'var(--main-hover-color)',
                bgcolor: 'var(--background-color)',
                card: 'var(--card-color)',
                text: 'var(--text-color)',
                subtle: 'var(--subtle-color)',
                'input-bg': 'var(--input-background-color)'
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
