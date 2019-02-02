import React, { Component } from "react";
import axios from "axios";
const Context = React.createContext();

export class Provider extends Component {
  state = {
    news: [],
    warming: "Type something in the input field to use search",
    value: "",
    tag: "all",
    firstCaret: "All",
    secondCaret: "Popularity",
    firstDropDowns: [
      { name: "All", url: "/", id: "0" },
      { name: "Story", url: "/search/story", id: "1" },
      { name: "Comment", url: "/search/comment", id: "2" }
    ],
    secondDropDowns: [
      { name: "Popularity", url: "/", id: "0" },
      { name: "Date", url: "/", id: "1" }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
