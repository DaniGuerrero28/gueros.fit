/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        accent: 'var(--accent)',
        'accent-gradient': 'var(--accent-gradient)',
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        'primary-mute': 'var(--primary-mute)',
        'primary-foreground-mute': 'var(--primary-foreground-mute)',
        secondary: 'var(--secondary)',
        'secondary-foreground': 'var(--secondary-foreground)',
        'secondary-mute': 'var(--secondary-mute)',
        'secondary-foreground-mute': 'var(--secondary-foreground-mute)',
      },
      fontFamily: {
        inter: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
