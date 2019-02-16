import React, { Component } from "react";
import "../../App.css";
// import DropDown from "./DropDown";
import Search from "./Search";
import { Consumer } from "./../../Context";

class SearchPage extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { news, isComment } = value;
          return (
            <div className="container">
              <Search />
              <div>
                {isComment
                  ? news.map(item => <div>{item.comment_text}</div>)
                  : news.map(item => <div>{item.title}</div>)}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default SearchPage;
