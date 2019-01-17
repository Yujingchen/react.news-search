import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "../../App.css";
// import { Consumer } from "../../context";

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
  state = {
    news: [],
    id: [1, 2],
    show: []
  };

  componentDidMount() {
    const { id } = this.state;
    id.map(eachId => {
      fetch(`http://hn.algolia.com/api/v1/items/${eachId}`)
        .then(response => response.json())
        .then(response => {
          this.setState({
            news: { ...this.state, show: [response, ...this.state.show] }
          });
        });
    });
  }

  handleInputChange(e) {
    const { news } = this.state;
    console.log(this.state.news);
    // this.setState({
    //   show: news.filter(eachShow => eachShow.title.indexOf(e.target.value) > -1)
    // });
  }

  render() {
    const { show } = this.state;
    return (
      // <Consumer>
      // {value => {
      //   const { search } = this.state;
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
        {console.log(show)}
      </div>
      // );
      //   }
      // }
      // </Consumer>
    );
  }
}

export default Header1;
