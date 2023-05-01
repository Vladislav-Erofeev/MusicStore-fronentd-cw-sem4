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

    static async getOrders(token) {
        let res = await axios.get(`${url}/order/all`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return res.data
    }
}