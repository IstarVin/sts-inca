/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{svelte,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [function ({ addVariant }) {
        addVariant('current', '& [aria-current="page"]');
        addVariant('currenthover', ['& [aria-current="page"]', '& :hover']);
        addVariant('afterbefore', ['&:after', '&:before']);
        addVariant('curafthov', ['&[aria-current="page"]', '&:hover']);
        addVariant('paragraph', '& p');
    }],
}

