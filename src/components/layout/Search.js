import React, { Component } from "react";
import { Consumer } from "../../Context";
import axios from "axios";
import DropDown from "./DropDown";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      caretOne: "All",
      caretTwo: "Popularity"
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClickName = this.handleClickName.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      keyword: e.target.value
    });
  }

  handleClickName = nameValue => {
    if (
      nameValue === "All" ||
      nameValue === "Story" ||
      nameValue === "Comment"
    ) {
      this.setState({ caretOne: nameValue });
    } else {
      this.setState({ caretTwo: nameValue });
    }
  };

  async handleSubmit(dispatch, e) {
    e.preventDefault();
    const { keyword } = this.state;
    if (this.state.caretOne === "All") {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${keyword}`
      );
      dispatch({ type: "SELECT_COMMENT", payload: false });
      dispatch({ type: "KEYWORD_CHANGE", payload: response.data.hits });
    } else if (
      this.state.caretOne === "Story" &&
      this.state.caretTwo === "Popularity"
    ) {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${keyword}&tags=story`
      );
      dispatch({ type: "SELECT_COMMENT", payload: false });
      dispatch({ type: "KEYWORD_CHANGE", payload: response.data.hits });
    } else if (
      this.state.caretOne === "Story" &&
      this.state.caretTwo === "Date"
    ) {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search_by_date?query=${keyword}&tags=story`
      );
      dispatch({ type: "SELECT_COMMENT", payload: false });
      dispatch({ type: "KEYWORD_CHANGE", payload: response.data.hits });
    } else if (
      this.state.caretOne === "Comment" &&
      this.state.caretTwo === "Popularity"
    ) {
      const response = await axios.get(
        `http://hn.algolia.com/api/v1/search?query=${keyword}&tags=comment`
      );

      dispatch({ type: "KEYWORD_CHANGE", payload: response.data.hits });
      dispatch({ type: "SELECT_COMMENT", payload: true });
    } else if (
      this.state.caretOne === "Comment" &&
      this.state.caretTwo === "Date"
    ) {
      const response = await axios.get(
        `http://hn.algolia.com/api/v1/search_by_date?query=${keyword}&tags=comment`
      );
      dispatch({ type: "KEYWORD_CHANGE", payload: response.data.hits });
      dispatch({ type: "SELECT_COMMENT", payload: true });
    }
  }

  render() {
    const { keyword } = this.state;
    const spanStyle = {
      margin: "0 3px 0 10px",
      fontSize: "12px",
      lineHeight: "27px",
      textAlign: "right"
    };
    return (
      <Consumer>
        {value => {
          const { dispatch, firstDropDowns, secondDropDowns } = value;
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
                    onChange={this.handleInputChange}
                    type="search"
                    placeholder="Search story"
                    id="input"
                    value={keyword}
                  />
                  <div className="input-group-append">
                    <button
                      type="submit"
                      className="btn btn-secondary text-light"
                      onClick={this.handleSubmit.bind(this, dispatch)}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </nav>
              <div className="input-group">
                <span className="input-group-prepend" style={spanStyle}>
                  Search
                </span>
                <DropDown
                  myDropDowns={firstDropDowns}
                  caret={this.state.caretOne}
                  onClickName={this.handleClickName}
                />
                <span style={spanStyle}> by</span>
                <DropDown
                  myDropDowns={secondDropDowns}
                  caret={this.state.caretTwo}
                  onClickName={this.handleClickName}
                />
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
