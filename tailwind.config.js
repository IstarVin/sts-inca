import { prototype } from 'postcss/lib/warning';
import flowbitePlugin from 'flowbite/plugin'

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            fontFamily: {
                albertsans: ["'Albert Sans'", "sans-serif"],
                roboto: ["'Roboto'", "sans-serif"],
                labrada: ["'Labrada'", "sans-serif"],
                abel: ["'Abel'", "sans-serif"],
                familjen: ["'Familjen Grotesk'", "sans-serif"],
                marko: ["'Marko One'", "serif"],
                khand: ["Khand", "sans-serif"],
                primary: ["'Inknut Antiqua'", "serif"],

                // primary: ["sans-serif"],
                secondary: ["'Mulish'", "sans-serif"],
            },
            colors: {
                primary: {
                    50: '#FFF4EB',   // Very light shade
                    100: '#FFEBD7',  // Lighter shade
                    200: '#FFD6B0',  // Light
                    300: '#FFBE80',  // Light-mid
                    400: '#FFA85A',  // Mid-light
                    500: '#FF914D',  // Base color
                    600: '#E67F45',  // Slightly darker
                    700: '#CC6E3D',  // Darker mid-tone
                    800: '#B35C34',  // Darker
                    900: '#8A4728',  // Darkest shade                
                },
                // primary: '#BF6A02',
                secondary: '#E3D8C9',
                bgcolor: '#F6E8D4',
                text: '#161616',
                accent: '#242424',
                textColor: '#EDEDED'
            },
            screens: {
                '3xl': '1700px'
            }
        },
    },
    plugins: [function ({ addVariant }) {
        addVariant('current', '& [aria-current="page"]');
        addVariant('currenthover', ['& [aria-current="page"]', '& :hover']);
        addVariant('afterbefore', ['&:after', '&:before']);
        addVariant('curafthov', ['&[aria-current="page"]', '&:hover']);
        addVariant('paragraph', '& p');
    }, function ({ addUtilities }) {
        addUtilities({
            '.drag-none': {
                '-webkit-user-drag': 'none',
                '-khtml-user-drag': 'none',
                '-moz-user-drag': 'none',
                '-o-user-drag': 'none',
                'user-drag': 'none'
            }
        });
    }, flowbitePlugin],
}

