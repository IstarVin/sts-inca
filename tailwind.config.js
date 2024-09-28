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
                primary: ["'Chakra Petch'", "sans-serif"],
                secondary: ["'Mulish'", "sans-serif"],
            },
            colors: {
                primary: '#D16527',
                secondary: '#121212',
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
    }],
}

