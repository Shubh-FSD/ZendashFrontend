import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import env from "../enviroinment";
import "../StudentCSS/UpWebcodeStaff.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UpWebcodeMark() {
  const params = useParams();
  const navigate = useNavigate();
  const [batch, setBatch] = useState("");
  const [webcodeTask, setWebcodeTask] = useState("");
  const [marks, setMarks] = useState("");
  const [email, setEmail] = useState("");
  const [webcodeSolution, setWebcodeSolution] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const getData = async () => {
    let res = await axios.get(`${env.apiurl}/webcode/getWebData/${params.id}`);
    console.log(res);
    setEmail(res.data.email);
    setBatch(res.data.batch);
    setWebcodeTask(res.data.webcodeTask);
    setWebcodeSolution(res.data.webcodeSolution);
    setMarks(res.data.marks);
  };

  const handleSubmit = async () => {
     await axios.put(
      `${env.apiurl}/webcode/updateWebMarks/${params.id}`,
      {
        email,
        batch,
        webcodeTask,
        webcodeSolution,
        marks,
      }
    );
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

  const handleBack = () => {
    navigate("/teacherDash/interview")
    
  };


  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="container-fluid back">
      <h1>Update Webcode Mark</h1>
      <Form>
        <FormGroup>
          <Label for="batch">Batch</Label>
          <Input
            onChange={(e) => {
              setBatch(e.target.value);
            }}
            value={batch}
            placeholder="Enter batch"
            type="text"
            disabled={isDisabled}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            placeholder="Enter Email"
            type="email"
            disabled={isDisabled}
          />
        </FormGroup>
        <FormGroup>
          <Label for="webcodeTask">Webcode Task</Label>
          <Input
            onChange={(e) => {
              setWebcodeTask(e.target.value);
            }}
            value={webcodeTask}
            placeholder="Enter webcodeTask"
            type="webcodeTask"
          />
        </FormGroup>
        <FormGroup>
          <Label for="webcodeSolution">Webcode Task Solution</Label>
          <Input
            onChange={(e) => {
              setWebcodeSolution(e.target.value);
            }}
            value={webcodeSolution}
            placeholder="Enter Webcode Solution"
            type="webcodeSolution"
          />
        </FormGroup>
        <FormGroup>
          <Label for="marks">Marks</Label>
          <Input
            onChange={(e) => {
              setMarks(e.target.value);
            }}
            value={marks}
            placeholder="Enter marks"
            type="text"
          />
        </FormGroup>
        <Button className="mx-2 mt-2" style={{"background" : "green","width":"6rem"}}
          onClick={() => {
            handleSubmit();
            notify();
          }}
        >
          Submit
        </Button>
        <Button className="mx-2 mt-2" style={{"background" : "blue","width":"6rem"}}
          onClick={() => {
            handleBack();
          }}
         
        >
          Back
        </Button>
      </Form>
      <ToastContainer />
    </section>
  );
}
