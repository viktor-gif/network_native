import axios from "axios"
import { axiosCreate } from "./api"


export const usersAPI = {

    getUsers(pageSize: number = 10, pageNumber: number = 1, term: string | null = '', friendStatus: string = "all") {
        return axiosCreate.get(`/users?pageSize=${pageSize}&pageNumber=${pageNumber}&term=${term}&friendStatus=${friendStatus}`)
    },
    createUser(login: string, email: string, password: string, fullName: string) {
        return axiosCreate.post(`/users/add?login=${login}&email=${email}&password=${password}&fullName=${fullName}`)
    }
}