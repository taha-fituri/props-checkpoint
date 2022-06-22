import React from "react";
import "../../App.css";

import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

const Form = () => {
  return (
    <>
      {/* Table Code */}
      <MDBTable className="Table">
        <MDBTableHead>
          <tr className="table-dark">
            <th scope="col">Car Name</th>
            <th scope="col">Oil Type</th>
            <th scope="col">Oil Number</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <th scope="row">hyundai i10</th>
            <td>Top-Tec</td>
            <td>5w20</td>
          </tr>

          <tr className="table-light">
            <th scope="row">hyundai i20</th>
            <td>Street</td>
            <td>10w20</td>
          </tr>
          <tr>
            <th scope="row">hyundai Elantra</th>
            <td>street</td>
            <td>5w30</td>
          </tr>
          <tr className="table-light">
            <th scope="row">hyundai i40</th>
            <td>Street</td>
            <td>5w30</td>
          </tr>
          <tr>
            <th scope="row">hyundai Azera</th>
            <td>Molygen</td>
            <td>10w40</td>
          </tr>
          <tr className="table-light">
            <th scope="row">KIA Optema</th>
            <td>Top-Tec</td>
            <td>10w40</td>
          </tr>
          <tr>
            <th scope="row">KIA Kadenza</th>
            <td>Molygen</td>
            <td>10w40</td>
          </tr>
          <tr className="table-light">
            <th scope="row">KIA Spoteag</th>
            <td>Top-Tec</td>
            <td>20w50</td>
          </tr>
          <tr>
            <th scope="row">KIA Cerato</th>
            <td>Molygen</td>
            <td>10w30</td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </>
  );
};
export default Form;
