import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import env from "../enviroinment";
import "../StudentCSS/UpWebcodeStaff.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UpCordi() {
  const params = useParams();
  const navigate = useNavigate();
  let [firstName,setFirstName]=useState("")
  let [lastName,setLastName]=useState("")
  let [mobileNumber,setMobileNumber]=useState("")
  let [role,setRole]=useState("")
  let [email,setEmail]=useState("")

  const getData = async () => {
    let res = await axios.get(`${env.apiurl}/users/getUpCordiData/${params.id}`);
    setFirstName(res.data.firstName);
    setLastName(res.data.lastName);
    setMobileNumber(res.data.mobileNumber);
    setRole(res.data.role);
    setEmail(res.data.email);
  };

  const handleSubmit = async () => {
     let res = await axios.put(
      `${env.apiurl}/users/updateCordi/${params.id}`,
      {
        firstName,
        lastName,
        mobileNumber,
        role,
        email,
   
      }
    );
    if(res.data.statusCode===200 ||304)
    {
       notify()
    }
  };

  const notify =  () => {
     toast.success(' Updatation done!!!!!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    ;
  };

  const handleBack = () => {
    navigate("/CordinatorDash/AddCordinator")
    
  };


  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="container-fluid back">
      <h1>Update Cordinator Details</h1>
      <Form>
        <div className="row">
        <div className="col"><FormGroup>
          <Label for="firstName">First Name</Label>
          <Input
            onChange={(e)=>setFirstName(e.target.value)}
            placeholder="Enter First Name"
           
            type="text"
            value={firstName}
          />
        </FormGroup></div>
        <div className="col"><FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input
            onChange={(e)=>setLastName(e.target.value)}
            placeholder="Enter Last Name"
            type="text"
            value={lastName}
           
          />
        </FormGroup></div>
        </div>
        <div className="row">
        <div className="col"><FormGroup>
          <Label for="mobileNumber">Mobile Number</Label>
          <Input
            onChange={(e)=>setMobileNumber(e.target.value)}
            placeholder="Enter Mobile Number"
            type="mobileNumber"
            value={mobileNumber}
            
          />
        </FormGroup></div>
        <div className="col">
        <FormGroup>
        <label>Role</label>
            <div class="form-floating">
              <select
                class="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
                onChange={(e)=>setRole(e.target.value)} 
                value={role}
              >
                <option selected>Open this select menu</option>
                <option value="Student">Student</option>

              </select>
            </div>
        </FormGroup>
        </div>

        </div>
       
        <div className="row"><FormGroup>
          <Label for="email">Email</Label>
          <Input
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter email"
            type="text"
            value={email}
       
          />
        </FormGroup>
        </div>
        <div className="row">
        </div>
        <Button className="mx-2 mt-2"
          style={{ background: "green", width: "6rem" }} onClick={()=>handleSubmit()}>Submit</Button>
        <Button className="mx-2 mt-2"
          style={{ background: "blue", width: "6rem" }} onClick={()=>handleBack()}>back</Button>
 </Form>  
      <ToastContainer />
    </section>
  );
}
