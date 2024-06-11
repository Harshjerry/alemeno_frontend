import axios from "axios";

const BASE_URL = "https://alemenobackend-b8de0915362e.herokuapp.com/api/";

// Check if localStorage item exists before accessing its properties
const persistRoot = localStorage.getItem("persist:root");


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

