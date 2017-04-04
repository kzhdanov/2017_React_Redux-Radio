import CONST from '../constants/CONSTANTS';

export function getFirstWeek(payload) {
	return dispatch => {
	    return fetch(CONST._GET_WEEKS)
			.then(response => response.json())
		    .then(payload => dispatch({type: CONST.GET_WEEKS_REQUEST, payload }));
	}
}

export function getPrevWeek(weekNum) {
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