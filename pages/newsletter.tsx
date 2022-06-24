import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { json } from "node:stream/consumers";
import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const NewsLetter: NextPage = () => {
  const [subscribe, setsubscribe] = React.useState(false);
  const [email, setEmail] = React.useState("");

  const emaildata = { email: email.toLowerCase() };
  const handleSubscriber = async (e: any) => {
    e.preventDefault();
    fetch("https://white-uicss-default-rtdb.firebaseio.com/subscribers.json", {
      method: "POST",
      body: JSON.stringify(emaildata),
    });
    setsubscribe(true);
  };

  return (
    <div>
      <Head>
        <title>NewsLetter</title>
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
        <Navbar newsLetter />
        <div className="page-header text-white text-center display-f align-items-center justify-content-center">
          <div>
            <h1>NewsLetter</h1>
            <ul className="display-f justify-content-center">
              <li className="">
                <Link href="/">Home</Link>
              </li>
              <li className="ml-1 active">
                <Link href="/NewsLetter">NewsLetter</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white p-3"></div>
        <div className="NewsLetter pt-3 pb-3">
          <div className="container">
            <header className="text-center mb-3">
              <h2>Subscribe to my Newsletter</h2>
              <p className="mt-1">For exclusive coding tips</p>
            </header>
            {subscribe ? (
              <p className="text-center text-secondary">
                You Have Successfully Subscribe to my Newsletter
              </p>
            ) : (
              <form onSubmit={handleSubscriber}>
                <label htmlFor="email">
                  Enter your email:
                  <div className="display-f align-items-center mt-2">
                    <input
                      type="email"
                      placeholder="Enter your email:"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <button className="btn text-white" type="submit">
                      Subscribe
                    </button>
                  </div>
                </label>
              </form>
            )}
            <div className="mt-5">
              <h3 className="font-regular mb-3">We can also connect on:</h3>
              <div className="row gap-1 m-auto">
                <a
                  href="https://github.com/ibnyahyah"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="col-6-sm col-4-md col-4-lg col-4-xl text-center"
                >
                  <img
                    src="./icons/bi_github.png"
                    width="60px"
                    alt="whitecoode"
                  />
                  <p className="font-bold mt-1">Github</p>
                </a>
                <a
                  href="https://twitter.com/whitecoode"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="col-6-sm col-4-md col-4-lg col-4-xl text-center"
                >
                  {" "}
                  <img
                    src="./icons/twitter.png"
                    width="60px"
                    alt="whitecoode"
                  />
                  <p className="font-bold mt-1">Twitter</p>
                </a>
                <a
                  href="https://www.linkedin.com/in/ridwanullahi-yahyah-895633207"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="col-6-sm col-4-md col-4-lg col-4-xl text-center"
                >
                  {" "}
                  <img
                    src="./icons/linkedin.png"
                    width="60px"
                    alt="whitecoode"
                  />
                  <p className="font-bold mt-1">Linkedin</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-3"></div>
        <Footer newsLetter />
      </main>
    </div>
  );
};
export default NewsLetter;
