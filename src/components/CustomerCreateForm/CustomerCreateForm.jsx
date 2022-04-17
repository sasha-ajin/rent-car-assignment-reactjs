import React, { useState } from "react";

const CustomerCreateForm = ({ create }) => {
  const [customer, setCustomer] = useState({ fullName: "", email: "" });
  const createCustomer = (e) => {
    e.preventDefault();
    const newCustomer = {
      email: customer.email,
      fullName: customer.fullName,
      id: Date.now(),
    };
    create(newCustomer);
    setCustomer({ fullName: "", email: "" });
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
      <button
        className="uk-button uk-button-primary uk-button-large"
        style={{ display: "flex", justifyContent: "center" }}
        onClick={createCustomer}
      >
        Create customer
      </button>
    </div>
  );
};

export default CustomerCreateForm;
