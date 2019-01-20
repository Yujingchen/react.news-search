import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "../../App.css";
// import { Consumer } from "../../context";
import axios from "axios";

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
  constructor() {
    super();
    this.state = {
      ids: Array.from(Array(14).keys()),
      result: [],
      news: [],
      urls: [],
      warming: "Type something in the input field to use search",
      value: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async componentWillMount() {
    this.setState({
      urls: this.state.ids.map(
        eachID => `http://hn.algolia.com/api/v1/items/${eachID + 1}`
      )
    });
  }

  async componentDidMount() {
    const response = await Promise.all(
      this.state.urls.map(url => axios.get(url))
    );
    this.setState({
      news: response
    });
  }
  handleInputChange = e => {
    this.setState({
      value: e.target.value,
      result: this.state.news.filter(
        item => item.data.title.indexOf(e.target.value) > -1
      )
    });
  };

  render() {
    const { result, value } = this.state;
    return (
      // <Consumer>
      // {value => {

      // return (
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
              onChange={this.handleInputChange.bind(this)}
              type="search"
              placeholder="Search story"
              value={value}
              id="input"
            />

            {/* <button className="btn btn-outline-success" type="submit">
            Search
          </button> */}
          </div>
        </nav>
        {value.length !== 0 ? (
          result.length !== 0 ? (
            result.map(item => <div>{item.data.title}</div>)
          ) : (
            <div>Not found</div>
          )
        ) : (
          <div>{this.state.warming}</div>
        )}
        {/* <div>{this.state.warming}</div> */}
      </div>
      //   );
      // }}
      // </Consumer>
    );
  }
}

export default Header1;
