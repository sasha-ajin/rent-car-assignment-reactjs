import React, { useEffect, useState } from "react";
import CustomerService from "../../api/CustomersService";

const RentForm = ({ vehicle }) => {
  const [customer, setCustomer] = useState({ fullName: "", email: "" });
  const [customers, setCustomers] = useState([]);
  const [rentPrice, setRentPrice] = useState(vehicle.oneDayEuroPrice);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const response_customers = await CustomerService.getAll();
    setCustomers(response_customers);
  }
  const checkPrice = (days) => {
    if (parseInt(days) === 1) setRentPrice(vehicle.oneDayEuroPrice);
    else if (parseInt(days) === 3)
      setRentPrice((vehicle.oneDayEuroPrice * 3 * 0.95).toFixed(2));
    else if (parseInt(days) === 5)
      setRentPrice((vehicle.oneDayEuroPrice * 5 * 0.93).toFixed(2));
    else if (parseInt(days) >= 10)
      setRentPrice((vehicle.oneDayEuroPrice * days * 0.9).toFixed(2));
  };
  const rentAction = () => {
    const customerId = customers.find(
      (c) => c.fullName === customer.fullName && c.email === customer.email
    ).id;
    console.log(parseFloat(rentPrice), vehicle.id, customerId);
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
          onChange={(e) => checkPrice(e.target.value)}
        >
          <option value={1}>1 day</option>
          <option value={3}>3 days (-5%)</option>
          <option value={5}>5 days (-7%)</option>
          <option value={10}>10 days (-10%)</option>
          <option value={14}>14 days(-10%)</option>
        </select>
      </div>
      <h1 className="uk-heading-small">Price: {rentPrice} Euro</h1>
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
