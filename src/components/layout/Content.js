import React, { Component } from "react";
import { Consumer } from "../../context";

class Content extends Component {
  state = {
    title: "you"
  };
  render() {
    const { title } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return <div>{title}</div>;
        }}
      </Consumer>
    );
  }
}

export default Content;
