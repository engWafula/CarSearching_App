import axios from "axios"


export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers:{
        Authorization:'Client-ID zPengbMWCkshb4RRjyL67uJrs72Xs81xHOWnvDXO4Us'
        }
})