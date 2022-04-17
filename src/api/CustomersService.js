import axios from "axios";

export default class CustomerService {
  static async getAll() {
    const response = await axios.get("http://localhost:4200/customers");
    return response.data;
  }
  static async deleteById(id) {
    await axios.delete(`http://localhost:4200/customers/${id}`);
  }
}
