import axios from "axios";

const instance = axios.create({
    baseURL: 'https://burger-cloud-350c0-default-rtdb.asia-southeast1.firebasedatabase.app/'
});

export default instance;