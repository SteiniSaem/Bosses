import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <h1>Welcome to Bosses</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
