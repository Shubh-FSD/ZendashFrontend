

import React, { useState, useEffect } from "react";
import { Chart as ChartJS, BarElement,CategoryScale,LinearScale } from "chart.js";
import axios from "axios";
import env from "../enviroinment";
import "../StudentCSS/TeacherDash.css";

import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale,LinearScale,BarElement);
let token = localStorage.getItem("token");

const Lines = () => {
  const [chart, setChart] = useState({});
  const [query, setQuery] = useState({});
  const [interview, setInterview] = useState({});
  const [webcode, setWebcode] = useState({});
  const [task, setTask] = useState({}); 
      console.log("chart", chart);
      
  var data = {
    labels: ["No of Webcode Task Solved", "No of Interview Scheduled", "No of Task Solved","No Of Query Raised"],
    datasets: [
      {
        label: "Student",
        data: [webcode, interview, task,query],
        backgroundColor: [
          "rgba(247, 13, 134, 0.8)",
          " rgba(72, 122, 180, .7);",
          "rgba(232, 247, 13, 0.8)",
          "rgba(13, 13, 247, 0.8)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }

  var options = {
    maintainAspectRatio: false,
    scales: {},
    legend: {
      labels: {
        fontSize: 25,
        
      },
    },
  };

  let loadData = async () => {
    let res1 = await axios.get(`${env.apiurl}/taskSolution/getNoOFTaskSolved`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    let res2 = await axios.get(`${env.apiurl}/interview/getNoOFIntSchedu`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    let res3 = await axios.get(`${env.apiurl}/webcode/getNoOfWebSolved`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    let res4 = await axios.get(`${env.apiurl}/query/getNoOfQueryRaised`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    if ((res1.data.statusCode === 200 || 304)||(res2.data.statusCode === 200 || 304)||(res3.data.statusCode === 200 || 304)||(res4.data.statusCode === 200 || 304)) {
    
      setQuery(res4.data.query)
      setInterview(res2.data.interview)
      setWebcode(res3.data.webcode)
      setTask(res1.data.task)
      
    } else {
      alert("Data Not Loaded");
    }
  };

  useEffect(() => {
    loadData();
  }, [query,interview,webcode,task]);


  return (
    <div className="bags">
      <Bar data={data} height={400} options={options} />
    </div>
  );
};

export default Lines;
