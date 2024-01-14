import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '78b249bd2fb64c8caa12b2f0397bae11'
    }
})