
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalNew() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button className="mt-2" variant="primary" onClick={() => setShow(true)}>
      Mandatory Instruction To Start App
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
          Mandatory Instruction To Start App
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
          <h3>Initial Essentials To Run App</h3>
          <div>
          <h4>Cordinator</h4>
          <p>Cordinator has rights to add cordinator, student and teacher into the organization workspace</p>
          <p>Email: 1999shubhamjoshi@gmail.com</p>
          <p>Password: 123</p>
          </div>
          <div>
          <h4>Teacher</h4>
          <p>Teacher has rights to assign task, webcode task, interview task , to take query,put remarks over query, Provide marks to differant tasks </p>
          <p>Email: teacher@gmail.com</p>
          <p>Password:teacher@123</p>
</div>
           <div>
          <h4>Student</h4>
          <p>Student has rights to see updates regarding next actions such as class schedules ,to submit task & to raise query </p>
          <p>Email: student@gmail.com</p>
          <p>Password: student@123</p>
          </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

 export default ModalNew;