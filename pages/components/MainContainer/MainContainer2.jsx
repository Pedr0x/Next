import React from 'react'
import Grid from '@material-ui/core/Grid';
import SearchItem from "./SearchItem";


var MainContainer = (props) => {
	
	if (props.data == undefined || props.data.length < 10){
		return <h1> Loading</h1>
	}
	else {
	return(
		
		<Grid
  		 container
 		 direction="row"
 		 justify="space-around"
 		 alignItems="center"
 		 cols={3}
 		 spacing={16}
 		 >


{props.data.map(elem => 
				{var {title,image,calories,ingredients,healthLabels,weight,time,dietLabels,cautions,totalNutrients} = 	elem.recipe;			
				
		  <SearchItem 
				title={label}
				image={image}
				calories={calories}
				ingredients={ingredients}
			healthLabels={healthLabels}
				weight={weight}
				time={time}
				dietLabels={dietLabels}
				cautions={cautions}
		totalNutrients={totalNutrients}
					/> 
		 
		 )}}




		</Grid>
	
	)
}


}
export  default MainContainer 