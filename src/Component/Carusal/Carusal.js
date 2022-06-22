import React from "react";
import "../../App.css";
import carusal1 from "../../Images/carusal1.jpg";
import carusal2 from "../../Images/carusal2.png";
import carusal3 from "../../Images/carusal3.jpg";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from "mdb-react-ui-kit";

const Causal = () => {
  return (
    <>
      {/* Carousel Code */}
      <MDBCarousel className="carusal">
        <MDBCarouselInner>
          <MDBCarouselItem className="active">
            <MDBCarouselElement src={carusal1} alt="carusal1" height="600px" />
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBCarouselElement src={carusal2} alt="carusal2" height="600px" />
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBCarouselElement src={carusal3} alt="carusal3" height="600px" />
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </>
  );
};
export default Causal;
