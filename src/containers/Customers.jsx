import React, { useEffect, useState } from "react";
import CustomerService from "../api/CustomersService";
import Table from "../components/Table.jsx";
import MyModal from "../components/MyModal/MyModal.jsx";
import CustomerCreateForm from "../components/CustomerCreateForm/CustomerCreateForm.jsx";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [modal, setModal] = useState(false);
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
  async function createCustomer(newCustomer) {
    await CustomerService.create(newCustomer);
    setCustomers([...customers, newCustomer]);
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
      <div className="create-buttom-container">
        <button
          className="uk-button uk-button-primary uk-button-large create-button"
          onClick={() => setModal(true)}
        >
          Create customer
        </button>
        <MyModal visible={modal} setVisible={setModal}>
          <CustomerCreateForm create={createCustomer} />
        </MyModal>
      </div>
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
