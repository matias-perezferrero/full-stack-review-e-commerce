import React, { useState } from "react";
import { connect } from "react-redux";
import { logout, login, register } from "../redux/userReducer";
import {Link} from 'react-router-dom'
import AuthErrors from './AuthErrors'

function Header(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(true);

  return (
    <div className="header">
        <h1 style={{width: "50%"}}>Super Original E-Commerce Site</h1> 
      {!props.userReducer.user.user_email ? (
        registered ? (
          <form 
            onSubmit={e => {
              e.preventDefault();
              props.login(email, password);
              setEmail("");
              setPassword("");
            }}
          >
            Existing User:
            <input
              type="email"
              value={email}
              placeholder="enter your email"
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="enter your password"
              onChange={e => setPassword(e.target.value)}
            />
            <button>Login</button>
            <p>
              Don't have an account?{" "}
              <span
                onClick={() => setRegistered(false)}
                style={{ color: "blue" }}
              >
                Click here to register.
              </span>
            </p>
          </form>
        ) : (
          <form
            onSubmit={e => {
              e.preventDefault();
              props.register(email, password);
              setEmail("");
              setPassword("");
            }}
          >
            New Account:
            <input
              type="email"
              value={email}
              placeholder="enter your email"
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="enter your password"
              onChange={e => setPassword(e.target.value)}
            />
            <button>Register</button>
            <p>
              Already have an account?{" "}
              <span
                onClick={() => setRegistered(true)}
                style={{ color: "blue" }}
              >
                Click here to sign in.
              </span>
            </p>
          </form>
        )
      ) : (
        <div style={{ display: "flex", alignItems: 'center' , justifyContent: "space-evenly", width: "40%"}}>
          <h3>Logged in as: {props.userReducer.user.user_email}</h3>
          <button><Link to="/cart">Cart</Link></button>
          <button onClick={() => {
            props.logout()
            }}>Logout</button> 
        </div>
      )}
      <AuthErrors />
    </div>
  );
}

const mapStateToProps = reduxState => {
  return {
    userReducer: reduxState.userReducer
  };
};

export default connect(mapStateToProps, { logout, login, register })(Header);
