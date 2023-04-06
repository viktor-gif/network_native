import axios from "axios";

export const axiosCreate = axios.create({
    baseURL: '/'
})

export const getUsers = () => {
    return axiosCreate.get('http://192.168.1.7:3500/users/test')
}


// export const getUsers = () => {
//     return axiosCreate.get('https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5')
// }