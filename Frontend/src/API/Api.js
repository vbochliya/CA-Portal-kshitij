import axios from "axios";

const devUrl = "http://localhost:5000/"
// const productionUrl = "https://ca-backend.onrender.com/caApi"
const productionUrl = "https://cap-backend-ktj2024.onrender.com"

const Api = axios.create({
//  baseURL: productionUrl,
 baseURL:devUrl,
});

export default Api;
