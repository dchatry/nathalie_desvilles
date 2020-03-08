module.exports = {
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
    },
    inset: {
      '-8': '-2rem',
    },
    fontFamily: {
      'sans': ['PT\\ Sans', 'Helvetica', '-apple-system'],
      'serif': ['Georgia', 'Cambria'],
      'display': ['PT\\ Sans', 'Helvetica'],
    },
    extend: {
      boxShadow: {
        huge: '0 30px 60px -15px rgba(0, 0, 0, .50)'
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui')
  ]
}
