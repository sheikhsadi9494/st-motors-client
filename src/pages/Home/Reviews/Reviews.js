import React, { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://mighty-journey-57918.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="overflow-hidden">
      <h2 className="text-center">
        Our Client <span className="bg-warning p-1">Reviews</span>
      </h2>
      <p className="text-center fs-5 text-secondary">
        Our clients says about us
      </p>
      {reviews.length === 0 ?
      <div className='text-center my-5'><Spinner animation="border" /></div>
      :
        <Row xs={1} md={3} className="g-4 mx-3 mb-5">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </Row>}
    </div>
  );
};

export default Reviews;
