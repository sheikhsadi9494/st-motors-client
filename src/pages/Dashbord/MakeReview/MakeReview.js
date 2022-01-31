import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useContext";
import { Rating } from "react-simple-star-rating";

const MakeReview = () => {
  const { user } = useAuth();
  const [rating, setRating] = useState(0); // initial rating value
  const [reviewSuccess, setReviewSuccess] = useState(false);

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);
    // other logic
  };
  const [reviewInfo, setReviewInfo] = useState({});

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newReviewInfo = { ...reviewInfo };
    newReviewInfo[field] = value;

    setReviewInfo(newReviewInfo);
  };

  const handleOnSubmit = (e) => {
    //   colleact data
    const review = {
      ...reviewInfo,
      displayName: user.displayName,
      email: user.email,
      rating,
    };
    console.log(review);
    // send data to server
    fetch("https://mighty-journey-57918.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
          setReviewSuccess(true);
        }
      });
    e.preventDefault();
  };

  return (
    <div className="bodyHeight">
      <h1 className="text-center my-4">Make review</h1>
      <div className="mx-auto">
        <Form onSubmit={handleOnSubmit} className="w-50 mx-auto">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Your image url</Form.Label>
            <Form.Control
              type="text"
              name="imageUrl"
              onBlur={handleOnBlur}
              placeholder="image url"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Write your comment</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="comment"
              onBlur={handleOnBlur}
              placeholder="comment..."
            />
          </Form.Group>
          Rate :{" "}
          <Rating
            className="mb-3"
            onClick={handleRating}
            ratingValue={rating}
          />{" "}
          <br />
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Form>
        {
          reviewSuccess && 
          <Alert className="w-50 my-3 mx-auto" variant="success">
          Review Submited Successfully !!
        </Alert>
        }
      </div>
      <Outlet />
    </div>
  );
};

export default MakeReview;
