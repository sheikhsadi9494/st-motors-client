import React, { useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useContext";

const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const { register, isLoading, user, authError} = useAuth();
  const navigate = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...registerData };
    newLoginData[field] = value;
    setRegisterData(newLoginData);

    e.preventDefault();
  };

  const handleOnSumbit = (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.password2) {
      alert("password did not match");
      return;
    }
    register(registerData.email, registerData.password, registerData.name, navigate);
  };
  return (
    <div>
      <h1 className="text-center mt-5">Register</h1>
      { !isLoading &&      
      <Form onSubmit={handleOnSumbit} className="w-25 mx-auto mt-3">
        <Form.Group className="mb-3">
          <Form.Control
            name="name"
            onBlur={handleOnBlur}
            type="text"
            placeholder="Enter Your Name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            name="email"
            onBlur={handleOnBlur}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            name="password"
            onBlur={handleOnBlur}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            name="password2"
            onBlur={handleOnBlur}
            type="password"
            placeholder="ReEnter Password"
          />
        </Form.Group>

        <Button className="w-100" variant="primary" type="submit">
          Register
        </Button>
        <p className="text-center mt-4">
          Already have an account ?<Link to="/login"> please Login</Link>
        </p>
      </Form>
      }
      {isLoading && <div className='text-center my-5'><Spinner animation="border" /></div>}
      {user?.email && (
        <Alert className="w-25 my-3 mx-auto" variant="success">
          Register Successfully !!
        </Alert>
      )}
      {authError && (
        <Alert className="w-25 my-3 mx-auto" variant="danger">
          {authError}
        </Alert>
      )}
    </div>
  );
};

export default Register;
