import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row, Spinner } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const MangeAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    fetch(`https://mighty-journey-57918.herokuapp.com/allCarOrders`)
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you want to sure to delete this file");
    if (proceed) {
      fetch(`https://mighty-journey-57918.herokuapp.com/allCarOrders/${id}`, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("removed successfully");
            const remaining = allOrders.filter(
              (allOrder) => allOrder._id !== id
            );
            setAllOrders(remaining);
          }
        });
    }
  };

  const handleUpdate = (id) => {
    fetch(`https://mighty-journey-57918.herokuapp.com/allCarOrders/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allOrders.status),
    });
  };

  return (
    <div>
      <h1 className="my-5 text-center">Manage all Orders</h1>
      { allOrders.length === 0 ?
      <div className='text-center my-5'><Spinner animation="border" /></div>
      :
        <Row xs={1} md={4} className="g-4 mx-3 my-4">
        {allOrders.map((allOrder) => (
          <Col key={allOrder._id}>
            <Card>
              <Card.Img variant="top" src={allOrder.imageUrl} />
              <Card.Body>
                <Card.Title>{allOrder.carName}</Card.Title>
                <Card.Text>Client Name: {allOrder.clientName}</Card.Text>
                <Card.Text>Email : {allOrder.email}</Card.Text>
                <Card.Text>status : {allOrder.status}</Card.Text>
                <Button
                className=" mx-2 my-2 text-white"
                  variant="danger"
                  onClick={() => handleDelete(allOrder._id)}
                >
                  Delete Order
                </Button>
                <Button
                  className=" mx-2 my-2 text-white"
                  onClick={() => handleUpdate(allOrder._id)}
                  variant="warning"
                >
                  Update Order
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>}
      <Outlet />
    </div>
  );
};

export default MangeAllOrders;
