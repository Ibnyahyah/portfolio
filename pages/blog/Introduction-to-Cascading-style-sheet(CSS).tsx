import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

const Blog: NextPage = () => {
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
      <main className="about blog-post">
        <Navbar blogPost />
        <div className="page-header text-white display-f align-items-center justify-content-center">
          <header>
            <h1>Introduction to Cascading Style Sheets (CSS)</h1>
            <p>
              <i>May 26, 2022</i>
            </p>
          </header>
        </div>
        <div className="bg-white p-3"></div>
        <div className="blog container pt-3 pb-5 text-white">
          <div>
            <h2>What is CSS?</h2>
            <p className="mt-1">
              CSS stands for Cascading Style Sheets,it&#39;s describes how HTML
              elements are to be displayed on screen, paper, or in other media.
              CSS can control the layout of multiple web page at once, CSS files
              are saved with <code className="bg-black">.css</code> extensions
              in the code editor (<code className="bg-blue">vs code</code>,{" "}
              <code className="bg-blue">notepad</code>,
              <code className="bg-blue">sublime</code>, etc.)
            </p>
            <h2 className="mt-1">Why Use CSS?</h2>
            <p>
              CSS is used to define styles for your web pages, including the
              design, layout and variations in display for different devices and
              screen sizes.
            </p>
            <div className="row align-items-center justify-content-space-between">
              <div className="bg-gray-light-6 p-1 text-black example-code mt-2 mb-2">
                <pre>
                  <code>
                    <span className="text-blue">
                      body <span className="text-red">&#123;</span>
                    </span>
                    <span className="text-black ml-1">
                      background-color:{" "}
                      <span
                        style={{ background: "dodgerblue", color: "white" }}
                      >
                        dodgerblue
                      </span>
                      ;
                    </span>
                    <span className="text-red">&#125;</span>
                  </code>
                  <code>
                    <span className="text-blue mt-1">
                      h1 <span className="text-red">&#123;</span>
                    </span>
                    <span className="text-black ml-1">
                      color:{" "}
                      <span style={{ background: "white", color: "black" }}>
                        white
                      </span>
                      ;
                    </span>
                    <span className="text-black ml-1">text-align: center;</span>
                    <span className="text-black ml-1">font-size: 20px;</span>
                    <span className="text-red">&#125;</span>
                  </code>
                  <code>
                    <span className="text-blue mt-1">
                      p <span className="text-red">&#123;</span>
                    </span>
                    <span className="text-black ml-1">
                      color:{" "}
                      <span style={{ background: "black", color: "white" }}>
                        black
                      </span>
                      ;
                    </span>
                    <span className="text-black ml-1">
                      font-family: arial, sans;
                    </span>
                    <span className="text-red">&#125;</span>
                  </code>
                </pre>
              </div>
              <div className="p-1" style={{ background: "dodgerblue" }}>
                <div>
                  <h1>Hello, welcome to whitecoode</h1>
                  <p className="text-black mt-1">
                    Learn How to code by reading.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-3"></div>
        <div>
          <div className="blog container pt-3 pb-5 text-white">
            <div className="mt-2">
              <h2 className="mb-1">CSS Syntax</h2>
              <p>
                A CSS rule consists of a selector and a declaration block.The
                selector points to the HTML element you want to style. The
                declaration block contains one or more declarations separated by
                semicolons. Each declaration includes a CSS property (
                <code className="bg-green text-white">color</code>) name and a
                value (<code className="bg-white text-black">white</code>) ,
                separated by a colon. Multiple CSS declarations are separated
                with semicolons, and declaration blocks are surrounded by curly
                braces<code className="bg-white text-black">&#123; &#125;</code>
                .
              </p>
              <h5 className="font-regular font-md mt-2 mb-1">
                Explaining the above example
              </h5>
              <p>
                <span className="bg-blue">body</span> is a selector in CSS (it
                points to the HTML element you want to style:{" "}
                <code className="text-red">&lt;body&gt;</code>).
                background-color is a property, and dodgerblue is the property
                value.
              </p>
              <p>
                <span className="bg-blue">h1</span> is a selector in CSS (it
                points to the HTML element you want to style:{" "}
                <code className="text-red">&lt;h1&gt;</code>). color is a
                property, and white is the property value, text-align is a
                property, and center is the property value, font-size is a
                property, and 20px is the property value.
              </p>
              <p>
                <span className="bg-blue">p</span> is a selector in CSS (it
                points to the HTML element you want to style:{" "}
                <code className="text-red">&lt;p&gt;</code>). color is a
                property, and black is the property value font-family is a
                property, and arial, sans is the property value.
              </p>
            </div>
            <div className="display-f mt-5 mb-3 align-items-center">
              <p className="text-white font-md">Like this? Follow on </p>
              <a
                href="https://twitter.com/whitecoode"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn br-sm text-white">Twitter</button>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white p-3"></div>
        <Footer blogPost />
      </main>
    </div>
  );
};
export default Blog;
