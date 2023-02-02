import React, { Component } from "react";
import Navbar from "./navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./content/home";
import Calculator from "./content/calculator";
import Login from "./content/login";
import NotFound from "./content/notFound";
import Register from "./content/register";

class App extends Component {
  state = {
    is_login: false,
    userName: "fjk",
  };
  render() {
    return (
      <React.Fragment>
        <Navbar is_login={this.state.is_login} userName={this.state.userName} />
        <div className="container">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            {/* 在这个路径下，返回这个组件 */}
            <Route
              path="/calculator"
              element={
                this.state.is_login ? (
                  <Calculator />
                ) : (
                  <Navigate replace to="/home" />
                )
              }
            />
            <Route
              path="/register"
              element={
                this.state.is_login ? (
                  <Navigate replace to="/home" />
                ) : (
                  <Register />
                )
              }
            />
            <Route
              path="/login"
              element={
                this.state.is_login ? (
                  <Navigate replace to="/home" />
                ) : (
                  <Login />
                )
              }
            />
            <Route path="/notFound" element={<NotFound />} />
            <Route path="*" element={<Navigate replace to="/notFound" />} />
          </Routes>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
