import { createStore , combineReducers , applyMiddleware} from "redux";
import { thunk } from "redux-thunk";

import usersReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
    usersPage : usersReducer
})

const store = createStore(rootReducer , applyMiddleware(thunk))

export default store