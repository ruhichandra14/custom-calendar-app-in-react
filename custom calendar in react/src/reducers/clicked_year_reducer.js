export default function(state= null, action){
	switch(action.type){
		case 'CLICKED_YEAR':
		return action.payload;
	}
	return state;
}