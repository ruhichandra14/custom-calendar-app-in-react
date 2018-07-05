export default function(state= null, action){
	switch(action.type){
		case 'CLICKED_MONTH':
		return action.payload;
	}
	return state;
}