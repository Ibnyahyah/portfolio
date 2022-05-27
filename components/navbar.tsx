import Link from "next/link";
import React from "react";

export default function Navbar({
  about,
  portfolio,
  blog,
  newsLetter,
  blogPost,
}: any) {
  const [menu, setMenu] = React.useState(false);
  return (
    <div className="navbar pt-2 pb-2">
      <nav className="container">
        <Link href="/">
          <header className="text-white">
            RIDWANULLAHI <span>YAHYAH</span>
          </header>
        </Link>
        <div className="menuIcon">
          {blogPost ? (
            <img
              onClick={() => {
                setMenu(!menu);
              }}
              src={!menu ? "../icons/menu.png" : "../icons/close.png"}
              width={!menu ? "30px" : "18px"}
              alt="whitecoode"
            />
          ) : (
            <img
              onClick={() => {
                setMenu(!menu);
              }}
              src={!menu ? "./icons/menu.png" : "./icons/close.png"}
              width={!menu ? "30px" : "18px"}
              alt="whitecoode"
            />
          )}
        </div>
        <ul className={`display-f text-white ${menu ? "menu-active" : "none"}`}>
          <li
            className={`ml-1 ${
              !about && !portfolio && !blog && !newsLetter ? "active" : null
            }`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`ml-1 ${
              about && !portfolio && !blog && !newsLetter ? "active" : null
            }`}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={`ml-1 ${
              !about && portfolio && !blog && !newsLetter ? "active" : null
            }`}
          >
            <Link href="/portfolio" passHref>
              Portfolio
            </Link>
          </li>
          <li
            className={`ml-1 ${
              !about && !portfolio && blog && !newsLetter ? "active" : null
            }`}
          >
            <Link href="/blog">Blog</Link>
          </li>
          <li
            className={`ml-1 ${
              !about && !portfolio && !blog && newsLetter ? "active" : null
            }`}
          >
            <Link href="/newsletter">Newsletter</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
