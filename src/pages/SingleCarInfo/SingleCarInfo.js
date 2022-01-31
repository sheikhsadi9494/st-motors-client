import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Car = ({carData}) => {
    const { name, img, discription, price, _id} = carData;

  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>Price: {price}</Card.Text>
            <Card.Text>{discription}</Card.Text>
          </Card.Body>
          <Link to={`/purchase/${_id}`}>
             <Button className="w-50 mx-3 mb-3" verient="warning">Buy Now</Button>
          </Link>
        </Card>
      </Col>
    </div>
  );
};

export default Car;
