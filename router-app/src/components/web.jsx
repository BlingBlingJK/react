import React, { Component } from "react";
import { Link } from "react-router-dom";
class Web extends Component {
  state = {
    webs: [
      {
        id: 1,
        title: "HTML",
      },
      {
        id: 2,
        title: "CSS",
      },
      {
        id: 3,
        title: "Javascript",
      },
      {
        id: 4,
        title: "ζ³η",
      },
      {
        id: 5,
        title: "React",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <h1>Web</h1>
        <hr />
        <div>
          {this.state.webs.map((web) => (
            <div key={web.id}>
              <Link to={`/web/content?chapter=${web.id}`}>
                {web.id + ". " + web.title}
              </Link>
            </div>
          ))}
        </div>
        <hr />
        <Link to="/">θΏε</Link>
      </React.Fragment>
    );
  }
}

export default Web;
