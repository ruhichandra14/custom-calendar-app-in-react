import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// to generate unique keys..
let uniqidKey = require('uniqid');

export default class CalenderComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			clickFlag : true
		}
	}

	renderCalendar(){
		let daysJSON = {
			0:["Jan",31],1:["Feb",28],2:["Mar",31],
			3:["Apr",30],4:["May",31],5:["Jun",30],
			6:["Jul",31],7:["Aug",31],8:["Sep",30],
			9:["Oct",31],10:["Nov",30],11:["Dec",31]
		}

		let currDate = new Date();; 
		let currMonth, currYear;
		let totalYears = currDate.getFullYear();
		let { clickedMonth } = this.props;
		let { clickedYear } = this.props;

		// setting new month and new year based on 
		// user selected options
		if(clickedMonth && clickedYear){
			currDate.setMonth(clickedMonth);
			currDate.setYear(clickedYear);	
		}
		else if(!clickedMonth && clickedYear){
			currDate.setYear(clickedYear);	
		}
		else if(clickedMonth && !clickedYear){
			currDate.setMonth(clickedMonth);
		}
		// user selected options**ends here

		currMonth = currDate.getMonth();
		currYear = currDate.getFullYear();

		let daysPerMonth = daysJSON[currMonth][1];
		let yearOptionKey = 0;
		let monthOptionKey = -1;
		let defaultSelectedMonth, defaultSelectedYear;

		defaultSelectedMonth = (clickedMonth != null) ? daysJSON[clickedMonth][0] : daysJSON[currMonth][0];
		defaultSelectedYear = (clickedYear != null) ? clickedYear : currYear;

		// get year listxxxx
		let yearOptions = [];
		for(let i = 2000; i < totalYears+1 ; i++){
			yearOptionKey++;			
			yearOptions.push(<option key={yearOptionKey} value = {i}>{i}</option>);
		}
		//year logic ends................


		// get months listxxxx
		let monthOptions = [];
		for(let i = 0; i < 12 ; i++){
			monthOptionKey++;		
			monthOptions.push(<option key={monthOptionKey} data-name = {monthOptionKey} value = {daysJSON[i][0]}>{daysJSON[i][0]}</option>);
		}
		//month logic ends................


		//date logic starts------------------
		let currMonthNo = currMonth + 1;
		// feb - leap year issue dealt here
		if(currMonth == 1 && currYear%4 == 0){
			daysPerMonth = daysJSON[currMonth][1] + 1;
		}
		
		// changing the date to 1... to shift cells
		currDate.setDate(1);
		let dayOffset = currDate.getDay() - 1;
		let dateNo = 1;
		if(dayOffset < 0){
			dayOffset = 6;
		}
		
		//prev and next month disabled date logic
		let prevMonthDates, prevStartingDate;
		if(currMonth == 0){
			prevMonthDates = daysJSON[11][1];
		}
		else{
			prevMonthDates = daysJSON[currMonth-1][1];
		}
		prevStartingDate = prevMonthDates - dayOffset + 1;
		//prev and next month disabled date logic - ends here*****

		//curr month dates logic
		let table = [];		   
		let children = [];
		let defaultDate = 1;
		for (let i = 1; i <= 6; i++) {
			let children = [];
			for (let j = 1; j <= 7; j++) {
				if(prevStartingDate <= prevMonthDates){ 
					children.push(<td className = "non-active-dates" key = {uniqidKey()} onClick = {(e) => this.props.handleDateClick(e, currMonthNo, currYear)}>{prevStartingDate}</td>);
					prevStartingDate++;
				}
				else if(dateNo < daysPerMonth + 1){
					children.push(<td key = {uniqidKey()} onClick = {(e) => this.props.handleDateClick(e, currMonthNo, currYear)}>{dateNo}</td>);
					dateNo++; 
				}
				else{
					children.push(<td className = "non-active-dates" key = {uniqidKey()} onClick = {(e) => this.props.handleDateClick(e, currMonthNo, currYear)}>{defaultDate}</td>);
					defaultDate++;
				}
			}
			table.push(<tr key = {uniqidKey()}>{children}</tr>)
		}
		//date logic ends here!!------------------

		return(
		<div>
		<div className = "month-year-container">
		<select className = "month-list" value={defaultSelectedMonth} onChange = {(e) => {this.props.handleMonthClick(e)}}>{monthOptions}</select>
		<select className = "year-list" value={defaultSelectedYear} onChange = {(e) => {this.props.handleYearClick(e)}}>{yearOptions}</select>
		</div>
		<table className = "date-table">
		<thead>
		<tr>
		<th>Mon</th>
		<th>Tue</th>
		<th>Wed</th>
		<th>Thus</th>
		<th>Fri</th>
		<th>Sat</th>
		<th>Sun</th>
		</tr>
		</thead>
		<tbody>{table}</tbody>
		</table>
		</div>
		)
	}

	render(){
		let selectedDateHTML;

		if (this.props.clickedDate) {
      		selectedDateHTML = <span className = "selected Date">{this.props.clickedDate[0] + " / " + this.props.clickedDate[1] + " / " + this.props.clickedDate[2]}</span>;
    	} else {
    		let dateObj = new Date();
			let month = dateObj.getUTCMonth() + 1; 
			let day = dateObj.getUTCDate();
			let year = dateObj.getUTCFullYear();
			let newDate = day  + " / " + month + " / " + year ;
      		selectedDateHTML = <span className = "selected Date">{newDate}</span>;
    	} 

		let count = 1;
		if(!this.props.clickedIconFlag){
			return(
			<div>
			<header className = "main-header">Calender</header>
			<div className = "calendar"><img tabIndex="1" onClick = {() => this.props.handleIconClick(count)} className ="calendar-icon" src="https://www.team-azerty.com/images/news/499/calendrier.png"/>
			{selectedDateHTML}
			</div>
			</div>
			)
		}
		else{
			return(
			<div>
			<header className = "main-header">Calender</header>
			<div className = "calendar-container">
			<div className = "calendar"><img tabIndex="1" onClick = {() => this.props.handleIconClick()} className ="calendar-icon" src="https://www.team-azerty.com/images/news/499/calendrier.png"/>
			{selectedDateHTML}
			</div>
			{this.renderCalendar()}
			</div>
			</div>
			)
		}
	}
}

