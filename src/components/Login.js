import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axiosIns from "../api/axiosInstance";
const Login = (e) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    
    event.preventDefault();

    axiosIns
      .get(`/users?username=${username}&password=${password}`)
      .then((res) => {
        if (res.data.length === 0) {
          alert("User does not exist");
        } else {
          res.data.map((resData) => {
            if (
              resData.username === username &&
              resData.password === password
            ) {
              window.sessionStorage.setItem("loginDetails", JSON.stringify(resData));
              
                  navigate("/");
              
             
            } else {
              alert("Username and Password is not valid");
            }
          });
        }
      })
      .catch((err) => {
        
      });
  };
  return (
    <div className="login">
      <div className="login_box">
        <h1>Login to your account</h1>
        <form onSubmit={handleSubmit} className="login_form">
          <input
            type="text"
            placeholder="Enter your username"
            className="form_elements"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="form_elements"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="form_elements">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
