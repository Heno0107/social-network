import socialAPI from "../../api/api";

const LOGIN = 'LOGIN'

const initState = {
    userId : localStorage.getItem('userId')
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case LOGIN :
            return {
                ...state ,
                userId : action.payload
            }
        default :
            return state
    }
}

const loginAC = (data) => ({type : LOGIN , payload : data})

export const loginTC = (body) => {
    return (dispatch) => {
        socialAPI.login(body)
           .then((res) => {
            dispatch(loginAC(res.data.data.userId))
            localStorage.setItem('userId' , JSON.stringify(res.data.data.userId))
           })
    }
}

export default authReducer