import axios from "axios";

const instance = axios.create({
    baseURL : 'https://social-network.samuraijs.com/api/1.0'
})

const socialAPI = {
    getUsers(){
        return instance.get('/users?count=100')
    }
}

export default socialAPI