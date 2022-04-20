import React, { useEffect, useState } from "react";
import CustomerService from "../../api/CustomersService";

const RentForm = ({ id }) => {
  const [customer, setCustomer] = useState({ fullName: "", email: "" });
  const [customers, setCustomers] = useState([]);
  const [rentDays, setRentDays] = useState(1);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const response = await CustomerService.getAll();
    setCustomers(response);
  }
  const rentAction = () => {
    const customerId = customers.find(
      (c) => c.fullName === customer.fullName && c.email === customer.email
    ).id;
    console.log(parseInt(rentDays), id, customerId);
  };
  return (
    <div>
      <div className="uk-margin">
        <input
          className="uk-input uk-form-width-large uk-form-large"
          type="text"
          placeholder="Name"
          value={customer.fullName}
          onChange={(e) =>
            setCustomer({ ...customer, fullName: e.target.value })
          }
        />
      </div>
      <div className="uk-margin">
        <input
          className="uk-input uk-form-width-large uk-form-large"
          type="text"
          placeholder="Email"
          value={customer.email}
          onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
        />
      </div>
      <div className="uk-margin">
        <select
          className="uk-select"
          onChange={(e) => setRentDays(e.target.value)}
        >
          <option value={1}>1 day</option>
          <option value={3}>3 days</option>
          <option value={5}>5 days</option>
          <option value={10}>10 days</option>
          <option value={14}>14 days</option>
        </select>
      </div>
      <button
        className="uk-button uk-button-primary uk-button-large"
        style={{ display: "flex", justifyContent: "center" }}
        onClick={rentAction}
        disabled={
          customers.filter(
            (c) =>
              c.fullName === customer.fullName && c.email === customer.email
          ).length > 0
            ? false
            : true
        }
      >
        Rent
      </button>
    </div>
  );
};

export default RentForm;
