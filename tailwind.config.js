import { prototype } from 'postcss/lib/warning';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{svelte,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                albertsans: ["'Albert Sans'", "sans-serif"],
                robotoslab: ["'Roboto Slab'", "serif"],
                // primary: ["'Inknut Antiqua'", "serif"],
                primary: ["sans-serif"],
                secondary: ["'Mulish'", "sans-serif"],
            },
            colors: {
                primary: '#BF6A02',
                secondary: '#E3D8C9',
                bgcolor: '#F6E8D4',
                text: '#161616',
                accent: '#242424',
                textColor: '#EDEDED'
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
    }],
}

