import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import env from "../enviroinment";
import "../StudentCSS/TeacherDash.css";
import Table from "react-bootstrap/Table";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

function StaffQuery() {
  let [data, setData] = useState([]);
  let tableRef = useRef(null);
  const navigate = useNavigate();

  

  let loadQueries = async () => {
    console.log("1");
    let res = await axios.get(`${env.apiurl}/query/getQueryStaffData`);
    if (res.data.statusCode === 200 || 304) {
      // console.log(data, "1");
      setData(res.data.data);
      // console.log(res.data.data, "2");
      // console.log(data, "3");
    } else {
      alert(res.data.message);
    }
  };

  loadQueries();

  let handleTaskUpdate = async (id) => {
    console.log(id);
    navigate("/upQuery/" + id);
  };

  useEffect(() => {
    loadQueries();
    
  }, [data]);
  return (
    <>
      <div className="taskTable">
        <h3>Student Query Updates</h3>
        <Table  striped responsive bordered hover ref={tableRef}>
          <thead>
            <tr>
              <th>
                <h5>Sl No</h5>
              </th>
              <th>
                <h5>Email</h5>
              </th>
              <th>
                <h5>Batch</h5>
              </th>
              <th>
                <h5>Categories </h5>
              </th>
              <th>
                <h5>Title </h5>
              </th>
              <th>
                <h5>Topic </h5>
              </th>
              <th>
                <h5>Description </h5>
              </th>
              <th>
                <h5>Status</h5>
              </th>
              <th>
                <h5>Assign to</h5>
              </th>
              <th>
                <h5>Joining Lnk</h5>
              </th>
              <th>
                <h5>Remark</h5>
              </th>
              <th>
                <h5>Update</h5>
              </th>
            </tr>
          </thead>
           <tbody>
            {data.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.email}</td>
                  <td>{e.batch}</td>
                  <td>{e.categories}</td>
                  <td>{e.title}</td>
                  <td>{e.topic}</td>
                  <td>{e.description}</td>
                  <td>{e.status}</td>
                  <td>{e.assign}</td>
                  <td>{e.link}</td>
                  <td>{e.remarks}</td>
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
    </>
  );
}

export default StaffQuery;

