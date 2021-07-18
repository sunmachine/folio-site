// tailwind.config.js
module.exports = {
  darkMode: "media",
  theme: {
    extend: {
      backgroundImage: () => ({
        "frontpage-image": "url('~/assets/background-scroller.png')"
      }),
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
