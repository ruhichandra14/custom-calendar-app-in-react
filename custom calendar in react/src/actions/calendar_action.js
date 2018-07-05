import * as types from '../constants/ActionType';

export function handleIconClick(count){	
	return{
		type: 'CLICKED_ICON',
		payload: count ? 1 : 0
	};
}
