import Link from "next/link";
import React from "react";
// type PropsType = {
//   portfolio: boolean;
//   about: boolean;
// };

export default function Footer({
  portfolio,
  about,
  blog,
  newsLetter,
  blogPost,
}: any) {
  return (
    <footer className="container text-white">
      <div className="row">
        <div className="col-6-sm col-4-md col-4-lg col-4-xl header-section">
          <div
            className="display-f align-items-center div"
            style={{ minHeight: "30vh" }}
          >
            <div>
              {" "}
              <header className="text-white font-regular">
                RIDWANULLAHI <span>YAHYAH</span>
              </header>
              <p className="font-regular mb-1 mt-1">Web Developer</p>
              <div className="display-f align-items-center">
                <span className="font-lg text-white">&copy;</span>
                <span className="text-gray-light-4">
                  {" "}
                  {new Date().getFullYear()} All rights reserved
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6-sm col-4-md col-4-lg col-4-xl">
          <ul className="mt-3 ml-2">
            <li className="font-regular mb-1">
              <h3>Contact Me</h3>
            </li>
            <li>
              <a
                href="https://github.com/ibnyahyah"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="display-f align-items-center">
                  {blogPost ? (
                    <img src="../icons/github-fill.png" alt="" />
                  ) : (
                    <img src="./icons/github-fill.png" alt="" />
                  )}
                  <p>@Ibnyahyah</p>
                </div>
              </a>
            </li>
            <li>
              <a
                href="mailto:info.whitecoode@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="display-f align-items-center">
                  {blogPost ? (
                    <img src="../icons/mail-filled.png" alt="" />
                  ) : (
                    <img src="./icons/mail-filled.png" alt="" />
                  )}
                  <p>info.whitecoode@gmail.com</p>
                </div>
              </a>
            </li>
            <li>
              <a
                href="telto:08129418741"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="display-f align-items-center">
                  {blogPost ? (
                    <img src="../icons/phone-filled.png" alt="" />
                  ) : (
                    <img src="./icons/phone-filled.png" alt="" />
                  )}
                  <p>08129418741</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6-sm col-4-md col-4-lg col-4-xl">
          <ul className="mt-3">
            <li className="font-regular mb-1">
              <h3>Quick Links</h3>
            </li>
            <li
              className={`${
                about || portfolio || blog || newsLetter ? "active" : null
              }`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`${
                portfolio || !about || blog || newsLetter ? "active" : null
              }`}
            >
              <Link href="/about">About</Link>
            </li>
            <li
              className={`${
                !portfolio || about || blog || newsLetter ? "active" : null
              }`}
            >
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li
              className={`${
                portfolio || about || !blog || newsLetter ? "active" : null
              }`}
            >
              <Link href="/blog">Blog</Link>
            </li>
            <li
              className={`${
                portfolio || about || blog || !newsLetter ? "active" : null
              }`}
            >
              <Link href="/newsLetter">Newsletter</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
