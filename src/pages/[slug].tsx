import Wrapper from "../layout/Wrapper"
import BlogPost, { Post } from "../views/BlogPost"
import config from "../../blog.config.js"
import { getPostBySlug, getAllPosts } from "../api"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"

interface Props {
  post: Post
}

const PostPage: NextPage<Props> = ({ post }) => (
  <Wrapper
    url={config.url + post.slug}
    title={config.title + " | " + post.title}
    description={post.excerpt}
    imageUrl={config.url + post.coverImage}
    imageAlt={post.coverImageAlt}
  >
    {/* <BlogPost post={post} /> */}
    <BlogPost post={post} />
  </Wrapper>
)

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const posts = getAllPosts(["slug"])

  return {
    paths: posts.map(({ slug }) => {
      return {
        params: { slug },
      }
    }),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async ({
  params,
}) => {
  // export const getStaticProps = async ({ params }) => {
  const post = getPostBySlug(params.slug, [
    "title",
    "excerpt",
    "date",
    "slug",
    "author",
    "content",
    "coverImage",
    "coverImageAlt",
    "coverImageHeight",
    "coverImageWidth",
    "draft",
  ])

  return {
    props: { post },
  }
}

export default PostPage
