import { theme } from "../../styles/theme"
import { Box } from "theme-ui"
import { DocHead, Props as DocHeadProps } from "./DocHead"
import ThemeToggle from "../ui/ThemeToggle"
import Header from "../ui/Header"
import Main from "../ui/Main"
import Footer from "../ui/Footer"

export const Layout: React.FC<DocHeadProps> = (props) => {
  return (
    <>
      <DocHead {...props} />
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
        }}
      >
        {typeof theme.colors.modes === "object" && <ThemeToggle />}
        <Header />
        <Main>{props.children}</Main>
        <Footer />
      </Box>
    </>
  )
}
