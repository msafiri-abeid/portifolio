/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fadeInUp: {
        "0": {
          opacity: "0",
          transform: "translateY(30px)"
        },

        "100%": {
          opacity: "1",
          transform:"translateY(0)"
        }
      },
      fadeInScale: {
        "0": {
          opacity: "0",
          transform: "scale(0.8)"
        }, 
        "100%": {
          opacity: "1",
          transform: "scale(1)"
        }
      },
      animation: {
        fadeInUp: "fadeInUp 1s ease fowards",
        fadeInScale: "fadeInScale 1s ease 0.5s fowards"
      }
    },
  },
  plugins: [],
}

