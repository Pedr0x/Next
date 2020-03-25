import React from 'react'
import Grid from '@material-ui/core/Grid';
import SearchItem from "./SearchItem";
import CircularProgress from '@material-ui/core/CircularProgress';
//import "./main-container.css"
var MainContainer = (props) => {

	
	if (props.data == undefined || props.data.length < 2){
		return <CircularProgress color="secondary" />
	}
	else {
	return(
		
	<div className="main-search-container">

{props.data.map(elem => 
			
				
		  <SearchItem 
				title={elem.recipe.label}
				image={elem.recipe.image}
				calories={elem.recipe.calories}
				ingredients={elem.recipe.ingredients}
			healthLabels={elem.recipe.healthLabels}
				weight={elem.recipe.totalWeight}
				time={elem.recipe.time}
				dietLabels={elem.recipe.dietLabels}
				cautions={elem.recipe.cautions}
		totalNutrients={elem.recipe.totalNutrients}
				key={elem.recipe.url}
				recipeYield={elem.recipe.yield}
					url={elem.recipe.url}
					getFavorite={props.getFavorite}

					/> 
		 
				)}




 </div>	
	)
}

}
export  default MainContainer 