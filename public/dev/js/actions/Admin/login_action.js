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
	    .then((response) => response.json())
	    .then(payload => {
	    	if(payload.token) {
	    		const token = payload.token;
      			localStorage.setItem('jwtToken', token);
      			
      			dispatch({type: CONST.LOGIN, payload: true});	    	
      		}
	    	return payload;
	    })
	}
}

export function AuthError(payload) {
	return {
	    type: CONST.AUTH_ERROR,
	    payload
  	}
}

export function CheckAuth(token) {
    return fetch(CONST._CHECK_AUTH_URL, {
	   	method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ token: token })
	})
	.then((response) => response.json())
}