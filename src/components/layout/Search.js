import React, { Component } from "react";
import { Consumer } from "../../Context";
import axios from "axios";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(e) {
    this.setState({
      keyword: e.target.value
    });
  }

  async handleSubmit(dispatch, e, props) {
    e.preventDefault();
    const { keyword } = this.state;
    const response = await axios.get(
      `http://hn.algolia.com/api/v1/${this.props.searchMode}?query=${keyword}${
        this.props.tag
      }`
    );
    dispatch({ type: "KEYWORD_CHANGE", payload: response.data.hits });
  }

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
                      className="btn btn-secondary text-light"
                      onClick={this.handleSubmit.bind(this, dispatch)}
                    >
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
