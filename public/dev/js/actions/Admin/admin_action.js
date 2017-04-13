import CONST from '../../constants/CONSTANTS';

export function GetWeek(payload) {
	return dispatch => {
	    return fetch(CONST._GET_WEEK, {
		   	method: 'GET', 
			headers: {
				'Content-Type': 'application/json'
			}
		})
	    .then((response) => response.json())
	    .then(payload =>  payload);
	}
}

export function GetWeekByNumber(payload) {
	return dispatch => {
	    return fetch(CONST._GET_WEEK_BY_NUMBER, {
		   	method: 'POST', 
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ week: payload })
		})
	    .then((response) => response.json())
	    .then(payload =>  payload);
	}
}