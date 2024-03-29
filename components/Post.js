import Link from "next/link";
import { HeadPost } from "./HeadPost";
import { jsx } from 'theme-ui'

export const Post = ({ post }) => {
  const {
    link,
    module: { meta }
  } = post;

  return (
    <article>
      <HeadPost meta={meta} />
      <Link href={link}>
        <a>Read more &rarr;</a>
      </Link>
      <style jsx>
        {`
          article {
            margin-bottom: 3rem;
          }
        `}
      </style>
    </article>
  );
};
