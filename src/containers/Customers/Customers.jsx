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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Sasha Ajintarev</td>
              <td>sashaajin@gmail.com</td>
              <td>+</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Sasha</td>
              <td>sashaajin@gmail.com</td>
              <td>+</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
