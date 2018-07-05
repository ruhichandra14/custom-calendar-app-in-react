import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CalenderComponent from '../components/calender-comp';

import { handleIconClick } from '../actions/calendar_action';
import { handleDateClick } from '../actions/date_click_action';
import { handleMonthClick } from '../actions/month_click_action';
import { handleYearClick } from '../actions/year_click_action';

class CalenderApp extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<CalenderComponent {...this.props}/>
		)
	}
}


function mapStateToProps(state){
	return{
		clickedIconFlag: state.clickedIconFlag,
		clickedDate : state.clickedDate,
		clickedMonth : state.clickedMonth,
		clickedYear : state.clickedYear
	}
}


function mapDispatchToProps(dispatch){
	return bindActionCreators({ handleIconClick: handleIconClick , handleDateClick : handleDateClick , handleMonthClick : handleMonthClick, handleYearClick : handleYearClick}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(CalenderApp);