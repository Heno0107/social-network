import { createStore , combineReducers} from "redux";

import usersReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
    usersPage : usersReducer
})

const store = createStore(rootReducer)

export default store