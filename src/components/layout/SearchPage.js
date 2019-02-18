import React, { Component } from "react";
import "../../App.css";
// import DropDown from "./DropDown";
import Search from "./Search";
import { Consumer } from "./../../Context";
import Result from "./Result";
class SearchPage extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { news } = value;
          return (
            <div className="container">
              <Search />

              {news.map(item => (
                <Result key={item.objectID} news={item} />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default SearchPage;
