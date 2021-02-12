import { PageWrapper } from "../layout/PageWrapper"
import About from "../views/About"
import config from "../../blog.config.js"

const AboutPage: React.FC = () => (
  <PageWrapper
    url={config.url + "about"}
    title={config.title + " | About"}
    description={"Learn more about " + config.title}
    imageUrl={config.shareImage}
    imageAlt={config.shareImageAlt}
  >
    <About />
  </PageWrapper>
)

export default AboutPage
