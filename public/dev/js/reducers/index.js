import {combineReducers} from 'redux';
import weeks from './weeks';
import audio from './audio';
import login from './login';

const allRedusers = combineReducers({
	Weeks: weeks,
	Audio: audio,
	Login: login
})

export default allRedusers;