/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
        // {light:{
        //   ...require("daisyui/src/theming/themes")["[data-theme=light]"],
        //   ".tab": {
        //     "--tab-border-color": "hsl(var(--p))",
        //   },
        // }},

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
