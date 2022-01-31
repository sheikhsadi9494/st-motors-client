import React, { useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useContext";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { loginUser, user, authError, isLoading, signInWithGoogle} = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    e.preventDefault();
  };

  const handleOnSumbit = (e) => {
    e.preventDefault();
    loginUser(loginData.email, loginData.password, location, navigate);
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle(location, navigate);
  }
  return (
    <div>
      <h1 className="text-center mt-5">Login</h1>
      <Form onSubmit={handleOnSumbit} className="w-25 mx-auto mt-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            name="email"
            onBlur={handleOnBlur}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="password"
            onBlur={handleOnBlur}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button className="w-100" variant="primary" type="submit">
          login
        </Button>
        <p className="text-center mt-4">
          new user ? <Link to="/register">please register</Link>
        </p>
      </Form>
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

      <p className="my-3 text-center">--------------- or ---------------</p>
      <div className="w-25 mx-auto mb-5">
        <Button onClick={handleSignInWithGoogle} className="mx-auto w-100" variant="warning">
          Sign in with google
        </Button>
      </div>
    </div>
  );
};

export default Login;
