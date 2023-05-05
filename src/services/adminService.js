import axios from "axios";
import {url} from "../constants";

export class AdminService {
    static async getItems(token) {
        let res = await axios.get(`${url}/admin/items`, {
            params: {
                limit: 100
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return res.data
    }

    static async getOrders(token) {
        let res = await axios.get(`${url}/admin/orders`, {
            params: {
                limit: 100
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return res.data
    }
}