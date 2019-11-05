import React, { Component } from "react";
// import axios from "axios";
import "./Login.css";
import { updateUser } from "../redux/userReducer";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // handleRegister = () => {
  //   axios
  //     .post("/auth/register", {
  //       username: this.state.username,
  //       password: this.state.password
  //     })
  //     .then(res => {
  //       this.props.updateUser(res.data);
  //       this.props.history.push("/admin");
  //       this.setState({
  //         username: "",
  //         password: ""
  //       });
  //     });
  // };

  handleLogin = () => {
    
    const {username, password} = this.state
    this.props
      .updateUser(username, password)
  };


  render() {
    if (this.props.redux.userReducer.loggedIn) return <Redirect to="/admin" />;
    console.log(this.props);
    return (
      <div className="Login">
        <div className="LoginBox">
          <div className="LoginContainer">
            <h1>Login Here</h1>
            <input
              value={this.state.username}
              name="username"
              onChange={e => this.handleInput(e)}
              placeholder="Enter username"
            />
            <input
              password={this.state.password}
              name="password"
              onChange={e => this.handleInput(e)}
              placeholder="Enter password"
            />
            <button onClick={this.handleLogin}>Login</button>
            {/* <button onClick={this.handleRegister}>Register</button> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  const { user } = reduxState;
  return {
    user,
    redux: reduxState
  };
};

const mapDispatchToProps = {
  updateUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
