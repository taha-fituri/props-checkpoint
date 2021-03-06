import React from "react";
import "../../App.css";
import PropTypes from "prop-types";

import { MDBFooter } from "mdb-react-ui-kit";

const Footer = (props) => {
  return (
    <>
      {/* Footer Code */}
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted footer1"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="google.com" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="google.com" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="google.com" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="google.com" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="google.com" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="google.com" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase prop1 fw-bold mb-4">
                  <span style={{ padding: "1% 5%" }}>{props.children}</span>

                  <span>{props.name}</span>
                </h6>
                <p>{props.bio}</p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="google.com" className="text-reset">
                    Molygen
                  </a>
                </p>
                <p>
                  <a href="google.com" className="text-reset">
                    Top-Tec
                  </a>
                </p>
                <p>
                  <a href="google.com" className="text-reset">
                    Leichtauf High
                  </a>
                </p>
                <p>
                  <a href="google.com" className="text-reset">
                    Super Leichtauf
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h5
                  className="text-uppercase fw-bold mb-4"
                  style={{ color: "red" }}
                >
                  Discounts
                </h5>
                <p>
                  <a
                    onClick={() => props.handleName(props.name)}
                    href="google.com"
                    className="text-reset discounts"
                  >
                    First Discounts
                  </a>
                </p>
                <p>
                  <a
                    onClick={() => props.handleName(props.name)}
                    href="google.com"
                    className="text-reset discounts"
                  >
                    Second Discounts
                  </a>
                </p>
                <p>
                  <a
                    onClick={() => props.handleName(props.name)}
                    href="google.com"
                    className="text-reset discounts"
                  >
                    Third Discounts
                  </a>
                </p>
                <p>
                  <a
                    onClick={() => props.handleName(props.name)}
                    href="google.com"
                    className="text-reset discounts"
                  >
                    Fourth Discounts
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> {props.adress}
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  tahatiay53@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> 00218916627970
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> 0021654080468
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          ?? 2022 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            LIQUI-MOLY.COM
          </a>
        </div>
      </MDBFooter>
    </>
  );
};
export default Footer;
Footer.defaultProps = {
  name: "no name",
  bio: "CompanyVision",
  adress: "tunes",
};
Footer.propTypes = {
  name: PropTypes.string,
  bio: PropTypes.string,
  adress: PropTypes.string,
};
