import React, { useState, useRef, useEffect  } from "react";
// import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form";
 import axios from "axios";
 import { Button, FormGroup, Input, Label } from "reactstrap";
  import env from "../enviroinment";
 import { useNavigate } from "react-router-dom";
import "../CSS/CordinatorCSS.css";
import Table from "react-bootstrap/Table";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function StuAdd() {
  const navigate = useNavigate();
  let [firstName,setFirstName]=useState("")
  let [lastName,setLastName]=useState("")
  let [mobileNumber,setMobileNumber]=useState("")
  let [role,setRole]=useState("")
  let [email,setEmail]=useState("")
  let [password,setPassword]=useState("")
  let [batch,setBatch]=useState("")
  let [data, setData] = useState([]);

  let tableRef = useRef(null);
 
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

 const notifyWarn =  () => {
 toast.error('Fill All Mandatory Inputs', {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  });
}

    const handleSubmit = async ()=>{
      if (firstName && lastName && mobileNumber && role  && email &&  password && batch)
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
           notify()
        }
      }
      else {
        notifyWarn()
      }
      setFirstName("")
      setLastName("")
      setMobileNumber("")
      setRole("")
      setEmail("")
      setPassword("")
      setBatch("")

 
  };

  let handleTaskUpdate = async (id) => {
    console.log(id);
    navigate("/Upstu/" + id);
  };

  let loadCoData = async () => {
    let res = await axios.get(`${env.apiurl}/users/getStuData`);
    if (res.data.statusCode === 200 || 304) {
      setData(res.data.data);
    } else {
      alert(res.data.message);
    }
  };
  useEffect(() => {
    loadCoData();
    
  }, [data]);
 
  return (
         <div >
        <Form>
        <h3>Add Students To Organization Workspace</h3>
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
        <div className="col"><FormGroup>
          <Label for="password">Password</Label>
          <Input
            id="password"
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter password"
            type="text"
            value={password}
           
          />
        </FormGroup></div>
        <div className="col"><FormGroup>
          <Label for="batch">Batch</Label>
          <Input
            id="batch"
            onChange={(e)=>setBatch(e.target.value)}
            placeholder="Enter batch Ex. A,B,C"
            type="text"
            value={batch}
          
          />
        </FormGroup></div>
        </div>
        <Button className="mx-2 mt-2"
          style={{ background: "green", width: "6rem" }} onClick={()=>handleSubmit()}>Submit</Button>
 </Form>  
 <div className="taskTable">
        <h3>Student Updates</h3>
        <Table  striped responsive bordered hover ref={tableRef}>
          <thead>
            <tr>
              <th>
                <h5>Sl No</h5>
              </th>
              <th>
                <h5>First Name</h5>
              </th>
              <th>
                <h5>Last Name</h5>
              </th>
              <th>
                <h5>Email</h5>
              </th>
              <th>
                <h5> Batch  </h5>
              </th>
              <th>
                <h5>Role </h5>
              </th>
              <th>
                <h5>Mobile Number </h5>
              </th>
              <th>
                <h5>Update </h5>
              </th>
            
            </tr>
          </thead>
           <tbody>
            {data.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.firstName}</td>
                  <td>{e.lastName}</td>
                  <td>{e.email}</td>
                  <td>{e.batch}</td>
                  <td>{e.role}</td>
                  <td>{e.mobileNumber}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => handleTaskUpdate(e._id)}
                    >
                      Update
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody> 
        </Table>
      </div>
      <ToastContainer />
      </div>
  );
}

export default StuAdd;
