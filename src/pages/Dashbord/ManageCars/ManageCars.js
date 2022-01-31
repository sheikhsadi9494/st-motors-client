import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row, Spinner } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const ManageCars = () => {
  const [carsdata, setCarsData] = useState([]);

  useEffect(() => {
    fetch("https://mighty-journey-57918.herokuapp.com/allCars")
      .then((res) => res.json())
      .then((data) => setCarsData(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you want to sure to delete this file");
    if (proceed) {
      fetch(`https://mighty-journey-57918.herokuapp.com/allCars/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("removed successfully");
            const remaining = carsdata.filter((carData) => carData._id !== id);
            setCarsData(remaining);
          }
        });
    }
  };

  return (
    <div className="overflow-hidden my-5">
      <h1 className="text-center mb-5">Manage Cars</h1>
      { carsdata.length === 0 ?
      <div className='text-center my-5'><Spinner animation="border" /></div>
      :
        <Row xs={1} md={3} className="g-4 mx-5">
        {carsdata.map((carData) => (
          <Col className="my-4" key={carData._id}>
            <Card className="border-0 shadow" style={{height: '600px'}}>
              <Card.Img variant="top" src={carData.img} />
              <Card.Body>
                <Card.Title>{carData.name}</Card.Title>
                <Card.Text>Price: {carData.price}</Card.Text>
                <Card.Text>{carData.discription}</Card.Text>
                <Button
                  onClick={() => handleDelete(carData._id)}
                  variant="danger"
                >
                  Remove Car
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

export default ManageCars;
