module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#353A84",
          secondary: "#FBD144",
          accent: "#575757",
          neutral: "#3D3D3D",
          "base-100": "#F7F3F7",
          info: "#ADD5E6",
          success: "#14A966",
          warning: "#E6C419",
          error: "#DA2B4B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
