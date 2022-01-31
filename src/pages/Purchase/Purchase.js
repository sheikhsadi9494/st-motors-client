import React, { useEffect, useState } from "react";
import { Alert, Button, Card, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";
import Navigation from "../Shered/Navigation/Navigation";

const Purchase = () => {
  const { productId } = useParams();
  const [details, setDetails] = useState({});
  const [orderSuccess, setOrderSuccess] = useState(false);

  const [openBooking, setOpenBooking] = useState(false);
  const handleBookingClose = () => setOpenBooking(false);
  const handleBookingOpen = () => setOpenBooking(true);

  useEffect(() => {
    fetch(`https://mighty-journey-57918.herokuapp.com/allCars/${productId}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  return (
    <div>
      <Navigation></Navigation>
      <h2 className="text-center my-5">Book The Car Now</h2>
      <Col>
        <Card className="w-50  mx-auto my-3 border-0 shadow">
          <Card.Img variant="top" src={details.img} />
          <Card.Body>
            <Card.Title>{details.name}</Card.Title>
            <Card.Text className="fw-bold">Price: $ {details.price}</Card.Text>
            <Card.Text>{details.discription}</Card.Text>
          </Card.Body>

          <Button
            onClick={handleBookingOpen}
            className="w-100 mx-auto"
            verient="warning"
          >
            Book the car Now !
          </Button>
        </Card>
      </Col>
      {orderSuccess && (
        <Alert className="w-25 my-3 mx-auto" variant="success">
          Place Order Successfully !
        </Alert>
      )}

      <BookingModal
        details={details}
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
        setOrderSuccess={setOrderSuccess}
      ></BookingModal>
    </div>
  );
};

export default Purchase;
