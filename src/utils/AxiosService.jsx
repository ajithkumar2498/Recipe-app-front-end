import axios from "axios"

const AxiosService = axios.create({
    baseURL:"https://recipe-app-backend-qc05.onrender.com",
    headers:{
        "Content-Type":"application/json"
    }
})


export default AxiosService

