import React, { useEffect,useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Button, FormGroup, Input, Label } from "reactstrap";
import env from "../enviroinment";
import { useNavigate } from "react-router-dom";
import "../StudentCSS/TeacherDash.css";
import Table from "react-bootstrap/Table";

function StaffTask() {
  const navigate = useNavigate();
  let [task, setTask] = useState("");
  let [data, setData] = useState([]);
  let [batch, setBatch] = useState("");
  let tableRef = useRef(null);

  const handleSubmit = async () => {
    if (batch || task) {
      let res = await axios.post(`${env.apiurl}/task/taskSend`, {
        batch,
        task
      });
      if (res.data.statusCode === 200 || 204) {
        alert("Task added");
      }
    }
  };

  let handleTaskUpdate = async (id) => {
    console.log(id)
    navigate("updateMark/" + id);
  };

  let loadData = async () => {
    let res = await axios.get(`${env.apiurl}/taskSolution/getStudentTaskData`);
    if (res.data.statusCode === 200 || 304) {
      setData(res.data.data);
    } else {
      alert(res.data.message);
    }

  };



  useEffect(() => {
    loadData();
   
  }, []);

  return (
   
      <div >
      <div >
      <h5>Enter Batch and Task, to Assign task to the students</h5>
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
          <Button onClick={() => handleSubmit()}>Submit</Button>
        </Form>
        </div>
        <div  className="taskTable">
        <h5>Student Task Updates</h5>
        <Table striped bordered hover ref={tableRef}>
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Email</th>
              <th>Batch</th>
              <th>Task </th>
              <th>Task solution</th>
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
                  <td >{e.task}</td>
                   <td>{e.taskSolution}</td> 
                   <td>{e.marks}</td>
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
      </div>
  
  );
}

export default StaffTask;
