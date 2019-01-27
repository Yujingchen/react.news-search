import React from "react";
import "../../App.css";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      select: "All",
      all: "All",
      story: "Story",
      comment: "Comment"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selected) {
    this.setState(prevState => ({
      select: selected
    }));
  }
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    const { all, story, comment, select } = this.state;
    return (
      <div className="input-group">
        <div className="input-group-prepend" id="Search">
          Search
        </div>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret id="dropdown">
            {select}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#/" onClick={this.handleSelect.bind(this, all)}>
              All
            </DropdownItem>
            {/* {() => this.props.func("")} */}
            <DropdownItem
              href="#/search/story"
              onClick={this.handleSelect.bind(this, story)}
            >
              Story
            </DropdownItem>
            <DropdownItem
              href="#/search/comment"
              onClick={this.handleSelect.bind(this, comment)}
            >
              Comment
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}
