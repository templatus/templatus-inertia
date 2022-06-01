module.exports = {
  theme: {
    extend: {
      colors: {
        rails: {
          light: '#D30001',
          dark: '#690000',
        },
        svelte: {
          DEFAULT: '#ff3e00',
        },
        rose: {
          DEFAULT: '#F0E7E9',
        },
      },
    },
  },
  content: [
    './app/**/*.{html,rb}',
    './app/**/*.html.erb',
    './app/javascript/**/*.{svelte,js,ts}',
  ],
  plugins: [require('@tailwindcss/forms')],
};
