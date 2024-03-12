import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "f1477775796e5ecc5655fee6fa41f86f",
    language: "ko-KR",
  },
});

export default axiosInstance;
