import { combineReducers } from 'redux';
import clickedIconFlagReducer from './clicked_icon_reducer';
import clickedDateReducer from './clicked_date_reducer';
import clickedMonthReducer from './clicked_month_reducer';
import clickedYearReducer from './clicked_year_reducer';

const rootReducer = combineReducers({	
	clickedIconFlag : clickedIconFlagReducer,
	clickedDate : clickedDateReducer,
	clickedMonth :  clickedMonthReducer,
	clickedYear : clickedYearReducer
});

export default rootReducer;
