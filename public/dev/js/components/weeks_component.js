import React, { Component } from 'react';
import { connect } from 'react-redux';
import Week from './week_component';

function getWeeks() {
	  	return dispatch => {
		    return fetch('http://localhost:8081/weeks')
		    .then(response => response.json())
		    .then(payload => dispatch({ type: 'GET_WEEKS_REQUEST', payload }))
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
				{this.props.weeks.items.map((el) => 
					<Week key={el.id} w={el}/>
				)}
		      </div>
	    	);
		} else {
			return (
				<div>
					ololol
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
