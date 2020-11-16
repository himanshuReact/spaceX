import axios from "axios";

const axiUrl = axios.create({
  baseURL: "https://api.spacexdata.com/v3"
});

export default axiUrl;