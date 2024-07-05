import axios from 'axios';

const URL = 'https://668728b10bc7155dc016de08.mockapi.io/api/stockproducts'

export const axiosInstance = axios.create( {

    baseURL: URL
}
)
 
 