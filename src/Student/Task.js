import React, { useEffect, useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import axios from "axios";
import env from "../enviroinment";

import "../StudentCSS/studentTask.css";

import { Input } from "reactstrap";

function Task() {
  let [data, setData] = useState([]);
  let [valid, setValid] = useState("");
  let tableRef = useRef(null);
  let [taskSolution, setTaskSolution] = useState("");
 const [isDisabled, setIsDisabled] = useState(true);

  let token = localStorage.getItem("token");

  let loadData = async () => {
    let res = await axios.get(`${env.apiurl}/task/getTaskData`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.data.statusCode === 200) {
      setData(res.data.task);
    } else {
    alert(res.data.message);
    }
  };

  let handleTaskSoluSend = async (taskno) => {
    let task = taskno;

    await axios.post(
      `${env.apiurl}/taskSolution/sendTaskSolution`,
      { task, taskSolution },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    //  setIsDisabled(!isDisabled);
  };



  // do uncomment: multiple times rendering
  let getDis = async (eTask) => {
    let res = await axios.get(`${env.apiurl}/taskSolution/block/${eTask}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.data.statusCode === 200 || 304) {
      setValid(res.data.data.taskSolution);
    } else {
      alert(res.data.message);
    }
  };




  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className="taskTable">
      <h1>Task List</h1>
      <div className="Content4">
        <Table striped bordered hover ref={tableRef}>
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
                  <td getDis={getDis(e.task)}>
                   {valid ?   <Input
                      onChange={(e) => setTaskSolution(e.target.value)}
                      placeholder="Submitted "
                      type="text"
                      disabled={isDisabled}
                    /> :
                    <Input
                      onChange={(e) => setTaskSolution(e.target.value)}
                      placeholder="Enter Task Solution"
                      type="text"
                      // disabled={isDisabled}
                    />} 
                  </td>

                  <td>
                    <Button
                      color="primary"
                      onClick={() => handleTaskSoluSend(e.task)}
                    >
                      Submit Task
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
