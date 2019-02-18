import React, { Component } from "react";
import DropDown from "./dropDown";

class DropDowns extends Component {
  render() {
    return (
      <div className="input-group" id="dropDownField">
        <span className="input-group-prepend" style={this.props.spanStyle}>
          Search
        </span>
        <DropDown
          myDropDowns={this.props.firstDropDowns}
          caret={this.props.caretOne}
          onClickName={this.props.passClickName}
        />
        <span style={this.props.spanStyle}> by</span>
        <DropDown
          myDropDowns={this.props.secondDropDowns}
          caret={this.props.caretTwo}
          onClickName={this.props.passClickName}
        />
      </div>
    );
  }
}

export default DropDowns;
