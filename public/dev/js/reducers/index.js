import {combineReducers} from 'redux';
import weeks from './weeks';
import audio from './audio';

const allRedusers = combineReducers({
	Weeks: weeks,
	Audio: audio,
})

export default allRedusers;