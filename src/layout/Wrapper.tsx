import React from "react"
import { Layout } from "./Layout"
import config from "../../blog.config"
import ReactGA from "react-ga"
import { Props as DocHeadProps } from "./DocHead"

const Wrapper: React.FC<DocHeadProps> = (props) => {
  // TODO: should this use using a hook?
  if (typeof config.analytics === "string" && config.analytics !== "") {
    ReactGA.initialize(config.analytics)
    ReactGA.set({ anonymizeIp: true })
    if (typeof window !== "undefined") {
      ReactGA.pageview(window.location.pathname + window.location.search)
    }
  }
  return <Layout {...props} />
}

export default Wrapper
