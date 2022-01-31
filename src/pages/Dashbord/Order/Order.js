import React from "react";
import { Button, Card } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Order = ({ carOrder }) => {
  const {
    carName,
    clientName,
    _id,
    email,
    imageUrl,
    status,
    carOrders,
    setCarOrders,
  } = carOrder;

  const handleDeleteOrder = (id) => {
    const proceed = window.confirm("Are you want to sure to delete this file");
    if (proceed) {
      const url = `https://mighty-journey-57918.herokuapp.com/allCarOrders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("cancle order successfully");
            const remaining = carOrders?.filter(
              (carOrder) => carOrder?._id !== id
            );
            setCarOrders(remaining);
          }
        });
    }
  };

  return (
    <div>
      <Card>
        <img className="w-100" src={imageUrl} alt="" />
        <Card.Body>
          <Card.Title>{carName}</Card.Title>
          <Card.Text>Client Name: {clientName}</Card.Text>
          <Card.Text>Email : {email}</Card.Text>
          <Card.Text>status : {status}</Card.Text>
          <Button onClick={() => handleDeleteOrder(_id)} variant="danger">
            Cancle Order
          </Button>
        </Card.Body>
      </Card>
      <Outlet></Outlet>
    </div>
  );
};

export default Order;
