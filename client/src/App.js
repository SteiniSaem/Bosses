import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Bosses from "./components/Bosses/Bosses";
import BossDetails from "./components/BossDetails/BossDetails";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <h1>Welcome to Bosses</h1>} />
          <Route exact path="/bosses" component={Bosses} />
          <Route exact path="/bosses/:bossId" component={BossDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
