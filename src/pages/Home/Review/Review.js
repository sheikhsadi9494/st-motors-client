import React from "react";
import { Card, Col } from "react-bootstrap";
import { Rating } from 'react-simple-star-rating'

const Review = ({ review }) => {
  const { displayName, email, comment, imageUrl, rating} = review;

  return (
    <div>
      <Col className="pt-5">
        <Card className="mt-5 border-0 shadow">
          <Card.Img
            className="w-25 rounded rounded-pill mx-auto"
            style={{ marginTop: "-30px" }}
            variant="top"
            src={imageUrl}
          />
          <Card.Body className="mb-2 p-4">
            <Card.Title className="text-center "><Rating ratingValue={rating} /* Available Props */ /></Card.Title>
            <Card.Text className="text-center fs-5">{comment}</Card.Text>
            <Card.Title className="text-primary mt-4">{displayName}</Card.Title>
            <Card.Text className="fs-5">email: {email}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Review;
