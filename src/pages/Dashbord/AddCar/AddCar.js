import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const AddCar = () => {
  const [cardetails, setCarDetails] = useState({});
  const [carAddSuccess, setCarAddSuccess] = useState(false);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newDetails = { ...cardetails };
    newDetails[field] = value;
    setCarDetails(newDetails);
  };

  const handleOnSubmit = (e) => {
    // collect data
    const details = {
      ...cardetails,
    };
    console.log(details);
    // send data to server
    fetch("https://mighty-journey-57918.herokuapp.com/allCars", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(details),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setCarAddSuccess(true);
        }
      });
    e.preventDefault();
  };

  return (
    <div className="bodyHeight">
      <h2 className="text-center my-4">Add Car</h2>
      <Form className="w-50 mx-auto" onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Car Name</Form.Label>
          <Form.Control
            name="name"
            onBlur={handleOnBlur}
            type="text"
            placeholder="Enter Car Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Car Price</Form.Label>
          <Form.Control
            name="price"
            onBlur={handleOnBlur}
            type="text"
            placeholder="Enter Car Price"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Car Image url</Form.Label>
          <Form.Control
            name="img"
            onBlur={handleOnBlur}
            type="text"
            placeholder="Image url"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Car Details</Form.Label>
          <Form.Control
            name="discription"
            onBlur={handleOnBlur}
            placeholder="details..."
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Button type="submit">Add Car</Button>
      </Form>
      {carAddSuccess && (
        <Alert className="w-25 my-3 mx-auto" variant="success">
          Car Added Succesfully !!
        </Alert>
      )}
      <Outlet />
    </div>
  );
};

export default AddCar;
