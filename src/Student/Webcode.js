import React, { useEffect, useState, useRef } from "react";
import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import axios from "axios";
import env from "../enviroinment";
// import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { Input } from "reactstrap";
import "../StudentCSS/studentTask.css";

function Webcode() {
  let [data, setData] = useState([]);
  let [valid, setValid] = useState("");
  let [webcodeSolution, setWebcodeSolution] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  let tableRef = useRef(null);

  let token = localStorage.getItem("token");

  let loadData = async () => {
    let res = await axios.get(`${env.apiurl}/webcode/getWebcodeData`, {
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
    let webcodeTask = taskno;

    await axios.post(
      `${env.apiurl}/taskSolution/sendTaskSolution`,
      { webcodeTask, webcodeSolution },
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
    // let res = await axios.get(`${env.apiurl}/taskSolution/block/${eTask}`,
    // {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // });
    // if (res.data.statusCode === 200 || 304) {
    //   setValid(res.data.data.taskSolution);
    // } else {
    //   alert(res.data.message);
    // }
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
            <th>Webcode Task</th>
            <th>Webcode Task Solution</th>
            <th>Submit Task solution</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{e.webcodeTask}</td>
                <td getDis={getDis(e.webcodeTask)}>
                 {valid ?   <Input
                    onChange={(e) => setWebcodeSolution(e.target.value)}
                    placeholder="Submitted "
                    type="text"
                    disabled={isDisabled}
                  /> :
                  <Input
                    onChange={(e) => setWebcodeSolution(e.target.value)}
                    placeholder="Enter Task Solution"
                    type="text"
                
                  />} 
                </td>

                <td>
                  <Button
                    color="primary"
                    onClick={() => handleTaskSoluSend(e.webcodeTask)}
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
  )
}

export default Webcode;



