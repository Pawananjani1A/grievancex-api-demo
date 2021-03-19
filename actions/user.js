import axios from 'axios';
const prod = process.env.NODE_ENV==='production'?true:false;
const BASE_URL=prod?"https://grievancex-api-demo.vercel.app/api":"http://localhost:3000/api";



const Server = axios.create({
    baseURL:BASE_URL,
    timeout:7000,
    timeoutErrorMessage:"Connection Timed Out!Please check your connection."
});


export const getUsers= async ()=>{
    const response = await Server.get("/user");

    return response.data;
}





