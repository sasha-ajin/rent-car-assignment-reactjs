import axios from "axios";

export default class CustomerService {
  static async getAll() {
    const response = await axios.get("http://localhost:4200/customers");
    return response.data;
  }
  static async delete(id) {
    await axios.delete(`http://localhost:4200/customers/${id}`);
  }
  static async create(customer) {
    await axios.post(`http://localhost:4200/customers`, customer);
  }
  static async update(customer, id) {
    await axios.put(`http://localhost:4200/customers/${id}`, customer);
  }
}
