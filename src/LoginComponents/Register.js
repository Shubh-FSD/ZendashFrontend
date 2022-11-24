import React, {   useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import axios from 'axios'
import env from '../enviroinment'

export default function Register() {

  const navigate = useNavigate();
  let [firstName,setFirstName]=useState("")
  let [lastName,setLastName]=useState("")
  let [role,setRole]=useState("")
  let [email,setEmail]=useState("")
  let [password,setPassword]=useState("")
  

    const handleSubmit = async ()=>{
      if (firstName && lastName && role && email && password){
        let res = await axios.post(`${env.apiurl}/users/signup`,{
            firstName,
            lastName,
            role,
            email,
            password
        })
        if(res.data.statusCode===200)
        {
           sessionStorage.setItem('token',res.data.token)
           navigate('/RegisterReq') 
        }
      }
      else{ alert("Fill All INFORMATION")}
 
  };

  return (
    <Container>
      <h1>Create Profile</h1>
      <Form>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input
            onChange={(e)=>setFirstName(e.target.value)}
            placeholder="Enter First Name"
            type="text"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input
            onChange={(e)=>setLastName(e.target.value)}
            placeholder="Enter Last Name"
            type="lastName"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="role">Role</Label>
          <Input
            onChange={(e)=>setRole(e.target.value)}
            placeholder="Enter role"
            type="role"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">email</Label>
          <Input
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter email"
            type="text"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">password</Label>
          <Input
            id="password"
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter password"
            type="text"
            required
          />
        </FormGroup>
        <Button onClick={()=>handleSubmit()}>Submit</Button>
      </Form>
    </Container>
  );
}
