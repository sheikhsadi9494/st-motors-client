import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useContext";
import Order from "../Order/Order";

const Orders = () => {
  const { user } = useAuth();
  const [carOrders, setCarOrders] = useState([]);

  useEffect(() => {
    const url = `https://mighty-journey-57918.herokuapp.com/carOrders?email=${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCarOrders(data));
  }, [carOrders]);

  return (
    <div>
      <h1 className="text-center mt-5">
        My Total Orders : {carOrders?.length}
      </h1>
      <Row xs={1} sm={2} md={3} className="g-4 mx-3 mb-5 mt-3">
        {carOrders?.map((carOrder) => (
          <Order
            key={carOrder?._id}
            carOrder={carOrder}
            setCarOrders={setCarOrders}
            carOrders={carOrders}
          ></Order>
        ))}
      </Row>
      <Outlet />
    </div>
  );
};

export default Orders;
