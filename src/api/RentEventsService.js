import axios from "axios";

export default class RentEventsService {
    static async getAll() {
      const response = await axios.get("http://localhost:4200/rentalEvents");
      return response.data;
    }
    
    static async create(rentEvent) {
      await axios.post(`http://localhost:4200/rentalEvents`, rentEvent);
    }
  }