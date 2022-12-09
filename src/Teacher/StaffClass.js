import React, { useEffect, useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Button, FormGroup, Input, Label } from "reactstrap";
import env from "../enviroinment";
import "../StudentCSS/TeacherDash.css";
import Table from "react-bootstrap/Table";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function StaffClass() {
  let [date, setDate] = useState("");
  const [topic, setTopic] = useState("");
  let [batch, setBatch] = useState("");
  let [data, setData] = useState([]);
  const [meetLink, setMeetLink] = useState();
  let tableRef = useRef(null);

  const handleSubmit = async () => {
    
    if (batch && meetLink && topic && date) {
      let res = await axios.post(`${env.apiurl}/class/sendclassData`, {
        batch,
        meetLink,
        topic,
        date,
      });
      if (res.data.statusCode === 200 || 204) {
        notify()
      }
    }
    else {
      notifyWarn()
    }

    setTopic('');
    setBatch('');
    setMeetLink('');
  };

  let loadData = async () => {
    let res = await axios.get(`${env.apiurl}/class/getClassData`);
    if (res.data.statusCode === 200 || 304) {
      setData(res.data.data);
    } else {
      alert(res.data.message);
    }
  };

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
 

  useEffect(() => {
    loadData();  
  }, [data]);

  return (
    <>
      <div>
        <h5>Class Section</h5>
        <Form>
          <div className="col">
            <div className="row">
            <div className="col">
                <FormGroup>
                  <Label for="topic">Topic</Label>
                  <Input
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Enter Topic"
                    type="topic"
                    value={topic}
                  />
                </FormGroup>
              </div>
              <div className="col">
                <FormGroup>
                  <Label for="batch">Batch</Label>
                  <Input
                    onChange={(e) => setBatch(e.target.value)}
                    placeholder="Enter Batch"
                    type="text"
                    value={batch}
                  />
                </FormGroup>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <FormGroup>
                  <Label for="meetLink">Meet Link</Label>
                  <Input
                    onChange={(e) => setMeetLink(e.target.value)}
                    placeholder="Enter Meet Link"
                    type="meetLink"
                    value={meetLink}
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
      <ToastContainer />
    </>
  );
}

export default StaffClass;
