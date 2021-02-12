import config from "../../../blog.config"
import { LayoutWithAnalytics } from "components/layout/LayoutWithAnalytics"
import Posts from "../../components/views/Posts"
import { getAllPosts } from "../../api"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { ParsedUrlQuery } from "querystring"

interface Props {
  posts: MDX.Document[]
  prevPage: number | null
  nextPage: number | null
  pageIndex: number
  numPages: number
}

const PostsPage: NextPage<Props> = ({
  posts,
  prevPage,
  nextPage,
  pageIndex,
  numPages,
}) => (
  <LayoutWithAnalytics
    url={config.url + "blog/" + (pageIndex + 1)}
    title={config.title + " | Blog - " + (pageIndex + 1) + " of " + numPages}
    description={config.description}
    imageUrl={config.shareImage}
    imageAlt={config.shareImageAlt}
  >
    <Posts posts={posts} prevPage={prevPage} nextPage={nextPage} />
  </LayoutWithAnalytics>
)

interface PathParams extends ParsedUrlQuery {
  page: string
}

export const getStaticProps: GetStaticProps<Props, PathParams> = async ({
  params,
}) => {
  const posts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "coverImageAlt",
    "coverImageHeight",
    "coverImageWidth",
    "excerpt",
    "draft",
  ])

  const pageIndex = parseInt(params.page) - 1
  const startIndex = pageIndex * config.postsPerPage
  const endIndex = (pageIndex + 1) * config.postsPerPage

  const prevPage = pageIndex > 0 ? pageIndex : null
  const nextPage = endIndex >= posts.length ? null : pageIndex + 2
  const numPages = (config.postsPerPage % getAllPosts().length) + 1

  return {
    props: {
      posts: posts.slice(startIndex, endIndex),
      prevPage,
      nextPage,
      pageIndex,
      numPages,
    },
  }
}

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  const numPages = (config.postsPerPage % getAllPosts().length) + 1

  return {
    paths: [...Array(numPages)].map((v, i) => {
      return {
        params: { page: (i + 1).toString() },
      }
    }),
    fallback: false,
  }
}

export default PostsPage
