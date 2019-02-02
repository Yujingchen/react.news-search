import React from "react";
import "../../App.css";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class Example extends React.Component {
  render() {
    const myDropDowns = this.props.myDropDowns;
    return (
      <div>
        <UncontrolledDropdown
          isOpen={this.state.dropdownOpen}
          toggle={this.toggle}
        >
          <DropdownToggle caret id="dropdown">
            {this.props.caret}
          </DropdownToggle>
          <DropdownMenu>
            {myDropDowns.map(myDropDown => (
              <DropdownItem href={myDropDown.url} key={myDropDown.id}>
                {myDropDown.name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
  }
}
