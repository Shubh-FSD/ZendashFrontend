import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import StudentDash from "./Student/StudentDash";
import "./App.css";
import CordinatorDash from "./Cordinator/CordinatorDash";
import Forgot from "./LoginComponents/Forgot";
import ForgotReq from "./LoginComponents/ForgotReq";
import Login from "./LoginComponents/Login";
import Register from "./LoginComponents/Register";
import RegisterReq from "./LoginComponents/RegisterReq";
import Request from "./LoginComponents/Request";
import TeacherDash from "./Teacher/TeacherDash";
import StaffQuery from "./Teacher/StaffQuery";

function App() {
  return (
    <div>
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-column">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Forgot" element={<Forgot />} />
            <Route path="/ForgotReq" element={<ForgotReq />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/RegisterReq" element={<RegisterReq />} />
            <Route path="/Request" element={<Request />} />
            <Route path="/CordinatorDash" element={<CordinatorDash />} />
            <Route path="/StudentDash/*" element={<StudentDash />} />
            {/* <Route path="/TeaherDash" element={<TeacherDash />}>
                  <Route path="/" element={<StaffTask />} >
                               <Route path="/query" element={<StaffQuery />} />
                           <Route path="/webcode" element={<StaffWebcode />} />
                            <Route path="/interview" element={<StaffInterview />} />
             
                 </Route> */}
            <Route path="/teacherDash" element={<TeacherDash />} >
            <Route index element={<StaffQuery />} />
              <Route path="query" element={<StaffQuery />} />       
            </Route>

            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
