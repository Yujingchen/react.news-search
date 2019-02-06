import React from "react";
import "../../App.css";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Consumer } from "./../../Context";

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      all: true,
      story: false,
      commend: false,
      searchType: "all",
      popularity: true,
      date: false,
      sortFactor: {
        sortFactorOne: "",
        sortFactorTwo: ""
      }
    };
    this.setSort = this.setSort.bind(this);
  }

  toggle(dispatch, e) {
    e.preventDefault();
    if (e.target.name === "All") {
      this.setState(
        {
          story: false,
          all: true,
          commend: false
        },
        () => {
          console.log(this.state);
        }
      );
    } else if (e.target.name === "Story") {
      this.setState(
        {
          story: true,
          all: false,
          commend: false
        },
        () => {
          console.log(this.state);
        }
      );
    } else if (e.target.name === "Comment") {
      this.setState(
        {
          story: false,
          all: false,
          commend: true
        },
        () => {
          console.log(this.state);
        }
      );
    } else if (e.target.name === "Date") {
      this.setState(
        {
          popularity: false,
          date: true
        },
        () => {
          console.log(this.state);
        }
      );
    } else if (e.target.name === "Popularity") {
      this.setState(
        {
          popularity: true,
          date: false
        },
        () => {
          console.log(this.state);
        }
      );
    } else if (e.target.name == "Comment") {
      this.setState(prevState => ({
        story: false,
        all: false,
        commend: true
      }));
    } else if (e.target.name == "Date") {
      this.setState(prevState => ({
        popularity: false,
        date: true
      }));
    } else if (e.target.name == "Popularity") {
      this.setState(prevState => ({
        popularity: true,
        date: false
      }));
    }

    // set sort
  }
  setSort(dispatch) {
    const { all, story, commend, date, popularity, sortFactor } = this.state;
    if (all && popularity) {
      this.setState(
        { sortFactor: { sortFactorOne: "", sortFactorTwo: "search" } },
        () => {
          console.log(this.state);
        }
      );
    } else if (all && date) {
      this.setState(
        { sortFactor: { sortFactorOne: "", sortFactorTwo: "search_by_date" } },
        () => {
          console.log(this.state);
        }
      );
    } else if (story && popularity) {
      this.setState(
        {
          sortFactor: { sortFactorOne: "&tags=story", sortFactorTwo: "search" }
        },
        () => {
          console.log(this.state);
        }
      );
    } else if (commend && popularity) {
      this.setState({
        sortFactor: { sortFactorOne: "&tags=commend", sortFactorTwo: "search" }
      });
    } else if (commend && date) {
      this.setState({
        sortFactor: {
          sortFactorOne: "&tags=commend",
          sortFactorTwo: "search_by_date"
        }
      });
    } else if (story && date) {
      this.setState({
        sortFactor: {
          sortFactorOne: "&tags=story",
          sortFactorTwo: "search_by_date"
        }
      });
    }
    dispatch({ type: "NEW_SORT", payload: sortFactor });
  }

  render() {
    const myDropDowns = this.props.myDropDowns;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
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
                      onClick={this.toggle.bind(this, dispatch)}
                      name={myDropDown.name}
                    >
                      {myDropDown.name}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
