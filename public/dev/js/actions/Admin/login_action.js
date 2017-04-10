import CONST from '../../constants/CONSTANTS';

export function login(payload) {
	return dispatch => {
	    return fetch(CONST._LOGIN_URL, {
		   	method: 'POST', 
			mode: 'cors', 
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(payload)
		})
	    .then(response => response.json())
	    .then(payload => dispatch({ type: CONST.LOGIN, payload }))
	}
}