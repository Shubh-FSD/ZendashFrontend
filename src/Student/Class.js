import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import env from "../enviroinment";
import "../StudentCSS/TeacherDash.css";
import Table from "react-bootstrap/Table";

function Class() {
  let [data, setData] = useState([]);
  let tableRef = useRef(null);
  let token = localStorage.getItem("token"); 

  let loadData = async () => {
    let res = await axios.get(`${env.apiurl}/class/getStuClassData`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      }});

    if (res.data.statusCode === 200 || 304) {
      setData(res.data.data);
    } else {
      alert(res.data.message);
    }
  };

  useEffect(() => {
    loadData();  
  }, [data]);
  return (
       <div className="taskTable">
        <h5>Student Class Scheduled List</h5>
        <Table striped responsive="md" bordered hover ref={tableRef}>
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Topic</th>
              <th>Batch</th>
              <th>Date </th>
              <th>Meet Link</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.topic}</td>
                  <td>{e.batch}</td>
                  <td>{e.date}</td>
                  <td><a href = {e.meetLink}>{e.meetLink}</a></td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div> 
  )
}

export default Class;



