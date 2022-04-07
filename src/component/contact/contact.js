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
    text: "Gmail",
    url: "mailto:yahyahridwan665@gmail.com",
    bg: "#DB4437",
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

  function contactHandler() {
    setContact(!contacts);
  }
  return (
    <div className="container contact mt-2">
      <button className="btn-blue" onClick={contactHandler}>
        <i className="fas fa-comments fa-3x"></i>
      </button>
      <div>
        {contacts && (
          <div className="card bg-white col-6-sm gap-1">
            <div className="col-6-sm col-6-md">
              <p className="font-sm mb-1">You can Contact or Hire Me using the Below process:</p>
              <form>
                <input type="text" className="mb-1" placeholder="example@gmail.com" />
                <textarea rows="5" placeholder="I will like to"></textarea>
              </form>
            </div>
            <div className="col-6-sm col-6-md">
              {Data.map(({ icon, url, bg, text }) => {
                return (
                  <p className="mt-2" key={icon}>
                    <a href={url} target="_blank" rel="noreferrer">
                      <i className={`${icon} ${bg} text-white p-1 br-full`} style={{backgroundColor:bg}}></i>
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
