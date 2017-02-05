export default function weeks (state = {}, action) {
	switch(action.type) {
		case 'GET_WEEKS_REQUEST': 
			return action.payload;
			break;
	}
	return state;
}