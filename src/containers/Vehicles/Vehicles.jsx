import React from "react";

const Vehicles = () => {
  return (
    <div className="container table-customers-vehicles">
      <div className="uk-overflow-auto">
        <table className="uk-table uk-table-small uk-table-divider">
          <thead>
            <tr>
              <th></th>
              <th>brand</th>
              <th>model</th>
              <th>Year</th>
              <th>Fuel </th>
              <th>Seats</th>
              <th>Price-a-day</th>
              <th>Quantity</th>
              <th>Type</th>
              <th>Rent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Table Data</td>
              <td>Table Data</td>
              <td>Table Data</td>
              <td>Table Data</td>
              <td>Table Data</td>
              <td>Table Data</td>
              <td>Table Data</td>
              <td>Table Data</td>
              <td>
                <button
                  class="uk-button uk-button-default uk-button-primary"
                  type="button"
                >
                  Button
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Vehicles;
