module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        img: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyCR8swvQ7cXbV8R_axNL1sET68cBO1Y9pwKQGToTRCCYBBexePJPQ0fdlwhVwd8cAjYY&usqp=CAU')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
