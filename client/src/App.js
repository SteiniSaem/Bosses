import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
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
