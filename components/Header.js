/** @jsxImportSource  theme-ui */

import Link from "next/link";

export default function Header() {
  return (
    <nav sx={{ variant: 'layout.nav' }}>
		<h1><Link href="/">Next'Blog</Link></h1>
      <div>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <style jsx>{`
        nav {
          width: auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1rem;
        }
        nav a {
          margin-right: 1rem;
          text-decoration: none;
        }
        nav a:hover {
          text-decoration: underline;
        }
      `}</style>
    </nav>
  );
}
