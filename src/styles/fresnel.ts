import { theme } from "styles/theme"
import { createMedia } from "@artsy/fresnel"

const regex = /^(\d+)/
const breakpointNames = ["sm", "md", "lg", "xl"]
const { breakpoints: themeBreakpoints } = theme
const breakpoints: { [name: string]: number } = breakpointNames.reduce<{
  [name: string]: number
}>((acc, name, index) => {
  const stringValue = themeBreakpoints[index] // +1? mobile is default
  if (stringValue) {
    const numericCapture = stringValue.match(regex)[0]
    const numericValue = Number(numericCapture)
    if (numericValue) {
      return { ...acc, [name]: numericValue }
    }
  } else {
    return acc
  }
}, {})

const ExampleAppMedia = createMedia({
  breakpoints,
})

// Generate CSS to be injected into the head
export const mediaStyle = ExampleAppMedia.createMediaStyle()
export const { Media, MediaContextProvider } = ExampleAppMedia
