/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Cores personalizadas
        beigeLight: '#F5F5DC',
        beigeMedium: '#E3DCCB',
        beigeDark: '#D1C3A3',
        grayLight: '#D3D3D3',
        grayMedium: '#B0B0B0',
        grayDark: '#8E8E8E',
        blueLight: '#ADD8E6',
        bluePastel: '#B0E0E6',
        blueMedium: '#87CEEB',
        lavender: '#E6E6FA',
        lavenderDark: '#CBC3E3',
        lavenderMedium: '#D8BFD8',
        pinkPastel: '#FFD1DC',
        pinkLight: '#FFE4E1',
        pinkMedium: '#FFB6C1',
      },
    },
  },
  plugins: [],
}

