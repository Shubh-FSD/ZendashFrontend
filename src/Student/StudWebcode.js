// import React, { useEffect, useState, useRef } from "react";
// import Button from "react-bootstrap/Button";
// // import Form from "react-bootstrap/Form";
// import axios from "axios";
// import env from "../enviroinment";
// // import { useNavigate } from "react-router-dom";
// import Table from "react-bootstrap/Table";
// import { Input } from "reactstrap";
// import "../StudentCSS/studentTask.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function StudWebcode() {
//   let [data, setData] = useState([]);
//   let [valid, setValid] = useState("");
//   let [webcodeSolution, setWebcodeSolution] = useState("");
//   const [isDisabled, setIsDisabled] = useState(true);
//   let tableRef = useRef(null);

//   let token = localStorage.getItem("token");

//   let loadData = async () => {
//     let res = await axios.get(`${env.apiurl}/webcode/getStudWebData`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     if (res.data.statusCode === 200) {
//       setData(res.data.WebTaskSol);
//     } else {
//     alert(res.data.message);
//     }
//   };

//   let handleTaskSoluSend = async (taskno) => {
//     let webcodeTask = taskno;

//     await axios.put(
//       `${env.apiurl}/webcode/sendWebSolu`,
//       { webcodeTask, webcodeSolution },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     notify();
//   };



//   // do uncomment: multiple times rendering
//   let getDis = async (eTask) => {
//     let res = await axios.get(`${env.apiurl}/webcode/block/${eTask}`,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     if (res.data.statusCode === 200 || 304) {
//       setValid(res.data.blockData.webcodeSolution);
//       console.log(valid)
//     } else {
//       alert(res.data.message);
//     }
//   };

//   const notify =  () => {
//     toast.success(' Updatation done!!!!!', {
//      position: "top-center",
//      autoClose: 5000,
//      hideProgressBar: false,
//      closeOnClick: true,
//      pauseOnHover: true,
//      draggable: true,
//      progress: undefined,
//      theme: "light",
//      });
//    ;
//  };


//   useEffect(() => {
//     loadData();
//   }, []);

//   return (
//     <div>
//     <div className="taskTable">
//     <h1>Webcode Task</h1>
//     <div className="Content4">
//       <Table striped responsive="md" bordered hover ref={tableRef}>
//         <thead>
//           <tr>
//             <th>Sl No</th>
//             <th>Webcode Task</th>
//             <th>Webcode Task Solution</th>
//             <th>Submit Task solution</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((e, i) => {
//             return (
//               <tr key={i}>
//                 <td>{i + 1}</td>
//                 <td>{e.webcodeTask}</td>
//                 <td getDis={getDis(e.webcodeTask)}>
//                  {valid !=="Yet to submit" ?   <Input
//                     onChange={(e) => setWebcodeSolution(e.target.value)}
//                     placeholder="Submitted "
//                     type="text"
//                     disabled={isDisabled}
//                   /> :
//                   <Input
//                     onChange={(e) => setWebcodeSolution(e.target.value)}
//                     placeholder="Enter Task Solution"
//                     type="text"
                
//                   />} 
//                 </td>

//                 <td>
//                   <Button
//                     color="primary"
//                     onClick={() => handleTaskSoluSend(e.webcodeTask)}
//                   >
//                     Submit Task
//                   </Button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </Table>
//     </div>
    
//   </div> 
//   <ToastContainer />
//   </div> 
//   )
// }

// export default StudWebcode;



import React, { useEffect, useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import env from "../enviroinment";
import Table from "react-bootstrap/Table";
import { Input } from "reactstrap";
import "../StudentCSS/studentTask.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormGroup, Label } from "reactstrap";


function StudWebcode() {
  let [data, setData] = useState([]);
  let [webcodeSolution, setWebcodeSolution] = useState("");
     let [webcodeTask, setWebcodeTask] = useState("");
  let tableRef = useRef(null);
  let [values, setValues] = useState([]);


  let token = localStorage.getItem("token");

  let loadData = async () => {
    let res = await axios.get(`${env.apiurl}/webcode/getMapTable`, {
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


  const handleSubmit = async () => {
    
    if (webcodeSolution && webcodeTask  ) {
      let res = await axios.put(`${env.apiurl}/webcode/sendWeboSolu`, {
        webcodeTask,
        webcodeSolution
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

    setWebcodeSolution('');
    

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

  let loadTaskData = async () => {
    let res = await axios.get(`${env.apiurl}/webcode/getMapTask`, {
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
    <div>
       <Form>
    <div className="col">
      <div className="row">
        <div className="col">
           <FormGroup className="col"> 
           <Label for="email" className="row">Select Webcode Task</Label>
            <select
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
          onChange={(e) => setWebcodeTask(e.target.value)}
        >
          <option selected>Open this select menu</option>
          {values.map((opts, i) => { 
              return (
              
              <option key={i} >{opts.webcodeTask}</option> ) }
            )}
        </select>
           </FormGroup> 
        </div>
        <div className="col">
          <FormGroup>
            <Label for="webcodeSolution">Webcode Solution</Label>
            <Input
              onChange={(e) => setWebcodeSolution(e.target.value)}
              placeholder="Enter webcodeSolution"
              type="text"
              value={webcodeSolution}
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
              <th>Weebcode</th>
              <th>Webcode Task Solution</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.webcodeTask}</td>
                  <td >
                  {e.webcodeSolution}
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
      <h4 style={{color:"red"}}>Taecher Will Assign Task</h4>
    </div> 
  <ToastContainer />
  </div> 
  )
}

export default StudWebcode;



