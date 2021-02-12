import { LayoutWithAnalytics } from "../layout/LayoutWithAnalytics"
import About from "../views/About"
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
