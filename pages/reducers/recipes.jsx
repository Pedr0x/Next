const recipes = (state = [], action) => {
	switch(action.type){
		case "NEW-RECIPES":
		return Object.assign({}, state, {
      contacts: [
        ...state.contacts,
        action.payload
      ]
    })
		default:
			return state
	}
};

export default recipes