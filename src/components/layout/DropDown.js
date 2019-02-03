import React from "react";
import "../../App.css";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
// import { Consumer } from "./../../Context";

export default class Example extends React.Component {
  render() {
    const myDropDowns = this.props.myDropDowns;
    return (
      // <Consumer>
      //   {value => {
      //     const { firstDropDowns, secondDropDowns } = value;
      // return (
      <div>
        <UncontrolledDropdown>
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
      //     );
      //   }}
      // </Consumer>
    );
  }
}
