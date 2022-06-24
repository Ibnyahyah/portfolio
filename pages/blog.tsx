import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { BlogData } from "../components/dummy-data";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Blogs from "../components/blogs";

const Blog: NextPage = (props: any) => {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta
          name="description"
          content="Whitecoode build and develop web applications using either HTML, CSS (bootstrap, white-uicss) and JavaScript(jQuery) or SPA (using Reactjs or Nextjs) and I also build Dapp on web3 (defi, staking, dex), Tokens, NFTs(Non-fungible Token)"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/white-uicss@1.0.3/white-uicss.min.css"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="about">
        <Navbar blog />
        <div className="page-header text-white text-center display-f align-items-center justify-content-center">
          <div>
            <h1>Blog</h1>
            <ul className="display-f justify-content-center">
              <li className="">
                <Link href="/">Home</Link>
              </li>
              <li className="ml-1 active">
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white p-3"></div>
        <div className="blog container pt-3 pb-5 text-white">
          <Blogs data={props.blogData} />
          <div className="text-center mt-1">
            <button
              className="btn br-deffault"
              onClick={() => {
                window.location.href = "https://medium.com/@whitecoode";
              }}
            >
              View all
            </button>
          </div>
        </div>
        <div className="bg-white p-3"></div>
        <Footer blog />
      </main>
    </div>
  );
};
export default Blog;

export async function getStaticProps() {
  return {
    props: {
      blogData: BlogData,
    },
  };
}
