import React, { Component } from "react";
import "../../App.css";
import axios from "axios";
import DrowDown from "./drowDown";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      ids: Array.from(Array(14).keys()),
      result: [],
      news: [],
      warming: "Type something in the input field to use search",
      value: "",
      tag: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
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
  async componentDidMount(value, tag) {
    const response = await axios.get(
      `http://hn.algolia.com/api/v1/search?query=${tag}`
    );
    this.setState({
      news: response.data.hits
    });
    console.log(this.state.news);
  }
  async handleOnClick(tag) {
    const response = await axios.get(
      `http://hn.algolia.com/api/v1/search?query=foo&tags=story`
    );
    this.setState({
      news: response.data.hits
    });
    console.log(tag);
  }

  handleInputChange(e) {
    const { value, result } = this.state;
    this.setState({
      value: e.target.value,
      result: this.state.news.filter(item => item.title.indexOf(value) > -1)
    });
    console.log(result);
  }

  render() {
    const { result, value, news } = this.state;

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
              id="input"
            />
          </div>
        </nav>
        <DrowDown onClick={this.handleOnClick} />
        <div>
          {value.length !== 0 ? (
            result.length ? (
              result.map(item => <div>{item.title}</div>)
            ) : (
              <div>Not found</div>
            )
          ) : (
            news.map(item => <div>{item.title}</div>)
          )}
        </div>
      </div>
      //   );
      // }}
      // </Consumer>
    );
  }
}

export default Header;
