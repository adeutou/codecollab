import React, { useState } from "react";
import './LoginSignup.css'
import {useSignupUserMutation} from '../services/appApi'
import { useNavigate } from "react-router-dom";
import imf from "./assets/logonp.JPG";
import { LinkContainer } from "react-router-bootstrap";
import Navigation from "../components/Navigation";

function LoginSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [signupUser, { isLoading, error }] = useSignupUserMutation();
  function handleSignup(e) {
    e.preventDefault();
    signupUser({ name, email, password }).then(({ data }) => {
      if (data) {
        console.log(data);
        navigate("/chat")
      }
    });
  }

  return (
    <div>
      <Navigation/>
    <div className="containe shadow ">
      <div className="row justify-content-end">
        <div className="col-md-6 d-flex flex-column form align-items-center text-white order-2 justify-content-center">
          <img className="imf" src={imf} alt="" />
        </div>

        <form onSubmit={handleSignup} className="col-md-6 p-4">
          <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <i
                class="fa-solid fa-user"
                style={{ color: "rgb(114, 175, 244)" }}
              ></i>
              <input
                type="text"
                placeholder="Username"
                id="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="input">
              <i
                class="fa-solid fa-envelope"
                style={{ color: "rgb(114, 175, 244)" }}
              ></i>
              <input
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id="exampleInputEmail1"
              />
            </div>
            <div className="input">
              <i
                class="fa-solid fa-lock"
                style={{ color: "rgb(114, 175, 244)" }}
              ></i>
              <input
                type="password"
                placeholder="password"
                id="exampleInputPassword1"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
          </div>

          <div className="submit-container">
            <button type="submit" className="submit">
              Sign Up
            </button>
            <LinkContainer to="/login">
              <button id="registerbt" className="submit">
                LOGIN
              </button>
            </LinkContainer>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default LoginSignup;
