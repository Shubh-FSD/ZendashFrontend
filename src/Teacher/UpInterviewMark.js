import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import env from "../enviroinment";
import "../StudentCSS/UpWebcodeStaff.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UpInterviewMark() {
  const params = useParams();
  const navigate = useNavigate();
  const [marks, setMarks] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [batch, setBatch] = useState("");
  const [interviewTopic, setInterviewTopic] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const getData = async () => {
    let res = await axios.get(
      `${env.apiurl}/interview/UpInterviewMark/${params.id}`
    );
    console.log(res);
    setEmail(res.data.email);
    setBatch(res.data.batch);
    setDate(res.data.date);
    setInterviewTopic(res.data.interviewTopic);
    setMarks(res.data.marks)
  
  };

  const handleSubmit = async () => {
    let  res =await axios.put(
      `${env.apiurl}/interview/UpInterviewMark/${params.id}`,
      {
        email,
        marks,batch,date,interviewTopic
      }
    );

    if (res.data.statusCode === 200||304){
      notify();
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

 const handleBack = () => {
  navigate("/teacherDash/interview")
  
};


  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="container-fluid back">
      <h1>Update Interview Mark</h1>
      <Form>
      <FormGroup>
          <Label for="batch">Batch</Label>
          <Input
            onChange={(e)=> {setBatch(e.target.value)}}
            value={batch}
            placeholder="Enter batch"
            type="text"
            disabled={isDisabled}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            onChange={(e)=> {setEmail(e.target.value)}}
            value={email}
            placeholder="Enter Email"
            type="email"
            disabled={isDisabled}
          />
        </FormGroup>
        <FormGroup>
          <Label for="interviewTopic">interview Topic</Label>
          <Input
            onChange={(e)=> {setInterviewTopic(e.target.value)}}
            value={interviewTopic}
            placeholder="Enter interviewTopic"
            type="interviewTopic"
          />
        </FormGroup>
        <FormGroup>
          <Label for="date">Date</Label>
          <Input
            onChange={(e)=> {setDate(e.target.value)}}
            value={date}
            placeholder="Enter date"
            type="date"
          />
           </FormGroup>
          <FormGroup>
          <Label for="marks">Marks</Label>
          <Input
            onChange={(e)=> {setMarks(e.target.value)}}
            value={marks}
            placeholder="Enter marks"
            type="text"
          />
        </FormGroup>
        <Button className="mx-2 mt-2" style={{"background" : "green","width":"6rem"}}
          onClick={() => {
            handleSubmit();
            
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
