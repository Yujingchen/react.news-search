import React, { Component } from "react";
import "../../App.css";
import { Consumer } from "./../../Context";

class Result extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const item = {
      borderBottom: "solid 1px #eee",
      marginTop: "5px"
    };

    return (
      <Consumer>
        {value => {
          const {
            title,
            story_title,
            comment_text,
            url,
            story_url
          } = this.props.news;
          const { isComment } = value;
          return (
            <React.Fragment>
              {isComment ? (
                <div style={item}>
                  <h5 id="result">
                    <a href={story_url} id="linkStyle">
                      {story_title}
                    </a>
                  </h5>
                  <p id="commentText">{comment_text}</p>
                </div>
              ) : (
                <div style={item}>
                  <h5 id="result">
                    <a href={url} id="linkStyle">
                      {title}
                    </a>
                  </h5>
                </div>
              )}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Result;
