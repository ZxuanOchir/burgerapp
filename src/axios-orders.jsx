import axios from "axios";

const instance = axios.create({
    baseURL: 'https://burger-7c246-default-rtdb.firebaseio.com/'
});

export default instance;