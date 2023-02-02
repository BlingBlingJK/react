import React, { Component } from "react";
import Base from "./base";
class Register extends Component {
  state = {
    error_mes: "",
    userName: "",
    passWord: "",
    passWord_confirm: "",
  };

  handleClick = (e) => {
    e.preventDefault();
    if (this.state.userName === "") {
      this.setState({ error_mes: "用户名不能为空！" });
    } else if (this.state.passWord === "") {
      this.setState({ error_mes: "密码不能为空！" });
    } else if (this.state.passWord_confirm === "") {
      this.setState({ error_mes: "确认密码不能为空！" });
    } else if (this.state.passWord_confirm !== this.state.passWord) {
      this.setState({ error_mes: "两次输入密码不一致！" });
    }
  };

  render() {
    return (
      <Base>
        <div className="container">
          <div className="outer">
            <div className="login">
              <div className="box">
                <p className="table">Register</p>
                <br />
                <input
                  onChange={(e) => {
                    this.setState({ userName: e.target.value });
                  }}
                  className="text"
                  type="text"
                  placeholder="用户名"
                />

                <input
                  onChange={(e) => {
                    this.setState({ passWord: e.target.value });
                  }}
                  className="mima"
                  type="password"
                  placeholder="密码"
                />
                <br />
                <input
                  onChange={(e) => {
                    this.setState({ passWord_confirm: e.target.value });
                  }}
                  className="mima"
                  type="password"
                  placeholder="确认密码"
                />
                <br />
                <div className="erro">{this.state.error_mes}</div>
                <a onClick={this.handleClick} href="/home" className="go">
                  注册
                </a>
              </div>
            </div>
          </div>
        </div>
      </Base>
    );
  }
}

export default Register;
