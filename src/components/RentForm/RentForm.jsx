import React, { useEffect, useState } from "react";
import CustomerService from "../../api/CustomersService";
import RentEventsService from "../../api/RentEventsService";

const RentForm = ({ row }) => {
  const [customer, setCustomer] = useState({ fullName: "", email: "" });
  const [customers, setCustomers] = useState([]);
  const [rentPrice, setRentPrice] = useState(row.oneDayEuroPrice);
  const [rentDays, setRentDays] = useState(1);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const response_customers = await CustomerService.getAll();
    setCustomers(response_customers);
  }
  const checkPrice = (days) => {
    const days_ = parseInt(days);
    setRentDays(days_);
    if (days_ === 1) setRentPrice(row.oneDayEuroPrice);
    else if (days_ === 3)
      setRentPrice((row.oneDayEuroPrice * 3 * 0.95).toFixed(2));
    else if (days_ === 5)
      setRentPrice((row.oneDayEuroPrice * 5 * 0.93).toFixed(2));
    else if (days_ >= 10)
      setRentPrice((row.oneDayEuroPrice * days_ * 0.9).toFixed(2));
  };
  const addDays = (days, date) => {
    const date_ = new Date(date.valueOf());
    date_.setDate(date_.getDate() + days);
    return date_;
  };
  async function rentAction() {
    const customerId = customers.find(
      (c) => c.fullName === customer.fullName && c.email === customer.email
    ).id;
    const date = new Date(Date.now());
    await RentEventsService.create({
      id: Date.now(),
      customer: customerId,
      vehicle: row.id,
      startDate: date,
      endDate: addDays(rentDays, date),
      price: parseFloat(rentPrice),
    });
    window.location.reload();
  }
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
