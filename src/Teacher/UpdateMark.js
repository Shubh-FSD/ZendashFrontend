import React, {  useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import env from "../enviroinment";


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
        navigate("task");
    }

};

  return (
    <Container className="wallpaper1">
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
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </Container>
  );
}
