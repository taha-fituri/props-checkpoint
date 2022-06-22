import React from "react";
import "../../App.css";

import {
  MDBBtn,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";

const Form = () => {
  return (
    <>
      {/* Pargraph & Form Code */}
      <div className="formdiv">
        <div>
          <h3>Register Here</h3>
          <br />
          <p>
            To receive all new in the world of oils; <br /> To answer your
            inquiries and questions,
            <br /> please join us; And don't forget that signing up is always
            free....
            <br /> We are not alone but we strive to be the best
          </p>
        </div>
        {/* Form Code */}
        <form className="form">
          <MDBInput
            className="mb-4"
            type="email"
            id="form2Example1"
            label="Email address"
          />
          <MDBInput
            className="mb-4"
            type="password"
            id="form2Example2"
            label="Password"
          />

          <MDBRow className="mb-4">
            <MDBCol className="d-flex justify-content-center">
              <MDBCheckbox
                id="form2Example3"
                label="Remember me"
                defaultChecked
              />
            </MDBCol>
            <MDBCol>
              <a href="#test">Forgot password?</a>
            </MDBCol>
          </MDBRow>

          <MDBBtn type="submit" className="mb-4" block>
            Sign in
          </MDBBtn>

          <div className="text-center">
            <p>
              Not a member? <a href="#!">Register</a>
            </p>
            <p>or sign up with:</p>

            <MDBBtn floating className="mx-1">
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>

            <MDBBtn floating className="mx-1">
              <MDBIcon fab icon="google" />
            </MDBBtn>

            <MDBBtn floating className="mx-1">
              <MDBIcon fab icon="twitter" />
            </MDBBtn>

            <MDBBtn floating className="mx-1">
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </div>
        </form>
      </div>
    </>
  );
};
export default Form;
