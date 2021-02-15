# Next.js MDX Blog Starter with Theme-UI & Typescript

This is a starter blog forked from [johnpolacek/nextjs-mdx-blog-starter](https://github.com/johnpolacek/nextjs-mdx-blog-starter). Almost all styles and docs have been preserved, including much of the rest of this README. The main differences with that repo (in progress):

- [x] The site has been entirely converted to typescript
- [x] Linting, prettier and typescript conventions applied, all errors and warnings fixed
- [x] Commit and push hooks for linting and type-checking have been enabled (override with `--no-verify` or remove `husky` and `lint-staged` from dependencies to disable completely)
- [x] Reconfigured to work for static exports
- [x] Example app deployed to vercel
- [x] Switched `yarn` to `npm` (personal convention)
- [x] Theme-ui has been updated to 0.6.6-alpha for native typescript support
- [x] Added a simple github workflow for testing
- [x] Added @artsy/fresnel to work nicely with static app
- [x] Disabled (commented out) Google analytics by default
- [x] some restructuring based on personal preference (in particular a `components` folder), use of typescript's absolute imports from `baseUrl`

_Authors: [@erikdstock](https://github.com/erikdstock) and [@kwicz](https://github.com/kwicz). Credit to [@johnpolancek](https://github.com/johnpolancek) for this documentation, the overall feel of the site, and the vast majority of its implementation._

```
Most of the remaining README is from the original repo.
```

Next.js MDX Blog Starter for building blogs with [Next.js](https://nextjs.org/) and [MDX](https://mdxjs.com/), including [Theme UI](https://theme-ui.com/home/) Component Design System, [Vercel Deployment](https://vercel.com/) and more.

View Demo at [nextjs-mdx-themeui-ts-starter.erikdstock.vercel.app/](http://nextjs-mdx-themeui-ts-starter.erikdstock.vercel.app/)

## Deploy

(Optional) Build and deploy with vercel. [Install vercel](https://vercel.com/download) if you haven’t already. This is a static site so it can also be deployed to any CDN.

```
npm install && vercel deploy
```

## Customize

You can set properties like your blog title, description, Google Analytics code, social media sharing image and more by editing `blog.config.js`

Content for the about page, footer and blurb in the header are written in markdown/mdx. Find markdown content and blog post files in `src/markdown`.

If you would like to add more data to your posts, such as author information or other meta data, simple add more fields to the [front matter](https://jekyllrb.com/docs/front-matter/) in your mdx files and add the field names to the `getStaticProps` function for the various pages that display posts. See also the official [Next.js Blog Starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) which served as the basis for this project.

To edit the styling of the site, such as colors, typography and spacing, you can make changes to the theme file at `src/layout/Theme.js`. It is also there you can define styles for dark mode, or remove it.

Of course, you can change or add to the existing components in `src/components/ui` or edit or create new pages in `src/pages` and `src/components/views`.

To further customize the site, refer to the [Theme UI documentation](https://theme-ui.com/getting-started) for making and styling your own components.

## Writing Posts

To write a new post, create a new `.mdx` file in the `src/markdown/posts` directory.

Update the front-matter for the post with its title, excerpt, cover image and the publication date.

You can mark a post as a draft by adding `draft: true` to the front matter of the post and then it will only display in the local dev environment.

#### Title

The title will appear at the top of the post and will be used in the meta tags for the page.

#### Excerpt

The excerpt will appear on the posts listing and as the meta description for the post page. It can be formatted in markdown.

#### Cover Image

If included, the cover image will be displayed above the excerpt and post content. It will also be the main image that appears when the post is shared on social media. Be sure to also set the cover image alt value for accessibility.
