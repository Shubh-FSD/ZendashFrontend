import React, { useState, useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Button, FormGroup, Input, Label } from "reactstrap";
import env from "../enviroinment";
import "../StudentCSS/TeacherDash.css";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";


function StaffInterview() {
  const [interviewTopic, setInterviewTopic] = useState("");
  let [batch, setBatch] = useState("");
  let [date, setDate] = useState(""); 
  let [data, setData] = useState([]);
  let [values, setValues] = useState([]);
  const [email, setEmail] = useState();
  let tableRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log(email,"EMAILLLLL")
    if (batch || interviewTopic || email ||date ) {
      let res = await axios.post(`${env.apiurl}/interview/sendInterviewData`, {
        batch,
        email,
        interviewTopic,
        date,
      });
      if (res.data.statusCode === 200 || 204) {
        alert("Task added");
      }
    }
  };

  let handleMarkUpdate = (id) => {
    console.log(id)
    navigate("upInter/" + id);
  };

  let loadData = async () => {
    let res = await axios.get(`${env.apiurl}/interview/getInterviewData`);
    if (res.data.statusCode === 200 || 304) {
      setData(res.data.data);
    } else {
      alert(res.data.message);
    }
  };

  let loadEmailData = async () => {
    let res = await axios.get(`${env.apiurl}/users/getEmailData`);
    if (res.data.statusCode === 200 || 304) {
      setValues(res.data.dataEmail);
    } else {
      alert(res.data.message);
    }
  };



  useEffect(() => {
    loadData();
    loadEmailData();
  }, []);


  return (
    <>
      <div>
        <Form>
          <div className="col">
            <div className="row">
              <div className="col">
                 <FormGroup className="col"> 
                 <Label for="email" className="row">Select Email</Label>
                  <select   onChange={(e) => setEmail(e.target.value)}  className="row" >
                  <option value="none" hidden >Select</option> 
                  {values.map((opts, i) => { 
                    return (
                    
                    <option key={i} >{opts.email}</option> ) }
                  )}
                  </select>
                 </FormGroup> 
              </div>
              <div className="col">
                <FormGroup>
                  <Label for="batch">Batch</Label>
                  <Input
                    onChange={(e) => setBatch(e.target.value)}
                    placeholder="Enter Batch"
                    type="text"
                  />
                </FormGroup>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <FormGroup>
                  <Label for="interviewTopic">Interview Topic</Label>
                  <Input
                    onChange={(e) => setInterviewTopic(e.target.value)}
                    placeholder="Enter Interview Topic"
                    type="interviewTopic"
                  />
                </FormGroup>
              </div>
              <div className="col">
                <FormGroup>
                  <Label for="date">Date</Label>
                  <Input
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="Enter date"
                    type="date"
                  />
                </FormGroup>
              </div>
            </div>
            <div className="row">
              <Button onClick={() => handleSubmit()}>Submit</Button>
            </div>
          </div>
        </Form>
      </div>
      <div className="taskTable">
        <h5>Student Task Updates</h5>
        <Table striped bordered hover ref={tableRef}>
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Email</th>
              <th>Batch</th>
              <th>Date </th>
              <th>Interview Topic</th>
              <th>Marks</th>
              <th>Update</th>
            </tr>
          </thead>
           <tbody>
            {data.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.email}</td>
                  <td>{e.batch}</td>
                  <td>{e.date}</td>
                  <td>{e.interviewTopic}</td>
                  <td>{e.marks}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => handleMarkUpdate(e._id)}
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
    </>
  );
}

export default StaffInterview;
