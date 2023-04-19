import { WIFI_API } from "../settings/globalConsts";

import axios from "axios";

export const axiosCreate = axios.create({
    baseURL: `http://${WIFI_API}:3500`
})

export const getUsers = () => {
    return axiosCreate.get('/users/test')
}