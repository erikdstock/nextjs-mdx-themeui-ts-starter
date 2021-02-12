import React from "react"
import { Layout } from "./Layout"
import config from "../../blog.config"
import ReactGA from "react-ga"
import { Props as DocHeadProps } from "./DocHead"

/**
 * The top-level Page Wrapper including layout, document head and optional google analytics.
 * If you aren't using google analytics, use `<Layout />` instead.
 */
export const PageWrapper: React.FC<DocHeadProps> = (props: DocHeadProps) => {
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
