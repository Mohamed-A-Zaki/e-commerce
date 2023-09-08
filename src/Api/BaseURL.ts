import axios from "axios";

// const BaseURL = axios.create({ baseURL: "http://127.0.0.1:8000/" });
const BaseURL = axios.create({
  baseURL: "https://e-commerce-backend-b89n.onrender.com/",
});

export default BaseURL;
