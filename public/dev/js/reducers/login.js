export default function login (state = {}, action) {
	switch(action.type) {
		case 'LOGIN': 
			console.log(action.payload);
			return state;		
			break;
		default: 
			return state;
	}
}