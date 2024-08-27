/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily : {
        clash : "'Clash Display', sans-serif",
        pop : "'Poppins', sans-serif",
        in : "'Inter var', sans-serif",
      },
      colors : {
        back : '#f1f4f5',
      },
    },
    screens: {
      'sm': {'max':'640px'},
      // => @media (min-width: 640px) { ... }

      'md': {'min': '641px','max':'768px'},
      // => @media (min-width: 768px) { ... }

      'lg': {'min': '769','max':'1024px'},
      // => @media (min-width: 1024px) { ... }

      'xl': {'min': '1025','max':'1280px'},
      // => @media (min-width: 1280px) { ... }

      '2xl': {'min': '1281px','max':'1536px'},
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),

    // kode font features
    
    function({ addUtilities }) {
      addUtilities({
        '.font-feature-settings-cv11': {
          'font-feature-settings': '"cv11"',
        },
      }, ['responsive', 'hover']);
    },
  ],
}

