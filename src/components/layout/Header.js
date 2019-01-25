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
//     timeout = setTimeout(() => func.apply(context, args), wait);
//   };
// }

class Header1 extends Component {
  constructor() {
    super();
    this.state = {
      ids: Array.from(Array(14).keys()),
      result: [],
      news: [],
      // urls: Array.from(Array(14).keys()).map(
      //   eachID => `http://hn.algolia.com/api/v1/items/${eachID + 1}`
      // ),
      warming: "Type something in the input field to use search",
      value: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  /*
  async componentDidMount() {
    const response = await axios.get('http://hn.algolia.com/api/v1/search?query=foo')
    const response = await Promise.all(
      this.state.urls.map(url => axios.get(url))
    );
    this.setState({
      news: response
    });
  }
  */
  async startSearch(value) {
    const response = await axios.get(
      `http://hn.algolia.com/api/v1/search?query=${value}`
    );
    console.log(response);
    this.setState({
      result: response.data.hits,
      isOpen: false
    });
  }
  // store = state
  // reducers == data processing
  // boilerplate
  // action makes api call, gets data, and pass the data to reducer.
  handleInputChange = e => {
    // http://hn.algolia.com/api/v1/search?query=
    this.startSearch(e.target.value);
    this.setState({ value: e.target.value });
    /*
    this.setState({
      value: e.target.value,
      result: this.state.news.filter(
        item => item.data.title.indexOf(e.target.value) > -1
      )
    });
    */

    // newData = ['123', '234']
  };

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { result, value } = this.state;
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
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
              onChange={this.handleInputChange}
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
        <div className="dropdown" onClick={this.toggleOpen}>
          <button
            className="btn btn-light dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            All
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              Story
            </a>
            <a className="dropdown-item" href="#">
              Comment
            </a>
          </div>
        </div>

        <div>
          {value.length !== 0 ? (
            result.length ? (
              result.map(item => <div>{item.title}</div>)
            ) : (
              <div>Not found</div>
            )
          ) : (
            <div>{this.state.warming}</div>
          )}
        </div>
      </div>
      //   );
      // }}
      // </Consumer>
    );
  }
}

export default Header1;
