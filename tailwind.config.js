module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: {
          500: "#E05544",
        },
        yellow: {
          500: "#F09637",
        },
        green: {
          500: "#96C15C",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
