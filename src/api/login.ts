import axios from "axios"
import { axiosCreate } from "./api"


export const loginAPI = {

     me() {
        return axiosCreate.get(`/auth/me`)
    },
    login(email: string, password: string) {
        console.log('email: ' + email + ' , ' + 'password: ' + password)
        return axiosCreate.post(`/auth/login?email=${email}&password=${password}`)
    },
    logout() {
        return axiosCreate.delete(`/auth/login`)
    }
}