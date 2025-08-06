import type { Config } from "tailwindcss";


export default {
    content: [
        "./src/components/**/*.{js,jsx,ts,tsx}",
        "./src/styles/*.{js,jsx,ts,tsx}",
        "./src/app/**/*.{js,jsx,ts,tsx}",
    ]
} satisfies Config;