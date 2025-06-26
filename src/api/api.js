import axios from "axios";

const instance = axios.create({
    baseURL : 'https://social-network.samuraijs.com/api/1.0'
})

const socialAPI = {
    getUsers(page = 1){
        return instance.get(`/users?count=100&page=${page}`)
    } ,
    getProfile(id){
        return instance.get(`/profile/${id}`)
    }
}

export default socialAPI