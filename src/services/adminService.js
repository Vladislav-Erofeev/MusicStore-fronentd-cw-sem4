import axios from "axios";
import {url} from "../constants";

export class AdminService {
    static async getItems(token) {
        let res = await axios.get(`${url}/admin/items`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return res.data
    }
}