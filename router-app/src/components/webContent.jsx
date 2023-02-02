import React, { Component } from "react";
import { useSearchParams } from "react-router-dom";
import Web from "./web";
import { Link } from "react-router-dom";

class WebContent extends Component {
  state = {
    searchParams: this.props.params[0],
    setSearchParams: this.props.params[1],
  };
  render() {
    // console.log(this.state.searchParams.get("section"));

    return (
      <React.Fragment>
        <h1>Web - {this.state.searchParams.get("chapter")}</h1>
        <div>jk</div>
        <hr />
        <Link to="/web">返回</Link>
      </React.Fragment>
    );
  }
}

export default (props) => <WebContent {...props} params={useSearchParams()} />;
