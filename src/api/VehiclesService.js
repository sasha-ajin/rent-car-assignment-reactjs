import axios from "axios";

export default class VehiclesService {
  static async getAll() {
    const response = await axios.get("http://localhost:4200/vehicles");
    return response.data;
  }
  static async delete(id) {
    await axios.delete(`http://localhost:4200/vehicles/${id}`);
  }
  static async create(vehicle) {
    await axios.post(`http://localhost:4200/vehicles`, vehicle);
  }
  static async update(vehicle, id) {
    await axios.put(`http://localhost:4200/vehicles/${id}`, vehicle);
  }
}
