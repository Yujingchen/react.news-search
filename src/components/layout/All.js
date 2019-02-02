import React, { Component } from "react";
import "../../App.css";
import axios from "axios";
import DropDown from "./DropDown";
import Search from "./Search";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
      warming: "Type something in the input field to use search",
      value: "",
      tag: "all",
      firstCaret: "All",
      secondCaret: "Popularity",
      firstDropDowns: [
        { name: "All", url: "/", id: "0" },
        { name: "Story", url: "/search/story", id: "1" },
        { name: "Comment", url: "/search/comment", id: "2" }
      ],
      secondDropDowns: [
        { name: "Popularity", url: "/", id: "0" },
        { name: "Date", url: "/", id: "1" }
      ]
    };
    this.toggle = this.toggle.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.startSearch = this.startSearch.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  async componentDidMount() {
    const response = await axios.get(
      `http://hn.algolia.com/api/v1/search?tags=front_page`
    );
    this.setState({
      news: response.data.hits
    });
  }

  handleOnClick(data) {
    this.setState({
      tag: data
    });
  }
  async startSearch(value, tag) {
    const response = await axios.get(
      `http://hn.algolia.com/api/v1/search?query=${value}&page=1`
    );
    this.setState({
      news: response.data.hits
    });
  }

  handleInputChange(e) {
    this.setState({
      value: e.target.value
    });
    this.startSearch(e.target.value);
  }

  render() {
    const spanStyle = {
      margin: "0 3px 0 10px",
      fontSize: "12px",
      lineHeight: "27px",
      textAlign: "right"
    };

    const { news } = this.state;
    return (
      <div className="container">
        <Search />

        <div className="input-group">
          <span className="input-group-prepend" style={spanStyle}>
            Search
          </span>
          <DropDown
            myDropDowns={this.state.firstDropDowns}
            caret={this.state.firstCaret}
          />
          <span style={spanStyle}> by</span>
          <DropDown
            myDropDowns={this.state.secondDropDowns}
            caret={this.state.secondCaret}
          />
        </div>
        <div>
          {news.map(item => (
            <div>{item.title}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default Header;
