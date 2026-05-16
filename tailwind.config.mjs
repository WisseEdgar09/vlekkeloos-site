/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-blue':       '#0078B7',
        'brand-blue-dark':  '#005A8C',
        'brand-tint':       '#E6F3FB',
        'brand-ink':        '#0A1929',
        'brand-canvas':     '#FAF7F2',
        'brand-amber':      '#F4B942',
        'brand-amber-ink':  '#4A2E00',
        'brand-muted':      '#5F5E5A',
        'brand-line':       'rgba(10, 25, 41, 0.10)',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans:    ['"Inter Variable"', '"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
        btn:  '10px',
      },
    },
  },
  plugins: [],
};
