import { MDXProvider } from "@mdx-js/react"
import MarkdownContent from "mdx/about.mdx"
import Container from "components/ui/Container"

const About: React.FC = () => {
  return (
    <MDXProvider>
      <Container>
        <MarkdownContent />
      </Container>
    </MDXProvider>
  )
}

export default About
