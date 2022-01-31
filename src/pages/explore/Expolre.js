import React, { useEffect, useState} from "react";
import { Row, Spinner } from "react-bootstrap";
import Navigation from "../Shered/Navigation/Navigation";
import SingleCarInfo from "../SingleCarInfo/SingleCarInfo";

const Expolre = () => {
  const [carsdata, setCarsData] = useState([]);

  useEffect(() => {
    fetch("https://mighty-journey-57918.herokuapp.com/allCars")
      .then((res) => res.json())
      .then((data) => setCarsData(data));
  }, []);
  return (
    <div>
      <Navigation></Navigation>
      <div className="overflow-hidden">
        <h2 className="text-center mt-5">Expolre Cars</h2>
        { carsdata.length === 0 ?
         <div className='text-center my-5'><Spinner animation="border" /></div>
         :
          <Row xs={1} md={3} className="g-4 mx-3 my-5">
          {carsdata.map((carData) => (
            <SingleCarInfo key={carData._id} carData={carData}></SingleCarInfo>
          ))}
        </Row>}
      </div>
    </div>
  );
};

export default Expolre;
