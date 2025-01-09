import type { Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        extend: {
            colors: {
                secondary: {
                    100: "#646464",
                    300: "#383838",
                    DEFAULT: "#222"
                },
                gray: {
                    800: '#262626'
                },
                violet: {
                    50: "#d1c2e0",
                    100: "#a385c2",
                    200: "#9470b8",
                    300: "#7547a3",
                    DEFAULT: "#663399",
                    500: "#5c2e8a",
                    600: "#52297a"
                },
                accent: {
                    DEFAULT: "#9470b8"
                },
                muted: {
                    DEFAULT: "#a3a3a3"
                }
            },
        }
    },

    plugins: []
} satisfies Config;
