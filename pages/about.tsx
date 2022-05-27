import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About Me</title>
        <meta
          name="description"
          content="Whitecoode build and develop web applications using either HTML, CSS (bootstrap, white-uicss) and JavaScript(jQuery) or SPA (using Reactjs or Nextjs) and I also build Dapp on web3 (defi, staking, dex), Tokens, NFTs(Non-fungible Token)"
        />
        <link
          rel="stylesheet"
          href="https://white-ui.whitecoode.com/w29h4i1t87e4-u1icss/s0he98et(css)/whiteuicss.min.css"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="about">
        <Navbar about />
        <div className="page-header text-white text-center display-f align-items-center justify-content-center">
          <div>
            <h1>ABOUT</h1>
            <ul className="display-f justify-content-center">
              <li className="">
                <Link href="/">Home</Link>
              </li>
              <li className="ml-1 active">
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white p-3"></div>
        <div className="services pt-5 pb-5">
          <div className="services-design a"></div>
          <div className="services-design b"></div>
          <div className="content">
            <div className="row gap-1">
              <div className="col-6-sm col-4-md col-4-lg col-4-xl">
                <div className="about-image-container">
                  <img src="./myassets/whitecoode.png" alt="whitecoode" />
                </div>
              </div>
              <div className="col-6-sm col-8-md col-8-lg col-8-xl">
                <p className="mt-1">
                  Hi, I’m Ridwanullahi Yahyah, I’m a senior front-end developer
                  and a Full-stack web3 developer. I’m passionate abount
                  up-and-coming trends and have a good knowledge of emerging
                  technologies.
                </p>
                <p className="mt-1">
                  I am a founder of White-UICSS. A front-end developer with over
                  4 years experience building businesses together with founders
                  as well as large enterprises. I started my journey in
                  development through static web design using HTML, CSS,
                  Javascript, Bootstrap, and JQuery.My passion is front-end
                  development. I’m fluent in react.js, javascript, HTML, CSS,
                  Bootstrap 4. Are you looking for a remote front-end developer?
                  Hire me.
                </p>
              </div>
            </div>
            <p className="mt-1 mb-4">
              After a lot of projects and experience, I went on to start
              building SPAs (Single Page Applications) using ReactJS. At the end
              of 2021, I started my journey into smart-contract and dApps
              buliding using solidity and Hardhat for my production.
            </p>
          </div>
        </div>
        <div className="bg-white p-3"></div>
        <div className="pt-5 pb-5 text-center text-white">
          <p className="mb-2">
            If you have any questions for me, kindly contact me via my email:
          </p>
          <h2>info.whitecoode@gmail.com</h2>
        </div>
        <div className="bg-white p-3"></div>
        <Footer about />
      </main>
    </div>
  );
};
export default About;
