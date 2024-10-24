import forms from '@tailwindcss/forms';

export default {
  theme: {
    extend: {
      colors: {
        rails: {
          light: '#D30001',
          dark: '#690000',
        },
        inertia: {
          DEFAULT: '#9553e9',
        },
        rose: {
          DEFAULT: '#F0E7E9',
        },
      },
    },
  },
  content: [
    './app/**/*.{html,html.erb,rb}',
    './app/javascript/**/*.{svelte,js,ts}',
  ],
  plugins: [forms],
};
