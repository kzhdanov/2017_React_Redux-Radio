import CONST from '../constants/CONSTANTS';

const initialState = {
  isAuthenticated: false,
};

export default function login (state = initialState, action) {
	switch(action.type) {
		case CONST.LOGIN: 
			return {
		       isAuthenticated: true,
      		};	
			break;
		default: 
			return state;
	}
}