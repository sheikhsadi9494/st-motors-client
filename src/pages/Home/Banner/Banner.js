import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/P6KXJ1Y/slide-3.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Get Your Dream Car</h3>
            <p>With worlds best car Collections</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/Jkrj9Yy/slide-11.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Get Your Dream Car</h3>
            <p>With worlds best car Collections</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/0c47KkV/slide-2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Get Your Dream Car</h3>
            <p>With worlds best car Collections</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
