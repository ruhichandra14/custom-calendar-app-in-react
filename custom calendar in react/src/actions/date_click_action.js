import * as types from '../constants/ActionType';

export function handleDateClick(e, currMonthNo, currYear){
	let selectedDate = [e.target.textContent, currMonthNo, currYear];
	return{
		type: 'CLICKED_DATE',
		payload: selectedDate
	}
}