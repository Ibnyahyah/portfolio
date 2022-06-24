import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
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

const Home: NextPage = (props: any) => {
  const [contact, setcontact] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const data = {
    name: name,
    email: email,
    message: message,
  };
  const contactHandle = async (e: any) => {
    e.preventDefault();
    fetch("https://white-uicss-default-rtdb.firebaseio.com/contact.json", {
      method: "POST",
      body: JSON.stringify(data),
    });
    setcontact(true);
  };
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
          href="https://cdn.jsdelivr.net/npm/white-uicss@1.0.3/white-uicss.min.css"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <section>
          <div className="container">
            <div
              className="row align-items-center justify-content-space-between"
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
                    promptly and perfectly. We build and develop perfect web
                    applications, and decentralized apps, and connect our
                    clients to the ideal UI/UX designer.
                  </p>
                  <a
                    href="http://twitter.com/whitecoode"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn mt-2 br-sm" title="Click to Hire me">
                      Hire Me Now
                    </button>
                  </a>
                </div>
              </div>
              <div className="col-6-sm col-6-md col-6-lg col-6-xl">
                <div className="top-image-container">
                  <img src="./myassets/whitecoode.png" alt="whitecoode" />
                </div>
              </div>
            </div>
          </div>
          <div className="services pt-5 pb-5">
            <div className="services-design a"></div>
            <div className="services-design b"></div>
            <div className="content">
              <h1 className="text-center mb-1">Services</h1>
              <Services data={props.data} />
            </div>
          </div>
          <div className="bg-white p-3"></div>
          <div className="container skills">
            <header className="text-white text-center mt-3">
              <h1 className="mb-1">SKILLS</h1>
              <h4>Below are my soft skills:</h4>
            </header>
            <Skills data={props.skillData} />
          </div>
          <div className="bg-white p-3"></div>
          <div className="contact">
            <div className="pt-4">
              <header className="text-white text-center mb-2">
                <h1 className="mb-1">Let’s get your project started</h1>
                <h4>Fill the form below to tell me more:</h4>
              </header>
              <div className="card bg-white">
                <form onSubmit={contactHandle}>
                  {contact ? (
                    <p className="text-center pt-5 pb-5 text-secondary">
                      Your have been successfully sent.
                    </p>
                  ) : (
                    <>
                      <label htmlFor="name">
                        Name:
                        <input
                          type="text"
                          onChange={(e) => {
                            setname(e.target.value);
                          }}
                          id="name"
                        />
                      </label>
                      <label htmlFor="email">
                        Email:
                        <input
                          type="email"
                          onChange={(e) => {
                            setemail(e.target.value);
                          }}
                          id="email"
                        />
                      </label>
                      <label htmlFor="message">
                        Message:
                        <textarea
                          id="message"
                          onChange={(e) => {
                            setmessage(e.target.value);
                          }}
                          cols={30}
                          rows={10}
                        ></textarea>
                      </label>
                      <div className="text-center">
                        <button className="btn br-sm text-white">
                          Contact Me
                        </button>
                      </div>
                    </>
                  )}
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

export async function getStaticProps() {
  return {
    props: {
      skillData: SkillData,
      data: Data,
    },
  };
}
