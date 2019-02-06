import React, { Component } from "react";
import SearchTypeOne from "./components/layout/SearchTypeOne";
import SearchTypeTwo from "./components/layout/SearchTypeTwo";
import SearchTypeThree from "./components/layout/SearchTypeThree";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import SearchTypeFour from "./components/layout/SearchTypeFour";
import { Provider } from "./Context";
// import Content from "./components/layout/Content";

class App extends Component {
  render() {
    return (
      <Router>
        <Provider>
          <div className="App">
            <Switch>
              <Route exact path="/" component={SearchTypeOne} />
              <Route exact path="/search/story" component={SearchTypeTwo} />
              <Route exact path="/search/comment" component={SearchTypeThree} />
              <Route exact path="/search/all/date" component={SearchTypeFour} />
            </Switch>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
