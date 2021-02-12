import React from "react"
import { Layout } from "./Layout"
// import config from "../../blog.config"
// import ReactGA from "react-ga"
import { Props as DocHeadProps } from "./DocHead"

/**
 * The top-level Page Wrapper including layout, document head and optional google analytics.
 * If you aren't using google analytics or some other page-level tracking, use `<Layout />` instead.
 */
export const LayoutWithAnalytics: React.FC<DocHeadProps> = (
  props: DocHeadProps
) => {
  // // TODO: should this use using a hook?
  // if (typeof config.analytics === "string" && config.analytics !== "") {
  //   ReactGA.initialize(config.analytics)
  //   ReactGA.set({ anonymizeIp: true })
  //   if (typeof window !== "undefined") {
  //     ReactGA.pageview(window.location.pathname + window.location.search)
  //   }
  // }
  return <Layout {...props} />
}
