import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import useAuth from "../../hooks/useContext";

const BookingModal = ({
  openBooking,
  handleBookingClose,
  details,
  setOrderSuccess,
}) => {
  const { name, img, discription } = details;
  const { user } = useAuth();

  const initailInfo = {
    clientName: user.displayName,
    email: user.email,
    phoneNumber: "",
    address: "",
  };
  const [ordersInfo, setOrdersInfo] = useState(initailInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newOrdersInfo = { ...ordersInfo };
    newOrdersInfo[field] = value;
    setOrdersInfo(newOrdersInfo);
  };

  const handleSubmit = (e) => {
    // collect data
    const carOrder = {
      ...ordersInfo,
      carName: name,
      imageUrl: img,
      status: "pending",
      discription: discription,
    };
    //send data to data base
    fetch("https://mighty-journey-57918.herokuapp.com/carOrders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(carOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setOrderSuccess(true);
          handleBookingClose();
        }
      });
    e.preventDefault();
  };

  return (
    <div>
      <Modal centered show={openBooking} onHide={handleBookingClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="clientName"
                onBlur={handleOnBlur}
                type="text"
                defaultValue={user?.displayName}
                placeholder="Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                onBlur={handleOnBlur}
                type="email"
                defaultValue={user?.email}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                name="phoneNumber"
                onBlur={handleOnBlur}
                type="number"
                placeholder="Phone Number"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Address</Form.Label>
              <Form.Control
                name="address"
                onBlur={handleOnBlur}
                type="text"
                placeholder="Address"
              />
            </Form.Group>

            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BookingModal;
