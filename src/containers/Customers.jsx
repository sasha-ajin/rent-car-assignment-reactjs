import React, { useEffect, useState } from "react";
import CustomerService from "../api/CustomersService";
import Table from "../components/Table.jsx";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetchCustomers();
  }, []);
  async function fetchCustomers() {
    const response = await CustomerService.getAll();
    setCustomers(response);
  }
  async function deleteCustomerById(id) {
    await CustomerService.deleteById(id);
    setCustomers(customers.filter((c) => c.id !== id));
  }
  const headers = ["", "Name", "Email", "Update", "Delete"];
  const attributes = ["fullName", "email"];
  const buttons = [
    { text: "Update", type: "secondary" },
    {
      text: "Delete",
      type: "danger",
      action: deleteCustomerById,
    },
  ];
  return (
    <div className="container table-customers-vehicles">
      {customers.length !== 0 ? (
        <Table
          headers={headers}
          row_attributes={attributes}
          rows={customers}
          buttons={buttons}
        />
      ) : (
        <h1
          className="uk-heading-large"
          style={{ display: "flex", justifyContent: "center" }}
        >
          No Customers
        </h1>
      )}
    </div>
  );
};

export default Customers;
