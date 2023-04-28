import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '27b67a3ab8fd413093c321f010a2162a'
    }
})