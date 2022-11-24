import React, { useState } from "react";
// import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Button, FormGroup, Input, Label } from "reactstrap";
import env from "../enviroinment";
import { useNavigate } from "react-router-dom";
//  import Spinner from "react-bootstrap/Spinner";
import "../CSS/Login.css";

function StaffWebcode() {
  const navigate = useNavigate();
  let [task, setTask] = useState("");
  let [batch, setBatch] = useState("");
  let [remarks, setRemarks] = useState("");

  const handleSubmit = async () => {
    if (batch || task) {
      let res = await axios.post(`${env.apiurl}/users/signup`, {
        batch,
        task,
      });
      if (res.data.statusCode === 200 || 204) {
        alert("Task added");
      }
    }
  };

  return (
    <>
      <div>
        <Form>
          <FormGroup>
            <Label for="batch">Batch</Label>
            <Input
              onChange={(e) => setBatch(e.target.value)}
              placeholder="Enter Batch"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="task">Task</Label>
            <Input
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter task"
              type="text"
            />
          </FormGroup>

          <FormGroup>
            <Label for="remarks">Remarks</Label>
            <Input
              id="remarks"
              onChange={(e) => setRemarks(e.target.value)}
              placeholder="Enter Remarks"
              type="text"
            />
          </FormGroup>
          <Button onClick={() => handleSubmit()}>Submit</Button>
        </Form>
      </div>
    </>
  );
}

export default StaffWebcode;
