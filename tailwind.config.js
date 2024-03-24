import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/**/*.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "cupcake",
      {
        myTheme:
        {
          'primary': '#1c3aff',
          'primary-focus': '#1c3aff',
          'primary-content': '#ffffff',
          'secondary': '#1c3aff',
          'secondary-focus': '#1c3aff',
          'secondary-content': '#ffffff',
          'accent': '#1c3aff',
          'accent-focus': '#1c3aff',
          'accent-content': '#ffffff',
          'neutral': '#1c3aff',
          'neutral-focus': '#1c3aff',
          'neutral-content': '#ffffff',
          'base-100': '#1c3affaa',
          'base-200': '#1c3aff',
          'base-300': '#1c3aff',
          'base-content': '#ffffff',
          'info': '#1c3aff',
          'success': '#1c3aff',
          'warning': '#1c3aff',
          'error': '#1c3aff',
        }
      }

    ],

  }
}

