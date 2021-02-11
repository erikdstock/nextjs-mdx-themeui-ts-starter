/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"
import MDX from "@mdx-js/runtime"
import { Flex, Box, Heading } from "theme-ui"
import Container from "../ui/Container"
import DraftBadge from "../ui/DraftBadge"
import { Link } from "ui/Link"
import { Post } from "./BlogPost"

interface Props {
  posts: Post[]
  prevPage: number | null
  nextPage: number | null
}

const Posts: (props: Props) => JSX.Element = ({
  posts,
  prevPage: prevPosts,
  nextPage: nextPosts,
}) => {
  const isLocal = process.env.NODE_ENV === "development"

  return (
    <Container>
      {posts &&
        posts
          .filter((post) => {
            return isLocal || !post.draft
          })
          .map((post) => {
            const { coverImage } = post

            return (
              <Box sx={{ pb: 5 }} key={post.slug}>
                <Heading sx={{ pb: 2, position: "relative" }}>
                  {post.draft && <DraftBadge />}
                  <Link href={`/${post.slug}`}>{post.title}</Link>
                </Heading>
                {coverImage && (
                  <Box
                    sx={{
                      mt: 2,
                      mb: 3,
                      width: "100%",
                    }}
                  >
                    <img
                      sx={{
                        border: "1px solid",
                        borderColor: "rgba(0,0,0,.1)",
                        width: "auto",
                        height: "auto",
                        maxWidth: "100%",
                        maxHeight: "100%",
                      }}
                      src={coverImage}
                      alt={post.coverImageAlt || ""}
                    />
                  </Box>
                )}
                <Box sx={{ pb: 3 }}>
                  <MDX>{post.excerpt}</MDX>
                </Box>
                <Link href={"/" + post.slug}>Read more...</Link>
              </Box>
            )
          })}
      <Flex sx={{ fontStyle: "italic" }}>
        <Box sx={{ width: "50%", py: 3, textAlign: "left" }}>
          {prevPosts !== null && (
            <Link href={"/blog/" + prevPosts}>
              <a>« see newer posts</a>
            </Link>
          )}
        </Box>
        <Box sx={{ width: "50%", py: 3, pr: 3, textAlign: "right" }}>
          {nextPosts !== null && (
            <Link href={"/blog/" + nextPosts}>see older posts »</Link>
          )}
        </Box>
      </Flex>
    </Container>
  )
}

export default Posts
