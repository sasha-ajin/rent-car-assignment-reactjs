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
              <th>Update</th>
              <th>Delete</th>
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
                  className="uk-button uk-button-default uk-button-primary"
                  type="button"
                >
                  Rent
                </button>
              </td>
              <td>
                <button
                  className="uk-button uk-button-default uk-button-secondary"
                  type="button"
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  className="uk-button uk-button-default uk-button-danger"
                  type="button"
                >
                  Delete
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
