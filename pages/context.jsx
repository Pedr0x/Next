import React from "react";
import axios  from "axios";

const Context = React.createContext()

const reducer = (state, action) => {
	switch(action.type){
			case "SEARCH_TRACKS"
				:return {
					...state, 
					track_list: action.payload,
					heading:"search resuts"
				};
		default:
			return state
	}
}


export class Provider extends React.Component{
	
	state = {
		tracklist: [
			{track: {
				trackName:"abc"
			}},
			{track: {
				trackName:"123"
			}},
			
		],
		heading:"top ten tracks",
		dispatch:action => this.setState(state => reducer(state,action))
		
	}

	
	componentDidMount(){
		let apiID = "0a1b953f0aa8359807f0215fdb873270" 
		axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/	chart.tracks.get?chart_name=top&page=1&page_size=5&country=us&f_has_lyrics=1&apikey=${apiID}`)
		.then(res => {console.log(res);
	this.setState({track_list:res.data.message.body.track_list})}
			 )

		.catch(err => console.log(err))
	}
	render(){
		
		return(
		
		<Context.Provider value={this.state}>
		{this.props.children}
		</Context.Provider>
		)
	}
}

export const Consumer = Context.Consumer