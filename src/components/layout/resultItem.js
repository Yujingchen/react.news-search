import React, { Component } from "react";
import "../../App.css";
import { Consumer } from "./../../Context";

class ResultItem extends Component {
  state = {
    iconOne: false,
    iconTwo: false,
    iconThree: false
  };
  handleIconClick(e) {
    const iconClick = e.target.className;
    if (iconClick === "far fa-comment-alt") {
      this.setState(state => ({
        iconOne: !state.iconOne
      }));
    } else if (iconClick === "fa fa-share-alt") {
      this.setState(state => ({
        iconTwo: !state.iconTwo
      }));
    } else if (iconClick === "far fa-star") {
      this.setState(state => ({
        iconThree: !state.iconThree
      }));
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const item = {
      borderBottom: "solid 1px #eee",
      marginTop: "5px",
      display: "flex",
      justifyContent: "space-between"
    };
    const iconStyle = {
      color: "#ff742b"
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
                  <div id="iconList">
                    {this.state.iconOne ? (
                      <i
                        className="far fa-comment-alt"
                        id="myIcon"
                        name="iconOne"
                        onClick={this.handleIconClick.bind(this)}
                        style={iconStyle}
                      />
                    ) : (
                      <i
                        className="far fa-comment-alt"
                        id="myIcon"
                        name="iconOne"
                        onClick={this.handleIconClick.bind(this)}
                      />
                    )}

                    {this.state.iconTwo ? (
                      <i
                        className="fa fa-share-alt"
                        id="myIcon"
                        name="iconTwo"
                        onClick={this.handleIconClick.bind(this)}
                        style={iconStyle}
                      />
                    ) : (
                      <i
                        className="fa fa-share-alt"
                        id="myIcon"
                        name="iconTwo"
                        onClick={this.handleIconClick.bind(this)}
                      />
                    )}

                    {this.state.iconThree ? (
                      <i
                        className="far fa-star"
                        id="myIcon"
                        name="iconThree"
                        onClick={this.handleIconClick.bind(this)}
                        style={iconStyle}
                      />
                    ) : (
                      <i
                        className="far fa-star"
                        id="myIcon"
                        name="iconThree"
                        onClick={this.handleIconClick.bind(this)}
                      />
                    )}
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default ResultItem;
