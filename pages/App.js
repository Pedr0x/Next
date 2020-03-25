import React from "react";
//styles
import  "./pedrox.css"


//Redux stuff

import { Provider } from 'react-redux'
import {createStore} from "redux"
import allReducers from "./reducers/reducersIndex"
import {increment} from "./actions/increment"
import {decrement} from "./actions/decrement"
import {useSelector,useDispatch} from "react-redux"


	//REDUCER
const store = createStore(
	allReducers,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)

store.subscribe(() => console.log(store.getState()))
//REDUX END




//MATERIAL UI
//import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

//CONTEXT 
//import {Provider} from "./context"

//Component

import NavBar from "./Components/NavBar/NavBar"
import MainContainer from "./Components/MainContainer/MainContainer"
import MainSearch from "./Components/Search/Search"
import Favorites from "./Components/FavoriteRecipes/Favorites"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


var ReduxPractice = () => {

	const counter = useSelector(state => state.counter)
	const isLogged = useSelector(state => state.isLogged)
	const dispatch = useDispatch()
return( 
	<div> 
    <h1>Welcome to React Parcel Micro App!</h1>
	<p> Counter: {counter}</p>
	<div> 
	<button onClick={() => dispatch(increment())}>+ </button>
		<button onClick={() => dispatch(decrement())}>- </button>
	</div>
	<button> Login</button>
	
	{isLogged ? <h3>secret secret </h3> : "" } 
	</div> 
		
	)
			

};
	

var App = () => {
	return(
	
		<Provider store={store}> 
		<NavBar/> 
				<MainSearch/>

		<Router>
		<Switch> 
          <Route  exact path="/favorites" component={Favorites}>
          </Route> 
			</Switch>
	</Router>
			
		

	</Provider>

	)
	
}

export  default App;