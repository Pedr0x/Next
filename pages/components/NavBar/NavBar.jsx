import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Favorites from "./../FavoriteRecipes/Favorites"

var NavBar = () => {
	
let	navbarStyle ={
	fontSize:32,
	fontWeight:600,
	padding:"0.35% 1%"
}
	
	return(

	<AppBar color="primary" position="static" style={navbarStyle}> 
		<Typography variant="h5" align="left" fontWeight={600}> 
		
		RecipeFinder   </Typography> 
		
		
				

		</AppBar>

	)
	}
	
	export  default NavBar