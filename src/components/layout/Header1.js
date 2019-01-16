import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "../../App.css";

// function debounce(func, wait = 1000) {
//   let timeout;
//   return function() {
//     let args = arguments;
//     let context = this;
//     clearTimeout(timeout);
//     timeout = func.apply(context, args);
//   };
// }

class Header1 extends Component {
  // constructor() {
  //   super();
  //   this.search = this.search.bind(this);
  // }

  state = {
    search: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { search } = this.state;
    return (
      <div className="container">
        <nav className=" navbar navbar-expand-sm navbar-light header">
          <a className=" navbar-brand" href="/">
            <img
              src="https://hn.algolia.com/assets/logo-hn-search.png"
              alt=""
              width="40"
              height="40"
            />
            <span style={{ color: "white" }}> Search Hacker News</span>
          </a>

          <div className="input-group">
            <div className="input-group-prepend">
              <i className="fa fa-search  fa-lg search-icon" />
            </div>
            <input
              className="form-control"
              onChange={this.onChange}
              type="search"
              placeholder="Search story"
              value={search}
            />
            {/* <button className="btn btn-outline-success" type="submit">
            Search
          </button> */}
          </div>
        </nav>
      </div>
    );
  }
}

export default Header1;
