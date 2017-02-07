import React, { Component } from 'react';
import { connect } from 'react-redux';
import Week from './week_component';
import CONST from '../CONSTANTS';

function getWeeks() {
	  	return dispatch => {
		    return fetch(CONST._GET_WEEKS)
		    .then(response => response.json())
		    .then(payload => dispatch({ type: CONST.GET_WEEKS_REQUEST, payload }))
	  	}
}

class Weeks extends Component {
	constructor(props) {
		super(props);

		this.props.getWeeksAction();
	}

	render() {
		if(this.props.weeks.fullNumber) {
			return (
		      <div className='wk_container-weeks'>
		      	<div className='wk_container-weeks-number'>
		      		{this.props.weeks.weekNumber}
		      	</div>
				{this.props.weeks.items.map((el) => 
					<Week key={el.id} w={el}/>
				)}
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
		weeks: state.Weeks,
	};
}

export default connect(
	mapStateToProps,
	dispatch => ({
		getWeeksAction() {
			dispatch(getWeeks());
		}
    }),
)(Weeks);
