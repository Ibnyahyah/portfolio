import axios from "axios";
import { useState } from "react";
const Data = [
  {
    icon: "fab fa-whatsapp",
    text: "WhatsApp",
    url: "https://wa.me/+2348129418741",
    bg: "#25D366",
  },
  {
    icon: "far fa-envelope",
    text: "Twitter",
    url: "https://twitter.com/whitecode_",
    bg: "#00acee",
  },
  {
    icon: "fab fa-github",
    text: "Github",
    url: "https://www.github.com/Ibnyahyah",
    bg: "bg-black",
  },
];

const Contact = () => {
  const [contacts, setContact] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [res, setRes] = useState("");

  function contactHandler() {
    setContact(!contacts);
  }

  const data = {
    email: email,
    message: message,
  };
  const contactForm = async (e) => {
    e.preventDefault();
    await axios.post(
      "https://myportfolio-d5709-default-rtdb.firebaseio.com/data.json",
      data
    );
    setRes("Your Message Was SuccessFull");
    setTimeout(()=>{
      setContact(false);
    },1200)
  };
  return (
    <div className="container contact mt-2">
      <button className="btn-blue" onClick={contactHandler}>
        <i className="fas fa-comments fa-3x"></i>
      </button>
      <div>
        {contacts && (
          <div className="card bg-white col-6-sm gap-1">
            <div className="col-6-sm col-6-md">
              <p className="font-sm mb-1">
                You can Contact or Hire Me using the Below process:
              </p>
              <p className="text-red">{res}</p>
              <form onSubmit={contactForm}>
                <div>
                  <input
                    type="text"
                    className="mb-1"
                    placeholder="example@gmail.com"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <textarea
                    rows="5"
                    placeholder="I will like to"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  ></textarea>
                </div>
                <button>Submit</button>
              </form>
            </div>
            <div className="col-6-sm col-6-md">
              {Data.map(({ icon, url, bg, text }) => {
                return (
                  <p className="mt-2" key={icon}>
                    <a href={url} target="_blank" rel="noreferrer">
                      <i
                        className={`${icon} ${bg} text-white p-1 br-full`}
                        style={{ backgroundColor: bg }}
                      ></i>
                    </a>{" "}
                    Via {text}
                  </p>
                );
              })}
            </div>
          </div>
        )}
        <div className="col-sm-6"></div>
      </div>
    </div>
  );
};
export default Contact;
