import React from "react";
import { Component } from "react";
import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";
import "./index.css";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    showSubmmiterror: false,
    errorMsg: "",
  };
  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };
  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };
  onSubmitFailure = (errorMsg) => {
    this.setState({ showSubmmiterror: true, errorMsg });
  };
  onSubmitSuccess = (jwtToken) => {
    const { history } = this.props;
    Cookies.set("jwt_token", "jwtToken", { expires: 100 });
    history.replace("/");
  };
  onSubmitForm = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const userDetails = { username, password };
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token);
    } else {
      this.onSubmitFailure(data.error_msg);
    }
  };
  render() {
    const { username, password } = this.state;
    const { showSubmmiterror, errorMsg } = this.state;
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken !== undefined) {
      return <Redirect to="/" />;
    }
    return (
      <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-8 offset-md-2 offset-lg-4 login-form">
            <form
              className="   mt-5 shadow p-5 form-login "
              onSubmit={this.onSubmitForm}
            >
              <div className="mb-3   ">
                <div className="d-flex justify-content-center  align-self-center">
                  <img
                    src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1648550731/2_ydoaok.png"
                    alt="login-logo"
                  />
                </div>
                <label htmlFor="exampleInputEmail1" className="form-label">
                  <b>Username</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  value={username}
                  onChange={this.onChangeUsername}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  <b> Password</b>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={password}
                  onChange={this.onChangePassword}
                />
                {showSubmmiterror && (
                  <p style={{ color: "red" }}>*{errorMsg}</p>
                )}
              </div>
              <div className="d-flex justify-content-center  align-self-center">
                <button type="submit" className="btn btn-primary login-btn ">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
        </div>
        </>
    );
  }
}
export default LoginForm;
