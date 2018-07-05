import * as types from '../constants/ActionType';

export function handleMonthClick(e){
	let selectedMonth = e.target.options[e.target.selectedIndex].dataset.name;
	return{
		type: 'CLICKED_MONTH',
		payload: selectedMonth
	}
}