import { combineReducers } from "redux";
import iceCreamReducer from "./iceCream/iceCreamReducers";
import cakeReducer from "./cake/cakeReducers";
import newCakeReducer from "./newCake/newCakeReducer";
import userReducer from "./users/userReducer";
import sagaUserReducer from "./sagaUsers/sagaUserReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    newCake: newCakeReducer,
    user: userReducer,
    sagaUser: sagaUserReducer
})

export default rootReducer;