import axios from "axios";
import {url} from '../constants';

export class ItemService {
    static async getItems() {
        let res = await axios.get(`${url}/item/all`)
        return res.data;
    }
}