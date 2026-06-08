import axios from "axios";
import { fetchAuthSession } from "aws-amplify/auth";
import awsConfig from "../config/aws-config";

const api = axios.create({
  baseURL: awsConfig.API_URL,
});

api.interceptors.request.use(async (config) => {
  try {
    const session = await fetchAuthSession();

    const token =
      session.tokens?.idToken?.toString() ||
      session.tokens?.accessToken?.toString();

    if (token) {
      config.headers.Authorization = token;
    }
  } catch (err) {
    console.error("Auth token error:", err);
  }

  return config;
});

export default api;