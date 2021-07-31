// tailwind.config.js
module.exports = {
  darkMode: "media",
  purge: {
    preserveHtmlElements: false,
    content: [
      "./components/**/*.{html,js,ts,vue}",
      "./pages/**/*.{html,js,ts,vue}",
    ],
    options: {
      keyframes: true,
    },
  },
  theme: {
    extend: {
      backgroundImage: () => ({
        "frontpage-image": "url('~/assets/background-scroller.jpg')"
      }),
      backgroundPosition: {
        "parallax": "0% 10%"
      },
      colors: {
        "s2grey": "#acb1ba"
      },
      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"]
      },
      height: {
        "110": "110vh",
        "120": "120vh",
      },
      width: {
        "110": "110vw",
        "120": "120vw",
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
        "-30": "-30",
        "-40": "-40",
        "-50": "-50",
        "-60": "-60",
        "-70": "-70",
        "-80": "-80",
      }
    }
  }
}
