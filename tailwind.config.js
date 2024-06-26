/** @type {import('tailwindcss').Config} */
const theme = require("tailwindcss/defaultTheme");
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{js,jsx}',
        './src/**/*.{js,jsx}',
    ],
    prefix: "",
    theme: {
        screens: {
            desktop: "1600px",
            'mobile': {'max': '1000px'},

        },
        extend: {
            colors: {
                BlackP: "#1C1B1A",
                Black: "#484848",
                GreyBlue: "#E1E7ED",
                GreyP: "#ADADAD",
                Grey: "#E0E2E8",
                GreyM: "#FAFAFA",
                Pink: "#FCF7F7",
            },
            boxShadow: {
                'custom': '0px 10px 30px 0px #00000040',
            },
            fontFamily: {
                robotoFlex: ['var(--font-robotoFlex)'],
                vazirmatn: ['var(--font-vazirmatn)'],
                HWAtlanticUltraLight: ['var(--font-atlantic)']
            },
        },
    },
    plugins: [],
}