import CONST from '../constants/CONSTANTS';

export default function weeks (state = {}, action) {
	switch(action.type) {
		case CONST.GET_WEEKS_REQUEST: 
			if (!state.weeks) {
				return { 
					wn: action.payload.weekNumber,
					fn: action.payload.fullNumber,
					isEnd: false,
					weeks:
					[
			      		...state,
			      		action.payload 
			      	],
			    };
		    } else {
		    	return state;
		    }
			break;
		case CONST.GET_PREV_WEEK_REQUEST:
			return { 
				wn: action.payload.weekNumber,
				fn: action.payload.fullNumber,
				isEnd: action.payload.items.length === 0 ? true : false,
				weeks:
				[
		      		...state.weeks,
		      		action.payload 
		      	],
	    	};
			break;
	}
	return state;
}