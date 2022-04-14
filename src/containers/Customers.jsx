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
  const headers = ["", "Name", "Email", "Update", "Delete"];
  const attributes = ["fullName", "email"];
  const buttons = [
    { text: "Update", type: "secondary" },
    { text: "Delete", type: "danger" },
  ];
  return (
    <div className="container table-customers-vehicles">
      <Table
        headers={headers}
        row_attributes={attributes}
        rows={customers}
        buttons={buttons}
      />
    </div>
  );
};

export default Customers;
