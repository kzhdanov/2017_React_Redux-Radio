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
	    .then(payload => {
	    	console.log(payload);
	    	return payload;
	    })
	}
}