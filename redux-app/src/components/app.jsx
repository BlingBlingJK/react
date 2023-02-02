import React, { Component } from "react";
import String from "./string";
import Number from "./number";
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Number />
        <hr />
        <String />
      </React.Fragment>
    );
  }
}

export default App;
