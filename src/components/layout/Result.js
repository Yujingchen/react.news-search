import React, { Component } from "react";
import ResultItem from "./resultItem";
import { Consumer } from "./../../Context";

export default class result extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { news } = value;
          const { isComment } = value;
          return (
            <div>
              {!isComment
                ? news.map(item =>
                    item.title != null &&
                    item.author != null &&
                    item.url !== "" ? (
                      <ResultItem key={item.objectID} news={item} />
                    ) : null
                  )
                : news.map(item =>
                    item.story_title != null ? (
                      <ResultItem key={item.objectID} news={item} />
                    ) : null
                  )}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
