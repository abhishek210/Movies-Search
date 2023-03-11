import axios from 'axios'

const Apim = axios.create({
    baseURL : "https://www.omdbapi.com/",
    timeout : 15000,
    params : {
        apikey : "8b66c5da"
    }
})
export { Apim }