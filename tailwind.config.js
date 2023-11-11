/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        halloween: {
          ...require("daisyui/src/theming/themes")["[data-theme=halloween]"],
          ".tab": {
            "--tab-border-color": "hsl(var(--p))",
          },
        },
      },
    ],
  },
};
