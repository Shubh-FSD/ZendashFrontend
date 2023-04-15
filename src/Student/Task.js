// import React, { useEffect, useState, useRef } from "react";
// import Button from "react-bootstrap/Button";
// import Table from "react-bootstrap/Table";
// import axios from "axios";
// import env from "../enviroinment";

// import "../StudentCSS/studentTask.css";

// import { Input } from "reactstrap";

// function Task() {
//   let [data, setData] = useState([]);
//   // let [valid, setValid] = useState("");
//   let tableRef = useRef(null);
//   let [taskSolution, setTaskSolution] = useState("");
// //  const [isDisabled, setIsDisabled] = useState(true);

//   let token = localStorage.getItem("token");

//   let loadData = async () => {
//     let res = await axios.get(`${env.apiurl}/task/getTaskData`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     if (res.data.statusCode === 200) {
//       setData(res.data.task);
//     } else {
//     alert(res.data.message);
//     }
//   };

//   let handleTaskSoluSend = async (taskno) => {
//     let task = taskno;

//     await axios.post(
//       `${env.apiurl}/taskSolution/sendTaskSolution`,
//       { task, taskSolution },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     //  setIsDisabled(!isDisabled);
//   };



//   // do uncomment: multiple times rendering
//   // let getDis = async (eTask) => {
//   //   let res = await axios.get(`${env.apiurl}/taskSolution/block/${eTask}`,
//   //   {
//   //     headers: {
//   //       Authorization: `Bearer ${token}`,
//   //     },
//   //   });
//   //   if (res.data.statusCode === 200 || 304) {
//   //     console.log(valid)
//   //     setValid(res.data.data);
//   //     console.log(valid.taskSolution,"ddddddddddd")
//   //   } else {
//   //     alert(res.data.message);
//   //   }
//   // };




//   useEffect(() => {
//     loadData();
//   }, []);
//   return (
//     <div className="taskTable">
//       <h1>Task List</h1>
//       <div className="Content4">
//         <Table striped responsive="md" bordered hover ref={tableRef}>
//           <thead>
//             <tr>
//               <th>Sl No</th>
//               <th>Task</th>
//               <th>Task Solution</th>
//               <th>Submit Task solution</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((e, i) => {
//               return (
//                 <tr key={i}>
//                   <td>{i + 1}</td>
//                   <td>{e.task}</td>
//                   {/* <td getDis={getDis(e.task)}>
//                    {valid ?   <Input
//                       onChange={(e) => setTaskSolution(e.target.value)}
//                       placeholder="Submitted "
//                       type="text"
//                       disabled={isDisabled}
//                     /> :
//                     <Input
//                       onChange={(e) => setTaskSolution(e.target.value)}
//                       placeholder="Enter Task Solution"
//                       type="text"
//                       // disabled={isDisabled}
//                     />}
//                   </td> */}
//                   <td >
//                     <Input
//                       onChange={(e) => setTaskSolution(e.target.value)}
//                       placeholder="Enter Task Solution"
//                       type="text"
                
//                     />
//                   </td>

//                   <td>
//                     <Button
//                       color="primary"
//                       onClick={() => handleTaskSoluSend(e.task)}
//                     >
//                       Submit Task
//                     </Button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </Table>
//       </div>
//       <h4 style={{color:"red"}}>Taecher Will Assign Task</h4>
//     </div>
//   );
// }

// export default Task;


import React, { useEffect, useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import axios from "axios";
import env from "../enviroinment";
import { FormGroup, Input, Label } from "reactstrap";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../StudentCSS/studentTask.css";


function Task() {
  let [data, setData] = useState([]);
  let tableRef = useRef(null);
  let [taskSolution, setTaskSolution] = useState("");
  let [task, setTask] = useState("");
let [values, setValues] = useState([]);


  let token = localStorage.getItem("token");

  let loadData = async () => {
    let res = await axios.get(`${env.apiurl}/task/getTaskData`, {
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

  const handleSubmit = async () => {
    
    if (task && taskSolution  ) {
      let res = await axios.post(`${env.apiurl}/taskSolution/sendTaskSolution`, {
        task,
        taskSolution
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.data.statusCode === 200 || 204) {
          notify()
        } 
    }
    else {
      notifyWarn()
    }

    setTaskSolution('');
    

  };

  let loadTaskData = async () => {
    let res = await axios.get(`${env.apiurl}/taskSolution/getTaskDataNew`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.data.statusCode === 200 || 304) {
      setValues(res.data.data);
    } else {
      alert(res.data.message);
    }
  };

  useEffect(() => {
    loadData();
    loadTaskData();  
  }, [values,data]);

  return (
    <> 
     <Form>
    <div className="col">
      <div className="row">
        <div className="col">
           <FormGroup className="col"> 
           <Label for="email" className="row">Select Task</Label>
            <select
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
          onChange={(e) => setTask(e.target.value)}
        >
          <option selected>Open this select menu</option>
          {data.map((opts, i) => { 
              return (
              
              <option key={i} >{opts.task}</option> ) }
            )}
        </select>
           </FormGroup> 
        </div>
        <div className="col">
          <FormGroup>
            <Label for="taskSolution">Task Solution</Label>
            <Input
              onChange={(e) => setTaskSolution(e.target.value)}
              placeholder="Enter taskSolution"
              type="text"
              value={taskSolution}
            />
          </FormGroup>
        </div>
      </div>
      <div className="row">
        <Button onClick={() => handleSubmit()}>Submit</Button>
      </div>
    </div>
  </Form>
  <div className="taskTable">
      <h1>Task List</h1>
      <div className="Content4">
        <Table striped responsive="md" bordered hover ref={tableRef}>
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Task</th>
              <th>Task Solution</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            {values.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.task}</td>
                  <td >
                  {e.taskSolution}
                  </td>
                  <td >
                  {e.marks}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <h4 style={{color:"red"}}>Teacher Will Assign Task</h4>
    </div>
    <ToastContainer /></>
    
  );
}

export default Task;
