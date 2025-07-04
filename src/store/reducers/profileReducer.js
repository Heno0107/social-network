import socialAPI from "../../api/api";

const GET_PROFILE = 'GET_PROFILE'

const initState = {
    profile : {}
}

const profileReducer = (state = initState , action) => {
    switch(action.type) {
        case GET_PROFILE :
            return {
                ...state ,
                profile : action.payload
            }
        default :
            return state
    }
}

const getProfileAC = (data) => ({type : GET_PROFILE , payload : data})

export const getProfileTC = (id) => {
    return (dispatch) => {
        socialAPI.getProfile(id)
        .then((res) => dispatch(getProfileAC(res.data)))
    }
}

export default profileReducer