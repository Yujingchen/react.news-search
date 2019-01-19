import React, { Component } from "react";
import axios from "axios";
const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEWS":
      return {
        ...state,
        show: [action.payload, ...state.news]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    news: [],
    id: [1, 2, 3, 4, 5, 6, 7],
    result: [],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  async componentDidMount() {
    const { id, dispatch } = this.state;

    const response = await Promise.all(
      id.map(eachId => {
        axios.get(`http://hn.algolia.com/api/v1/items/${eachId}`);
      })
    );

    // dispatch({ type: "ADD_NEWS", payload: response.data });
    this.setState({ news: response });
  }

  //     contacts: [],
  //     dispatch: action => {

  //     }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
