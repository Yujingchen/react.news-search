import React, { Component } from "react";
// import { Consumer } from "../../context";

class Content extends Component {
  state = {
    title: "you"
  };
  render() {
    const { title } = this.state;
    return (
      //   <Consumer>
      <div>{title}</div>
      //   </Consumer>
    );
  }
}

export default Content;
