import React, { Component } from "react";
import Header from "./components/layout/Header";
import "./App.css";
// import { Provider } from "./context";
// import Content from "./components/layout/Content";

class App extends Component {
  render() {
    return (
      // <Provider>
      <div className="App">
        <Header />
      </div>
      // </Provider>
    );
  }
}

export default App;
