import axios from "axios";

const axiosInstace = axios.create({
    baseURL: 'https://444b-103-218-24-121.ngrok.io'
  });

export default axiosInstace