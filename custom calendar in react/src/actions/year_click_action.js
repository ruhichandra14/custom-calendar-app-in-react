import * as types from '../constants/ActionType';

export function handleYearClick(e){
	let selectedYear = e.target.options[e.target.selectedIndex].textContent;

	return{
		type: 'CLICKED_YEAR',
		payload: selectedYear
	}
}