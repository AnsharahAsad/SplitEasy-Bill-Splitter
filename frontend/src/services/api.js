import axios from "axios";
import awsConfig from "../config/aws-config";

const api = axios.create({
  baseURL: awsConfig.API_URL
});

export default api;