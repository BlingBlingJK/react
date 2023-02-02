import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* 不想给后端发请求，想假装改变页面，就用Link!(前端渲染) */}
          {/* <a className="navbar-brand" href="/">
            讲义
          </a> */}
          <Link className="navbar-brand" to="/">
            讲义
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {/* <a className="nav-link active" aria-current="page" href="/">
                Home
              </a> */}
              <Link className="nav-link" to="/">
                Home
              </Link>
              {/* <a className="nav-link" href="/linux">
                Linux
              </a> */}
              <Link className="nav-link" to="/linux">
                Linux
              </Link>
              {/* <a className="nav-link" href="/django">
                Django
              </a> */}
              <Link className="nav-link" to="/django">
                Django
              </Link>
              {/* <a className="nav-link" href="/web">
                Web
              </a> */}
              <Link className="nav-link" to="/web">
                Web
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
