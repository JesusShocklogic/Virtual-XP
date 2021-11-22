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
					fontSize: '24px',
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
