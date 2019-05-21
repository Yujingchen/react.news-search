import React, { Component } from "react";
import { Consumer } from "../../Context";
import axios from "axios";
import DropDowns from "./dropDowns";
import Pagination from "./pagination";
import Result from "./result";
import Header from "./header";
import Spinner from "./Spinner";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      caretOne: "All",
      caretTwo: "Popularity",
      sortOne: "story",
      sortTwo: "search",
      currentPage: "0"
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClickName = this.handleClickName.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      keyword: e.target.value
    });
  }

  async handleClickPage(dispatch, pageNumber) {
    const { keyword, sortOne, sortTwo } = this.state;
    if (this.state.caretOne === "All") {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${keyword}&page=${pageNumber}`
      );
      dispatch({ type: "SELECT_COMMENT", payload: false });
      dispatch({ type: "KEYWORD_CHANGE", payload: response.data.hits });
    } else {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/${sortTwo}?query=${keyword}&tags=${sortOne}&page=${pageNumber}`
      );
      sortOne === "comment"
        ? dispatch({ type: "SELECT_COMMENT", payload: true })
        : dispatch({ type: "SELECT_COMMENT", payload: false });

      dispatch({ type: "KEYWORD_CHANGE", payload: response.data.hits });
    }
  }

  handleClickName = nameValue => {
    if (
      nameValue === "All" ||
      nameValue === "Story" ||
      nameValue === "Comment"
    ) {
      this.setState({ caretOne: nameValue, sortOne: nameValue.toLowerCase() });
    } else if (nameValue === "Popularity") {
      this.setState({ caretTwo: nameValue, sortTwo: "search" });
    } else if (nameValue === "Date") {
      this.setState({ caretTwo: nameValue, sortTwo: "search_by_date" });
    }
  };

  async handleSubmit(dispatch, e) {
    e.preventDefault();
    const { keyword, sortOne, sortTwo } = this.state;
    if (this.state.caretOne === "All") {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${keyword}`
      );
      dispatch({ type: "SELECT_COMMENT", payload: false });
      dispatch({ type: "KEYWORD_CHANGE", payload: response.data.hits });
    } else {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/${sortTwo}?query=${keyword}&tags=${sortOne}`
      );
      sortOne === "comment"
        ? dispatch({ type: "SELECT_COMMENT", payload: true })
        : dispatch({ type: "SELECT_COMMENT", payload: false });
      dispatch({ type: "KEYWORD_CHANGE", payload: response.data.hits });
    }
  }

  render() {
    const { keyword } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch, firstDropDowns, secondDropDowns } = value;
          if (value.news != "") {
            return (
              <div>
                <Header
                  submitClick={this.handleSubmit.bind(this, dispatch)}
                  inputOnchange={this.handleInputChange}
                  value={keyword}
                />
                <DropDowns
                  firstDropDowns={firstDropDowns}
                  secondDropDowns={secondDropDowns}
                  passClickName={this.handleClickName}
                  caretOne={this.state.caretOne}
                  caretTwo={this.state.caretTwo}
                />
                <Result />
                <Pagination
                  onClickPage={this.handleClickPage.bind(this, dispatch)}
                />
              </div>
            );
          } else {
            return (
              <div>
                <Header
                  submitClick={this.handleSubmit.bind(this, dispatch)}
                  inputOnchange={this.handleInputChange}
                  value={keyword}
                />
                <Spinner />
              </div>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default Search;
