import React, { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://mighty-journey-57918.herokuapp.com/allCars")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="overflow-hidden my-5">
      <h5 className="text-left text-danger mx-5 mt-5">
        With World's Best Car Collections
      </h5>
      <h1 className="text-left mx-5">Chose Your Dream Car</h1>
       { products.length === 0 ?
       <div className='text-center my-5'><Spinner animation="border" /></div>
       :
         <Row xs={1} sm={2} md={3} className="g-4 mx-3 mb-5 mt-3">
        {products.slice(6).map((product) => (
          <Product key={product.name} product={product}></Product>
        ))}
      </Row>}
    </div>
  );
};

export default Products;
