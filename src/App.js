import React, { Component } from "react";
import All from "./components/layout/All";
import Story from "./components/layout/Story";
import Comment from "./components/layout/Comment";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Alldate from "./components/layout/Alldate";
import { Provider } from "./Context";
// import Content from "./components/layout/Content";

class App extends Component {
  render() {
    return (
      <Router>
        <Provider>
          <div className="App">
            <Switch>
              <Route exact path="/" component={All} />
              <Route exact path="/search/story" component={Story} />
              <Route exact path="/search/comment" component={Comment} />
              <Route exact path="/search/all/date" component={Alldate} />
            </Switch>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
