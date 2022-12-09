import React, {  useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import env from "../enviroinment";
import "../StudentCSS/UpWebcodeStaff.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function UpdateMark() {
  const params = useParams();
  const navigate = useNavigate();
  const [batch, setBatch]=useState("")
  const [task, setTask]=useState("")
  const [marks, setMarks]=useState("")
  const [email, setEmail]=useState("")
 const[taskSolution,setTaskSolution]=useState("")

  useEffect(()=>{getData()},[])

  const getData = async () => {
    let res = await axios.get(`${env.apiurl}/taskSolution/updateMarksNew/${params.id}`);
console.log(res)
    setEmail(res.data.email);
    setBatch(res.data.batch);
    setTask(res.data.task);
    setTaskSolution(res.data.taskSolution);
    setMarks(res.data.marks)

  };

  
  const handleBack = () => {
    navigate("/teacherDash/task")
    
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
  const handleSubmit = async ()=>{
    let res = await axios.put(`${env.apiurl}/taskSolution/updateMarksNew/${params.id}`,{
        
        email,
        batch,
        task,
        taskSolution,
        marks
  
    })
    // {fun.loadData}
    if(res.data.statusCode===200)
    {    
      notify();
    }

};


  return (
    <section className="container-fluid back">
      <h1>Update Mark</h1>
      <Form>
        <FormGroup>
          <Label for="batch">Batch</Label>
          <Input
            onChange={(e)=> {setBatch(e.target.value)}}
            value={batch}
            placeholder="Enter batch"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            onChange={(e)=> {setEmail(e.target.value)}}
            value={email}
            placeholder="Enter Email"
            type="email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="task">Task</Label>
          <Input
            onChange={(e)=> {setTask(e.target.value)}}
            value={task}
            placeholder="Enter task"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="taskSolution">Task Solution</Label>
          <Input
            onChange={(e)=> {setTaskSolution(e.target.value)}}
            value={taskSolution}
            placeholder="Enter Task Solution"
            type="text"
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
        <Button className="mx-2 mt-2" style={{"background" : "green","width":"6rem"}} onClick={handleSubmit}>Submit</Button>
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
