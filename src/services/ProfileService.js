import axios from "axios";
import {url} from "../constants";

export class ProfileService {
    static async getProfile(token) {
        let res = await axios.get(`${url}/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return res.data
    }

    static async login(user) {
        let res = await axios.post(`${url}/login`, user)
        return res.data
    }

    static async register(user, file) {
        const formData = new FormData()
        formData.append('request', new Blob([JSON.stringify(user)], {
            type: "application/json"
        }))
        if (file)
            formData.append("file", file)
        let res = await axios.post(`${url}/register`, formData)
        return res.data
    }
}