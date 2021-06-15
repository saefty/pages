/** @jsxImportSource  theme-ui */
import { HeadPost } from './HeadPost'

export default function BlogPost({ children, meta}) {
  return (
    <div sx={{
			variant: 'layout.blogPost'
		}}>
      <HeadPost meta={meta} isBlogPost />
      <article >{children}</article>
    </div>
  )
}
