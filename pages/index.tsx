import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Data, SkillData } from "../components/dummy-data";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Services from "../components/services";
import Skills from "../components/skills";

type DataProps = {
  Data: {
    image: string;
    header: string;
    content: string;
  }[];
};

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Whitecoode | build and develop web applications</title>
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

      <main>
        <Navbar />
        <section>
          <div className="container">
            <div
              className="row align-items-center"
              style={{ minHeight: "80vh" }}
            >
              <div className="col-6-sm col-6-md col-6-lg col-6-xl">
                <div className="top-content text-white">
                  <h3 className="mb-2">
                    Are You Looking For A Freelance Static (HTML, CSS and
                    JavaScript)/React.JS/Smart Contract Developer?
                  </h3>
                  <p>
                    I offer Professional services to get your projects done
                    promptly and perfectly
                  </p>
                  <button className="btn mt-2 br-sm" title="Click to Hire me">
                    Hire Me Now
                  </button>
                </div>
              </div>
              <div className="col-6-sm col-6-md col-6-lg col-6-xl"></div>
            </div>
          </div>
          <div className="services pt-5 pb-5">
            <div className="services-design a"></div>
            <div className="services-design b"></div>
            <div className="content">
              <h1 className="text-center mb-1">Services</h1>
              <Services data={Data} />
            </div>
          </div>
          <div className="bg-white p-3"></div>
          <div className="container skills">
            <header className="text-white text-center mt-3">
              <h1 className="mb-1">SKILLS</h1>
              <h4>Below are my soft skills:</h4>
            </header>
            <Skills data={SkillData} />
          </div>
          <div className="bg-white p-3"></div>
          <div className="contact">
            <div className="pt-4">
              <header className="text-white text-center mb-2">
                <h1 className="mb-1">Let’s get your project started</h1>
                <h4>Fill the form below to tell me more:</h4>
              </header>
              <div className="card bg-white">
                <form>
                  <label htmlFor="name">
                    Name:
                    <input type="text" id="name" />
                  </label>
                  <label htmlFor="email">
                    Email:
                    <input type="email" id="email" />
                  </label>
                  <label htmlFor="message">
                    Message:
                    <textarea id="message" cols={30} rows={10}></textarea>
                  </label>
                  <div className="text-center">
                    <button className="btn br-sm text-white">Contact Me</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="bg-white p-4"></div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
