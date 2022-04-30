import axios from "axios";
import RentEventsService from "./RentEventsService";

const apiUrl = "http://localhost:4200/vehicles";

export default class VehiclesService {
  static async getAll() {
    const response_vehicles = await axios.get(`${apiUrl}`);
    const response_rent_events = await RentEventsService.getAll();
    var date = new Date().toISOString();
    response_rent_events.forEach((rentalEvent) =>
      response_vehicles.data.forEach((vehicle) => {
        if (
          rentalEvent.vehicle === vehicle.id &&
          rentalEvent.startDate < date &&
          date < rentalEvent.endDate
        )
          vehicle.quantity--;
      })
    );
    return response_vehicles.data;
  }
  static async delete(id) {
    await axios.delete(`${apiUrl}/${id}`);
  }
  static async create(vehicle) {
    await axios.post(`${apiUrl}`, vehicle);
  }
  static async update(vehicle, id) {
    await axios.put(`${apiUrl}/${id}`, vehicle);
  }
}
