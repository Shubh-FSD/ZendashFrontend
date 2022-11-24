import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import env from '../enviroinment'
import {useNavigate} from 'react-router-dom'
import '../CSS/Login.css';


function Forgot() {
  let [email,setEmail]=useState("")
  let navigate = useNavigate()
  

  let handleForgot = async () => {
    if(email){
    let res = await axios.post(`${env.apiurl}/users/reset-password`, {
      email
    });
    if (res.data.statusCode === 200 || 204) {
      navigate("/ForgotReq");
    } else {
      console.log("error")
    }
  }
  else(alert("Please Put Email"))
  };


  let handleLogin = async () => {
    navigate("/loginBefore");
  }; 

  return <>

  <div className="container-fluid wallpaper1">
    <div className="login-wrapper">
      <h1>Welcome to Forgot Password Page </h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>
        <Button className ="mx-2" variant="primary" onClick={()=>handleForgot()}>
          Submit
        </Button>
        <Button className ="mx-2" variant="primary" onClick={()=>handleLogin()}>
          Back To Login Page
        </Button>
      </Form>      
    </div>  
    </div>
  </>
}

export default Forgot