import React, { useEffect, useState } from "react";
import VehiclesService from "../api/VehiclesService";
import Table from "../components/Table.jsx";
import MyModal from "../components/MyModal/MyModal.jsx";
import VehicleForm from "../components/VehicleForm/VehicleForm.jsx";

const Vehicles = () => {
  const [modal, setModal] = useState(false);
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    fetchVehicles();
  }, []);
  async function fetchVehicles() {
    const response = await VehiclesService.getAll();
    setVehicles(response);
  }
  async function deleteVehicleById(id) {
    await VehiclesService.delete(id);
    setVehicles(vehicles.filter((c) => c.id !== id));
  }
  async function upadteVehicle(newVehicle, id) {
    await VehiclesService.update(newVehicle, id);
    newVehicle.id = id;
    setVehicles(
      vehicles.map((v) => {
        return v.id === id ? { ...newVehicle } : v;
      })
    );
  }
  async function createVehicle(vehicle) {
    await VehiclesService.create(vehicle);
    setVehicles([...vehicles, vehicle]);
    console.log("create");
  }
  const headers = [
    "Brand",
    "Model",
    "Year",
    "Fuel Type",
    "Seats Number",
    "One-Day-Price",
    "Quantity",
    "Vehicle Type",
  ];
  const attributes = [
    "brand",
    "model",
    "constructionYear",
    "fuelType",
    "seatsNumber",
    "oneDayEuroPrice",
    "quantity",
    "vehicleTypes",
  ];
  return (
    <div className="container Vehicles-vehicles">
      <div className="create-buttom-container">
        <button
          className="uk-button uk-button-primary uk-button-large create-button"
          onClick={() => setModal(true)}
        >
          Add Vehicle
        </button>
        <MyModal visible={modal} setVisible={setModal}>
          <VehicleForm
            textSubmit="Add Vehicle"
            isVehicle={false}
            action={createVehicle}
          />
        </MyModal>
      </div>
      {vehicles.length !== 0 ? (
        <Table
          headers={headers}
          row_attributes={attributes}
          rows={vehicles}
          deleteRow={deleteVehicleById}
          UpdateFromComponent={VehicleForm}
          updateRow={upadteVehicle}
        />
      ) : (
        <h1 className="uk-heading-large centred">No vehicles</h1>
      )}
    </div>
  );
};

export default Vehicles;
