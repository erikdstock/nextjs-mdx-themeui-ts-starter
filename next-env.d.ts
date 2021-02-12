/// <reference types="next" />
/// <reference types="next/types/global" />
declare module "*.mdx" {
  let MDXComponent: (props) => JSX.Element
  export default MDXComponent
}

declare namespace MDX {
  interface Document {
    draft?: boolean
    date: string
    slug: string
    title: string
    excerpt: string
    content?: string
    coverImage?: string
    coverImageHeight?: number
    coverImageWidth?: number
    coverImageAlt?: string
  }
}
