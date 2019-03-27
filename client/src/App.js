import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Bosses from "./components/Bosses/Bosses";
import BossDetails from "./components/BossDetails/BossDetails";
import "./App.css";
import { connect } from "react-redux";

import { getBosses } from "./actions/bossActions";

class App extends Component {
  componentDidMount() {
    this.props.getBosses();
  }
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

const mapStatetoProps = reduxStoreState => {
  return {
    bosses: reduxStoreState.boss.bosses
  };
};

export default connect(
  mapStatetoProps,
  { getBosses }
)(App);
