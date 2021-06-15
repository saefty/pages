/** @jsxImportSource  theme-ui */

import Link from "next/link";

export default function Header() {
  return (
    <nav sx={{ variant: 'layout.nav' }}>
		<h1><Link href="/pages">Saef Taher</Link></h1>
      <div>
        <Link href="/pages/cv">
          <a>curriculum vitae</a>
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
