import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import env from "../enviroinment";
import "../StudentCSS/studentTask.css";
import Table from "react-bootstrap/Table";

function Interview() {
  let [data, setData] = useState([]);
  let tableRef = useRef(null);

  let token = localStorage.getItem("token");

  let loadData = async () => {
    let res = await axios.get(`${env.apiurl}/interview/getInterviewDataStud`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.data.statusCode === 200) {
      setData(res.data.data);
    } else {
      alert(res.data.message);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="taskTable">
      <h1>Interview Notification</h1>
      <div className="Content4">
        <Table striped responsive="md" bordered hover ref={tableRef}>
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Email</th>
              <th>Interview Task</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.email}</td>
                  <td>{e.interviewTopic}</td>

                  <td>{e.marks}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <h4 style={{color:"red"}}>Teacher Will Schedule Interview</h4>
    </div>
  );
}

export default Interview;
