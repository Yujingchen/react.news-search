import React, { Component } from "react";
import "../../App.css";
import axios from "axios";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from "reactstrap";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
      warming: "Type something in the input field to use search",
      value: "",
      tag: "all",
      dropdownOpen: false
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

  async componentDidMount(value) {
    const response = await axios.get(
      `http://hn.algolia.com/api/v1/search?tags=front_page`
    );
    this.setState({
      news: response.data.hits
    });
  }

  async handleOnClick(data) {
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
    const dropdownList = {
      display: "block",
      padding: "5px 7px",
      textDecoration: "none",
      color: "#5C5C5C",
      borderBottom: "1px solid #e6e8ea",
      linehHeight: "24px"
    };
    const { value, news } = this.state;
    return (
      <div className="container">
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
              onChange={this.handleInputChange}
              type="search"
              placeholder="Search story"
              id="input"
              value={value}
            />
          </div>
        </nav>

        <div className="input-group">
          <div className="input-group-prepend" id="Search">
            Search
          </div>
          <div>
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret id="dropdown">
                All
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="#/">All</DropdownItem>
                <DropdownItem href="#/search/story">Story</DropdownItem>
                <DropdownItem href="#/search/comment">Comment</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <span style={spanStyle}> by</span>
          <div>
            <UncontrolledDropdown>
              <DropdownToggle caret id="dropdown">
                Date
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="#/" style={dropdownList}>
                  Popularity
                </DropdownItem>
                <DropdownItem href="/">Date</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
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
