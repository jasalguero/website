import Typography from "typography"
import Theme from "typography-theme-lincoln"

Theme.baseFontSize = "20px"
Theme.googleFonts = [
  { name: "Raleway", styles: ["100","300","400", "700"] },
  // { name: "Open Sans", styles: ["400", "400i", "700"] },
]
Theme.bodyFontFamily = ["Raleway", "serif"]
Theme.headerFontFamily = ["Raleway", "sans-serif"]
Theme.headerWeight = "600"
Theme.bodyWeight = "400"
Theme.boldWeight = "700"

Theme.overrideThemeStyles = () => ({
  h1: {
    fontSize: "3em",
  },
  a: {
    backgroundImage: "none",
    textShadow: "none",
  },
})

const typography = new Typography(Theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
