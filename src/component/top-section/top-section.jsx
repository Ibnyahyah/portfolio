function TopSection() {
  return (
    <div
      className="container mt-5"
      style={{ marginTop: "250px", height: "60vh" }}
    >
      <div>
        <h1
          className="font-5 font-xxl text-blue"
          style={{ textShadow: "1px 3px gray" }}
        >
          Hi!
        </h1>
        <p className="font-lg">My name is Ridwanullahi Yahyah.</p>
      </div>
      <div className="mt-2">
        <p>
          I am here to satisfy your needs in <b>Front-End</b> development.
        </p>
        <p>
          Below are some tips about my Stacks and Projects.
        </p>
      </div>
      <a href="#project" className="btn-outlined-blue mt-3 text-blue">
        Learn more
      </a>
      <a
        href="./images/Ridwanullahi_cv.pdf"
        className="btn-outlined-black mt-3 ml-1 text-black"
        download="Ridwanullahi_CV."
        target="_blank"
        rel="noreferrer"
      >
        Resume <i className="fas fa-download"></i>
      </a>
    </div>
  );
}
export default TopSection;
