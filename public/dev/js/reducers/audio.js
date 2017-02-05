const initialState = 
	{
		src: './RadioCovers/Avance.jpg',
		autor: 'no name',
		songName: 'no name',
		album: 'no name',
	};

export default function (state = initialState, action) {
	switch(action.type) {
		case 'UPDATE_TITLES': 
			let src = { src: './RadioCovers/' + action.payload.autor + '-' + 
							  action.payload.album + '.jpg' };
							  
			return Object.assign({}, action.payload, src);
			break;
	}

	return state;
}