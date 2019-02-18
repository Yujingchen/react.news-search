import React, { Component } from "react";
import { Consumer } from "./../../Context";
class Header extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div>
              <nav className=" navbar navbar-expand-sm navbar-light header">
                <a className=" navbar-brand" href="#/">
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
                    onChange={this.props.inputOnchange}
                    type="search"
                    placeholder="Search story"
                    id="input"
                    value={this.props.value}
                  />
                  <div className="input-group-append">
                    <button
                      type="submit"
                      className="btn btn-secondary text-light"
                      onClick={this.props.submitClick}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </nav>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Header;
