import React, { Component } from "react";
import main from "./components/layout/main";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./Context";
// import Content from "./components/layout/Content";

class App extends Component {
  render() {
    return (
      <Router>
        <Provider>
          <div className="App">
            <Switch>
              <Route exact path="/" component={main} />
            </Switch>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
