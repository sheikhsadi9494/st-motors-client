import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import './MakeAdmin.css'

const MakeAdmin = () => {
  const [email, setEmail] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email };
    fetch("https://mighty-journey-57918.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount) {
          setSuccess(true);
        }
      });
  };
  return (
    <div className="bodyHeight">
      <h3 className="text-center mt-5">Make Admin</h3>
      <Form onSubmit={handleSubmit} className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Enter Email</Form.Label>
          <Form.Control
            onBlur={handleOnBlur}
            type="email"
            placeholder="Email"
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Make Admin
        </Button>
      </Form>
      {success && (
        <Alert className="w-25 my-3 mx-auto" variant="success">
          Promoted To Admin Successfully !!
        </Alert>
      )}
      <Outlet />
    </div>
  );
};

export default MakeAdmin;
