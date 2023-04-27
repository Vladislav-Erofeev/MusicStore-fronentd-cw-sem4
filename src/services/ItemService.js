import axios from "axios";
import {url} from '../constants';

export class ItemService {
    static async getItems(category) {
        if (category == null)
            category = ""
        let res = await axios.get(`${url}/item/all`, {params: {
                category: category.toUpperCase()
            }})
        return res.data;
    }

    static async getById(id) {
        let res = await axios.get(`${url}/item/${id}`)
        return res.data
    }
}