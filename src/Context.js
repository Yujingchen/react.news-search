import React, { Component } from "react";
import axios from "axios";
const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "KEYWORD_CHANGE":
      return {
        ...state,
        news: action.payload
      };
    case "SELECT_COMMENT":
      return {
        ...state,
        isComment: action.payload
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    news: [],
    keyword: "",
    isComment: false,
    firstDropDowns: [
      { name: "All", url: "#", id: "0" },
      { name: "Story", url: "#/search/story", id: "1" },
      { name: "Comment", url: "#/search/comment", id: "2" }
    ],
    secondDropDowns: [
      { name: "Popularity", url: "/", id: "0" },
      { name: "Date", url: "#/search/all/date", id: "1" }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  async componentDidMount() {
    const response = await axios.get(
      "http://hn.algolia.com/api/v1/search?tags=front_page"
    );
    this.setState({
      news: response.data.hits
    });
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
