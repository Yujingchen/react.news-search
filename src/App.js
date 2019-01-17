import React, { Component } from "react";
import Header1 from "./components/layout/Header1";
import "./App.css";
import { Provider } from "./context";
// import Content from "./components/layout/Content";

class App extends Component {
  render() {
    return (
      // <Provider>
      <div className="App">
        <Header1 />
      </div>
      // </Provider>
    );
  }
}

export default App;
