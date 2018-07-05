export default function(state = null, action){
	switch(action.type){
		case 'CLICKED_ICON':
		return action.payload;
	}
	return state;
}