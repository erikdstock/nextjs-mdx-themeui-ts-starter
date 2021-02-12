import { LayoutWithAnalytics } from "../components/layout/LayoutWithAnalytics"
import About from "../components/views/About"
import config from "../../blog.config.js"

const AboutPage: React.FC = () => (
  <LayoutWithAnalytics
    url={config.url + "about"}
    title={config.title + " | About"}
    description={"Learn more about " + config.title}
    imageUrl={config.shareImage}
    imageAlt={config.shareImageAlt}
  >
    <About />
  </LayoutWithAnalytics>
)

export default AboutPage
