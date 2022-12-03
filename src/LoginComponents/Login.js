import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import env from "../enviroinment";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import "../CSS/Login.css";

function Login() {
  let [email, setEmail] = useState("");

  let [password, setPassword] = useState("");
  let [toggle, setToggle] = useState(false);
  let [message, setMessage] = useState("");
  let navigate = useNavigate();

  let handleForgotpass = async () => {
    navigate("/Forgot");
  };

  let handleLogin = async () => {
    setToggle(true);
    let res = await axios.post(`${env.apiurl}/users/signin`, {
      email,
      password,
    });

    if (res.data.statusCode === 200) {
      setToggle(false);
      localStorage.setItem("token", res.data.token);
      handleRole(email)
    } else {
      setToggle(false);
      setMessage(res.data.message);
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

    const handleRole = async (email)=>{
       const res=  await axios.get(`${env.apiurl}/users/getRole/${email}`)

        if (res.data.statusCode === 200) {
          if (res.data.dataRole === "Cordinator"){ navigate('/CordinatorDash')}
          if (res.data.dataRole === "Student"){ navigate('/StudentDash')}
          if (res.data.dataRole === "Teacher"){ navigate('/teacherDash')}
          
        }
     }

  return (
    <>
      <div className="container-fluid wallpaper">
        <div className="login-wrapper ">
          <h1>Welcome to App</h1>
          <p>Login to Continue</p>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button
              className="mx-2 mt-2"
              variant="primary"
              onClick={() => handleLogin()}
            >
              Login
            </Button>
            <Button
              className="mx-2 mt-2"
              variant="primary"
              onClick={() => handleForgotpass()}
            >
              Forgot Password
            </Button>
          </Form>
          {toggle ? <Spinner animation="border" variant="primary" /> : <></>}
          {message ? (
            <div style={{ color: "red", textAlign: "center" }}>{message}</div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default Login;
