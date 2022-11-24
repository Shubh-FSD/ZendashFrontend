import React, { useState } from "react";
// import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form";
 import axios from "axios";
 import { Button, FormGroup, Input, Label } from "reactstrap";
  import env from "../enviroinment";
 import { useNavigate } from "react-router-dom";
//  import Spinner from "react-bootstrap/Spinner";
import "../CSS/Login.css";


function CoRegister() {
  const navigate = useNavigate();
  let [firstName,setFirstName]=useState("")
  let [lastName,setLastName]=useState("")
  let [mobileNumber,setMobileNumber]=useState("")
  let [role,setRole]=useState("")
  let [email,setEmail]=useState("")
  let [password,setPassword]=useState("")
  let [batch,setBatch]=useState("")
 
  

    const handleSubmit = async ()=>{
      if (firstName || lastName || mobileNumber || role || email || email ||  password || batch)
        {let res = await axios.post(`${env.apiurl}/users/signup`,{
          firstName,
          lastName,
            mobileNumber,
            role,
            email,
            password,
            batch
        })
        if(res.data.statusCode===200 ||204)
        {
           sessionStorage.setItem('token',res.data.token)
           navigate("/CoRegisterStatus");
        }
      }
 
  };

 
  return (
    <>
         <div >
                   <Form>
        <FormGroup>
          <Label for="firstName">Name</Label>
          <Input
            onChange={(e)=>setFirstName(e.target.value)}
            placeholder="Enter First Name"
           
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input
            onChange={(e)=>setLastName(e.target.value)}
            placeholder="Enter Last Name"
            type="text"
           
          />
        </FormGroup>
        <FormGroup>
          <Label for="mobileNumber">Mobile Number</Label>
          <Input
            onChange={(e)=>setMobileNumber(e.target.value)}
            placeholder="Enter Mobile Number"
            type="mobileNumber"
            
          />
        </FormGroup>
        <FormGroup>
          <Label for="role">Role</Label>
          <Input
            onChange={(e)=>setRole(e.target.value)}
            placeholder="Enter role"
            type="role"
            
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">email</Label>
          <Input
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter email"
            type="text"
       
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">password</Label>
          <Input
            id="password"
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter password"
            type="text"
           
          />
        </FormGroup>
        <FormGroup>
          <Label for="batch">Batch</Label>
          <Input
            id="batch"
            onChange={(e)=>setBatch(e.target.value)}
            placeholder="Enter batch"
            type="text"
          
          />
        </FormGroup>
        <Button onClick={()=>handleSubmit()}>Submit</Button>
                   </Form>  
      </div>
    </>
  );
}

export default CoRegister;
