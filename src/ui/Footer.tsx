import { Box, Text } from "theme-ui"
import { Link } from "ui/Link"
import { Media, MediaContextProvider } from "styles/responsive"

const Footer: React.FC = () => (
  <Box
    sx={{
      p: 4,
      color: "#666",
      textAlign: "center",
      fontSize: 1,
    }}
  >
    <Text sx={{ mx: 3, display: "inline-block" }}>
      Created by{" "}
      <Link external href="https://github.com/erikdstock">
        Erik Stockmeier
      </Link>
    </Text>
    <Text sx={{ mx: 3, display: "inline-block" }}>
      Open sourced on{" "}
      <a href="https://github.com/erikdstock/nextjs-mdx-themeui-ts-starter">
        Github
      </a>
      , forked from{" "}
      <a href="https://github.com/johnpolacek/nextjs-mdx-blog-starter">
        johnpolacek/nextjs-mdx-blog-starter
      </a>
    </Text>
    <Text
      sx={{
        fontFamily: "monospace",
        bg: "lite",
        display: "inline-block",
        px: 1,
        borderRadius: 1,
      }}
    >
      {/* @artsy/fresnel responsive media */}
      <MediaContextProvider>
        <Media at="xs">{"<= s"}</Media>
        <Media greaterThan="sm">{"> sm"}</Media>
      </MediaContextProvider>
    </Text>
  </Box>
)

export default Footer
