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
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <div className="input-group">
        <div className="input-group-prepend" id="Search">
          Search
        </div>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret id="dropdown">
            All
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={this.props.onClick}>Story</DropdownItem>
            <DropdownItem onClick={() => this.props.func("bar&tags=comment")}>
              Comment
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}
