import axios from "axios"
const instance = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const GetList = async (tableName: string) => {
    return instance.get(`/${tableName}`).then(res => res.data).catch(err => console.log(err))
}