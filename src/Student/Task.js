import React, {  useEffect, useState, useRef} from "react";
 import Button from "react-bootstrap/Button";
 import Table from "react-bootstrap/Table";
 import axios from "axios";
 import env from "../enviroinment";
 import { useNavigate } from "react-router-dom";
import "../StudentCSS/student.css";
import {  FaPen } from "react-icons/fa";
import {  Input} from "reactstrap";

function Task() {
  let [data, setData] = useState([]);
  // let [searchText, setSearchText] = useState([]);
  let navigate = useNavigate();
  let tableRef = useRef(null);
  let [batch, setBatch] = useState("");


  let loadData = async () => {
    let res = await axios.get(`${env.apiurl}/task/getTaskData`);
    if (res.data.statusCode === 200) {
      console.log(res.data,"1")
      console.log(res.data.task,"2")
      setData(res.data.task);
    } else {
      alert(res.data.message);
      // navigate("/login");
    }
  };



  let handleTaskSoluSend = async (id) => {
    navigate("/UpdateLead/" + id);
  };


  useEffect(() => {
    loadData();
  }, []);
  return (
    <div id="content2" >
        <h1>Task List</h1>
        <div className ="Content4">
        <Table  striped bordered hover ref={tableRef}>
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Task</th>
              <th>Task Solution</th>
              <th>Submit Task solution</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.task}</td>
                  <td><Input
              onChange={(e) => setBatch(e.target.value)}
              placeholder="Enter Batch"
              type="text"
            /></td>
                  <td>
                    <Button color="primary" onClick={() => handleTaskSoluSend(e._id)}>
                      <FaPen />
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

export default Task;



