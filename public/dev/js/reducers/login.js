import CONST from '../constants/CONSTANTS';

const initialState = {
  isAuthenticated: false,
  errorMsg: ''
};

export default function login (state = initialState, action) {
	switch(action.type) {
		case CONST.LOGIN:
			return {
		       isAuthenticated: action.payload,
		       errorMsg: ''
      		};	
		case CONST.AUTH_ERROR: 
			return {
			   isAuthenticated: false,
		       errorMsg: action.payload
      		};	
		default: 
			return state;
	}
}