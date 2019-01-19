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
      id: [1, 2, 3, 4, 5, 6, 7],
      result: [],
      news: [],
      urls: [
        "http://hn.algolia.com/api/v1/items/1",
        "http://hn.algolia.com/api/v1/items/2",
        "http://hn.algolia.com/api/v1/items/3"
      ]
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  async componentDidMount() {
    const { urls } = this.state;

    const response = await Promise.all(urls.map(url => axios.get(url)));
    // dispatch({ type: "ADD_NEWS", payload: response.data });
    this.setState({ news: response });
  }
  handleInputChange = e => {
    this.setState({
      result: this.state.news.filter(
        item => item.data.title.indexOf(e.target.value) > -1
      )
    });
  };
  //??

  render() {
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
            />
            {/* <button className="btn btn-outline-success" type="submit">
            Search
          </button> */}
          </div>
        </nav>
        {this.state.result.map(item => (
          <div>{item.data.title}</div>
        ))}
      </div>
      //   );
      // }}
      // </Consumer>
    );
  }
}

export default Header1;
