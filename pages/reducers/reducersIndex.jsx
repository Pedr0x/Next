import counterReducer from"./counter";
import loggedReducer from"./isLoggedIn";
import {combineReducers} from "redux";

const allReducers = combineReducers({
		isLogged : loggedReducer,

	counter: counterReducer
})

export  default allReducers