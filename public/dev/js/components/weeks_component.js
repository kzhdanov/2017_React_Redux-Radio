import React, { Component } from 'react';
import { connect } from 'react-redux';
import Week from './week_component';
import CONST from '../constants/CONSTANTS';
import { getWeeks } from '../actions/weeks_actions';

function getWeeksAction() {
	return dispatch => {
		    return fetch(CONST._GET_WEEKS)
			.then(response => response.json())
		    .then(payload => dispatch(getWeeks(payload)))
	  	}
}

function getPrevWeekDispatch(weekNum) {
	return dispatch => {
		    return fetch(CONST._GET_PREV_WEEK, {
			   	method: 'POST', 
				mode: 'cors', 
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
				    week: Number(weekNum-1),
				})
			})
		    .then(response => response.json())
		    .then(payload => dispatch({ type: CONST.GET_PREV_WEEK_REQUEST, payload }))
	  	}
}

class Weeks extends Component {
	constructor(props) {
		super(props);

		this.props.getWeeksAction();
	}

	render() {
		if(this.props.weeksObj.wn != null) {
			return (
		      <div className='wk_container-weeks'>
				{ this.props.weeksObj.weeks.map((week) =>
					<div key={week.weekNumber}>
				      	<div className='wk_container-weeks-number'>
				      		{ week.weekNumber }
				      		<div className='wk_container-weeks-line'></div>
				      	</div>
						{ week.items.map((el) => <Week key={el.id} w={el}/>) }
					</div>
				)}

				{ !this.props.weeksObj.isEnd ?  
					<div className="down-arrow" title={ 'Travel back in time to ' + 
						Number(this.props.weeksObj.wn - 1) + ' week'} 
	 						onClick={this.props.getPrevWeekDispatch
	 								 .bind(null, this.props.weeksObj.fn)}>
			 		</div> 
			 		:
			 		<p>Ophhhh... seems it was the latest week!</p>
		 		}
		      </div>
	    	);
		} else {
			return (
				<div className='wk_container-weeks'>
					<div className='loader'></div>
				</div>
	    	);
		}
	}
}

function mapStateToProps(state) {
	return {
		weeksObj: state.Weeks,
	};
}

export default connect( mapStateToProps, { getWeeksAction, getPrevWeekDispatch })(Weeks);
