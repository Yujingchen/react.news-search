import React, { Component } from "react";
import "../../App.css";
import DropDown from "./DropDown";
import Search from "./Search";
import { Consumer } from "./../../Context";

class Header extends Component {
  // toggle() {
  //   this.setState(prevState => ({
  //     dropdownOpen: !prevState.dropdownOpen
  //   }));
  // }

  // async componentDidMount() {
  //   const response = await axios.get(
  //     `http://hn.algolia.com/api/v1/search?tags=front_page`
  //   );
  //   this.setState({
  //     news: response.data.hits
  //   });
  // }

  // handleOnClick(data) {
  //   this.setState({
  //     tag: data
  //   });
  // }
  // async startSearch(value, tag) {
  //   const response = await axios.get(
  //     `http://hn.algolia.com/api/v1/search?query=${value}&page=1`
  //   );
  //   this.setState({
  //     news: response.data.hits
  //   });
  // }

  render() {
    const spanStyle = {
      margin: "0 3px 0 10px",
      fontSize: "12px",
      lineHeight: "27px",
      textAlign: "right"
    };

    return (
      <Consumer>
        {value => {
          const {
            news,
            firstDropDowns,
            secondDropDowns,
            firstCaret,
            secondCaret
          } = value;
          return (
            <div className="container">
              <Search />

              <div className="input-group">
                <span className="input-group-prepend" style={spanStyle}>
                  Search
                </span>
                <DropDown myDropDowns={firstDropDowns} caret={firstCaret} />
                <span style={spanStyle}> by</span>
                <DropDown myDropDowns={secondDropDowns} caret={secondCaret} />
              </div>
              <div>
                {news.map(item => (
                  <div>{item.title}</div>
                ))}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Header;
