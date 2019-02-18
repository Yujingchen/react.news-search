import React, { Component } from "react";
import "../../App.css";
import { Consumer } from "./../../Context";

class Result extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { title, story_title, comment_text } = this.props.news;
          const { isComment } = value;
          return (
            <React.Fragment>
              {isComment ? (
                <div>
                  <h5> {story_title}</h5>
                  <p>{comment_text}</p>
                </div>
              ) : (
                <div>{title}</div>
              )}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Result;
