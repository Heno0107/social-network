import { createStore , combineReducers , applyMiddleware} from "redux";
import { thunk } from "redux-thunk";

import usersReducer from "./reducers/userReducer";
import profileReducer from "./reducers/profileReducer";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
    usersPage : usersReducer ,
    profilePage : profileReducer ,
    authPage : authReducer
})

const store = createStore(rootReducer , applyMiddleware(thunk))

export default store