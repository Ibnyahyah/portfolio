import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { PortfolioData } from "../components/dummy-data";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Portfolios from "../components/portfolio";

const Portfolio: NextPage = (props: any) => {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
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
        <Navbar portfolio />
        <div className="page-header text-white text-center display-f align-items-center justify-content-center">
          <div>
            <h1>Portfolio</h1>
            <ul className="display-f justify-content-center">
              <li className="">
                <Link href="/">Home</Link>
              </li>
              <li className="ml-1 active">
                <Link href="/portfolio">Portfolio</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white p-3"></div>
        <div className="portfolio container pt-3 pb-3 text-white">
          <header>
            <p>
              I have mostly worked as a freelancer where i have worked on a
              series of projects for both startups and large companies.
            </p>
            <p className="mt-1">
              Below are the links to some of the projects I have worked on:
            </p>
          </header>
          <Portfolios data={props.portfolioDatas} />
        </div>
        <div className="bg-white p-3"></div>
        <Footer portfolio />
      </main>
    </div>
  );
};
export default Portfolio;

export async function getStaticProps() {
  return {
    props: {
      portfolioDatas: PortfolioData,
    },
    revalidate: 1,
  };
}
