import React, { useState , useRef, useEffect} from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import env from "../enviroinment";
import "../StudentCSS/student.css";
import { Button, FormGroup, Input, Label } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Table from "react-bootstrap/Table";

function Query() {
  let [categories, setCategories] = useState("");
  let [topic, setTopic] = useState("");
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [data, setData] = useState([]);
  let tableRef = useRef(null);
  


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

 let token = localStorage.getItem("token"); 

 let loadData = async () => {
  let res = await axios.get(`${env.apiurl}/query/getQueryData`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (res.data.statusCode === 200 || 304) {
    
    setData(res.data.data);
   
  } else {
    alert(res.data.message);
  }
};


const handleSubmit =async() =>{
    if (categories && topic && title &&description ) {
      const res= await axios.post(`${env.apiurl}/query/queryData`, {
        categories,
        topic,
        title,
        description,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      if (res.data.statusCode === 200||304) {
        notify()
      } 
      
    }
    else {
      notifyWarn()
    }

    setTitle('');
    setDescription('');
}




useEffect(() => {
  loadData()
 
}, [data]);

  return (
    <>
    <Form>
    <h3>Welcome to Query Section</h3>
      <div className="row">
        <div className="col">
          <FormGroup>
            <label>Categories</label>
            <div class="form-floating">
              <select
                class="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
                onChange={(e) => setCategories(e.target.value)} 
              >
                <option selected>Open this select menu</option>
                <option value="Cordination">Cordination</option>
                <option value="Task Doubt">Task Doubt</option>
                <option value="Placement">Placement</option>
                <option value="Pre-bootcamp">Pre-bootcamp</option>
                <option value="Webcode">Webcode</option>
                <option value="Zenclass-Doubt">Zenclass-Doubt</option>
              </select>
            </div>
          </FormGroup>
        </div>
        <div className="col">
          <FormGroup>
            <label>Topic</label>
            <div class="form-floating">
              <select
                class="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
                onChange={(e) => setTopic(e.target.value)} 
              >
                <option selected>Open this select menu</option>
                <option value="React">React</option>
                <option value="Javascript">Javascript</option>
                <option value="Nodejs">Nodejs</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="Mongodb">Mongodb</option>
                <option value="SQL">SQL</option>
              </select>
            </div>
          </FormGroup>
        </div>
      </div>
      
        <div className="col">
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Title"
              type="title"
              value={title}
            />
          </FormGroup>
        </div>
        <div className="col">
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Description
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(e) => setDescription(e.target.value)} 
              value={description}
            ></textarea>
          </div>
        </div>
   <Button className="mx-2 mt-2" style={{"background" : "green","width":"8rem"}}
          onClick={() => {
            handleSubmit()   
          }}
        >
          Submit
        </Button>
    </Form>
    <div  className="taskTable">
        <h3>Student Query Updates</h3>
        <Table striped responsive bordered hover ref={tableRef}>
          <thead>
            <tr>
              <th><h5>Sl No</h5></th>
              <th><h5>Email</h5></th>
              <th><h5>Title</h5></th>
              <th><h5>Topic</h5></th>
              <th><h5>Description</h5></th>
              <th><h5>Batch</h5></th>
              <th><h5>Categories </h5></th>
              <th><h5>Status</h5></th>
              <th><h5>Assign to</h5></th>
              <th><h5>Joining Lnk</h5></th>
              <th><h5>Remark</h5></th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.email}</td>
                  <td>{e.title}</td>
                  <td>{e.topic}</td>
                  <td>{e.description}</td>
                  <td>{e.batch}</td>
                  <td >{e.categories}</td>
                   <td>{e.status}</td> 
                   <td>{e.assign}</td>
                   <td>{e.link}</td> 
                   <td>{e.remarks}</td>
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

export default Query;
