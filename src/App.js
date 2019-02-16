import React, { Component } from "react";
import SearchPage from "./components/layout/SearchPage";
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
              <Route exact path="/" component={SearchPage} />
            </Switch>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
