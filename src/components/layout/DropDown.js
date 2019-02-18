import React from "react";
import "../../App.css";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }
  toggle = e => {
    e.preventDefault();
    const name = e.target.name;
    this.props.onClickName(name);
  };

  render() {
    const myDropDowns = this.props.myDropDowns;

    return (
      <div>
        <UncontrolledDropdown>
          <DropdownToggle caret id="dropdown">
            {this.props.caret}
          </DropdownToggle>
          <DropdownMenu>
            {myDropDowns.map(myDropDown => (
              <DropdownItem
                href={myDropDown.url}
                key={myDropDown.id}
                onClick={this.toggle}
                name={myDropDown.name}
              >
                {myDropDown.name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
  }
}
