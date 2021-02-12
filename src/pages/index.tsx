import config from "../../blog.config"
import { LayoutWithAnalytics } from "../layout/LayoutWithAnalytics"
import Posts from "../views/Posts"
import { getAllPosts } from "../api"
import { GetStaticProps, NextPage } from "next"

interface Props {
  posts: MDX.Document[] // Post is another interface i have already defined elsewhere
  prevPage: number | null
  nextPage: number | null
}

const PostsPage: NextPage<Props> = ({
  posts,
  prevPage: prevPage,
  nextPage: nextPage,
}) => (
  <LayoutWithAnalytics
    url={config.url}
    title={config.title}
    description={config.description}
    imageUrl={config.shareImage}
    imageAlt={config.shareImageAlt}
  >
    <Posts posts={posts} prevPage={prevPage} nextPage={nextPage} />
  </LayoutWithAnalytics>
)

export const getStaticProps: GetStaticProps<Props> = async function () {
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

  const startIndex = 0
  const endIndex = config.postsPerPage
  const nextPage = endIndex >= posts.length ? null : 2

  return {
    props: {
      posts: posts.slice(startIndex, endIndex),
      prevPage: null,
      nextPage: nextPage,
    },
  }
}

export default PostsPage
