import React, { Component } from "react";
import { Consumer } from "../../Context";
class Search extends Component {
  constructor() {
    super();
    this.state = {
      keyword: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      keyword: e.target.value
    });
  }

  handleSubmit(dispatch, keyword) {
    dispatch({ type: "KEYWORD_CHANGE", payload: keyword });
  }
  //   async startSearch(value, tag) {
  //     const response = await axios.get(
  //       `http://hn.algolia.com/api/v1/search?query=${value}&page=1`
  //     );
  //     this.setState({
  //       news: response.data.hits
  //     });
  //   }
  render() {
    const { keyword } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
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
                      className="btn btn-warning text-light"
                      onSubmit={this.handleSubmit}
                    >
                      {" "}
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

export default Search;
