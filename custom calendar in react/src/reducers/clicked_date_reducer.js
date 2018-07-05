export default function(state=null, action){
	switch(action.type){
		case 'CLICKED_DATE':
		return action.payload;
	}
	return state;
}