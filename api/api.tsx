
import axios from 'axios'

const instance = axios.create({
    baseURL: "https://christianhjelmslund-61487.firebaseio.com/"
})

export default instance