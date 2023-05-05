import axios from "axios";
import {url} from '../constants';

export class ItemService {
    static async getItems(category) {
        if (category == undefined)
            category = ""
        let res = await axios.get(`${url}/item/all`, {
            params: {
                category: category.toUpperCase()
            }
        })
        return res.data;
    }

    static async getById(id) {
        let res = await axios.get(`${url}/item/${id}`)
        return res.data
    }

    static async save(data, token) {
        let res = await axios.post(`${url}/admin/add_item`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.data
    }

    static async loadImage(id, file, token) {
        const formData = new FormData()
        formData.append("file", file)
        await axios.post(`${url}/admin/load_image/${id}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }

    static async addItemToCart(itemId, token) {
        await axios.post(`${url}/cart/add/${itemId}`, {},{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }

    static async removeItemFromCart(itemId, token) {
        await axios.delete(`${url}/cart/delete/${itemId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }

    static async isItemInCart(itemId, token) {
        let res = await axios.get(`${url}/cart/in_cart/${itemId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return res.data
    }

    static async getSearchResult(query) {
        let res = await axios.get(`${url}/item/search`, {
            params: {
                search: `${query}`
            }
        })
        return res.data
    }
}