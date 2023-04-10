import axios from "axios";

export const axiosCreate = axios.create({
    baseURL: 'http://192.168.1.7:3500'
})

export const getUsers = () => {
    return axiosCreate.get('/users/test')
}