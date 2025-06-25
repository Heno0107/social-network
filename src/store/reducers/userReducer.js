import socialAPI from "../../api/api"

const GET_USERS = 'GET_USERS'
const IS_FETCHING = 'IS_FETCHING'

const initState = {
    users : [] ,
    isFetching : false
}

const usersReducer = (state = initState, action) => {
    switch(action.type){
        case GET_USERS :
            return {
                ...state , 
                users : action.payload.data
            }
        case IS_FETCHING :
            return {
                ...state ,
                isFetching : action.payload
            }
        default :
        return state
    }
}

const getUsersAC = (data) => ({type : GET_USERS , payload : {data}})
const isFetchingAC = (bool) => ({type : IS_FETCHING , payload : bool})

export const getUsersTC = () => {
    return (dispatch) => {
        dispatch(isFetchingAC(true))

        socialAPI.getUsers()
        .then((res) => {
          dispatch(getUsersAC(res.data))
          dispatch(isFetchingAC(false))
      })
    }
}

export default usersReducer