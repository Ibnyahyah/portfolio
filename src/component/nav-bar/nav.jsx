import React from "react";

class Navbar extends React.Component {
  state = {
    clicked: false,
  };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="navbar navbar-white container">
        <header className="site-title">
          <a href="/">
            <img
              src="./Ridwanullahi's.png"
              style={{ width: "100px", marginTop: "4px" }}
              alt="Ridwdanullahi Yahyah"
            />
          </a>
        </header>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={this.state.clicked ? "item active" : "item row"}>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#technology">Technology</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
