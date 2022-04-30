import React, { useEffect, useState } from "react";
import CustomerService from "../api/CustomersService";
import Table from "../components/Table/Table.jsx";
import MyModal from "../components/MyModal/MyModal.jsx";
import CustomerForm from "../components/CustomerForm/CustomerForm.jsx";

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
    await CustomerService.delete(id);
    setCustomers(customers.filter((c) => c.id !== id));
  }
  async function createCustomer(newCustomer) {
    await CustomerService.create(newCustomer);
    setCustomers([...customers, newCustomer]);
  }
  async function upadteCustomer(newCustomer, id) {
    await CustomerService.update(newCustomer, id);
    newCustomer.id = id;
    setCustomers(
      customers.map((c) => {
        return c.id === id ? { ...newCustomer } : c;
      })
    );
  }
  const headers = ["Name", "Email"];
  const attributes = ["fullName", "email"];
  return (
    <div className="container customers-vehicles">
      <div className="create-buttom-container">
        <button
          className="uk-button uk-button-primary uk-button-large create-button"
          onClick={() => setModal(true)}
        >
          Create customer
        </button>
        <MyModal visible={modal} setVisible={setModal}>
          <CustomerForm
            action={createCustomer}
            textSubmit="Create customer"
            isCustomerWithId={false}
          />
        </MyModal>
      </div>
      {customers.length !== 0 ? (
        <Table
          headers={headers}
          row_attributes={attributes}
          rows={customers}
          deleteRow={deleteCustomerById}
          UpdateFormComponent={CustomerForm}
          updateRow={upadteCustomer}
        />
      ) : (
        <h1 className="uk-heading-large centred">No Customers</h1>
      )}
    </div>
  );
};

export default Customers;
