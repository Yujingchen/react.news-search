import React, { Component } from "react";
import { Consumer } from "../../../Context";
class Search extends Component {
  handleInputChange(e, dispatch) {
    dispatch({ type: "DELETE_CONTACT" });
    this.setState({
      value: e.target.value
    });
    this.startSearch(e.target.value);
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
                    onChange={this.handleInputChange.bind(this, dispatch)}
                    type="search"
                    placeholder="Search story"
                    id="input"
                    value="{value}"
                  />
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
