import React, { Component } from "react";
const Context = React.createContext();

class Provider extends Component {
  state = {
    news: []
  };

  componentDidMount() {
    fetch("http://hn.algolia.com/api/v1/items/")
      .then(response => response.json())
      .then(data =>
        this.setState({
          news: data
        })
      );
  }

  //     contacts: [],
  //     dispatch: action => {

  //     }

  render() {
    return <div />;
  }
}

export default Provider;
