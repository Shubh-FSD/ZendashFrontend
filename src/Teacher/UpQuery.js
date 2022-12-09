import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import env from "../enviroinment";
import "../StudentCSS/UpWebcodeStaff.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UpQuery() {
  const params = useParams();
  const navigate = useNavigate();
  const [batch, setBatch] = useState("");
  const [categories, setCategories] = useState("");
  const [topic, setTopic] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [assign, setAssign] = useState("");
  const [link, setLink] = useState("");
  const [remarks, setRemarks] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const getData = async () => {
    let res = await axios.get(
      `${env.apiurl}/query/getQueryPutData/${params.id}`
    );
    console.log(res);
    setEmail(res.data.email);
    setBatch(res.data.batch);
    setRemarks(res.data.remarks);
    setLink(res.data.link);
    setAssign(res.data.assign);
    setStatus(res.data.status);
    setTopic(res.data.topic);
    setTitle(res.data.title);
    setDescription(res.data.description);
    setCategories(res.data.categories);
  };

  const handleSubmit = async () => {
    await axios.put(`${env.apiurl}/query/putQueryData/${params.id}`, {
      email,
      batch,
      categories,
      status,
      assign,
      link,
      remarks,
      topic,
      title,
      description,
    });
  };

  const notify = () => {
    toast.success(" Updatation done!!!!!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleBack = () => {
    navigate("/teacherDash/query");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="container-fluid back">
      <h1>Update Query</h1>
      <Form>
        <div className="row">
          <div className="col">
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
          </div>
          <div className="col">
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
          </div>
        </div>
        <div className="row">
          <div className="col">
            <FormGroup>
              <Label for="categories">Categories</Label>
              <Input
                onChange={(e) => {
                  setCategories(e.target.value);
                }}
                value={categories}
                placeholder="Enter Categories"
                type="categories"
                disabled={isDisabled}
              />
            </FormGroup>
          </div>
          <div className="col">
            <FormGroup>
              <Label for="topic">Topic</Label>
              <Input
                onChange={(e) => {
                  setTopic(e.target.value);
                }}
                value={topic}
                placeholder="Enter topic"
                type="topic"
                disabled={isDisabled}
              />
            </FormGroup>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={title}
                placeholder="Enter title"
                type="title"
                disabled={isDisabled}
              />
            </FormGroup>
          </div>
          <div className="col">
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={description}
                placeholder="Enter description"
                type="description"
                disabled={isDisabled}
              />
            </FormGroup>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <FormGroup>
              <Label for="assign">Assign to</Label>
              <Input
                onChange={(e) => {
                  setAssign(e.target.value);
                }}
                value={assign}
                placeholder="Enter Assignee Email ID "
                type="assign"
              />
            </FormGroup>
          </div>
          <div className="col">
            <FormGroup>
              <label>Status</label>
              <div class="form-floating">
                <select
                  class="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option selected>Open this select menu</option>
                  <option value="Not Taken">Not Taken</option>
                  <option value="In-Process">In-Process</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>
            </FormGroup>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <FormGroup>
              <Label for="link">Link</Label>
              <Input
                onChange={(e) => {
                  setLink(e.target.value);
                }}
                value={link}
                placeholder="Meet link"
                type="link"
              />
            </FormGroup>
          </div>
          <div className="col">
            <FormGroup>
              <Label for="remarks">Remarks</Label>
              <Input
                onChange={(e) => {
                  setRemarks(e.target.value);
                }}
                value={remarks}
                placeholder="remarks"
                type="remarks"
              />
            </FormGroup>
          </div>
        </div>
        <Button
          className="mx-2 mt-2"
          style={{ background: "green", width: "6rem" }}
          onClick={() => {
            handleSubmit();
            notify();
          }}
        >
          Submit
        </Button>
        <Button
          className="mx-2 mt-2"
          style={{ background: "blue", width: "6rem" }}
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
