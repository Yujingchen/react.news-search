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
          return (
            <div className="container">

              <Search />
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default SearchPage;
