import axios from "axios";
import {url} from "../constants";

export class OrderService {
    static async createOrder(address, token) {
        axios.post(`${url}/order/create`, {
            "address": address
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
}