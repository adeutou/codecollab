import React , {useState, useContext} from "react";
import "./LoginLogin.css";
import imf from "../assets/logonp.JPG";
import { LinkContainer } from "react-router-bootstrap";
import {useLoginUserMutation} from '../services/appApi'
import Navigation from "../components/Navigation";
import {useNavigate} from 'react-router-dom'
import {AppContext} from '../context/appContext'

function LoginLogin() {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const navigate = useNavigate()
 const {socket} = useContext(AppContext)
  const [loginUser, { isLoading, error }] = useLoginUserMutation();
function handleLogin(e) {
  e.preventDefault();
  //login logic
  loginUser({email,password}).then(({data})=>{
    if(data){
      //socket work
      socket.emit("new-user")
      //navigate to chat(nav2)
navigate("/chat")
    }
  })
}


  return (
    <div>
      <Navigation />
      <div className="containe shadow ">
        <div className="row justify-content-end">
          <div className="col-md-6 d-flex flex-column form align-items-center text-white order-2 justify-content-center">
            <img className="imf" src={imf} alt="" />
          </div>

          <form onSubmit={handleLogin} className="col-md-6 p-4">
            <div className="header">
              <div className="text">LOGIN</div>
              <div className="underline"></div>
            </div>
            <div className="inputs">
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
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
            </div>

            <div className="submit-container">
              <button type="submit" className="submit">
                LOGIN
              </button>
              <LinkContainer to="/signup">
                <button type="submit" className="submit">
                  Sign Up
                </button>
              </LinkContainer>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginLogin;
