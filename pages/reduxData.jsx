const increment  =() => {
	
	return {
		type:"INCREMENT"
	}
}

const decrement = () => {
	
	return {
		type:"DECREMENT"
	}
}

//REDUCER

const counter = (state = 0, action ) => {
		
		switch(action,type){
			case "INCREMENT":
				return state + 1;
			case "DECREMENT":
				return state - 1;
		}
}

let store = createStore(counter)
store.subscribe(() => console.log(store.getState())