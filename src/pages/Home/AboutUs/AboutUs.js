import React from "react";
import { Button } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div>
      <div className="d-lg-flex align-items-center my-5 shadow">
        <div >
          <img 
             className="w-100"
            src="https://w6b2m2v6.rocketcdn.me/wp-content/uploads/2019/01/Auto-Salesman-Training.jpeg"
            alt=""
          />
        </div>
        <div className="mx-4 p-3">
          <h1 className="text-left">About Us</h1>
          <p className="fs-3">
            St Motors is the biggest car dealer companey of usa.We sell new serper
            cars, suv's like BMW, Audi, porsche etc. 
          </p>
          <p className="my-4 ">
            We are the best car dealer ship companey of usa. We have the worlds
            best collection of car and suv's. we have worlds top brands cars 
            like audi, bmw, porsche , farrie. We provide 5 years free service 
            to our clients. And we make your car paper ready in two minuts.
          </p>

          <p className="my-2 fs-5"><i className="fas fa-check-circle text-danger"></i> Qualityful Cars</p>
          <p className="my-2 fs-5"><i className="fas fa-check-circle text-danger"></i> 5 Years Service</p>
          <p className="my-2 fs-5"><i className="fas fa-check-circle text-danger"></i> Free Home Delevery</p>
          <Button className="mt-3" variant="danger">About us</Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
