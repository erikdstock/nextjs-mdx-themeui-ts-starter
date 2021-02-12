import { theme } from "styles/theme"
import { createMedia } from "@artsy/fresnel"

const regex = /^(\d+)px$/
const { breakpoints: themeBreakpoints } = theme
const breakpointNames = ["sm", "md", "lg", "xl"]
if (themeBreakpoints.length !== breakpointNames.length) {
  throw new Error("breakpointNames.length must equal theme.breakpoints.length")
}

const breakpoints: { [name: string]: number } = breakpointNames.reduce<{
  [name: string]: number
}>(
  (acc, name, index) => {
    const stringValue = themeBreakpoints[index] // +1? mobile is default
    if (stringValue) {
      const numericCapture = stringValue.match(regex)[1]
      if (!numericCapture) {
        throw new Error("@artsy/fresnel requires px breakpoints")
      }
      const numericValue = Number(numericCapture)
      if (numericValue) {
        return { ...acc, [name]: numericValue }
      }
    } else {
      return acc
    }
  },
  // theme-ui starts from 0 by default
  { xs: 0 }
)

const AppMedia = createMedia({
  breakpoints,
})

// Generate CSS to be injected into the head
export const mediaStyles = AppMedia.createMediaStyle()
export const { Media, MediaContextProvider } = AppMedia
