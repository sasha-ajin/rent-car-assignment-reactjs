import React from "react";

const Customers = () => {
  return (
    <div className="container table-customers-vehicles">
      <div className="uk-overflow-auto">
        <table className="uk-table  uk-table-divider">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Vip</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Sasha Ajintarev</td>
              <td>sashaajin@gmail.com</td>
              <td>+</td>
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
            <tr>
              <td>1</td>
              <td>Sasha</td>
              <td>sashaajin@gmail.com</td>
              <td>+</td>
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

export default Customers;