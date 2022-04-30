import axios from "axios";

const apiUrl = "http://localhost:4200/rentalEvents";

export default class RentEventsService {
  static async getAll() {
    const response = await axios.get(`${apiUrl}`);
    return response.data;
  }

  static async create(rentEvent) {
    await axios.post(`${apiUrl}`, rentEvent);
  }
}
