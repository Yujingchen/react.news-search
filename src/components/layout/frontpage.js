import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

class Header extends Component {
  render() {
    return (
      <nav className="navbar narbar-expand-sm navbar-light header">
        <Link className="navbar-brand" href="/">
          <img
            src="https://pbs.twimg.com/profile_images/1677389022/newsycbot_400x400.gif"
            width="30"
            height="30"
            alt=""
          />
        </Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                comments
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">ask</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">show</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">jobs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">submit</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
