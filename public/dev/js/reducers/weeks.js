export default function weeks (state = {}, action) {
	switch(action.type) {
		case 'GET_WEEKS_REQUEST': 
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
			break;
		case 'GET_PREV_WEEK_REQUEST':
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